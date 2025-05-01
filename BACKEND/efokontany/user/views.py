from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer

class UserView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                user = User.objects.get(pk=pk) 
                serializer = UserSerializer(user)
                return Response(serializer.data)
            except:
                return Response({'error': 'User not found'},status=status.HTTP_404_NOT_FOUND)
    
        else:
            user = User.objects.all()
            serializer = UserSerializer(user, many=True)
            return Response(serializer.data)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        try:            
            user = User.objects.get(pk=pk)
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
class LoginView(APIView):
    def post(self, request):
        try:
            email = request.data.get("email")
            password = request.data.get("password")
            
            if email is None or password is None:
                return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)
            
            user = User.objects.get(email=email)
            if not user.check_password(password):
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            
            serializer = UserSerializer(user)
            return Response({'message':'Login Successful', 'user':serializer.data}, status=status.HTTP_200_OK)
        
        except:
            return Response({'error:': 'This user does not exist'}, status=status.HTTP_404_NOT_FOUND)
            