from django.contrib import admin

from sales_rest.models import AutomobileVO, Customer, SalesPerson, SalesRecord

# Register your models here.
admin.site.register(SalesPerson)
admin.site.register(SalesRecord)
admin.site.register(AutomobileVO)
admin.site.register(Customer)