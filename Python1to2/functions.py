# l = [23,56,76,34,785,2,46,77]

# l.sort(reverse=True)

# print(l)

# print(max(l))
# print(min(l))
# print(sum(l))

# print(sorted(l))
# print(l)


# def greet(name):
#     print("Hello",name)



# greet("rahul")
# greet("sumit")

# tnrn  take nothing return nothing
# tsrn  
# tnrs
# tsrs

# def add(a,b):
#     return a+b

# result = add(23,23)


# b = 34 + result

# def pi():
#     return 3.14

# result = pi()

# def greet(name,age=18):
#     print(f"name : {name},age : {age}")

# greet("sumit")
# greet("rahul",33)

# def add(*args):
#     print(type(args))
#     return sum(args)

# result = add(34,46,67,23,67,67)

# print(result)

# def show_info(**kwargs):
#     """
#     this function will take multiple kwargs
#     """
#     # print(type(kwargs))
#     for key, value in kwargs.items():
#         print(f"{key}: {value}")

# # show_info(name="Alice", age=25, city="NY")  

# print(show_info.__doc__)
# print(type.__doc__)


# dt = "24-04-2025"
# sr = "maths, english, hindi"
# s = dt.split("-")
# print(set(s))

# print("/".join(s))

# print(set(sr.split(",")))


# Factorial

# 1 = 1
# 1 x 2 = 2
# 1 x 2 x 3 = 6
# 1 x 2 x 3 x 4 = 24
# 1 x 2 x 3 x 4 x 5 = 120

# def fact(num):
#     if num <=1:
#         return 1
#     return num * fact(num-1)

# result = fact(10)

# print(result)

# add = lambda x,y: x+y

# print(add(23,23))

# l=[]

# while True:

#     print("Enter 1 to create a list")
#     print("Enter 2 to sum the list")
#     print("Enter 3 to find max in the list")
#     print("Enter 4 to find min in the list")
#     print("Enter 5 to find average of the list")
#     print("Enter 6 to find fact of a number")


# a = 15

# def pr():
#     global a
#     a+=15
#     print(a)

# pr()

# print(a)

# def getvalue():
#     return 34,34,65

# unpacking of tuple

# a,b,c = getvalue()


# matrix =[
#     [1, 2, 3],  
#     [4, 5, 6],  
#     [7, 8, 9]  
# ]

# for arr in matrix:
#     for i in arr:
#         print(i)


# def fact(a):
#     if a<=1:
#         return 1
    
#     return a*fact(a-1)


# List Comprehension

# li = [i+2 for i in range(10) if i%2==0]

# li2=[i+2 for i in li ]

# for i in range(10):
#     li.append(i+2)


# print(li)
# print(li2)

# words = ["apple", "banana", "cherry"]

# uppercase_words = [word.upper() for word in words]
# print(uppercase_words)



# Higher Order Functions (Sorted,Map,filter,reduce)

# When a function takes another function as an argument

li = [34,2,3,54,76,3,76,98,55]

# fruits = ["kiwi","ap","graps","orange"]

# print(sorted(li,reverse=True))
# print(sorted(fruits,key=len))


# newLi = list(map(lambda x: x*2,li))

# print(newLi)

# fli= list(filter(lambda x: x%2==0,li))

# print(fli)

# from functools import reduce

# newLi = reduce(lambda a,b:a+b,li)

# print(newLi)


while True : 
    print("Enter 1 date related op ")
    print("Enter 2")
    print("Enter 3")

    choice = int(input("enter your choice :"))

    if choice==1:
        while True : 
            print("1 cur time")
            print("2 cur date")
            print("0 return to main menu")

            ch = input()

            if ch ==0:
                break