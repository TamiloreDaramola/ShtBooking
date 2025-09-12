# shortlet/backend/core/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    is_host = models.BooleanField(default=False)
    is_guest = models.BooleanField(default=False)

    def __str__(self):
        return self.username

class Apartment(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=100)
    host = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='apartments')
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title