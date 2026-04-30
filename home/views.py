from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import registerserializer
from django.shortcuts import render

@api_view(['GET', 'POST'])
def register(request):
    if request.method == 'GET':
        # Return a simple API info message for GET requests
        return Response({
            "message": "Welcome to the E-commerce API",
            "endpoints": {
                "register": "POST with username, email, password, password2"
            }
        }, status=status.HTTP_200_OK)
    
    # POST request - handle registration
    serializer = registerserializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def home(request):
    """Render the home page"""
    return render(request, 'home.html')
