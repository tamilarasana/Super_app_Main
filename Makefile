build:
	python ./manage.py makemigrations
	python ./manage.py migrate
	python ./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', '12345')"
