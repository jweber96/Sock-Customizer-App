# Generated by Django 3.0.2 on 2020-03-31 19:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20200218_2340'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='cut',
            field=models.CharField(blank=True, choices=[('QUARTER', 'Quarter'), ('CREW', 'Crew'), ('KNEE_HIGH', 'Knee High')], max_length=250, null=True, verbose_name='Cuts'),
        ),
        migrations.AlterField(
            model_name='customer',
            name='added_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='added_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now, null=True),
        ),
    ]
