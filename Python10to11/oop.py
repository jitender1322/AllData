# class Car:
#     name = None
#     model = None
#     authorizedby= "RTO/GTO"


# obj = Car()
# obj.name = "Toyota"
# obj.name = "Tata"
# obj.model = 2026

# obj2 = Car()
# obj2.name = "Mahindra"
# obj2.model = 2023


# print(obj.name)
# print(obj.model)
# print(obj.authorizedby)

# print(obj2.name)
# print(obj2.model)
# print(obj2.authorizedby)


# class Bank:
#     __accNum = None
#     __balance = None

#     def setData(self):
#         self.__accNum = int(input("Enter your acc num :"))
#         self.__balance = int(input("Enter your balance :"))

#     def getData(self):
#         print(f"Account Number : {self.__accNum} Balance : {self.__balance}")

# obj = Bank()
# obj.setData()
# obj.getData()

# obj2 = Bank()
# obj2.setData()
# obj2.getData()


class Person:

    def __init__(self,name,age,city="Rajkot"):
        self.__name = name
        self.age = age
        self.city = city
        self.state = None

        print("Obj is created !")

    def setState(self,state):
        self.state = state

    def getInfo(self):
        print(f"Name : {self.__name} Age : {self.age} City : {self.city}")

    def __del__(self):
        print("Task is over")


obj = Person("Rahul",23)
obj2 = Person("Sumit",21,"Amreli")


# print(obj.__name)

obj.getInfo()
obj2.getInfo()

