from django.urls import path
from receipt_app import views

urlpatterns = [
    path('', views.receipt_view, name='receipt'),
    path('receipt/', views.receipt_view, name='receipt'),
    path('client_history/', views.client_history_view, name='client_history'),
    path('income/', views.income_view, name='income'),
]