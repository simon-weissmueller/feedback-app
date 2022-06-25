from django.db import models
import string
import random
# Create your models here.

def generate_unique_code():
    length = 6

    while True:
        id = ''.join(random.choices(string.ascii_uppercase, k=length))
        
        if Session.objects.filter(session_id = id).count() == 0:
            break
    
    return id


class Session(models.Model):

    session_id = models.CharField(max_length=8, default="", unique=True)
    prof = models.CharField(max_length=50)
    lecture_name = models.CharField(max_length=50)
    positive_vote = models.IntegerField(default=0)
    neutral_vote = models.IntegerField(default = 0)
    negative_vote = models.IntegerField(default = 0)
    multiple_vote = models.BooleanField(null=False, default=False)
    created = models.DateTimeField(auto_now_add=True)