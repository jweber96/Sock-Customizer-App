from rest_framework import serializers
from backend.models import Customer, Order, Sizes, Address

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sizes
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    address = AddressSerializer()
    class Meta:
        model = Customer
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    sizes = SizeSerializer()
    class Meta:
        model = Order
        fields = '__all__'