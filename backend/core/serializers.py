# shortlet/backend/core/serializers.py
from rest_framework import serializers
from .models import CustomUser, Apartment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'is_host', 'is_guest']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class ApartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = ['id', 'title', 'description', 'location', 'price_per_night', 'created_at']
        read_only_fields = ['id', 'created_at']