# while => When we don't know how many times it will run
# for => When we know how many times it will run

# range() => this decide the range of loop exp. from 1 to 10. Range always starts from 0 and exclude the
# last digit

# num = int(input("Enter a number to print it's table : "))

# for i in range(1,num):
#     print(f" {i} x {i} x {i} = {i*i*i}")

# a=10

# while a<20:
#     if a == 15 :
#         break
#     print(a)
#     a = a+ 1


# while True:
#     print("Welcome to our cafe\n")

#     print("Enter 1 for pizza")
#     print("Enter 2 for burger")
#     print("Enter 3 for sandwich")
#     print("Enter 4 for cold drink")
#     print("Enter 0 for exit")

#     num = int(input("enter a number : "))
    
#     if num ==1:
#         print("You ordered a pizza \n \n")
#     elif num ==2:
#         print("You ordered a burger \n \n")
#     elif num ==3:
#         print("You ordered a sandwich \n \n")
#     elif num ==4:
#         print("You ordered a cold drink \n \n")
#     elif num ==0:
#         print("Thank you for visiting \n \n")
#         break
#     else:
#         print("You entered wrong number")



# sum = 0

# while True:
#     num = int(input("enter num :"))
#     print("\n\n\nEnter 0 to show result\n\n")
#     sum+=num
#     if num==0:
#         print(sum)
#         break


# *
# **
# ***
# ****
# *****


# ******
# *****
# ****
# ***
# **
# *

# 1
# 12
# 123
# 1234
# 12345

# for i in range(0,6):
#     print("& "*i)

# for i in range(6,0,-1):
#     print("* "*i)

# for i in range(1,6):
#     print(str(i)*i)



# for i in range(1,6):
#     for j in range(1,i):
#         print(j,end=" ")
#     print("\n")

while True:
    print("Welcome to patter library\n")

    print("press 1 for star pattern")
    print("press 2 for number pattern")
    print("press 3 for other pattern")

    choice = int(input("Enter your choice : "))

    if choice==1:
        for i in range(0,6):
            print("& "*i)
    elif choice==2:
        for i in range(1,6):
            for j in range(1,i):
                print(j,end=" ")
            print("\n")
    elif choice==3:
        for i in range(1,6):
            print(str(i)*i)
        

