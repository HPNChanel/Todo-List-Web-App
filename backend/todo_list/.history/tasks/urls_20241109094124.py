from django.urls import path

urlpatterns = [
    path('tasks/', views.get_tasks, name='get_tasks'),
    path('tasks/create/', views.create_task, name='create_task')
]
