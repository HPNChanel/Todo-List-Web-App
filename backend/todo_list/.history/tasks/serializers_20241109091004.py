from rest_framework import serializers
from .models import Task, CustomUser

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'completed', 'due_date', 'category')
