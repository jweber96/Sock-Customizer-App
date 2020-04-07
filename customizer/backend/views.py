from django.shortcuts import render
from rest_framework import viewsets
from backend.models import Customer, Order, Address, Sizes
from backend.serializers import CustomerSerializer, OrderSerializer, UserSerializer, AddressSerializer, SizeSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from django.contrib.auth.models import User

class CustomerViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        if self.request.user.is_superuser:
            queryset = Customer.objects.all()  
            return queryset  
        else:
            return HttpResponse(status=403) 
    serializer_class = CustomerSerializer

class OrderViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        if self.request.user.is_superuser:
            queryset = Order.objects.all() 
            return queryset   
        else:
            return HttpResponse(status=403) 
    serializer_class = OrderSerializer

class UserViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        if self.request.user.is_superuser:
            queryset = User.objects.all()  
            return queryset  
        else:
            return HttpResponse(status=403) 
    serializer_class = UserSerializer

class AddressViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        if self.request.user.is_superuser:
            queryset = Address.objects.all()  
            return queryset  
        else:
            return HttpResponse(status=403) 
    serializer_class = AddressSerializer

class SizeViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        if self.request.user.is_superuser:
            queryset = Sizes.objects.all() 
            return queryset   
        else:
            return HttpResponse(status=403) 
    serializer_class = SizeSerializer
