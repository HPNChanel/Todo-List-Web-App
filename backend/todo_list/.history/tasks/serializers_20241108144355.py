from rest_framework import serializers
from .models import Task, CustomUser

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'due_date', 'task_type', 'is_completed', 'created_at', 'updated_at', 'owner')

    
class RegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True, required=True)
  
  class Meta:
    model = CustomUser
    fields = ('username', 'email', 'password')
  
  def create(self, validated_data):
    user = CustomUser(
      email=validated_data['email'],
      username=validated_data['username']
    )
    user.set_password(validated_data['password'])
    user.save()
    return user