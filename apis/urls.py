from django.urls import path

from . import views

urlpatterns = [
     path('login/', views.login, name='login'),
     path('cart/', views.addtocart, name='addtocart'),
     path('getcart/', views.getcart, name='getcart'),
]
