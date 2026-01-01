# file = open("demo.txt","r")

# content = file.read()
# print(content)

# file.close()

# file = open("demo.txt","w")

# file.write("Hello this is write")

# file.close()

# file = open("demo.txt","a")

# file.write("\n----------------------------")
# file.write("\n\tThis is append")

# file.close()

# file = open("crud.py","r")

# firstLine = file.readline()
# firstLines = file.readlines() #list 
# print(firstLine)
# print(firstLines)

# for line in firstLines:
#     print(line)


# file.close()

# with open("demo.txt","r") as file:
#     content = file.readline()
#     print(content)


# print("hello")
# print("hello")
# print("hello")

# try :
#     print(5/2)
# except FileNotFoundError:
#     print("Not divisble")
# else:
#     print("There is no error")
# finally:
#     print("all above executed")

# print("hello")
# print("hello")
# print("hello")

# a = 10

# if a<18:
#     raise Exception("The age is not valid")
# else:
#     print("all good")

# num = int(input("Enter a positive number: "))

# assert num > 0, "Number must be positive!"

# print("Valid number:", num)

class Custom(Exception):
    pass

files = []

a = 4

if a>2:
    raise Custom("This is custom error")