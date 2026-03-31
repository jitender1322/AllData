# print(23)
# print("gsdf")
# print('sds')

# input("Enter your name :")

'''
erew
wer
wer
wer
wer
werw
er
'''


# a = 45
# first_name=435


# int float bool(True, False) string complex(3+4j)


# a =34
# b="rahul"
# c='sumit'
# d=True
# e=False
# f=45.5
# g=4+5j

# type() id()


# print(type(a))
# print(type(b))
# print(type(c))
# print(type(d))
# print(type(e))
# print(type(f))
# print(type(g))

# print(id(a))


# print(2**3)
# print(23//2)

# a = 10!=5

# print(a)
# print(type(a))

# a = 34

# a = a+25
# a+=25

# num = int(input("Enter a num :"))
# num2 = float(input("Enter a num :"))

# print(num+num2)

# fname = input("Enter your first name :")
# lname = input("Enter your last name :")

# print("Your full name is : ",fname+lname)


# Type Casting Constructor

# int() float() bool() str()

# Implicit

# a = 34
# b= 34.5

# c = a+b
# print(c)
# print(type(c))

# Explicit

# print(int(34.2))
# print(int(34.9))

# print(int(True))
# print(int(False))

# print(int("df

# print(float(23))
# print(float(False))
# print(float(True))
# print(float("34"))
# print(float("xfsd"))


# print(bool(56))
# print(bool(" "))

# Truthy Falsy(0,"",False)


# print(str(34))
# print(str(34.5))
# print(str(True))
# print(str(False))


# a = 4

# if a>10:
#     print("Hello")
#     print("Hello")
#     print("Hello")
# elif a>5:
#     print("dfs")   
# else:
#     print("Bye")
    

# a = 15
# b = 25
# c = 45


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


# age = 23

# eligibility = "Yes" if age>18 else "No"

# print(eligibility)


# choice = int(input("Enter your choice :"))

# match choice:
#     case 1:
#         print("You ordered a coffee")
#     case 2:
#         print("You ordered a tea")
#     case 3:
#         print("You ordered a burger")
#     case _:
#         print("Your choice is pizza")



# Looping -> For While

# (5) end
# (1,6)start end
# (1,6,2)start end step

# total = 0
# for i in range(1,16):
#     total+=i

# print(total)

# for i in range(10,1,-1):
#     print(i)


# i = 1

# while i<10:
#     print(i)
#     i+=1

# while True:
#     print("edre")

#     num = int(input("Enter 0 to stop :"))

#     if num==0:
#         break


# for i in range(1,6):
#     print("*"*i)

# for i in range(5,0,-1):
#     print("*"*i)

# for i in range(1,6):
#     print(str(i)*i)


# for i in range(1,6):
#     for j in range(1,i):
#         print(j,end=" ")
#     print()


# while True:
    
#     print("Welcome to our caffe !")

#     print("enter 1 to order coffee")
#     print("enter 1 to order coffee")
#     print("enter 1 to order coffee")
#     print("enter 1 to order coffee")
#     print("enter 1 to order coffee")

#     choice = int(input())

#     if choice ==1:
#         pass
#     elif choice==2:
#         pass


# String Formatting and Manipulation

# name = "sumit"
# subject = 'English'

# sen = "This is the lecture of python"

# options = '''
# Enter 1 to add 
# Enter 1 to add 
# Enter 1 to add 
# Enter 1 to add 
# '''

# print(options)

# index 0

# indexing
# name = "sumit"

# print(name[0])
# print(name[3])
# print(name[-3])

# for i in name:
#     print(i)

# age = 12

# print(f"\n\nHello your age \n is {age} and this is good\n\n\n\n")
# print("hello")
# %d %f  .format()


# name = input("Enter your name :")

# print("\nThank You\n")

# print(f"Name : {name}, Type : {type(name)} Memory Adress : {id(name)}")



# Slicing

