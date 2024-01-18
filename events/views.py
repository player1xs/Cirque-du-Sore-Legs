from rest_framework.generics import RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from .models import Event
from .serializers.common import EventSerializer
from .serializers.populated import PopulatedEventSerializer
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly


#Path: /events/
#Mathod: GET, POST
class EventListCreateView(OwnerListCreateView):
  queryset = Event.objects.all()
  # serializer_class = PopulatedEventSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]
  def get_serializer_class(self):
    if self.request.method == 'POST':
      return EventSerializer
    return PopulatedEventSerializer

#Path: /events/:id/
#Methods: GET, PUT, PATCH, DELETE
class EventDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Event.objects.all()
  permission_classes = [IsOwnerOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'PUT':
      return EventSerializer
    return PopulatedEventSerializer

#Path: /events/:pk/attend/
  #Method: PUT, PATCH
class EventAttendView(UpdateAPIView):
  queryset = Event.objects.all()
  serializer_class = EventSerializer
  permission_classes = [IsAuthenticated]

#overriding Patch
  def patch(self, request, pk):
    event = self.get_object()
    if request.user in event.attend.all():
      event.attend.remove(request.user)
      event.save()
      return Response(status=204)
    else:
      event.attend.add(request.user)
      event.save()
    return Response(status=201)