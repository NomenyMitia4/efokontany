from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Dashboard
from citizen.models import Citizen
from .serializers import DashboardSerializer

# Create your views here.
class DashboardView(APIView):    
    def get(self, request):
        registered_citizen = Dashboard.calculate_registered_citizen()
        pourcentage_handicap = Dashboard.calculate_handicap()
        prioritized_citizen = Dashboard.calculate_prioritized_citizen()
        
        datas = {
            'registered_citizen': registered_citizen,
            'pourcentage_handicap': pourcentage_handicap,
            'prioritized_citizen': prioritized_citizen
        }        
            
        return Response(datas, status=status.HTTP_200_OK)

            
