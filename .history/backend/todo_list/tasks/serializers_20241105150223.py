from rest_framework import serializers
from .models import Task, CustomUser
from django.contrib.auth.password_validation import validate_password

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task
    fields = '__all__'
    
class RegisterSerializer