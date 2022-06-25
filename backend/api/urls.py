from django.contrib import admin
from django.urls import path
from .views import SessionsList, SessionsView, main

urlpatterns = [
    path('', main),
    path('create', SessionsView.as_view()),
    path('list', SessionsList.as_view())

]