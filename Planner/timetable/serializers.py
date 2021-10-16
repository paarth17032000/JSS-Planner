from django.utils import timezone
from rest_framework import serializers

from .models import Department, Week_Day, Time_Slot, Class, Subject, Faculty, Lecture


class Department_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"


class Week_Day_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Week_Day
        fields = "__all__"


class Time_Slot_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Time_Slot
        fields = "__all__"


class Class_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = "__all__"


class Subject_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        exclude = ["department"]


class Faculty_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        exclude = ["department"]


class Lecture_Serializer(serializers.ModelSerializer):
    week_day = Week_Day_Serializer()
    time_slot = Time_Slot_Serializer()
    _class = Class_Serializer()
    subject = Subject_Serializer()
    faculty = Faculty_Serializer()

    class Meta:
        model = Lecture
        fields = [
            "id",
            "week_day",
            "time_slot",
            "classroom",
            "_class",
            "subject",
            "faculty",
        ]
