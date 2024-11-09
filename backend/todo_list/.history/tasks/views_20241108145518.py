from rest_framework import viewsets, generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import authenticate  
from rest_framework.views import APIView
from .models import Task, CustomUser
from .serializers import TaskSerializer, RegisterSerializer
from rest_framework.exceptions import PermissionDenied

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
      #* Check if user login or not
      if not self.request.user.is_authenticated:
        raise PermissionDenied("Authentication required")
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