from django.contrib import admin
from .models import AutoMobileVO, Technician 


# Register your models here.
class AutoMobileVOAdmin(admin.ModelAdmin):
    pass

class TechnicianAdmin(admin.ModelAdmin):
    pass

admin.site.register(AutoMobileVO, AutoMobileVOAdmin)
admin.site.register(Technician, TechnicianAdmin)