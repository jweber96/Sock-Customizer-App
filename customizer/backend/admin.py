from django.contrib import admin
from backend.models import Customer, Address, Sizes, Order

#Register every model so we can see it in admin
admin.site.register(Customer)
admin.site.register(Address)
admin.site.register(Sizes)
admin.site.register(Order)