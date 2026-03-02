# file = open("readme.txt","a")

# file.write("Hello this is file\n")
# file.write("Hello this is \tfile")
# file.write("Hello this is file")

# file.close()

# content = file.read()
# content = file.readline()
# content = file.readlines()

# print(content[6])

# for line in content:
#     print(line)


# try:
#     with open("read.txt","r") as file:
#         pass
#         # content = file.read()
#         # print(content)
# except FileNotFoundError:
#     print("File not available")

# try:
#     a = 10/0
# except Exception:
#     print("Not possible")


# print("hello")

# try:
#     a = int(input("Enter your choice :"))
# except ValueError:
#     print("Invalid input")
# else:
#     print("No error")
# finally:
#     print("Bye")


# age = int(input("Enter your age: "))

# if age < 18:
#     raise Exception("You must be at least 18 years old.")
# else:
#     print("Access granted!")



# assert age>25, "not valid"


# print("hello")



# class MyCustomError(Exception):
#     pass


# age = int(input("Enter your age: "))

# if age < 18:
#     raise MyCustomError("You must be at least 18 years old.")
# else:
#     print("Access granted!")


# try:
#     file = open("read.txt","r")
# except FileNotFoundError

# a = "This is a checkpoint"

# if "checkpoint" in a:
#     print("yes")
# else:
#     print("no")


file = open("readme.txt","r")

content = file.readlines()

for line in content:
    keyword = "Productive"

    if keyword in line:
        print(line)