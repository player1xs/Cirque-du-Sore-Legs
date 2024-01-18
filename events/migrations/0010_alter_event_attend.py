# Generated by Django 5.0.1 on 2024-01-17 09:06

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0009_alter_event_genres'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='attend',
            field=models.ManyToManyField(blank=True, null=True, related_name='events_attend', to=settings.AUTH_USER_MODEL),
        ),
    ]