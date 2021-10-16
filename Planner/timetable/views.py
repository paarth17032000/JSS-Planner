from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_406_NOT_ACCEPTABLE

from rest_framework.viewsets import ModelViewSet

from .models import Department, Week_Day, Time_Slot, Class, Subject, Faculty, Lecture
from .permissions import IsAdminUserOrReadOnly
from .serializers import (
    Department_Serializer,
    Week_Day_Serializer,
    Time_Slot_Serializer,
    Class_Serializer,
    Subject_Serializer,
    Faculty_Serializer,
    Lecture_Serializer,
)


class Department_ViewSet(ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = Department_Serializer
    permission_classes = [IsAdminUserOrReadOnly]


class Week_Day_ViewSet(ModelViewSet):
    queryset = Week_Day.objects.all()
    serializer_class = Week_Day_Serializer
    permission_classes = [IsAdminUserOrReadOnly]


class Time_Slot_ViewSet(ModelViewSet):
    queryset = Time_Slot.objects.all()
    serializer_class = Time_Slot_Serializer
    permission_classes = [IsAdminUserOrReadOnly]


class Class_ViewSet(ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = Class_Serializer
    permission_classes = [IsAdminUserOrReadOnly]


class Subject_ViewSet(ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = Subject_Serializer
    permission_classes = [IsAdminUserOrReadOnly]


class Faculty_ViewSet(ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = Faculty_Serializer
    permission_classes = [IsAdminUserOrReadOnly]


class Lecture_ViewSet(ModelViewSet):
    queryset = Lecture.objects.all()
    permission_classes = [IsAdminUserOrReadOnly]
    serializer_class = Lecture_Serializer

    def evaluate_form_data(self, request, field, is_neccessary=True):
        if field in request.POST:
            return request.POST.get(field)
        elif is_neccessary:
            raise ValidationError({"detail": field + " field is required."})
        else:
            return None

    def get_object_from_form_data(
        self, request, model, field, primary_key, is_neccessary=True
    ):
        param_value = self.evaluate_form_data(request, field, is_neccessary)

        try:
            if primary_key == "id":
                object = model.objects.filter(id=param_value)
            else:
                object = model.objects.filter(code=param_value)
        except model.DoesNotExist:
            if is_neccessary:
                raise ValidationError({"detail": param_value + " does not exist."})
            else:
                return None

        return object

    def get_queryset(self):
        queryset = self.queryset
        if "faculty" in self.request.query_params:
            queryset = queryset.filter(faculty=self.request.query_params["faculty"])
        if "class" in self.request.query_params:
            queryset = queryset.filter(_class=self.request.query_params["class"])
        return queryset

    def create(self, request):
        classroom = self.evaluate_form_data(request, "classroom")
        time_slots = self.get_object_from_form_data(
            request, Time_Slot, "time_slot", "id"
        )
        week_day = self.get_object_from_form_data(
            request, Week_Day, "week_day", "code"
        )[0]
        _class = self.get_object_from_form_data(request, Class, "class", "code")[0]
        subject = self.get_object_from_form_data(request, Subject, "subject", "code")[0]
        faculties = self.get_object_from_form_data(request, Faculty, "faculty", "code")

        lectures_on_this_day = Lecture.objects.filter(week_day=week_day)
        for time_slot in time_slots:
            for faculty in faculties:
                faculty_conflicts = lectures_on_this_day.filter(
                    time_slot=time_slot, faculty=faculty
                )
                if len(faculty_conflicts) > 0:
                    return Response(
                        {
                            "detail": str(faculty)
                            + " is already teaching "
                            + str(faculty_conflicts[0])
                            + " at this time."
                        },
                        status=HTTP_406_NOT_ACCEPTABLE,
                    )

        new_lecture = Lecture.objects.create(
            week_day=week_day,
            classroom=classroom,
            _class=_class,
            subject=subject,
        )

        for time_slot in time_slots:
            new_lecture.time_slot.add(time_slot)
        for faculty in faculties:
            new_lecture.faculty.add(faculty)

        return Response(Lecture_Serializer(new_lecture).data, status=HTTP_201_CREATED)

    def update(self, request, pk=None):
        classroom = self.evaluate_form_data(request, "classroom")
        time_slots = self.get_object_from_form_data(
            request, Time_Slot, "time_slot", "id"
        )
        week_day = self.get_object_from_form_data(
            request, Week_Day, "week_day", "code"
        )[0]
        _class = self.get_object_from_form_data(request, Class, "class", "code")[0]
        subject = self.get_object_from_form_data(request, Subject, "subject", "code")[0]
        faculties = self.get_object_from_form_data(request, Faculty, "faculty", "code")

        lectures_on_this_day = Lecture.objects.filter(week_day=week_day)
        lectures_on_this_day = lectures_on_this_day.exclude(id=pk)
        for time_slot in time_slots:
            for faculty in faculties:
                faculty_conflicts = lectures_on_this_day.filter(
                    time_slot=time_slot, faculty=faculty
                )
                if len(faculty_conflicts) > 0:
                    return Response(
                        {
                            "detail": str(faculty)
                            + " is already teaching "
                            + str(faculty_conflicts[0])
                            + " at this time."
                        },
                        status=HTTP_406_NOT_ACCEPTABLE,
                    )

        lecture = Lecture.objects.get(id=pk)
        lecture.time_slot.clear()
        lecture.faculty.clear()
        lecture.classroom = classroom
        lecture.week_day = week_day
        lecture._class = _class
        lecture.subject = subject
        for time_slot in time_slots:
            lecture.time_slot.add(time_slot)
        for faculty in faculties:
            lecture.faculty.add(faculty)
        lecture.save()

        return Response(Lecture_Serializer(lecture).data, status=HTTP_201_CREATED)
