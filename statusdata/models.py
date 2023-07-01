from django.db import models

#check existing profile starts
class Enquiry(models.Model):
    location = models.CharField(max_length=255, null=True)
    enquiry_num = models.CharField(max_length=255, null=True)
    dse_code = models.CharField(max_length=255, null=True)
    dse_name = models.CharField(max_length=255, null=True)	
    prospect_name = models.CharField(max_length=255, null=True)
    mobile = models.CharField(max_length=255, null=True)
    email = models.CharField(max_length=255, null=True)
    model = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=255, null=True)
    source = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = 'Enquiry'
        verbose_name_plural = 'Enquiries' 

class Booking(models.Model):
    location = models.CharField(max_length=255, null=True)
    enquiry_num = models.CharField(max_length=255, null=True)
    order_num = models.CharField(max_length=255, null=True)
    order_date = models.DateTimeField(null=True)
    cust_id = models.CharField(max_length=255, null=True)
    prospect_name = models.CharField(max_length=255, null=True)
    mobile = models.CharField(max_length=255, null=True)
    email = models.CharField(max_length=255, null=True)
    model = models.CharField(max_length=255, null=True)
    dse_code = models.CharField(max_length=255, null=True)
    dse_name = models.CharField(max_length=255, null=True)
    selling_price = models.FloatField(null=True)	
    received_amount = models.FloatField(null=True)	
    balanced_amount = models.FloatField(null=True)	
    delivery_date = models.DateTimeField(null=True) 

    class Meta:
        verbose_name = 'Booking'
        verbose_name_plural = 'Bookings' 

class Retail(models.Model):
    location = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=255, null=True)
    delivery_date = models.DateTimeField(null=True) 
    model = models.CharField(max_length=255, null=True)
    cust_id = models.CharField(max_length=255, null=True)
    prospect_name = models.CharField(max_length=255, null=True)
    dse_code = models.CharField(max_length=255, null=True)
    dse_name = models.CharField(max_length=255, null=True)	
    reg_no = models.CharField(max_length=255, null=True)	
    mobile = models.CharField(max_length=255, null=True)
    basic_price = models.FloatField()
    enquiry_num = models.CharField(max_length=255, null=True)
    pan_no = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = 'Retail'
        verbose_name_plural = 'Retails' 

class RetailCancel(models.Model):
    location = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=255, null=True)
    delivery_date = models.DateTimeField(null=True) 
    prom_delivery_date = models.DateTimeField(null=True) 
    model = models.CharField(max_length=255, null=True)
    cust_id = models.CharField(max_length=255, null=True)
    prospect_name = models.CharField(max_length=255, null=True)
    dse_code = models.CharField(max_length=255, null=True)
    dse_name = models.CharField(max_length=255, null=True)	
    reg_no = models.CharField(max_length=255, null=True)	
    mobile = models.CharField(max_length=255, null=True)
    basic_price = models.FloatField()
    dicount_cic = models.FloatField()
    discount = models.FloatField()
    exchange_price = models.FloatField()
    state_gst = models.FloatField(null=True)
    tax_col = models.FloatField(null=True)
    inv_amt = models.CharField(max_length=255, null=True)
    purchase_price = models.CharField(max_length=255, null=True)
    pan_no = models.CharField(max_length=255, null=True)
    enquiry_num = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = 'Retail Cancel'
        verbose_name_plural = 'Retail Cancels' 
	
class Delivery(models.Model):
    location = models.CharField(max_length=255, null=True)
    delivery_no = models.CharField(max_length=255, null=True)
    delivery_date = models.DateTimeField(null=True) 
    invoice_no = models.CharField(max_length=255, null=True)
    dse_code = models.CharField(max_length=255, null=True)
    dse_name = models.CharField(max_length=255, null=True)	
    cust_id = models.CharField(max_length=255, null=True)
    prospect_name = models.CharField(max_length=255, null=True)
    email = models.CharField(max_length=255, null=True)
    address1 = models.TextField(null=True)
    address2 = models.TextField(null=True)
    address3 = models.TextField(null=True)
    city = models.CharField(max_length=255, null=True)
    pin = models.CharField(max_length=255, null=True)
    mobile = models.CharField(max_length=255, null=True)	
    model = models.CharField(max_length=255, null=True)
    chassis_no = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = 'Delivery'
        verbose_name_plural = 'Deliveries' 
#check existing profil ends
