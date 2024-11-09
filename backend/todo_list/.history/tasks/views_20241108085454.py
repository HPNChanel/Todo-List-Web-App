from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import CustomUser
from .serializers import RegisterSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.views import APIView

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
  
class RegisterView(generics.CreateAPIView):
  queryset = CustomUser.objects.all()
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer

