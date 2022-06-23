from django.contrib import admin
from .models import AutoMobileVO


# Register your models here.
class AutoMobileVOAdmin(admin.ModelAdmin):
    pass




admin.site.register(AutoMobileVO, AutoMobileVOAdmin)