# name = "Rahul"

# print(name[0:3])
# print(name[1:4])
# print(name[0:5:2])

# print(name[::])
# print(name[0::])
# print(name[0::1])
# print(name[:5:])

# name = "abc"

# print(len(name))


# Prmitive || Collection-> list[] tuple() set{} dict{} String

# a = []  # mutable ordered  
# b = ()  # imutable orederd
# c = {}  #(set) mutable unordered unique
# d = {}  # mutable orederd

# print(type(a))
# print(type(b))
# print(type(c))
# print(type(d))


# li = [23,23.7,True,"sumit"]
# li = list([23,45,23])

# print(li)

# Indexing

# print(li)
# print(li[0])
# print(li[3])

# for i in li:
#     print(i)


# Slicing

# print(li[1:3])


# li =["apple","mango","banana"]

# print(li)

# li[1] = "kiwi"

# del li[0]

# print(li)

li = [55,23,24,45]

# li.append(400)
# li.extend([34,65,8767])

# li.insert(0,444)

# li.remove(45)

# li.pop(0)

# li.sort(reverse=True) #change the org list

# li.reverse()
# li.clear()

# print(li)

# t = (34,23,534,24)
# t = (34,)

# print(t[0])
# print(t[-1])
# print(t[1:3])

# for i in t:
#     print(i)
# t[0]=3454

# del t


# li = []


# while True:

#     print("Enter 1 to add")
#     print("Enter 2 to read")
#     print("Enter 3 to delete")
#     print("Enter 4 to update\n")

#     choice = int(input("enter your choice :"))

#     match choice:
#         case 1:
#             num = int(input("Enter the value to add :"))   
#             li.append(num)
#         case 2:
#             for i in li:
#                 print(i)
#         case 3:
#             inn = int(input("Enter the index to remove :"))
#             li.pop(inn)
#         case 4:
#             inn = int(input("Enter the index to update :"))
#             val = int(input("Enter the value to update :"))

#             li[inn] = val
            

# s = set()

# print(type(s))

# fruits = {"Graps","Orange"}

# for item in fruits:
#     print(item)
# print("Apple" in fruits)

# fruits.update(["kiwi","Orange"])

# fruits.discard("Apple")

# print(fruits)


# di = {
#     "Name" : "Sumit",
#     "Age": 23,
#     "Subject":["Hindi","English"],
#     "Status" : True
# }

# READ

# print(di["Name"])
# print(di["Subject"][1])

# for key,value in di.items():
#     print(f"{key}->{value}")

# UPDATE

# di["City"] = "Rajkot"

# di["Age"] = 45

# print(di)

# Type Converter -> list() tuple() set() dict()

# print(list((23,56,87,"fgf")))
# print(list({23,56,87,"fgf"}))
# print(list({"name" : "sumit","age":23}))

# print(tuple([34,6,56,23]))
# print(tuple({34,6,56,23}))


# print(set([34,56,23,564,54,45,45]))
# print(set((34,56,23,564,54,45,45)))

# list to string

# name = "sumit is a boy"

# li = name.split(" ")

# newStr = "-".join(li)

# print(newStr)

# li = []

# num = int(input("Enter the number of element you want to add :"))

# for i in range(num):
#     val = int(input(f"Enter the {i+1} element :")) 
#     li.append(val)

# val = input("Enter the elements (comma seprated) : ")
# li = [int(i) for i in val.split(",")]

# print(li)


# print(li)

# List Comprehension

# li = [34,45,56,234,354]
# newLi = []

# for i in li:
#     newLi.append(i*2)

# newLi = [i*2 for i in li]
# print(newLi)

# List of Dict

# li = [
#     {
#         "name":"sumit",
#         "age":23
#     },
#     {
#         "name":"rahul",
#         "age":21
#     },
#     {
#         "name":"vivek",
#         "age":33
#     }
# ]


