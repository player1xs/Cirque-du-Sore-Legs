# Generated by Django 5.0.1 on 2024-01-16 04:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_rename_location_event_address_event_lat_event_long'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='website',
            field=models.CharField(max_length=255, null=True),
        ),
    ]