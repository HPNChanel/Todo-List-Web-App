from rest_framework import serializers
from .models import Task, CustomUser

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'due_date', 'task_type', 'is_completed', 'created_at', 'updated_at', 'owner')
