from django.shortcuts import render
from rest_framework import viewsets
from backend.models import Customer, Order
from backend.serializers import CustomerSerializer, OrderSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse

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
