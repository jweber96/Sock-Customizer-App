from rest_framework import routers
from backend import views

router = routers.DefaultRouter()
router.register(r'customers', views.CustomerViewSet, basename='models')
router.register(r'orders', views.OrderViewSet, basename='models')
router.register(r'users', views.UserViewSet, basename='models')
router.register(r'addresses', views.AddressViewSet, basename='models')
router.register(r'sizes', views.SizeViewSet, basename='models')