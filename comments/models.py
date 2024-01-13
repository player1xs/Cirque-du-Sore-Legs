from django.db import models

class Comment(models.Model):
  text = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  event = models.ForeignKey(
    to='events.Event',
    on_delete=models.CASCADE,
    related_name='comments'
  )