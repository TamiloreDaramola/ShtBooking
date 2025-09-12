

from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    is_host = models.BooleanField(default=False)
    is_guest = models.BooleanField(default=False)

    def __str__(self):
        return self.username