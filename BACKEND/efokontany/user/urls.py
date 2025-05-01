from django.urls import path
from .views import UserView, LoginView

urlpatterns = [
    path('user/', UserView.as_view(), name='user'),
    path('user/<int:pk>/', UserView.as_view(), name='user_detail'),
    path('user/login/', LoginView.as_view(), name='login'),
]