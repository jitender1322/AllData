# operator

# + - * / = 
#  < > <= >= ==

# bool("",0,False)  => false

# a = 0

# if bool(a):
#     print("hello")

# name = input("Enter your name")

# if bool(name):
#     print(f"Your name is {name}")
# else:
#     print("You not enterd your name")


# num1 = int(input("Enter the first number :"))
# num2 = int(input("Enter the second number :"))

# if num1 == num2:
#     print(f"The first number : {num1} and the second number : {num2} are eqaul")
# elif num1>num2:
#     print(f"The first number : {num1} is greater than num second : {num2}")
# else:
#     print(f"The second number : {num2} is greater than num first : {num1}")

# a = 35 b=45 c=34
# Nested ifelse

# a>b

# a = int(input("Enter the first number :"))
# b = int(input("Enter the second number :"))
# c = int(input("Enter the third number :"))

# if a>b:
#     if a>c:
#        print(" A is largest")
#     else:
#        print(" C is largest")
# else:
#     if b>c:
#         print("B is largest")
#     else:
#         print("C is largest")


age = int(input("Enter your age :"))
weight = float(input("Enter your weight(kg) :"))

if age>=18:
    if weight>=45:
        print("You can enjoy the ride")
    else:
        print("Sorry you are not allowed")
else:
    print("You are below the required age")





