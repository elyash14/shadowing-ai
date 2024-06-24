# from django.shortcuts import render
from inertia import inertia  

@inertia('Home/Index')
def index(request):
        return {}