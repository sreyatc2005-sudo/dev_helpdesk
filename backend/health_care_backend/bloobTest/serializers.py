from rest_framework import serializers
from bloobTest.models import User,Appointment


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Appointment
        fields="__all__"
        read_only_fields=["id","status"]