# Generated by Django 3.0.2 on 2020-02-18 23:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_customer_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='added_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='added_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]