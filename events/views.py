from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Event
from .serializers.common import EventSerializer
from .serializers.populated import PopulatedEventSerializer

#Path: /events/
#Mathod: GET, POST
class EventListCreateView(ListCreateAPIView):
  queryset = Event.objects.all()
  serializer_class = EventSerializer

#Path: /events/:id/
#Methods: GET, PUT, PATCH, DELETE
class EventDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Event.objects.all()

  def get_serializer_class(self):
    if self.request.method == 'PUT':
      return EventSerializer
    return PopulatedEventSerializer