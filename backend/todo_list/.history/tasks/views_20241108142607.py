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
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from rest_framework.decorators import permission_classes

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

class LoginView(APIView):
  def post(self, request):
    email = request.data.get("email")  #* Get data through fields in model
    password = request.data.get("password")
    
    user = authenticate(request, username=email, password=password)
    
    if user is not None:
      return Response({"message": "Login successful", "user_id": user.id}, status=status.HTTP_200_OK)
    else:
      return Response({"message": "Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED)
  
@permission_classes([IsAuthenticated])
def get_queryset(self):
  if not self.request.user.is_authenticated:
    raise PermissionDenied("Authentication required")
  