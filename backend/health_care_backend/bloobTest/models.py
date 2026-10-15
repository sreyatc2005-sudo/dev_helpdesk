from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    phone=models.CharField(max_length=100,unique=True)

class Appointment(models.Model):
    STATUS_CHOICES=(
        ("pending","pending"),
        ("completed","completed"),
        ("cancelled","cancelled")
    )

    name=models.CharField(max_length=200)
    phone=models.CharField(max_length=15,unique=True)
    email=models.EmailField()
    blood_test_type=models.CharField(max_length=50)
    status=models.CharField(max_length=50,choices=STATUS_CHOICES,default="pending")
    appointment_date=models.DateField()

    def __str__(self):
        return self.name