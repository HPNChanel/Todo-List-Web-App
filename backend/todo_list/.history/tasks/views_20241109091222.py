from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

@api_view(['GET'])
def get_tasks(request):
  category = request.query_params.get('category')
  tasks = Task.objects.filter(category=category) if category else
  