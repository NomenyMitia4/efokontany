from rest_framework import serializers
from .models import Citizen, ProfileClassification, History

class CitizenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citizen
        fields = '__all__'

class ProfileClassificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileClassification
        fields = '__all__'
    
class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = '__all__'