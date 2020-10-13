from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.permissions import AllowAny, IsAdminUser
from backend.models import Customer, Order, Address, Sizes
from backend.serializers import CustomerSerializer, OrderSerializer, UserSerializer, AddressSerializer, SizeSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))

@api_view(['GET'])
def find_existing_user(request):
    email = request.query_params.get('email', None)  
    users = User.objects.filter(email=email)
    if len(users) != 0:
        return Response({"id": users.first().id})
    return Response({"id": -1})

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()  
    serializer_class = CustomerSerializer
    permission_classes_by_action = {'create': [AllowAny],
                                    'list': [IsAdminUser]}
    def create(self, request, *args, **kwargs):
        return super(CustomerViewSet, self).create(request, *args, **kwargs)
    def list(self, request, *args, **kwargs):
        return super(CustomerViewSet, self).list(request, *args, **kwargs)
    def get_permissions(self):
        try:
            # return permission_classes depending on `action` 
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError: 
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes]

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all() 
    serializer_class = OrderSerializer
    permission_classes_by_action = {'create': [AllowAny],
                                    'list': [IsAdminUser]}
    def create(self, request, *args, **kwargs):
        return super(OrderViewSet, self).create(request, *args, **kwargs)
    def list(self, request, *args, **kwargs):
        return super(OrderViewSet, self).list(request, *args, **kwargs)
    def get_permissions(self):
        try:
            # return permission_classes depending on `action` 
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError: 
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  
    serializer_class = UserSerializer
    permission_classes_by_action = {'create': [AllowAny],
                                    'list': [IsAdminUser]}
    def create(self, request, *args, **kwargs):
        return super(UserViewSet, self).create(request, *args, **kwargs)
    def list(self, request, *args, **kwargs):
        return super(UserViewSet, self).list(request, *args, **kwargs)
    def get_permissions(self):
        try:
            # return permission_classes depending on `action` 
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError: 
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes]

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()  
    serializer_class = AddressSerializer
    permission_classes_by_action = {'create': [AllowAny],
                                    'list': [IsAdminUser]}
    def create(self, request, *args, **kwargs):
        return super(AddressViewSet, self).create(request, *args, **kwargs)
    def list(self, request, *args, **kwargs):
        return super(AddressViewSet, self).list(request, *args, **kwargs)
    def get_permissions(self):
        try:
            # return permission_classes depending on `action` 
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError: 
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes]

class SizeViewSet(viewsets.ModelViewSet):
    queryset = Sizes.objects.all() 
    serializer_class = SizeSerializer
    permission_classes_by_action = {'create': [AllowAny],
                                    'list': [IsAdminUser]}
    def create(self, request, *args, **kwargs):
        return super(SizeViewSet, self).create(request, *args, **kwargs)
    def list(self, request, *args, **kwargs):
        return super(SizeViewSet, self).list(request, *args, **kwargs)
    def get_permissions(self):
        try:
            # return permission_classes depending on `action` 
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError: 
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes]