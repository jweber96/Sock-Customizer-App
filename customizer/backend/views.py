from django.shortcuts import render
from rest_framework import viewsets
from backend.models import Customer, Order
from backend.serializers import CustomerSerializer, OrderSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    # permission_classes = [IsAccountAdminOrReadOnly]

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
