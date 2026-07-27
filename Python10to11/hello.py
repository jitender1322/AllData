# print("this is your print")
# print("this is your print\n\n")
# print("this is\t\t\t your print")

# print("hello",end="-")
# print("hello",end="&")
# print("hello",end="&")

# print("This is python","Here it is",sep="--")
# print("THis is also print")

# print("A","B","C",sep="-")

# ctrl + /


# input("Enter your name :")

'''
jdsdf
sdfsdf
sdfsdf
sdfsdf
sdfsdf
dfsd
'''

"""
dftg
dgdfg
dfg
"""

# num = 34
# name = "sumit"

# a = None

# print(a)

# a= 45
# print(a)

# a= 45
# del a
# print(a)

# name = input("Enter your name : ")

# print("Your name is ",name)

# num = input("Enter a num :")
# num2 = input("Enter a num2 :")
# print(num+num2)

# fname = input("Enter your first name :")
# lname = input("Enter your last name :")

# print("You fullname is ",fname+ " " + lname)

# Data Types : Primitive    Collection

# Primitive - > int float string boolen complex

# num = 23
# flow = 34.4
# name = "rahul"
# name2 = 'sumit'
# choice = True
# choice2 = False
# com = 3+4j

# Type

# print(type(num))
# print(type(flow))
# print(type(name))
# print(type(name2))
# print(type(choice))
# print(type(choice2))
# print(type(com))


# a = 34 + 34

# a = 13%2  always return reminder
# print(a)

# a = 3**3
# print(a)

# a = 11//2
# print(a)
# BODMAS
# a = 23
# a = a + 10 -34 /1 *4
# a+=10

# print(a)

# a = 34

# Returns memory address
# print(id(a))

# Type Conversion -> Implicit  Explicit

# a = 23
# b = 23.5
# c= a+b

# print(c)
# print(type(c))

# int() float() bool() str()


# print(int(23.2))
# print(int(23.9))
# print(int(True))
# print(int(False))
# print(int("23"))
# print(int("sumit"))

# print(float(23))
# print(float(True))
# print(float(False))

# Truthy Value   Falsy Value(0 False "" )

# print(bool(23))
# print(bool(23.4))
# print(bool(""))
# print(bool("sumit"))
# print(bool(-12))
# print(bool(0))

# print(str(23))
# print(str(23.4))
# print(str(True))
# print(str(4+3j))

# num = float(input("Enter your height :"))
# num2 = int(input("Enter a num :"))

# print(num+num2)

# name = input("Enter your name :")

# print("Name :",name,"Type :",type(name),"Memory Address :",id(name))


#  if ifelse  ladder nested match case ternary

# age = int(input("Enter your age :"))

# if age>=18:
#     print("You are eligible")
# else:
#     print("You are not eligible")

# print("Enter 1 to order coffee")
# print("Enter 2 to order tea")
# print("Enter 3 to order samosa")


# choice = int(input("Enter your choice :"))

# if choice==1:
#     print("Coffee")
# elif choice==2:
#     print("Tea")
# elif choice==3:
#     print("Samosa")
# else:
#     print("Invalid")

# marks = int(input("Enter your marks :"))

# if marks>=90:
#     print("A")
# elif marks>=80:
#     print("B")
# elif marks>=60:
#     print("C")
# else:
#     print("D")


# a = int(input("Enter num 1 : "))
# b = int(input("Enter num 2 : "))
# c = int(input("Enter num 3 : "))


# if a>b:
#     if a>c:
#         print("A")
#     else:
#         print("C")
# else:
#     if b>c:
#         print("B")
#     else:
#         print("C")

# print("Enter 1 to order coffee")
# print("Enter 2 to order tea")
# print("Enter 3 to order samosa")

# choice = int(input("Enter your choice :"))

# match choice:
#     case 1:
#         print("")
#     case 2:
#         print("")
#     case 3:
#         print()
#     case _:
#         print()


# for while

