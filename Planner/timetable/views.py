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

    def get_queryset(self):
        queryset = self.queryset
        if "faculty" in self.request.query_params:
            queryset = queryset.filter(faculty=self.request.query_params["faculty"])
        if "class" in self.request.query_params:
            queryset = queryset.filter(_class=self.request.query_params["class"])
        return queryset
