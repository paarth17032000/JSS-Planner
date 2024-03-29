# Generated by Django 4.0a1 on 2021-10-16 15:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('code', models.CharField(max_length=8, primary_key=True, serialize=False)),
            ],
            options={
                'verbose_name_plural': 'Classes',
            },
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('code', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('code', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timetable.department')),
            ],
            options={
                'verbose_name_plural': 'Faculties',
            },
        ),
        migrations.CreateModel(
            name='Time_Slot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('starting_time', models.TimeField()),
                ('ending_time', models.TimeField()),
            ],
            options={
                'verbose_name_plural': 'Time Slots',
            },
        ),
        migrations.CreateModel(
            name='Week_Day',
            fields=[
                ('code', models.CharField(max_length=4, primary_key=True, serialize=False)),
                ('day', models.CharField(max_length=16)),
            ],
            options={
                'verbose_name_plural': 'Week Days',
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('code', models.CharField(max_length=16, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timetable.department')),
            ],
        ),
        migrations.CreateModel(
            name='Lecture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('classroom', models.CharField(max_length=8)),
                ('class_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timetable.class')),
                ('faculty_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timetable.faculty')),
                ('subject_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timetable.subject')),
                ('time_slot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timetable.time_slot')),
                ('week_day', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timetable.week_day')),
            ],
        ),
        migrations.AddField(
            model_name='class',
            name='department',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timetable.department'),
        ),
    ]
