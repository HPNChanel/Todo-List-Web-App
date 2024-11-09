from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _

class Task(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField(blank=True, null=True)
  is_completed = models.BooleanField(default=False)
  priority = models.IntegerField(default=1)  #* 1 is for `Low`, 2 is for `Medium`, 3 is for `High`
  due_date = models.DateField(null=True, blank=True)
  
  def __str__(self):
    return self.title

class CustomUserManager(BaseUserManager):
  def create_user(self, email, username, password=None):
    