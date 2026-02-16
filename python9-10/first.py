# l = []
# t = ()
# s = {}
# d = {}

# print(type(l))
# print(type(t))
# print(type(s))
# print(type(d))

# li = ["apple",34,False,45.5]

# del li[0]

# print(li.pop(8))
# print(li)

# li.remove(455.5)

# print(li)

# print(li[3]) 
# print(li[-1]) 

# for i in li:
#     print(i)

# CRUD -> Create read update delete

# li[0] = "Graps"

# li.append("sumit")
# li.insert(2,555)

# del li[1]

# print(li)

# li = [234,456,234,6,8,5645]

# li.sort()
# li.reverse()
# print(li)

# li=[]

# while True:
#     print("Enter 1 to create a list")
#     print("Enter 2 to read a list")
#     print("Enter 3 to delete a element of list")
#     print("Enter 4 to update a element of list")

#     choice = int(input("Enter your choice :"))

#     if choice==1:
#         num = int(input("How many numbers you want to add :"))

#         for i in range(num):
#             li.append(int(input("Enter the value :")))
#     elif choice==2:
#         print(li)
#     elif choice==3:
#         ind = int(input("Enter the index to delete : "))
#         li.pop(ind)
#     elif choice==4:
#         ind = int(input("Enter the index to update : "))
#         val = int(input("Enter the value :"))

#         li[ind] = val


# t = (23,"sumit",False)

# tt = (34,)

# del tt 
# print(t[1])

# for i in t:
#     print(i)

# s = set()
# print(type(s))

# fruits = {"apple","banana","graps","apple","graps"}

# print(fruits)

# student = {
#     "name" : "sumit",
#     "age": 23,
#     "height" : 5.4,
#     "subjects" : ["hindi","english"]
# }

# print(student["name"])
# print(student["subjects"][1])

# student["name"] = "Rahul" # update
# student["city"] = "rajkot" # create

# del student["city"] # delete

# print(student)

# for key,value in student.items():
#     print(key,"---",value)

# Type Casting Constructor

# list() tuple() set() dict() str()

# l = [23,23,45,67,98,45]

# t = tuple(l)
# t[0]=676 cause error

# s = set(l)

# sr = str(l)

# print(t)
# print(s)
# print(type(sr))

# d = dict(l)

# print(d)

# name = "Sumit"

# print(list(name))
# print(tuple(name))
# print(set(name))

# p = "He is a boy"

# l = p.split()

# s = " ".join(l)

# print(l)
# print(s)

# t = (34,45,678,45)

# print(list(t))
# print(set(t))

# s = {45,76,23,76}

# print(list(s))
# print(tuple(s))

# l = ["Name","Age","City"]
# v = ["Sumit",23,"Rajkot"]

# list of dict
# list of set
# list of tuple