filedata = open("demo.txt","r")

# fileContent = filedata.read()
# print(fileContent)

# filedata.write("\nthis is write mode..\n")

# print(filedata.readline())
# print(filedata.readlines())

# record = filedata.readlines()

# for i,line in enumerate(record):
#     print(i,"----",line)

# filedata.close()


# with open("demo.txt","r") as file:
#     content = file.readlines()

#     for line in content:
#        if "55" in line:
#            print(line)

# try:
#     print(10/0)
# except ZeroDivisionError:
#     print("You are giving wrong input")
# except ValueError:
#     pass
# except TypeError:
#     pass

# try:
#     print(10/2)
# except Exception:
#     print("wrong")
# else:
#     print("There is no error")
# finally:
#     print("I'll run always")

# print(10)
# print(10)


# age = int(input("Enter your age :"))

# if age<18:
#     raise ValueError("Your given value is not valid")

# num = int(input("Enter a positive number: "))

# assert num > 0, "Number must be positive!"

# print("Valid number:", num)


# class CustomError(Exception):
#     def __init__(self):
#         print("This is custom class")


# age = int(input("Enter your age :"))

# if age<18:
#     raise CustomError("Your given value is not valid")



class FileData:
    def __init__(self):
        self.fileName = None
    def createFile(self):
        name = input("Enter file name :")
        self.fileName = f"{name}.txt"
        file = open(f"{name}.txt","x")
        file.close()

    def addEntry(self,entry):
        with open(self.fileName,"a") as file:
            file.write(entry)
    def viewEntries(self):
        pass
    def searchEntry(self):
        pass
    def DeleteEntries(self):
        pass


obj = FileData()

obj.createFile()