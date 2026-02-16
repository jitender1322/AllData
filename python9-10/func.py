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

def get_values():
    return 10, 20, 30  

result = get_values()
# print(type(result))

# unpacking

a,b,c = get_values()