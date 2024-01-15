from .common import EventSerializer
from comments.serializers.common import CommentSerializer
from genres.serializers.common import GenreSerializer

class PopulatedEventSerializer(EventSerializer):
  comments = CommentSerializer(many=True)
  genres = GenreSerializer(many=True)
  attend = EventSerializer(many=True)