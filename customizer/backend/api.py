from rest_framework import routers
from backend import views

router = routers.DefaultRouter()
router.register(r'customers', views.CustomerViewSet, basename='models')
router.register(r'orders', views.OrderViewSet, basename='models')