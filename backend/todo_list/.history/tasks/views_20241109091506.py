from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

@api_view(['GET'])
def get_tasks(request):
  category = request.query_params.get('category')
  tasks = Task.objects.filter(category=category) if category else Task.objects.all()
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def create_task(request):
  serializer = TaskSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


  