# li.append({"name" : "jkas","age":34})
# print(li)

# print(li)
# print(li[0])
# print(li[0]["name"])

# for item in li:
#     for key,value in item.items():
#         print(key,"-",value)

# for item in li:
#     for key,value in item.items():
#         print(key,value)

# li[1]["name"] = "Jitender"

# print(li)


# Students = []

# while True:
#     print("Welcome to our Programme !\n")

#     print("\nEnter 1 to add ")
#     print("Enter 2 to view ")
#     print("Enter 3 to delete ")
#     print("Enter 4 to update ")
#     print("Enter 0 to exit\n")

#     choice = int(input("Enter your choice :"))

#     match choice:
#         case 1:
#             st = {
#                 "stid":int(input("Enter student id :")),
#                 "name":input("Enter student name :"),
#                 "age":int(input("Enter student age :")),
#                 "city":input("Enter student city : ")
#             }

#             Students.append(st)

#             print("\nStudent added successfully !\n")
#         case 2:
#             stid = int(input("Enter student id :"))
#             for st in Students:
#                 if st['stid']==stid:
#                     print(f"Name : {st["name"]}, Age : {st["age"]}")
#         case 3:
#             stid = int(input("Enter student id :"))
#             for st in Students:
#                 if st['stid']==stid:
#                     Students.remove(st)
#                     print("\nStudent Deleted Successfully !\n")
#         case 4:
#             stid = int(input("Enter student id :"))
#             for st in Students:
#                 if st['stid']==stid:
#                     st["name"] = input("Enter student name :")
#         case 0:
#             print("\nGood Bye!\n")
#             break
#         case _:
#             print("Invalid Choice\n")


# li = [34,34,23,54,65,76,566]

# print(sum(li))
# print(max(li))
# print(min(li))
# print(sorted(li))
# print(len(li))


# TnRn TsRn TnRs TsRs

# def greet():
#     print("Hello")
#     print("Hello")
#     print("Hello")


# greet()

# def add(a,b):
#     print(a+b)

# add(23,23)

# def add(a,b):
#     return a+b

# result = add(24,23)

# print(result)

# def pi():
#     return 3.14


# def greet(name,age):
#     print(f"The name is {name} and age is {age}")


# greet(age =34,name = "sumit")
# greet("sumit",34)

# def add(*args):
#     print(sum(args))

# add(23,54,234,65,34,65,65,)


# def greet(**kwargs):
#     '''This function will greet user'''
#     print(kwargs)

# greet(name="sumit",age=23,subjects=["enfglish","hindi"])


# print(greet.__doc__)


# li = []

# def add(value):
#     global li
#     li.append(value)

# def view():
#     global li
#     for i in li:
#         print(i)

# def delete(idx):
#     global li
#     li.pop(idx)

# def update(idx,value):
#     global li
#     li[idx]=value


# Recursion

# Factroial

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

# def add(a,b):
#     return a+b

# add = lambda a,b: a+b
# print(add(34,34))

# a = 25

# def add():
#     global a
#     a += 10
    # print(a)

# print(a)

# add()

# print(a)


# def add():
#     name = "sumit"
#     return 23,54,65

# a,b,c = add()
# print(name)

# print(a)
# print(b)
# print(c)


# arr = [34,23,65,87,98]

# print(arr[3])

# for i in arr:
#     print(i)


# maxel = max(arr)
# minel = min(arr)
# total = sum(arr)
# newarr = sorted(arr,reverse=True)

# print(maxel)
# print(minel)
# print(total)
# print(newarr)


# num = input("Enter the value to add in array(comma seprated) :")
# print(num)
# arr = [int(i) for i in num.split(",")]
# print(arr)

# Dimension

arr = [34,567,78,456]

arr2 = [
    [23,54,76],
    [67,89,45]
]

# print(arr2[1][1])

for i in range(2):
    for j in range(3):
        print(arr2[i][j])




