# OOP -> Object Oriented Programming

# Class -> blueprint
# Obj -> instance of class

# attributes   member function

# self -> this target to current obj


# class person:
#     def greet(self):
#         print("hello")


# obj = person()
# obj1 = person()
# obj2 = person()

# obj.greet()
# obj1.greet()
# obj2.greet()


# constructor -> used to initialize the basic attribute of and obj.
# runs imidietely after creating obj

# destructor -> when an obj finish its work or got deleted

class person:
    def __init__(self,id,name,age):
        self.id =id
        self.name =name
        self.age = age
        print("hello this is constructor")

    def greet(self):
        print(f"hello {self.name}")

    def update(self,id,name,age):
        self.id =id
        self.name =name
        self.age = age
    
    def __del__(self):
        print("Bye bye")

class child(person):

     def greet(self):
            super().__init__()


students = []

while True:
    print("1 add")
    print("2 view")
    print("3 delete")
    print("4 update")


    choice = int(input("enter your choice : "))

    if choice == 1:
        id = int(input("enter student id :"))
        name = input("enter student name :")
        age = int(input("enter student age :"))

        obj = person(id,name,age)

        students.append(obj)

        print("\n Student added successfully !\n")

    elif choice == 2:
        for student in students:
            student.greet()
    elif choice == 3:
        id = int(input("enter student id :"))
        for student in students:
            if student.id == id:
                students.remove(student)
    elif choice == 4:
            id = int(input("enter student id :"))
            for student in students:
                if student.id == id:
                    name = input("enter student name :")
                    age = int(input("enter student age :"))

                    student.update(id,name,age)
                   
