# Generated by Django 4.0a1 on 2021-10-16 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timetable', '0002_remove_subject_department_subject_department'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='short_form',
            field=models.CharField(default='SF', max_length=16),
            preserve_default=False,
        ),
    ]