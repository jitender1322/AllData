# li = [34,45,23,576,78,4,23]

# print(len(li))
# print(sum(li))
# print(max(li))
# print(min(li))
# print(sorted(li))

# def greet():
#     print("Welcome user")


# greet()

# def add(a,b):
#     print(a+b)

# add(23,23)
# add(3,3)

# def add(a,b):
#     return a+b
  
# result = add(23,23)

# print(result)

# def pi():
#     return 3.

# def add(a,b):
#     return a+b


# add(b=20,a=40)

# def total(*args):
#     print(args)

# total(234,456,34,65,65,34,34,3)


# def showInfo(**kwargs):
#     '''this is a function return a dict'''
#     print(kwargs)

# showInfo(name="sumit",age=34,city="rajkot")

# print(showInfo.__doc__)




# Factorial

# 1 = 1
# 2 = 1x2 = 2
# 3 = 1x2x3 = 6
# 4 = 1x2x3x4 = 24
# 5 = 1x2x3x4x5 = 120


# def fact(a):
#     if a<=1:
#         return 1
    
#     return a*fact(a-1)

# print(fact(5))

# add = lambda a,b: a+b

# print(add(25,25))

# a = 34

# def add():
#     global a
#     return a+34

# print(add())

# def get_values():
#     return 10, 20, 30  

# result = get_values()
# print(type(result))

# unpacking

# a,b,c = get_values()

# li = [34,65,23,78,56]

# newLi = sorted(li,reverse=True)

# print(li)
# print(newLi)

# li.sort()

# print(li)

# li = ["apple","orange","graps","banana"]

# newLi = sorted(li,key=len,reverse=True)

# print(newLi)


# li = [
#     {"id":45,"name":"sumit","city":"rajkot"},
#     {"id":5,"name":"aa","city":"rajkot"},
#     {"id":35,"name":"bb","city":"rajkot"},
#     {"id":75,"name":"fgh","city":"rajkot"},
#     {"id":25,"name":"ertert","city":"rajkot"}
# ]

# newLi = sorted(li,key=lambda x: x["id"],reverse=True)

# print(newLi)


li = [3454,65,34,65,343,4]

# newLi = [x+10 for x in li]

# newLi = list(map(lambda x:x+10,li))

# print(newLi)

# newLi = list(filter(lambda x: x>300,li))
# print(newLi)

# from functools import reduce

# newLi = reduce(lambda x,y : x-y,li)

# print(newLi)