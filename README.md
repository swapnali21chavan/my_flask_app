# my_flask_app
## Overview
This is a simple Flask application for uploading images and storing them in a MySQL database. The app also uses JWT for authentication.

## Features

- Image upload functionality
- JWT authentication
- Database storage for uploaded images

## Technologies Used

- Python 3.11
- Flask
- SQLAlchemy
- MySQL
- JWT

## Setup Instructions

### Prerequisites

- Python 3.7 or higher
- MySQL
- Git

### Installation

1. **Create a new directory and navigate into it::**
   mkdir my_flask_app
   cd my_flask_app

2.**Initialize a virtual environment and activate it:**
   python -m venv venv
   venv\Scripts\activate   # For Windows

3.**Install Flask and other required packages:**
   pip install flask flask_sqlalchemy flask_jwt_extended mysql-connector-python flask-jwt-extended

4.**Creating Project Structure:**
  mkdir templates static static\css static\js
echo > app.py
echo > templates\index.html
echo > static\css\styles.css
echo > static\js\scripts.js
echo > models.py
echo import os > generate_secret_key.py
echo import base64 >> generate_secret_key.py
echo import secrets >> generate_secret_key.py
echo. >> generate_secret_key.py
echo secret_key = base64.urlsafe_b64encode(secrets.token_bytes(32)).decode('utf-8') >> generate_secret_key.py
echo print(secret_key) >> generate_secret_key.py

5. **MySQL Database Setup:**
   mysql -u root -p
   CREATE DATABASE my_flask_app;
   GRANT ALL PRIVILEGES ON my_flask_app.* TO 'flask_user'@'localhost';
   FLUSH PRIVILEGES;

CREATE TABLE my_flask_app.images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL
);

6.**Running the Flask Application:**
  python app.py

7.**Initializing Git Repository and Pushing to GitHub:**
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin https://github.com/swapnali21chavan/my_flask_app.git
  git push -u origin master


