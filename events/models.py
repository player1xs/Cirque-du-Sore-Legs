from django.db import models

import geocoder
import environ
env = environ.Env()
environ.Env.read_env()

mapbox_token = env('MAPBOX')


class Event(models.Model):
  event_name = models.CharField(max_length=250)
  company = models.CharField(max_length=150)
  address = models.TextField()
  lat = models.FloatField(blank=True, null=True)
  long = models.FloatField(blank=True, null=True)
  date = models.DateField()
  description = models.TextField()
  distance = models.PositiveIntegerField()
  image = models.TextField()
  website = models.CharField(max_length=255, null=True)
  genres = models.ManyToManyField(
    to='genres.Genre',
    related_name='events',
    null=True,
    blank=True
  )
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='events_owned',
    null=True
  )
  attend = models.ManyToManyField(
    to='users.User',
    related_name='events_attend',
    null=True,
    blank=True
  )

  def __str__(self):
    return f'{self.event_name} - {self.distance} ({self.date})'
  

  def save(self, *args, **kwargs):
    g = geocoder.mapbox(self.address, key=mapbox_token)
    g = g.latlng
    self.lat = g[0]
    self.long = g[1]
    return super(Event, self).save(*args, **kwargs)
