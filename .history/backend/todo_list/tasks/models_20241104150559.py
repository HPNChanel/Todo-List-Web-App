from django.db import models

class Task(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField(blank=True, null=True)
  is_completed = models.BooleanField(default=False)
  priority = models.IntegerField(default=1)  #* 1 is for `Low`, 2 is for `Medium`, 3 is for `High`
  due_date = models.DateTimeField()