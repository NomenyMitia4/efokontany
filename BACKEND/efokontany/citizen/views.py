from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Citizen, History
from .serializers import CitizenSerializer, HistorySerializer, ProfileClassification
# Create your views here.
class CitizenView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                citizen = Citizen.objects.get(pk=pk)
                serializer = CitizenSerializer(citizen)
                return Response(serializer.data)
            except:
                return Response({'error': 'Citizen not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            citizen = Citizen.objects.all()
            serializer = CitizenSerializer(citizen, many=True)
            return Response(serializer.data)
    
    def post(self, request):
        try:
            serializer = CitizenSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status= status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        try:
            citizen = Citizen.objects.get(pk=pk)
            citizen.delete()
            return Response({'message': 'Citizen deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
        
    def put(self, request, pk):
        try:
            citizen = Citizen.objects.get(pk=pk)
            serializer = CitizenSerializer(citizen, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Citizen.DoesNotExist:
            return Response({'error': 'Citizen not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
class HistoryView(APIView):
    def get(self, request, pk):
        if pk:
            try: 
                history = History.objects.get(pk=pk)
                serializer = HistorySerializer(history)
                return Response(serializer.data)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Unable to retrieve history'}, status=status.HTTP_400_BAD_REQUEST)

class ProfileView(APIView):
    def get(self, request):
        serializer = CitizenSerializer(Citizen.objects.all(), many=True)
        classifier = ProfileClassification()
        
        results = classifier.predict(datas=serializer.data)
        
        return Response({'message': 'Profile classified successfully', 'results': results})