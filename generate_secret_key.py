import os 
import base64 
import secrets 
 
secret_key = base64.urlsafe_b64encode(secrets.token_bytes(32)).decode('utf-8') 
print(secret_key) 

#mjGiXHQtiDPSfMbHy84lrmEvIPRne5EX-T6yPb2FGHA=
#Database Name: my_flask_app
#Host: localhost
#User: flask_user
#Password: Admin@123 (example password)
#Python_Flask_Server_5000

 #"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODUyNzg2NywianRpIjoiMDExNGI0NDItOGExYi00OGZjLWI2ZDItZTQyNTM0OGE0ZjQ1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3QiLCJuYmYiOjE3MTg1Mjc4NjcsImNzcmYiOiI4MjMzYjFiNi0zYjJhLTQ5ZjUtOTczOS0wZTlkNGFlYzQ3NjciLCJleHAiOjE3MTg1Mjg3Njd9.bb2_DcUfUzBe7QlNxQuv1Xf2zJCuCQCFf19R1Rki5o4"