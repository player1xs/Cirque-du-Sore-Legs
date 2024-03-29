# Generated by Django 5.0.1 on 2024-01-15 02:35

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_event_owned'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='attend',
            field=models.ManyToManyField(related_name='events_attend', to=settings.AUTH_USER_MODEL),
        ),
    ]
