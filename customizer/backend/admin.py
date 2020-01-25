from django.contrib import admin
from backend.models import Customer

#Register every model so we can see it in admin
admin.site.register(Customer)