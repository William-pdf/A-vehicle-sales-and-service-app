from django.shortcuts import render
from .models import AutoMobileVO
from common.json import ModelEncoder

# Create your views here.

class AutoMobileVOEncoder(ModelEncoder):
    model = AutoMobileVO
    properties = ["vin"]

class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number", "id"]