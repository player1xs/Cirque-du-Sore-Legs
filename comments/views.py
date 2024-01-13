from rest_framework.generics import CreateAPIView, DestroyAPIView
from .serializers.common import CommentSerializer
from .models import Comment

#Path: /comments/
#Methods: GET, POST
class CommentCreateView(CreateAPIView):
  queryset = Comment.objects.all()
  serializer_class = CommentSerializer

#Path: /comments/:pk/
#Mehtods: DELETE
class CommentDestroyView(DestroyAPIView):
  queryset = Comment.objects.all()
  serializer_class = CommentSerializer