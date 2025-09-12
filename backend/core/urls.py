# shortlet/backend/core/urls.py
from django.urls import path
from .views import (
    UserRegistrationView,
    UserLoginView,
    ApartmentListCreateView,
    ApartmentDetailView
)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('apartments/', ApartmentListCreateView.as_view(), name='apartment-list-create'),
    path('apartments/<int:pk>/', ApartmentDetailView.as_view(), name='apartment-detail'),
]