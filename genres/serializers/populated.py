from .common import GenreSerializer
from events.serializers.common import EventSerializer

class PopulatedGenreSerializer(GenreSerializer):
  events = EventSerializer(many=True)
