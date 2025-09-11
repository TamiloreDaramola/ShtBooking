# shortlet/backend/core/urls.py

from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import UserRegistrationView, UserLoginView, ApartmentListCreateView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('login/', UserLoginView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
        path('apartments/', ApartmentListCreateView.as_view(), name='apartment-list-create'), 
]