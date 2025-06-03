from django.urls import path
from receipt_app import views  # receipt_app o'rniga to'g'ri app nomini tekshiring

urlpatterns = [
    path('', views.receipt_view, name='receipt'),
    path('client_history/', views.client_history_view, name='client_history'),
]