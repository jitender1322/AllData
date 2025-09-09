students = []


def add():
        id = int(input("\nEnter student id :"))
        name = input("Enter student name :")

        student = {
            "id" : id,
            "name" : name
        }

        students.append(student)

while True:
    print("Welcome to our program \n")

    print("Enter 1 to add student")
    print("Enter 2 to view student")
    print("Enter 3 to delete student")
    print("Enter 4 to update student")
    print("Enter 0 to exit \n\n")

    choice = int(input("Enter your choice : "))

    if choice == 1:
        add()
        print("\n\nStudent added successfully ! \n\n")
    
    elif choice==2:
        for student in students:
            print(f"Student Id : {student["id"]} || Student Name : {student["name"]} \n")
    
    elif choice==3:
        id = int(input("Enter the student id : "))

        for student in students:
            if student["id"] == id:
                students.remove(student)
            else:
                print("Student not found")

        print("\nStudent deleted successfully \n")

    elif choice==4:
        id = int(input("Enter the student id : "))

        for student in students:
            if student["id"] == id:
                name = input("Enter student name :")
                student["name"] = name

                print("Student updated successfully \n")
               
            else:
                print("Student not found")

    elif choice==0:
        print("Exited the code")
        break

