# shortlet/backend/core/urls.py
from django.urls import path
from .views import (
    UserRegistrationView,
    UserLoginView,
    ApartmentListCreateView,
    ApartmentDetailView,
    HostApartmentList # Added import for the new view
)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('apartments/', ApartmentListCreateView.as_view(), name='apartment-list-create'),
    path('apartments/host/', HostApartmentList.as_view(), name='host-apartments'), # Added new URL pattern
    path('apartments/<int:pk>/', ApartmentDetailView.as_view(), name='apartment-detail'),
]