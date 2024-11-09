from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _

class Task(models.Model):
  CATEGORIES = (
    ('MY_DAY', 'My Day'),
    ('IMPORTANT', 'Important'),
    ('PLANNED', 'Planned')
    )
  title = models.CharField(max_length=255)
  description = models.TextField(blank=True, null=True)
  due_date = models.DateTimeField(null=True, blank=True)
  task_type = models.CharField(max_length=10, choices=TASK_TYPE_CHOICES, default='MY_DAY')
  is_completed = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)  
  
  def __str__(self):
    return self.title