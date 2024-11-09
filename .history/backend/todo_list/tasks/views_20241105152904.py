from rest_framework import viewsets
from rest_framework_simplejwt.tokens import Token
from .models import Task
from .serializers import TaskSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import CustomUser
from .serializers import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class TaskViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
  
class RegisterView(generics.CreateAPIView):
  queryset = CustomUser.objects.all()
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
  @classmethod
  def get_token(cls, user):
    token = super().get_token(user)
    return token