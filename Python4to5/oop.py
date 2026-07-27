# Encapsulation


# class Student:
#     __name = "sumit"
#     __city = "rajkot"

#     def greet(self):
#         print(f"hello {self.__name}")


# obj = Student()

# obj.greet()

# obj.name = "vivek"

# print(obj.name)
# print(obj.city)


# class Person:
#     __name = None
#     __age = None

#     def setData(self,name,age):
#         self.__name = name
#         self.__age = age

#     def getData(self):
#         print(f"Name : {self.__name} Age : {self.__age}")


# one = Person()
# two = Person()

# one.setData("Sumit",23)
# two.setData("Vivek",43)

# one.getData()
# two.getData()

# del one


# class Student:
#     def __init__(self,name,age,city):
#         self.__name = name
#         self.__age = age
#         self.__city = city

#     def getData(self):
#         print(f"Name : {self.name} Age :{self.age} City : {self.city}")      

#     def __del__(self):
#         print("all work done") 

   
# obj = Student("Sumit",23,"Rajkot")
# obj2 = Student("Vivek",45,"Amreli")

# # obj.getData()

# print(obj.name)


# class Bank:
#     def __init__(self,name,ac_num,balance):
#         self.name = name
#         self.ac_num = ac_num
#         self.balance = balance

#         print("\nAccount created successfully !\n\n")

#     def deposite(self,amount):
#         self.balance += amount
#         print("\nDeposited successfully !\n")
    
#     def withdraw(self,amount):
#         self.balance -= amount
#         print("\n Withdrwal successfully !\n")

#     def getBalance(self):
#         print(f"\n Balance in your account is {self.balance}")


# obj = Bank("Sumit",123,1000)


# while True:
#     print("Enter 1 to deposite")
#     print("Enter 2 to withdraw")
#     print("Enter 3 to view balance")
#     print("Enter 0 to exit")

#     choice = int(input("Enter your choice : "))

#     match choice:
#         case 1:
#             am = int(input("Enter the amount to deposit :"))
#             obj.deposite(am)
#         case 2:
#             pass
#         case 3:
#             obj.getBalance()
#         case 0:
#             break
#         case _:
#             print("not valid")

# class Mother:
#     def grandGreet(self):
#         print("Greeting from Mother")  

# class Father:
#     name = "Sumit"
#     def greet(self):
#         print("Greeting from Father")


# class Child(Father,Mother):
#     pass

# class Child2(Father,Mother):
#     pass

# obj = Child()

# print(obj.name)

# obj.greet()
# obj.grandGreet()


# class Mahindra:
#     def __init__(self,seats,ac):
#         self.seats = seats
#         self.ac = ac

# class Xuv(Mahindra):
#     def __init__(self,seats,ac,specs):
#         super().__init__(seats,ac)
#         self.specs = specs

#     def getData(self):
#         print(f"Seats : {self.seats}  Ac : {self.ac}  Specs : {self.specs}")


# xuv300 = Xuv(5,True,"4x4")

# xuv300.getData()



# Employee-> empid name city ||  Manager -> department || Developer-> programming lang



# class parent:
#     def greet(self,name="sumit"):
#         print(f"Hello form parent {name}")


# class child(parent):
#     name = "sumit"
#     def greet(self):
#         print("hello from child")
    
    


# obj = parent()

# # print(isinstance(obj,child))
# print(issubclass(parent,child))

# obj.greet("tarun")

# print(dir(child))

class Employee:
    def __init__(self,empId,name,age,salary):
        self.empId = empId
        self.name = name
        self.age = age
        self.salary = salary

        print("\nEmployee Created\n")

    def getInfo(self):
        print(f"\nEmployee Id : {self.empId}, Name : {self.name}, Age : {self.age}, Salary : {self.salary}\n")


class Manager(Employee):
    def __init__(self,empId,name,age,salary,department):
        super().__init__(empId,name,age,salary)
        self.department = department

        print("\n Manager Created\n")

    def getInfo(self):
        super().getInfo()
        print(f"The manager is from {self.department} ! \n")


class Developer(Employee):
    def __init__(self,empId,name,age,salary,programming):
        super().__init__(empId,name,age,salary)
        self.programming = programming

        print("\n Developer Created\n")

    def getInfo(self):
        super().getInfo()
        print(f"The Developer is expert of {self.programming} ! \n")



# e_list = []
# m_list = []
# d_list = []


# while True:

#     print("Enter 1 to employee")
#     print("Enter 2 to manager")
#     print("Enter 3 to developer\n")
#     print("Enter 4 to view\n")

#     choice = int(input("Enter choice :"))

#     match choice:
#         case 1:
#             id = len(e_list) + 1
#             eobj = Employee(id,"sumit",23,34000)
#             e_list.append(eobj)
#         case 2:
#             id = len(m_list) + 1
#             mobj = Manager(id,"sumit",23,34000,"hr")
#             m_list.append(mobj)
#         case 3:
#             id = len(d_list) + 1
#             dobj = Developer(id,"sumit",23,34000,"Java")
#             d_list.append(dobj)
#         case 4:
#             ch = int(input("Enter 1,2,3 respectively for em,mana,dev : "))

#             if ch==1:
#                 for e in e_list:
#                     e.getInfo()
#             elif ch==2:
#                 for m in m_list:
#                     m.getInfo()
#             elif ch==3:
#                 for d in d_list:
#                     d.getInfo()
#             else : 
#                 print("choice is wrong")
#         case _:
#             pass

    
# a = 10/0

# file = open("demo.txt","r")

# a = int("a")

# arr = [34,65]

# arr[3]

#try except else finally


# print("hello")
# print("hello")
# print("hello")

# try:
#     a= 10/0
# except ZeroDivisionError:
#     print("not valid")

# print("hello")
# print("hello")
# print("hello")

# try:
#     # choice = int(input("Enter your choice :"))
#     file = open("demo.txt")
# except ValueError:
#     print("Not valid")
# except FileNotFoundError:
#     print("Not valid")



# try:
#     a=10/2
# except ZeroDivisionError:
#     print("not valid")
# else:
#     print("no error")
# finally:
#     print("always")

# try:
#     a = 10/0
# except Exception:
#     print("not valid",Exception)


# age = int(input("Enter your age :"))

# print(age)
# print(age)
# print(age)
# assert age>18, "This is assert"
# print(age)
# print(age)
# print(age)
# if age<18:
#     raise Exception("not valid")


# class MyException(Exception):
#     pass
  
# raise MyException






