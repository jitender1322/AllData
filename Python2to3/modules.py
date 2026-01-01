import myModule as md

from myPackage import Mymodule as md2

# print(md2.greet())

# from myModule import greet,PI

# print(greet("rahul"))
# print(PI)

# print(dir(md))

# print(md.greet("Sumit"))
# print(md.PI)


























# import os


# print(os.name)
# print(os.getcwd())

# path = os.getcwd()
# folder = "demo"

# print(os.listdir(path))

# print(os.path.join(path,folder))





























# higher order functions -> when a function takes another function
# as an argument called higher order function.

# filter map reduce sorted

# from functools import reduce

# listt = [23,54,65,23,76,32,6,2,8]

# result = reduce(lambda x,y:x+y,listt)

# print(result)
# ld = [
#     {"name" : "jitender","age":23},
#     {"name" : "keval","age":21},
#     {"name" : "harsh","age":20},
#     {"name" : "jay","age":17},
# ]


# result = list(map(lambda x : x-2,listt ))

# result = list(filter(lambda x : x["age"]>20,ld))

# print(result)

# newLisstt = sorted(listt)
# newLissttt = sorted(listt,reverse=True)

# listt.sort()

# print(listt)
# print(newLisstt)
# print(newLissttt)













# import random
# import uuid

# print(uuid.uuid4())

# print(int(random.random()*10))
# print(random.randint(25,30))


# fruits = ["apple","orange","banana","graps"]

# print(random.choice(fruits))
# print(random.choices(fruits,k=2))

# random.shuffle(fruits)

# print(fruits)































# import math
# import datetime
# from datetime import datetime,timedelta

# import time

# for i in range(1,60):
#     time.sleep(1)
#     print(i)

# print(math.factorial(5))
# print(math.sqrt(25))

# print(math.ceil(34.2))
# print(math.floor(34.9))

# print(math.pi)

# print(datetime.datetime.now())

# now = datetime.datetime.now()

# print(now.year)
# print(now.month)
# print(now.day)
# print(now.hour)
# print(now.minute)
# print(now.second)

# print(f"{now.day}-{now.month}-{now.year}")

# print(datetime.datetime(2023,11,21,6,45,30))

# print(now.date())
# print(now.time())
# print(type(now))


# formattedTime = now.strftime("%d-%m-%Y  %H:%M:%S")

# print(formattedTime)
# print(type(formattedTime))


# now = datetime.now()

# print(now-timedelta(days=5))