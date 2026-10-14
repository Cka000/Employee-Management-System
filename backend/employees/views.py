from .serializers import EmployeeSerializer
from .models import Employee
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

class EmployeeListView(APIView):

    def get(self,request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees,many = True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)

class EmployeeDetailView(APIView):
    def get (self,request,id):
        employee = get_object_or_404(Employee,id = id)
        serializer  = EmployeeSerializer(employee)
        return Response(serializer.data)

    def put(self,request,id):
        employee = get_object_or_404(Employee, id=id)
        serializer = EmployeeSerializer(employee,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=400)

    def delete(self,request,id):
        employee = get_object_or_404(Employee, id=id)
        employee.delete()
        return Response(status = 204)