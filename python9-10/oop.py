# class Car:

#     brandName = None
#     modelName = None

#     def greet(self):
#         print("Hello")


# obj = Car()
# obj.brandName="Toyota"

# obj2 = Car()
# obj2.brandName = "Tata"



# print(obj.brandName)
# print(obj2.brandName)

# obj.greet()


# class Person:
#     __name = None
#     __age = None
#     __city = None

#     def setter(self,name,age,city):
#         self.__name = name
#         self.__age = age
#         self.__city = city

#     def getter(self):
#        print(self.__name,self.__age,self.__city)


# obj = Person()

# obj.setter("Sumit",23,"Rajkot")
# obj.getter()


# obj2= Person()
# obj2.getter()


# obj.name = "sumit"

# print(obj.name)

# print(obj.__name) 
# print(obj.age) 

# class Person:
#     # Constructor
#     def __init__(self,name,age=45):
#         self.name = name
#         self.age = age

#     def getter(self):
#        print(self.name,self.age)
    
#     # Destructor
#     def __del__(self):
#         print("Finished")

# obj = Person("Sumit",23)
# obj2 = Person("Rahul",34)

# obj.getter()
# obj2.getter()



# class  Bank:

#     def __init__(self,name,accNum,balance):
#         self.name = name
#         self.accNum = accNum
#         self.balance = balance

#         print("Account Created !")

    
#     def getInfo(self):
#         print(f"Name : {self.name}, Account Number : {self.accNum}")
    
#     def getBalance(self):
#         print(f"The account balance is {self.balance}")

#     def deposite(self,amount):
#         self.balance += amount
#         print("Deposited !")

#     def withdraw(self,amount):
#         self.balance -= amount
#         print("Withdrawed !")

# obj = None

# while True:

#     print("Enter 1 to open account ")
#     print("Enter 2 to view account info")
#     print("Enter 3 to view account balance")
#     print("Enter 4 to view deposite")
#     print("Enter 5 to view withdraw")

#     choice = int(input("Enter your choice :"))

#     if choice==1:
#         obj = Bank("Sumit",123,2000)
#     elif choice==2:
#         obj.getInfo()
#     elif choice==3:
#         obj.getBalance()
#     elif choice==4:
#         obj.deposite(3000)
#     elif choice==5:
#         obj.withdraw(2000)


# class Animal:

#     breed = "Dog"
#     color = "Black"

#     def speak(self):
#         print("Speaking")

    
# class Pitbull(Animal):
#     pass



# obj = Pitbull()

# obj.speak()


# class A:
#     def greetA(self):
#         print("A is greeting")

# class B(A):
#     def greetB(self):
#         print("B is greeting")

# class C(A):
#     def greetC(self):
#         print("C is greeting")


# child = C()
# child2 = B()

# child.greetA()
# child.greetC()

# child2.greetA()
# child2.greetB()


# class Person:
#     def __init__(self,name,age):
#         self.name = name
#         self.age = age

#     def getInfo(self):
#         print(self.name,self.age)


# class Student(Person):
#     def __init__(self,name,age,city="Rajkot"):
#         super().__init__(name,age)
#         self.city = city

#     def getInfo(self):
#         super().getInfo()    
#         print(self.city)

# obj = Student("Sumit",23,"Rajkot")
# obj.getInfo()


# class Student:
#     def __init__(self,marks):
#         self.marks = marks

#     def __add__(self,other):
#         return self.marks-other.marks
    
#     def __sub__():
#         pass
    

# obj = Student(50)
# obj2 =Student(25)

# print(obj+obj2)
# print(obj.marks + obj2.marks)

# from abc import ABC,abstractmethod

# class Parent(ABC):
#     @abstractmethod
#     def greet(self):
#         pass


# class Child(Parent):
#     def greet(self):
#         print("Hello from child")

# obj = Child()

# obj.greet()



# li = [{},{},{}]

# [obj,obj]


# class Person:
#     def __init__(self,id,name,age):
#         self.id = id
#         self.name = name
#         self.age = age
    
#     def showInfo(self):
#         print(f"Name of person is {self.name} and age is {self.age}")

    
# obj = Person(1,"Sumit",23)
# obj2 = Person(2,"rahul",33)
# obj3 = Person(3,"vivek",43)

# AllPerson = [obj,obj2,obj3]

# stId = int(input("Enter student id to view : "))

# for obj in AllPerson:
#     if obj.id==stId:
#         obj.showInfo()


# class Car:
#     def __init__(self,brand,model):
#         self.brand = brand
#         self.model = model

#     def showCarInfo(self):
#         print(f"The Car brand is {self.brand} and model is {self.model}")


# class Mahindra(Car):
#     def __init__(self, brand, model,turbo):
#         super().__init__(brand, model)
#         self.turbo = turbo

#     def showCarInfo(self):
#         print(f"The Car brand is {self.brand} and model is {self.model} and turbo {self.turbo}")

# class Toyota(Car):
#     def __init__(self, brand, model,seats):
#         super().__init__(brand, model)
#         self.seats = seats

#     def showCarInfo(self):
#         print(f"The Car brand is {self.brand} and model is {self.model} and seat no. {self.seats}")


# print(dir(Toyota))



# bCars = []
# tCars = []
# mCars = []
        

# # while True:

#     print("\nEnter 1 to add Basic Car")
#     print("Enter 2 to add Mahindra Car")
#     print("Enter 3 to add Toyota Car")
#     print("Enter 4 to view Car info")
#     print("Enter 0 to exit\n")


#     choice = int(input("Enter your choice : "))

#     if choice==1:
#         brand = input("Enter the brand name : ")
#         model = input("Enter the model name : ")

#         bobj = Car(brand,model)

#         bCars.append(bobj)

#         print("\n Basic Car Added ! \n")
#     elif choice==2:
#         brand = input("Enter the brand name : ")
#         model = input("Enter the model name : ")
#         turbo = input("Is turbo available(yes/no) :")

#         mobj = Mahindra(brand,model,turbo)

#         mCars.append(mobj)

#         print("\n Mahindra Car Added ! \n")


#     elif choice==3:
#         brand = input("Enter the brand name : ")
#         model = input("Enter the model name : ")
#         seats = input("Enter the number of seats :")

#         tobj = Toyota(brand,model,seats)

#         tCars.append(tobj)

#         print("\n Toyota Car Added ! \n")

#     elif choice==4:
#         print("\nEnter 1 to view Basic Car")
#         print("Enter 2 to view Mahindra Car")
#         print("Enter 3 to view Toyota Car")

#         vChoice = int(input("Enter your choice :"))

#         if vChoice==1:
#             for bObj in bCars:
#                 bObj.showCarInfo()
#         elif vChoice==2:
#             for mObj in mCars:
#                 mobj.showCarInfo()
#         elif vChoice==3:
            
#             for tObj in tCars:
#                 tobj.showCarInfo()
#         else:
#             print("\nInvalid choice ! \n")
#     elif choice==0:
#         print("Exiting!")
#         break
#     else:
#         print("\nInvalid choice ! \n")