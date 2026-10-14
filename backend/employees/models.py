from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length = 20)
    age = models.IntegerField()
    gender = models.CharField(max_length=10,choices=[
    ("M", "Male"),
    ("F", "Female"),
    ("O", "Other"),
])
    phone = models.CharField(max_length = 20)
    email = models.EmailField()
    department = models.CharField(max_length = 20)
    join_date = models.DateField()
    projects = models.CharField(max_length = 200)
    salary = models.DecimalField(decimal_places=2,max_digits=7)

    def __str__(self):
        return self.name

