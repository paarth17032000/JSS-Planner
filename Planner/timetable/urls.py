from django.urls import include, path
from rest_framework import routers

from .views import (
    Department_ViewSet,
    Week_Day_ViewSet,
    Time_Slot_ViewSet,
    Class_ViewSet,
    Subject_ViewSet,
    Faculty_ViewSet,
    Lecture_ViewSet,
)

routers = routers.DefaultRouter()
routers.register("departments", Department_ViewSet)
routers.register("week_days", Week_Day_ViewSet)
routers.register("time_slots", Time_Slot_ViewSet)
routers.register("classes", Class_ViewSet)
routers.register("subjects", Subject_ViewSet)
routers.register("faculties", Faculty_ViewSet)
routers.register("lectures", Lecture_ViewSet)


urlpatterns = [
    path("", include(routers.urls)),
]
