# shortlet/backend/core/urls.py

from django.urls import path
from .views import (
    UserRegistrationView,
    UserLoginView,
    ApartmentListCreateView,
    ApartmentDetailView,
    HostApartmentList,
    ApartmentCreateWithImagesView # Added this import
)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('apartments/', ApartmentListCreateView.as_view(), name='apartment-list-create'),
    path('apartments/host/', HostApartmentList.as_view(), name='host-apartments'),
    path('apartments/create_with_images/', ApartmentCreateWithImagesView.as_view(), name='apartment-create-with-images'), # New URL
    path('apartments/<int:pk>/', ApartmentDetailView.as_view(), name='apartment-detail'),
]