from django.db import models


class Department(models.Model):
    code = models.CharField(max_length=8, primary_key=True)
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Week_Day(models.Model):
    code = models.CharField(max_length=4, primary_key=True)
    day = models.CharField(max_length=16)

    def __str__(self):
        return self.day


class Time_Slot(models.Model):
    starting_time = models.TimeField()
    ending_time = models.TimeField()

    def __str__(self):
        return str(self.starting_time) + " - " + str(self.ending_time)


class Class(models.Model):
    code = models.CharField(max_length=8, primary_key=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.code


class Subject(models.Model):
    code = models.CharField(max_length=16, primary_key=True)
    department = models.ManyToManyField(Department)
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class Faculty(models.Model):
    code = models.CharField(max_length=8, primary_key=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class Lecture(models.Model):
    class_code = models.ForeignKey(Class, on_delete=models.CASCADE)
    faculty_code = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    subject_code = models.ForeignKey(Subject, on_delete=models.CASCADE)
    week_day = models.ForeignKey(Week_Day, on_delete=models.CASCADE)
    time_slot = models.ForeignKey(Time_Slot, on_delete=models.CASCADE)
    classroom = models.CharField(max_length=8)

    def __str__(self):
        return (
            self.class_code.code
            + " - "
            + self.subject_code.code
            + " - "
            + self.faculty_code.code
        )
