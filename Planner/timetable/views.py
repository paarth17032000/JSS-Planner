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

    def evaluate_form_data(self, request, field):
        if field in request.POST:
            return request.POST.get(field)
        else:
            raise ValidationError({"detail": field + " field is required."})

    def get_object_from_form_data(self, request, model, field, primary_key):
        param_value = self.evaluate_form_data(request, field)

        try:
            if primary_key == "id":
                object = model.objects.get(id=param_value)
            else:
                object = model.objects.get(code=param_value)
        except model.DoesNotExist:
            raise ValidationError({"detail": param_value + " does not exist."})

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
        time_slot = self.get_object_from_form_data(
            request, Time_Slot, "time_slot", "id"
        )
        week_day = self.get_object_from_form_data(request, Week_Day, "week_day", "code")
        _class = self.get_object_from_form_data(request, Class, "class", "code")
        subject = self.get_object_from_form_data(request, Subject, "subject", "code")
        faculty = self.get_object_from_form_data(request, Faculty, "faculty", "code")

        faculty_conflicts = Lecture.objects.filter(
            week_day=week_day, time_slot=time_slot, faculty=faculty
        )
        if faculty_conflicts:
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

        new_lecture.time_slot.add(time_slot)
        new_lecture.faculty.add(faculty)

        return Response(Lecture_Serializer(new_lecture).data, status=HTTP_201_CREATED)
