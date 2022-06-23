from django.db import models
from tkinter import CASCADE
from django.urls import reverse

# Create your models here.

class AutoMobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True)

