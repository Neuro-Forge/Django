from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password


class loginserializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password']
    def validate(self,attrs):
        if attrs['username'] and attrs['password']:
            user = authenticate(username=attrs['username'], password=attrs['password'])
            if not user:
                raise serializers.ValidationError("Invalid credentials")
            else:
                attrs['user'] = user
                return attrs
            
        

