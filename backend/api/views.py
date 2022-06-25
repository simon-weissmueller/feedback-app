from curses.ascii import HT
import imp
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Session
from .serializers import SessionSerializer

# Create your views here.

def main (response):
    return(HttpResponse("Hallo"))

class SessionsView(generics.CreateAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class SessionsList(generics.ListAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer