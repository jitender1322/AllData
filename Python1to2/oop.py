# class Car:
#     __name = None
#     __brand = None

#     def setData(self,name,brand):
#         self.__name = name
#         self.__brand= brand

#     def getData(self):
#         print(f"The name is f {self.__name} and brand is {self.__brand}")
    


# obj = Car()
# obj2 = Car()


# obj.setData("XUV","Mahindra")
# obj2.setData("BMW","BMW")

# # print(obj.brand)
# obj.getData()
# obj2.getData()


# class Student:
#     name = None

#     def setData(self,name):
#         self.name = name

#     def getData(self):
#         print(f"The name is {self.name}")


# st1 = Student()
# st2= Student()

# st1.setData("ayush")
# st2.setData("kishan")



# class Student:

#     def __init__(self,name,age):
#         self.name = name
#         self.age = age

#     def greet(self):
#         print(f"the name of student is {self.name} and age is {self.age}")

#     def __del__(self):
#         print("The work is over")


# st1 = Student("sumit",34)
# st2 = Student("Rahul",23)

# st1.greet()
# st2.greet()

# class Bank:
#     def __init__(self,AcHolderName,AcNo,Balance):
#         pass

#     def withdraw(self,amount):
#        pass 

#     def deposit(self,amount):
#        pass 

#     def checkBalance(self):
#        pass 


# class Animal:
#     ty = "4 legs"
#     def speak(self,a):
#         print("Animal voice")


# class Dog(Animal):
#     pass


# obj = Dog()

# print(obj.ty)
# obj.speak()


# class Parent1:
#     def method1(self):
#          print("Method from Parent1")

# class Parent2:
#     def method2(self):
#         print("Method from Parent2") 

# class Child(Parent1, Parent2):
#     def child_method(self):
#         print("Method from Child")

# c = Child()


# c.method1()
# c.method2()
# c.child_method()


# Calling parent constructor in child class

# class Parent:
#     def __init__(self):
#         print("Hello")


# class Child(Parent):
#     def __init__(self):
#         print("Hello from child")
#         super().__init__()



# obj =Child()


class Car:
    def __init__(self,seat,tyre):
        self.seat = seat
        self.tyre = tyre


class Toyota(Car):
    def __init__(self, seat, tyre,ac):
        self.ac = ac
        super().__init__(seat, tyre)

    def getData(self):
        print(f"the features are Seat => {self.seat}, Tyre => {self.tyre}, Ac=> {self.ac}")
    

class Mahindra(Car):
    def __init__(self, seat, tyre,superSuspension):
        self.superSuspension = superSuspension
        super().__init__(seat, tyre)

    def getData(self):
               print(f"the features are Seat => {self.seat}, Tyre => {self.tyre}, Super Suspension=> {self.superSuspension}")

    # def updateData(self,seat,tyre,ss):
    #      self.seat = seat




# obj = Toyota(3,3,"n")

# print(obj.tyre)

# obj.seat=45

# toyotaCars = []
# mahindraCars = []


# while True:
     
#     print("\nWelcome !\n")

#     print("Enter 1 to add Toyota car ")
#     print("Enter 2 to add Mahindra car ")
#     print("Enter 3 to view cars")
#     print("Enter 0 to exit\n")


#     choice = int(input("Enter your choice :"))

#     if choice==1:
#          seat = int(input("Enter the number of seats : "))
#          tyre = int(input("Enter the number of tyres : "))
#          ac = input("Enter the availbility of ac (y/n) : ")

#          tobj = Toyota(seat,tyre,ac)

#          toyotaCars.append(tobj)
#     elif choice==2:
#          seat = int(input("Enter the number of seats : "))
#          tyre = int(input("Enter the number of tyres : "))
#          ss = input("Enter the availbility of super suspension (y/n) : ")

#          mobj = Toyota(seat,tyre,ss)

#          mahindraCars.append(mobj)
#     elif choice==3:
#          print("Enter 1 to show toyota cars")
#          print("Enter 2 to show mahindra cars")

#          ch = int(input("Enter your choice : "))

#          if ch==1:
#               for obj in toyotaCars:
#                    obj.getData()
#          elif ch==2:
#               for obj in mahindraCars:
#                    obj.getData()
#          else:
#               print("Choice is wrong")
#     elif choice==0:
#          print("exiting")
#          break
#     else:
#          print("Choice is wrong")
         

# class Animal:
#      def speak(self):
#           print("animal speaking")
          
# class dog(Animal):
#      def speak(self):
#           print("animal speaking")



class Person:
    def __init__(self,name,age,city,pl):
          self.__name = name
          self.__age = age
          self.__city = city
          self.programmingLang = pl


    def getData(self):
         print(f"Name : {self.__name}, Age  : {self.__age}, City : {self.__city}")

    
obj = Person("kishan",23,"Rajkot","Python")

# obj.name = "ayush"

# print(obj.name)
# print(obj.age)
# print(obj.city)

obj.getData()
          
    