# Generated by Django 5.0.1 on 2024-01-16 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='bio',
        ),
    ]
