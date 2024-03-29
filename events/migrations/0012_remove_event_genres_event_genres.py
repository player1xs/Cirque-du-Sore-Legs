# Generated by Django 5.0.1 on 2024-01-17 10:29

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0011_alter_event_genres'),
        ('genres', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='genres',
        ),
        migrations.AddField(
            model_name='event',
            name='genres',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='events', to='genres.genre'),
        ),
    ]
