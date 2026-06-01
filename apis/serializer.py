from  rest_framework import serializers
from .models import register, CartItem


class registerserializer(serializers.ModelSerializer):
    class Meta:
        model = register
        fields = '__all__'
        
class CartItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = CartItem
        fields = '__all__'