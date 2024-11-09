from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _

class Task(models.Model):
  TASK_TYPE_CHOICES = (
    ('MY_DAY', 'My Day'),
    ('IMPORTANT', 'Important')
    ('PLANNED', 'Planned')
    )
  title = models.CharField(max_length=255)
  description = models.TextField(blank=True, null=True)
  due_date = models.DateTimeField(null=True, blank=True)
  task_type = models.CharField(max_length=10, choices=TASK_TYPE_CHOICES, default='MY_DAY')
  is_completed = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  priority = models.IntegerField(default=1)  #* 1 is for `Low`, 2 is for `Medium`, 3 is for `High`
  
  def __str__(self):
    return self.title

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError(_('The Email field must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        user = self.create_user(email, username, password)
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False) 

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email