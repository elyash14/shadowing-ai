from inertia import inertia  
from .models import Todo
from django.shortcuts import redirect
import json

# Create your views here.

@inertia('Todo/Index')
def list(request):
        return {
            'todos': Todo.objects.all()
        }

@inertia('Todo/Create')
def create(request):
    if request.method == 'POST':
        data = json.loads(request.body)  
        todo = Todo(title=data['title'], description=data['description'])
        todo.save()
        return redirect('todos.list')
    return {}

