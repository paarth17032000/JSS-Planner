# Generated by Django 4.0a1 on 2021-10-16 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('timetable', '0004_remove_lecture_faculty_code_lecture_faculty_code'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lecture',
            old_name='class_code',
            new_name='_class',
        ),
        migrations.RenameField(
            model_name='lecture',
            old_name='faculty_code',
            new_name='faculty',
        ),
        migrations.RenameField(
            model_name='lecture',
            old_name='subject_code',
            new_name='subject',
        ),
    ]
