from django.urls import path
from .views import (
    api_list_sales,
    api_employee_sales_history,
    api_sales_people,
    api_detail_salesperson,
    api_list_customers,
    api_delete_customer,
)

urlpatterns = [
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:pk>/", api_employee_sales_history, name="api_employee_sales_history"),
    path("salespeople/", api_sales_people, name="api_sales_people"),
    path("salespeople/<int:pk>/", api_detail_salesperson, name="api_detail_salesperson"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:pk>/", api_delete_customer, name="api_list_customers"),
]