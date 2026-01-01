# I/O Functions

# print(23)

# print(34+34)

# print('rahul')
# print("sumit")

# print("Hello there is ",34,"kjdfhksjd")


# input("Enter your name : ")

# print("hello")

# Variable -> This is a container used to store some value.


# a = 46
# b = 10

# print(a + b)
# print(a - b)
# print(a * b)

# name = input("Enter your name :")
# lastName = input("Enter your last name :")

# print("The student full name is ",name,lastName)
# print("The student full name is ",name+" "+lastName)

# num1 = input("Enter the num one : ")
# num2 = input("Enter the num two : ")

# print(num1+num2)

# Data Types

# Primitive -> integer ->23,23,43,65 float-> 34.4 56.6 
# boolean-> True False string -> Text '' "" || Collection

# num = 34
# text = 'rahul'
# text2 = "sumit"
# point = 34.4
# choice = True
# choice2 = False

# type() ->  used to check type of data.

# print(type(num))
# print(type(text))
# print(type(text2))
# print(type(point))
# print(type(choice))
# print(type(choice2))

# Type Casting Consutructor

# int() str()  bool() float()


# num = int(input("Enter a number :"))
# num2 = int(input("Enter a number :"))

# print(type(num))
# print(num+num2)

# print(int(34.2))
# print(int(34.9))

# print(int(True))
# print(int(False))

# print(float(34))
# print(float("asd"))

# print(True)
# print(False)

# print(str(34))
# print(str(34.5))
# print(str(True))
# print(str(False))

# Truthy Falsy values

# print(bool(12))
# print(bool(23))
# print(bool(1))
# print(bool(0))
# print(bool(-343))
# print(bool(""))
# print(bool("sjdfj"))
# print(bool(34.5))


# a = 34

# print(id(a))

# print("Name :",a,"Type",type(a),"Memory address : ",id(a))

# print("Welcome")

# print()

# print("hello")

'''

sdsd
asdasd
asdas
asdasd
asdasd
'''

"""
sdfs
sdsad
asdasd

"""

# if 10>5:
#     print("Yes this is true")
#     print("Yes this is true")
#     print("Yes this is true")
#     print("Yes this is true")
#     print("Yes this is true")
#     print("Yes this is true")
#     print("Yes this is true")
# else:
#     print("This is wrong")


# print(2+3)

# a = int(input("Enter the num one :"))
# b = int(input("Enter the num two :"))

# if a>b:
#     print("The num one is big")
# else:
#     print("The num two is big")


# print("Welcome to our cafe !")
# print()

# print("Enter 1 to order pizza")
# print("Enter 2 to order burger")
# print("Enter 3 to order colddrink")

# choice = int(input("Enter your choice : "))


# if choice==1:
#     print("you ordered a pizza")
# elif choice==2:
#     print("you ordered a burger")
# elif choice==3:
#     print("you ordered a cold drink")
# else:
#     print("Your choice is wrong")

# a = int(input("Enter a num :"))

# if a>10:
#     if a%2==0:
#         print("A is greater than 10 and an even number")
#     else:
#         print("A is greater than 10 and an odd number")
# else:
#     print("A is less than 10")



# a = int(input("Enter a num 1:"))
# b = int(input("Enter a num 2:"))
# c = int(input("Enter a num 3:"))

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

# num = 44

# result = "even" if num%2==0 else "odd"

# print(result)


# day = 2

# match day:
#     case 1:
#         print("Monday")
#     case 2:
#         print("Tue")
#     case _:
#         print("Invalid")



# for i in range(11):
#     print(i*2)

# for i in range(15,5,-1):
#     print(i)

# num = int(input("Enter a number to print table : "))


# for i in range(1,11):
#     print(num,"x",i,"=",num*i)


# start = int(input("Enter the start :"))
# end = int(input("Enter the start :"))


# for i in range(start,end+1):
#     if i%2==0:
#         print(i,"Even")
#     else :
#         print(i,"odd")


# i = 1

# while i<=10 :
#     print(i)
#     i+=1
#     i = i+1

# while 10<2:
#     print("Enter 0 to stop !")
#     choice = int(input("Enter a num (1-9) :"))
#     if choice==0 and choice>=10:
#         break



# 1
# 12
# 123
# 1234

# *
# * *
# * * *
# * * * *
# * * * * *


# for i in range(5,0,-1):
#     print(str(i)*i)

# 1 1 1 1 1 
# 2 2 2 2 2
# 3 3 3 3 3
# 4 4 4 4 4

# for i in range(5):
#     # print("* * * * * ")
#     print(str(i)*5)


# 1 
# 2 2 
# 3 3 3 
# 4 4 4 4 

# for i in range(1,6):
#     print(str(i)*i)

# 1
# 12
# 123
# 1234
# 12345

# for i in range(1,6):
#     for j in range(1,i):
#         print(j,end="")
#     print()


# while True: 
#     print("Enter 1 to order pizza")
#     print("Enter 2 to order burger")
#     print("Enter 0 to exit")

#     print()

#     choice = int(input("Enter your choice : "))

#     if choice==1:
#         while True:
#             print("Enter 1 to cheese pizaa")
#             print("Enter 2 to corn pizaa")
#             print("Enter 0 to exit !")

#             choice = int(input("Enter your choice :"))

#             if choice==1:
#                 print("Cheese Pizza")
#             elif choice==2:
#                 print("Corn Pizza")
#             elif choice==0:
#                 print("bye")
#                 break
#             else:
#                 print("invalid")

#     elif choice==2:
#         print("Burger")
#     elif choice==0:
#         print("Exiting !")
#         break
#     else:
#         print("invalid")

# iterable

# text = 'rahul'
# txt = "sumit"

# print("the name is ",text)

# print(f"the name is {txt} and {text}")

# three = text+txt

# multiline_string = '''This is a string
# that spans multiple lines.
# sdjsdflijsdiofsdfj'''

# print(multiline_string)

# print(text+"-"+txt)

# name = "sumit"
# age = 23

# print(name[0])
# print(name[1])
# print(name[2])

# for i in name:
#     print(i)



# print("the name is {} and the age is {}".format(name,age))

# print("This is print\n")
# print("\n\nThis\t is print\n\n\n\n")
# print("This is print")
# print("This is print")

txt = "Hello world !"

print(len(txt))

print(txt[-3])