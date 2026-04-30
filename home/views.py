from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import registerserializer

@api_view(['POST'])
def register(request):
    serializer = registerserializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=201)
    
    return Response(serializer.errors, status=400)
