from django.urls import path
from .views import CitizenView

urlpatterns = [
    path('citizen/', CitizenView.as_view(), name='citizen'),
    path('citizen/<int:pk>/', CitizenView.as_view(), name='citizen_detail')
]