# shortlet/backend/core/serializers.py
from rest_framework import serializers
from .models import CustomUser, Apartment, ApartmentImage

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

class ApartmentImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApartmentImage
        fields = ['id', 'image', 'uploaded_at']

class ApartmentSerializer(serializers.ModelSerializer):
    images = ApartmentImageSerializer(many=True, read_only=True)

    class Meta:
        model = Apartment
        fields = [
            'id', 
            'title', 
            'description', 
            'location', 
            'price_per_night', 
            'created_at', 
            'images'
        ]
        read_only_fields = ['id', 'created_at']