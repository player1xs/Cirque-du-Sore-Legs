from django.urls import path
from .views import EventListCreateView, EventDetailView, EventAttendView


urlpatterns = [
  path('', EventListCreateView.as_view()),
  path('<int:pk>/', EventDetailView.as_view()),
  path('<int:pk>/attend/', EventAttendView.as_view())

]