students=[]

while True:
    print("Welcome to our Program\n")

    print("Enter 1 to Add Student :")
    print("Enter 2 to Display All Students :")
    print("Enter 3 to Update Student Information :")
    print("Enter 4 to Delete Student :")
    print("Enter 5 to Display Subjects offered :")
    print("Enter 6 to Exit :")

    choice=int(input("Enter your choice :"))

    if choice==1:
        print("\nEnter Student Details :")
        student={
            "id":int(input("Student ID :")),
            "name":input("Name :"),
            "age":int(input("Age :")),
            "grade":input("Grade :"),
            "dob":input("Date of Birth (YYYY-MM-DD) :"),
            "sub":input("Subjects (Comma-Seprated) :")
        }

        students.append(student)

        print("\nStudent Add Successfully!\n")

    elif choice==2:
        print("\n---Display All Students ---\n")
        for st in students:
            print(f"Student ID: {st["id"]} | Name: {st["name"]} | Age: {st["age"]} | Grade: {st["grade"]} | Subjects: {st["sub"]}")

    elif choice==3:
        stid=int(input("Enter Update ID :"))
        for st in students:
            if st["id"]==stid:
                st["name"]=input("Enter New Name :")
                st["age"]=int(input("Enter New Age :"))
                st["grade"]=input("Enter New Grade :")
                st["dob"]=input("Enter New Date of Birth (YYYY-MM-DD) :")
                st["sub"]=input("Enter New Subject :")
        
        print("\nStudent Data Update Successfully !\n")

    elif choice==4:
        stid=int(input("Enter Delecte ID :"))
        for st in students:
            if st["id"]==stid:
                students.remove(st)
        
        print("\nStudent Delect Successfully\n")

    elif choice==5:
        print("---Display All Subjects ---\n")
        for st in students:
            print(f"Subjects: {st["sub"]}")

    elif choice==6:
        print("Thank You !")
        break

    else:
        print("Enter Only 1 To 6 ")