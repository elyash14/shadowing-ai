# from django.shortcuts import render
from inertia import inertia  

@inertia('Home/Index')
def index(request):
        return {}

@inertia('About/Index')
def about(request):
        return {
            'name': "Elyas Mosayebi"
        }