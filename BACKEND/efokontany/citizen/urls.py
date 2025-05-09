from django.urls import path
from .views import CitizenView, HistoryView, ProfileView

urlpatterns = [
    path('citizen/', CitizenView.as_view(), name='citizen'),
    path('citizen/<int:pk>/', CitizenView.as_view(), name='citizen_detail'),
    path('citizen/<int:pk>/history', HistoryView.as_view(), name='citizen_history'),
    path('classification/', ProfileView.as_view(), name='profile_classification'),
]
