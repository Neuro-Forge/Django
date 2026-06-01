from django.urls import path

from . import views

urlpatterns = [
     path('login/', views.login, name='login'),
     path('Cart/', views.Cart, name='Cart'),
     path('register/', views.registerview.as_view(), name='register'),
     
]
