#!/bin/bash
#docker-compose up
source /var/superapp_venv/bin/activate
cd /var/superapp
python manage.py runserver 0.0.0.0:80
