# import math
# print(dir(math))

# print(math.factorial(5))
# print(math.ceil(5.9))
# print(math.floor(5.9))
# print(math.sqrt(25))


# import datetime

# now = datetime.datetime.now()

# print(now)

# print("Year:", now.year)
# print("Month:", now.month)
# print("Day:", now.day)
# print("Hour:", now.hour)
# print("Minute:", now.minute)
# print("Second:", now.second)

# print(f"{now.day}-{now.month}-{now.year}")


# custom = datetime.datetime(2025,11,12,13,53,23)

# print(custom)

# now = datetime.datetime.now()

# print(now.date())
# print(now.time())

# formatedDate = now.strftime("%d-%m-%Y, %H:%M:%S")

# print(formatedDate)
# print(type(formatedDate))

# dDate = datetime.datetime.strptime(formatedDate,"%d-%m-%Y, %H:%M:%S")

# print(dDate)
# print(type(dDate))


# from datetime import datetime,timedelta
# import datetime

# now  = datetime.now()
# print(now+timedelta(days=5))
# print(now+datetime.timedelta(days=5))



# import time

# print(1)
# print(2)
# time.sleep(3)
# print(3)

# for i in range(1,11):
#     print(i)
#     time.sleep(1)


import random

# print(int(random.random()*10))

# print(random.randint(5,15))
# print(random.randrange(5,15,3))

# print(random.uniform(1,5)) # to generate float value


# fruits = ["apple", "banana", "cherry", "mango"]

# print(random.choice(fruits))
# print(random.choices(fruits,k=2))

# random.shuffle(fruits)


# print(fruits)



# import uuid

# id = uuid.uuid4()

# print(uuid.uuid4())

# import mathModule as mm
# from mathModule import add,greet

# result = mm.add(23,45,76,2,65,453)

# mm.greet()

# print(result)

from myPackages.myModule import fact


# print(fact(5))
