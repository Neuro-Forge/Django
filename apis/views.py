from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import mixins, generics
from .serializer import registerserializer
from .models import register

class registerview(mixins.CreateModelMixin, generics.GenericAPIView):
    # Specify serializer and queryset so GenericAPIView.get_serializer() works
    serializer_class = registerserializer
    queryset = register.objects.all()
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
@api_view(['POST'])   
def login(request):
    
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get("password")
        try:
            user = register.objects.get(username=username, password=password)
            return JsonResponse({'message': 'Login successful'} , status=status.HTTP_200_OK)
        
        except register.DoesNotExist:
            return Response(status= status.HTTP_401_UNAUTHORIZED)
    
def Cart(request):
    pass