# range(start,end,step)
# range(end)
# range(start,end)
# range(0,end,1)

# for i in range(10,0,-1):
#     print(i)

# start = int(input("Enter the start of range :"))
# end = int(input("Enter the end of range :"))

# for i in range(start,end+1):
#     if i%2==0:
#         print(i, "is Even")
#     else:
#         print(i, "is Odd")

# num = int(input("Enter the num to print it's table :"))

# for i in range(1,11):
#     print(num,"x",i,"=",num*i)

# i=0

# while i<=3:
#     print(i)
#     i+=1

# while True:
#     print("\nWelcome !\n")

#     print("Enter 1 to order coffee")
#     print("Enter 2 to order tea")
#     print("Enter 0 exit")

#     choice = int(input("Enter your choice :"))

#     if choice==1:
#         print()
#     elif choice==2:
#         print()
#     elif choice==0:
#         break
#     else:
#         print("invalid")

# Ternary  one liner ?:

# marks = 25

# result = "Pass" if marks>35 else "Fail"

# print(result)

# Control Statements  ->  pass break continue

# age = 34

# if age>18:
#     pass
# else:
#     print()

# for i in range(10):
#     if i==3:
#         continue
#     print(i)
    

# Patterns 

# 1 
# 2 2
# * * * 
# * * * * 
# * * * * *

# for i in range(5):
#     print("* * * * *")

# for i in range(5):
#     print("* "*5)

# for i in range(1,6):
#     print("* "*i)

# for i in range(5,0,-1):
#     print("* "*i)

# for i in range(1,6):
#     print(str(i)*i)

# for i in range(1,6):
#     for j in range(1,6):
#         print(j,end=" ")
#     print()

# for i in range(1,6):
#     for j in range(1,i+1):
#         print(j,end=" ")
#     print()

# for i in range(5,0,-1):
#     for j in range(1,i+1):
#         print(j,end=" ")
#     print()

# name = 'sumit'
# name2 = "sumit"

# print(name,end="-")
# print(name)
# print(name)

# a = "sumit"
# b = "rahul"
# c = "vivek"

# print(a,b,c,sep="_")

# print("Name :", a,"( Type:",type(a),"Memory Address :",id(a),")" )

# print("your name is {} and you are a boy".format(a))

# F strings

# print(f"Name : {a} ( Type : {type(a)}, Memory Address : {id(a)})")


# a = "sumit"
# print(a)

# a = "rahul"
# print(a)

# Indexing start from 0

# print(a[0])
# print(a[-1])

# for i in a:
#     print(i)

# menu = 

# print(menu)

# country = "New   York"

# print(country[0:3:2])

# print(len(country))

# String List Tuple Set Dict

# l = []  ordered mutable
# t = ()  ordered unmutable
# s = {}  unordered mutable unique
# d = {}  ordered mutable key-value pair

# print(type(l))
# print(type(t))
# print(type(s))
# print(type(d))

# li = [12,13,"sumit",True,34.4]

# CRUD -> Create Read Update Delete

# print(li)
# print(li[2])
# print(li[-1])
# print(li[0:4])
# print(li[::])

# for i in li:
#     print(i)

# Update
# li[3] = "rahul"

# print(li)

# Methods -> append extend remove pop clear 


# li = []

# li.append("sumit")
# li.append("rahul")
# li.append("vivek")

# li2 = [23,34,546]

# li.extend(li2)

# li.remove("vivek")

# li.pop()
# li.pop(0)

# li.clear()

# print(li)

# li = [23,45,23,12,56,8]

# li2 = li.copy()

# li2[0]= 55555

# print(li)
# print(li2)


# li.sort()
# li.sort(reverse=True)

# li.reverse()

# print(li)

# li = []

# print("Welcome to our Programme !")

# while True:
#     print('''\nSelect your choice
#     Enter 1 to create an array
#     Enter 2 to read an array
#     Enter 3 to delete an element of an array
#     Enter 4 to update an element of an array
#     Enter 0 to exit !\n''')

