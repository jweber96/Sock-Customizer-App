# Generated by Django 3.0.2 on 2020-04-02 21:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0009_remove_order_design'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='brim_secondary_text',
        ),
        migrations.RemoveField(
            model_name='order',
            name='toe_secondary_text',
        ),
    ]
