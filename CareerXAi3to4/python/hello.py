students = []


while True :
    print("Welcome user ! \n")

    print("Enter 1 to Add Student")
    print("Enter 2 to view Student")
    print("Enter 3 to delete Student")
    print("Enter 4 to update Student")
    print("Enter 0 to exit\n")


    choice = int(input("Enter your choice :"))

    if choice == 1:
        student = {
            "id" : int(input("Enter student id :")),
            "name" : input("Enter student name : "),
            "age" : int(input("Enter student age :"))
        }
        students.append(student)

        print("\nStudent added successfully ! \n")
    
    elif choice==2:
        for student in students:
            print(f"\nId : {student["id"]} || Name : {student["name"]} || Age : {student["age"]}\n" )

    elif choice==3:
        id = int(input("Enter student id : "))

        for student in students:
            if student["id"] == id :
                students.remove(student)
        
        print("\nDeleted successfully !\n")
    
    elif choice == 4:
        id = int(input("Enter student id : "))
        for student in students:
            if student["id"] == id :
               student["name"] = input("Enter student name :")
               student["age"] = input("Enter student age :")
        print("student updated successfully !")

        

            