#     choice = int(input("Enter your choice : "))

#     if choice==1:
#         num = int(input("Enter how many element you want to add :"))
#         for i in range(num):
#             a = int(input(f"Enter the element no. {i+1} => "))
#             li.append(a)
        
#         print("\nArray is created !")
    
#     elif choice==2:
#         print()
#         for i in li:
#             print(i,end=" ")
#         print()

#     elif choice==3:
#         idx = int(input("Enter the index to remove the element :"))
#         if idx>=0 and idx<len(li):
#             li.pop(idx)
#             print("\nElement removed !")
#         else:
#             print("\n Invalid index !")

#     elif choice==4:
#         idx = int(input("Enter the index to remove the element :"))
#         val = int(input("Enter the new value:"))
#         if idx>=0 and idx<len(li):
#             li[idx] = val
#             print("\nElement updated !")
#         else:
#             print("\n Invalid index !")
    
#     elif choice==0:
#         print("\n Thank you !")
#         break

#     else:
#         print("\n Invalid choice !")


# Tuple -> immutable ordered set -> unordered unique

# t = (12,34,56,67)

# print(t)
# print(t[0])
# print(t[0:3])

# for i in t:
#     print(i)

# print(348 in t )


# s = {23,34,65,76,23,23}

# print(s)
# print(type(s))

# for i in s:
#     print(i)

d = {
    "name" : "Sumit",
    "age" : 23,
    "height"  :5.6,
    "married" : False,
    "subjects" : ["hindi","english","gujrati"]
}

# print(d)
# print(d["name"])
# print(d["subjects"][1])

# CRUD

# Create
# d["city"] = "Rajkot"

# Update
# d["age"] = 55

# Delete
# del d["subjects"]

# print(d)


# for i in d:
#     print(d[i])

# for key,value in d.items():
#     print(key,"->",value)

# Type Casting :-> list tuple set string

# print(list((34,76,32)))
# print(list({34,45,67,34}))

# print(tuple([34,546,67,23]))
# print(tuple({34,567,7,3,76}))

# print(set([23,23,54,67,8]))
# print(set((23,23,45,56,76)))

# print(dict([34,45,675,45]))

# print(list("sumit is a boy"))
# print(tuple("sumit"))
# print(set("summit"))

# name = "This is sumit"
# fruits = "apple,banana,graps"

# print(name.split(" "))
# print(fruits.split(","))

# l = ["sumit","is","a","boy"]

# sen = " ".join(l)
# print(sen)

# s = {23,23,34,54}

# s.add(55)
# print(s)

# s = frozenset({23,23,344,55})
# s.add(34)
# print(s)

# List of Dict

# students = [
#     {"name" : "sumit","age":23,"subjects":["hindi","english"]},
#     {"name" : "abhi","age":19,"subjects":["hindi","english"]},
#     {"name" : "vivek","age":25,"subjects":["hindi","english"]},
#     {"name" : "brijesh","age":21,"subjects":["hindi","english"]}
# ]

# print(students[0]["name"])
# print(students[0:3])

# for st in students:
#     print(f"Name : {st["name"]} Age : {st["age"]} Subjects : {", ".join(st["subjects"])}")

# students = []

# while True:
#     print('''List of choices :
          
#     Enter 1 to add student
#     Enter 2 to view student
#     Enter 3 to delete student
#     Enter 4 to update student
#     Enter 0 to exit\n''')

#     choice = int(input("Enter your choice :"))

#     if choice==1:
#         st = {
#             "Id" : (len(students)+1,),
#             "Name" : input("Enter student name : "),
#             "Subjects" : set(input("Enter student subject seprated by comma(,) : ").split(","))
#         }

#         students.append(st)

#         print("\nStudent added successfully !\n")
    
#     elif choice==2:
#         for st in students:
#             print(f"Id : {st["Id"][0]} Name : {st["Name"]} Subjects : {", ".join(st["Subjects"])}")

