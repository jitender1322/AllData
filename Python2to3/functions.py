# print("Built In Function")

# input type id 

# print(sum([12,14,24,65]))
# print(max([12,14,24,65]))
# print(min([12,14,24,65]))


# UDF

# def greet():
    # print("WELCOME !")
    # print("WELCOME !")
    # print("WELCOME !")
    # print("WELCOME !")
    # print("WELCOME !")

# calling the function
# greet()
# greet()
# greet()
# greet()

# parameter   argument

# def sum(a,b):
#     print(a+b)

# sum(12,14)
# sum(23,45)
# sum(67,534)

# def sub(x,y):
#     return x-y


# result = sub(25,5)

# print(result + 324)



# age = int(input("Enter your age :"))

# def check(age=18):
#     # if age>=18:
#     #     print("valid")
#     # else:
#     #     print("not valid")

#     print("hello")


# check(age)

# def greet(name, age=18):
#     print(f"Hello {name}, you are {age} years old.")

# greet("Bob") 
# greet("Sumit",35) 

# def greet(name,city):
#     print(f"Name : {name},City : {city}")


# greet(city="rajkot",name="Sumit")

# def summ(*args):
#     print(sum(args))

# summ (23,45,34,67,34)

# def add():
#     """This is a docstring"""
#     return 2+2


# print(add.__doc__)
# print(max.__doc__)

# student = []
# def addStudent(stId,name):
#     student.append({
#         "stId" : stId,
#         "name":name
#     })
#     print("added successfully")

# def viewSt():
#     for i in student:
#         pass

# def remove(stid):
#     for i in student:
#         pass

# def update(stid,name):
#     for i in student:
#         pass

# addStudent(1,"rahul")

# def summ(a,b):
#     print(a+b)

# summ(12,12)
# summ(32,45)

# Recursion -> When a function call it self.

# Factorial

# 1 = 1
# 2 = 1x2 = 2
# 3 = 1x2x3 = 6
# 4 = 1x2x3x4 = 24
# 5 = 1x2x3x4x5 = 120

# def fact(a=1):
#     if a<=1:
#         return 1
    
#     return a* fact(a-1)

# num = int(input("Enter a num :"))
# result = fact(num)

# print(result)

# add = lambda x,y:x+y
# sqaure = lambda x:x*x

# print(add(34,34))
# print(sqaure(5))


# a = 25

# def add():
#     # a=35
#     global a
#     a = a+5
#     print(a)

# add()
# print(a)

# def give():
    # return 23,54,67

# result = give()
# a,b,c = give()

# print(a,b,c)

# nested function

# def outer():
#     def inner():
#         print("hello from inner func")

#     inner()

# outer()



# list(multipal data types) -> array(same data type of element) 

# 1d and 2d [d - Dimension]


# for i in li:
#     print(i)

# print(sum(li))
# print(max(li))
# print(min(li))

# indexing
# li = [12,23,54,76,98]

# print(li[3])
# print(li[-1])
# print(li[-3])

# slicing

# print(li[0:3])
# print(li[2:])
# print(li[::1])
# print(li[::2])


# li = [
#     [12,23,34],
#     [45,56,67],
#     [78,89,90]
# ]


# print(li)

# print(li[0])
# print(li[1][2])
# print(li[2][2])

# for a in li:
#     for i in a:
#         print(i)



# li = []

# num = int(input("Enter the number of elements for list :"))

# for i in range(num):
#     el = int(input(f"Enter the element no. {i+1} :"))
#     li.append(el)


li = [43,24,2,54,2,1,4,6]

num = int(input("Enter the number to find thereshold"))
newLi = []
for i in li:
    if i>num:
        newLi.append(i)

print(newLi)

# li.sort()
# li.sort(reverse=True)

# print(li)