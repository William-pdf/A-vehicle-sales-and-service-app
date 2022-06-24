from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from sales_rest.encoders import SalesRecordEncoder, CustomerEncoder
from .models import Customer, SalesPerson, SalesRecord, AutomobileVO
import json



@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == 'GET':
        sales = SalesRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesRecordEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        sale = SalesRecord.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SalesRecordEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE", "PUT"])
def api_sales_person_sales_history(request, pk):
    if request.method == "GET":    
        try:
            sales = SalesRecord.objects.filter(id=pk)
            return JsonResponse(
                sales,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "No sales records"},
                status=400,
            )
    elif request.method == "DELETE":
        count, _ = SalesRecord.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    

@require_http_methods(["GET", "POST"])
def api_list_customers (request):    
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except:
            return JsonResponse(
                {"message": "Failed to add the customer"}
            )
