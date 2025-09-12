# shortlet/backend/core/serializers.py
from rest_framework import serializers
from .models import CustomUser, Apartment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password', 'is_host', 'is_guest', 'is_superuser']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user

class ApartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = ['id', 'title', 'description', 'location', 'price_per_night', 'created_at']
        read_only_fields = ['id', 'created_at']