from django.db import models
from django.utils.translation import gettext_lazy as _

class Task(models.Model):
  CATEGORY_CHOICES = (
    ('MY_DAY', 'My Day'),
    ('IMPORTANT', 'Important'),
    ('PLANNED', 'Planned')
    )
  title = models.CharField(max_length=255)
  description = models.TextField(blank=True, null=True)
  completed = models.BooleanField(default=False)
  due_date = models.DateTimeField(null=True, blank=True)
  category = models.CharField(
    max_length=20,
    choices=CATEGORY_CHOICES,
    default="PLANNED"
  )
  
  def __str__(self):
    return self.title