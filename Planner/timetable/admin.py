from django.contrib import admin
from django.urls import reverse
from django.http.response import HttpResponseRedirect

from .models import Department, Week_Day, Time_Slot, Class, Subject, Faculty, Lecture


class Department_Admin(admin.ModelAdmin):
    list_display = ["code", "name"]


class Week_Day_Admin(admin.ModelAdmin):
    list_display = ["code", "day"]


class Time_Slot_Admin(admin.ModelAdmin):
    list_display = ["id", "starting_time", "ending_time"]
    ordering = ["starting_time"]


class Class_Admin(admin.ModelAdmin):
    list_display = ["code", "department"]
    list_filter = ["department"]
    ordering = ["code"]
    search_fields = ["code", "department"]


class Subject_Admin(admin.ModelAdmin):
    list_display = ["code", "short_form", "name"]
    list_filter = ["department"]
    ordering = ["code"]
    search_fields = ["code", "short_form", "name", "department"]


class Faculty_Admin(admin.ModelAdmin):
    list_display = ["code", "name", "department"]
    list_filter = ["department"]
    ordering = ["code"]
    search_fields = ["code", "name", "department"]


class Lecture_Admin(admin.ModelAdmin):
    list_display = [
        "week_day",
        "_class",
        "subject",
        "classroom",
    ]
    list_filter = [
        "week_day",
        "time_slot",
        "_class",
        "faculty",
    ]
    ordering = [
        "week_day",
        "_class",
        "classroom",
    ]
    search_fields = [
        "week_day",
        "time_slot",
        "_class",
        "subject",
        "faculty",
        "classroom",
    ]
    list_editable = [
        "_class",
        "subject",
        "week_day",
        "classroom",
    ]
    actions = ["edit"]
    list_display_links = None

    def edit(self, request, queryset):
        for obj in queryset:
            return HttpResponseRedirect(
                reverse("admin:timetable_lecture_change", args=[obj.id])
            )


admin.site.register(Department, Department_Admin)
admin.site.register(Week_Day, Week_Day_Admin)
admin.site.register(Time_Slot, Time_Slot_Admin)
admin.site.register(Class, Class_Admin)
admin.site.register(Subject, Subject_Admin)
admin.site.register(Faculty, Faculty_Admin)
admin.site.register(Lecture, Lecture_Admin)
