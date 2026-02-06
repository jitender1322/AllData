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


class Person:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def getInfo(self):
        print(self.name,self.age)


class Student(Person):
    def __init__(self,name,age,city):
        super().__init__(name,age)
        self.city = city

    def getInfo(self):
        super().getInfo()    
        print(self.city)

obj = Student("Sumit",23,"Rajkot")
obj.getInfo()