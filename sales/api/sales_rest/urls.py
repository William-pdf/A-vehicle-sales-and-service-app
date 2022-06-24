from django.urls import path
from .views import api_list_sales, api_sales_person_sales_history

urlpatterns = [
    path("sales/", api_list_sales, name="api_list_sales"),
    path("salesperson/<int:pk>", api_sales_person_sales_history, name="api_sales_person_sales_history"),
]