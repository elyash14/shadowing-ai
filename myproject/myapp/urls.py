from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.list, name='todos.list'),
    path('create', views.create, name='todos.create'),
]
