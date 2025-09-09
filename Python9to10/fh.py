# File(text based) Handling In Python

# read mode
# fileData = open("crud.py","r")

# data = fileData.read()
# print(fileData.read())

# fileData.close()

# Write Mode

# fileData = open("demo.txt","w")

# fileData.write("Hello this is file handling this is after write.")

# fileData.close()

# Append Mode

# name = "Rahul"

# fileData = open("demo.txt","w")

# fileData.write("\nhello")

# print(fileData.readline())
# print(fileData.read())

# fileData.write(f"\nThis is an another\n line ")
# fileData.write(f"\nThe name of writter is {name}")


# try:
#     filedata = open("demo.txt","r")
#     # result = "abc" + 34
# except FileNotFoundError:
#     print("the file is not existed")
# except FileExistsError:
#     print()
# except ValueError:
#     pass
# except SyntaxError:
#     pass
# except Exception:
#     pass
# else:
#     print("I found the file")
# finally:
#     print("This will always run")
#     filedata.close()

# print("hello")

# try except else finally



# print(1/0)

# try:
#     # print(12/2)
#     print(12/0)
# except ZeroDivisionError:
#     print("The number is not divisible")
# else:
#     print("the programme ran successfully")
# finally:
#     print("use to clean memory")


# print("hello")


# raise and assert

# a = int(input("Enter a num :"))
# b = int(input("Enter a num :"))

# assert a>0 and b>0, "both values must be greater than 0"


# if a<1:
#    raise ZeroDivisionError

# print(a/b)


# class MyError(Exception):
#     pass


# a = 15
# b = 15

# c = a+b

# if c>20:
#     raise MyError("the sum is greater than 20")



# filedata = open("crud.py","r")

# allLines = filedata.read()

# for line in allLines:
#     print(line)

keyword = "add()"
with open("crud.py","r") as fileData:
    for lineNum,line in enumerate(fileData) :
        if keyword in line:
            print("the number of line is ",lineNum,"---",line)