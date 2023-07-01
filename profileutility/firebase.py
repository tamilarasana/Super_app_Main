import json
import requests
from rest_framework.response import Response


def fireNotification(token, name, amount, purpose):

    decimal_string = str(amount)
    url = "https://fcm.googleapis.com/fcm/send"
    print(decimal_string)

    payload = json.dumps({
        "to": token,
        "notification": {
            "body": "Dear " + name + ", You have a Payment request Rs." + decimal_string + " from Kalyani Motors, For " + purpose,
            "title": "PAYMENT REQUEST",
            "content_available": True,
            "priority": "high",
            "sound": "default"
        },

        "data": {
            "body": "Dear Sir!, Please Pay the Amount which requested from " + name,
            "title": "PAYMENT REQUEST",
            "content_available": True,
            "priority": "high",
            "sound": "default"
        }
    })
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'key=AAAAMA5RNzA:APA91bHcQ7qVGh7j6Zx7XNxMJiRRfxuV5Nm08llfGncMekFnOx-9xTfY474QKPUk6UWj9zR0gW573x5HJDII6UaDW8SpsHL9Dh43mKkIOdc0FRWUfL3W6qWS8gxcJQWHEPyWaxvMB-s2'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    print(response)
