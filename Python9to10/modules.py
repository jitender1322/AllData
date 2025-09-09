# from datetime import datetime,timedelta 
# import time
# import math

# a = 13.5
# b = -13.5

# print(math.ceil(a))
# print(math.floor(a))
# print(math.fabs(b))

# print("Hello")

# time.sleep(5)

# print("hello after sleep")



# current = datetime.now()

# newDate = current + timedelta(days=5)

# print(newDate)

# ct = datetime.datetime.now()

# currentDate = ct.date()
# currentTime = ct.time()

# customFormat = ct.strftime("%d-%m-%Y,%H:%M:%S")
# customFormat = ct.strftime("%d-%m-%Y")

# print(currentDate)
# print(currentTime)
# print(type(customFormat))

# strToDate = datetime.datetime.strptime(customFormat,"%d-%m-%Y")

# print(strToDate)
# print(type(strToDate))


# year = ct.year
# month = ct.month
# day = ct.day
# hours = ct.hour
# min = ct.min
# se = ct.second
# msc = ct.microsecond

# print(ct)
# print(year)
# print(month)
# print(day)

# print(f"{day}-{month}-{year}")

# customDate = datetime.datetime(2024,2,3,10,35,23)

# print(customDate)


# Higher Order Function
# map filter reduce
# map(func,itereable)

# from functools import reduce

# name = "Sumit"
# num = [23,76,45,98,23,76]


# newNum = reduce(lambda x,y: x+y,num)
# print(newNum)


# newNum = list(filter(lambda x:x<50,num))

# print(newNum)



# newList = []

# for i in num:
#     a = i*i
#     newList.append(a)


# newNum = list(map(lambda x: x*2,num))
# newName = list(map(lambda x:x*2,name))

# print(newNum)
# print(newName)

# import random

# 0-1
# print(random.random())
# print(random.random()*1000)
# print(int(random.random()*10))

# print(random.randint(1,9))

# fruits = ["apple","orange","banana","graps"]

# print(random.choice(fruits))
# print(random.choices(fruits,k=2))

# random.shuffle(fruits)

# print(fruits)

# import uuid

# print(uuid.uuid4())

# import os

# os.chdir("pythonnn")

# print(os.getcwd())

# cwd = os.getcwd()

# newPath = os.path.join(cwd,"demo")

# print(newPath)
# print(os.listdir())

# os.mkdir("work")

# os.remove("text.txt")

# os.rmdir("work")

# os.rename("one","three")

# print(os.path.exists("three"))



# import customModule

# from customModule import sum,sub
# from modules.customModule import *

# import customModule as cm

# result = cm.sum(12,12)
# result2 =cm.sub(12,12)

# print(result)
# print(result2)

import package