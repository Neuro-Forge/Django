from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import mixins, generics
from .serializer import registerserializer, CartItemSerializer
from .models import register, CartItem
from django.db.models import Q

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

    data = request.data

    identifier = (
        data.get('username')
        or data.get('email')
        or request.POST.get('username')
        or request.POST.get('email')
    )

    password = (
        data.get('password')
        or request.POST.get('password')
    )

    if not identifier or not password:
        return Response(
            {'detail': 'Username/email and password required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    identifier = identifier.strip()
    password = password.strip()

    user = register.objects.filter(
        (Q(email__iexact=identifier) | Q(username__iexact=identifier))
        & Q(password=password)
    ).first()

    if user:
        return Response(
            {'message': 'Login successful'},
            status=status.HTTP_200_OK
        )

    return Response(
        {'detail': 'Invalid credentials'},
        status=status.HTTP_401_UNAUTHORIZED
    )
       
@api_view(['GET', 'POST'])
def Cart(request):

    if request.method == 'GET':
        username = request.query_params.get('username') or request.GET.get('username')
        if not username:
            items = CartItem.objects.none()
            serializer = CartItemSerializer(items, many=True)
            return Response(serializer.data)

        items = CartItem.objects.filter(username=username)
        serializer = CartItemSerializer(items, many=True)
        return Response(serializer.data)

    username = (
        request.data.get('username')
        or request.POST.get('username')
    )
    product_id = (
        request.data.get('product_id')
        or request.POST.get('product_id')
    )

    if not username or not product_id:
        return Response(
            {'detail': 'Username and product_id are required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    item = CartItem.objects.filter(
        username=username,
        product_id=product_id
    ).first()

    if item:
        item.quantity += 1
        item.save()
    else:
        item = CartItem.objects.create(
            username=username,
            product_id=product_id,
            product_title=request.data.get('product_title') or request.POST.get('product_title'),
            product_imgSrc=request.data.get('product_imgSrc') or request.POST.get('product_imgSrc'),
            product_price=request.data.get('product_price') or request.POST.get('product_price') or 0,
            product_description=request.data.get('product_description') or request.POST.get('product_description'),
            product_category=request.data.get('product_category') or request.POST.get('product_category'),
        )

    serializer = CartItemSerializer(item)
    return Response({
        'message': 'Product added to cart',
        'item': serializer.data
    })