#     elif choice==3:
#         stid = int(input("Enter student id to delete :"))
#         found = False

#         for st in students:
#             if st["Id"]==stid:
#                 found= True
#                 students.remove(st)
#                 print("Student Deleted Successfully !")
        
#         if found==False:
#             print("Student not found !")

#     elif choice==3:
#         stid = int(input("Enter student id to delete :"))
#         found = False

#         for st in students:
#             if st["Id"]==stid:
#                 found= True
#                 st["Name"]= input("Enter student updated name : ")
#                 st["Subjects"]=set(input("Enter student Updated subject seprated by comma(,) : ").split(","))
#                 print("Student Updated Successfully !")
        
#         if found==False:
#             print("Student not found !")


# Built In -> print() input() id() type() len() sum() max() min()
# UDF -> As a developer we create them according to our need.

# li = [23,45,566,78]

# print(len(li))
# print(max(li))
# print(min(li))
# print(sum(li))

# def greet():
#     print("hello")
#     print("hello")

# greet()
# greet()

# TNRN  TSRN TNRS TSRS

# def greet(name):
#     print(f"Hello from {name}")

# greet("Sumit")
# greet("Vivek")

# def PI():
#     return 22/7

# result = PI()

# print(result)

# def add(a,b=25):
#     return a+b

# print(add(25))
# print(add(25,50))

# def greet(fname,lname):
#     print("Your fullname is : ",fname+lname)


# greet(lname="kumar",fname="sumit")


# print(sum([12,12,12]))

# def add(*args):
#     print(args)
#     print(type(args))
#     print(sum(args))

# add(12,34,56,56)

# def greet(**kwargs):
#     print(kwargs)

# greet(name="sumit",age=23,city="rajkot")

# def greet():
#     """This function will greet user"""
#     print("hello")


# print(greet.__doc__)

# Factorial

# 1 = 1
# 2 = 1 x 2 = 2
# 3 = 1 x 2 x 3 = 6
# 4 = 1 x 2 x 3 x 4 = 24
# 5 = 1 x 2 x 3 x 4 x 5 = 120 

# def fact(num):
#     if num<=1:
#         return 1
    
#     return num * fact(num-1)

# result = fact(5)
# print(result)

# result = lambda a,b: a+b 

# print(result(12,12))

# x = 12

# def add():
#     x=23
#     print(x)

# add()
# print(x)

# def add():
#     return 23,345,56

# result = add()
# Unpacking the tuple
# a,b,c = add()
# print(result)

# print(a)
# print(b)
# print(c)

# 1D || Vector
# arr = [23,45,67,78,67]

# print(arr[2])

# 2D || Matrix 3x3 = 9

# arr2= [
#     [12,34,56],
#     [12,34,56],
#     [12,54,56],
# ]

# print(arr2[2][1])

# for row in arr2:
#     for col in row:
#         print(col)


# arr = []

# for i in range(5):
#     arr.append(int(input("Etner the num :")))

# print(arr)

# arr = [int(i)*2 for i in input("Enter the num (sep by comma)").split(",") ]
# print(arr)

# record = [12,23,45,555,34,56]

# record.sort( reverse=True)

# print(record)

# newLi = sorted(record)

# print(record)
# print(newLi)


# arr = list(map(lambda x: x*2,record))
# arr = list(filter(lambda x:x>20,record))

# print(arr)

# li = []

# def take_input():
#     li = [int(i) for i in input("Etner element sep by space :").split(" ")]
#     print("Element inserted successfully !")

# def display_sum(li):
#     print(f"Sum of all {sum(li)}")




# while True:
#     print()
#     print()
#     print()
#     print()

#     choice = int(input())

#     if choice==1:
#         take_input()
#     elif choice==2:
#         display_sum(li)
    

# li = [23,4,5,23,546,76,21]

# threshold = 23

# # newLi = list(filter(lambda x: x>threshold,li))
# newLi = [i for i in li if i>threshold]

# print(newLi)
