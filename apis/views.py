# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from .serializer import loginserializer
# from django.shortcuts import render
# from django.contrib.auth import authenticate, login as auth_login
# @api_view(['GET', 'POST'])
# def register(request):
#     if request.method == 'GET':
#         # Return a simple API info message for GET requests
#         return Response({
#             "message": "Welcome to the E-commerce API",
#             "endpoints": {
#                 "register": "POST with username, email, password, password2"
#             }
#         }, status=status.HTTP_200_OK)
    
#     # POST request - handle registration
#     serializer = registerserializer(data=request.data)
    
#     if serializer.is_valid():
#         serializer.save()
#         return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from django.contrib.auth import authenticate, login as auth_login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(['POST'])
def login(request):
    
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username and not password:
        return Response(
            {"error: Username and password are required"},
            status=status.HTTP_400_BAD_REQUEST
        )
    user = authenticate(username=username, password=password)
    
    if user is not None:
        auth_login(request, user) # it will create a session for the user 
        return Response({"message": "login successful"}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)  