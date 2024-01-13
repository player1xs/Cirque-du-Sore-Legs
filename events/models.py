from django.db import models

class Event(models.Model):
  event_name = models.CharField(max_length=250)
  company = models.CharField(max_length=150)
  location = models.TextField()
  date = models.DateTimeField()
  description = models.TextField()
  distance = models.PositiveIntegerField()
  image = models.TextField()
  genres = models.ManyToManyField(
    to='genres.Genre',
    related_name='events'
  )

  def __str__(self):
    return f'{self.event_name} - {self.distance} ({self.date})'
