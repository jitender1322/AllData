# list of dict

# students = []


# while True:
#     print("\nWelcome to our programme ! \n")

#     print("Enter 1 to add student")
#     print("Enter 2 to view students")
#     print("Enter 3 to remove student")
#     print("Enter 4 to update student")
#     print("Enter 5 to view subject offred \n")

#     choice = int(input("Enter your choice :"))

#     if choice==1:
#         id = int(input("\nEnter student id :"))
#         name = input("Enter student name :")
#         subject = input("Enter subjects(comma seperated) :")

#         student = {
#             "id": id,
#             "name" : name,
#             "subjects" : subject
#         }

#         students.append(student)

#         print("\nStudent Added Successfully !")
    
#     elif choice==2:
#         for student in students:
#             print(f"\nID : {student["id"]} || NAME : {student["name"]} || SUBJECTS : {student["subjects"]}")
        
#     elif choice==3:
#         id = int(input("\nEnter student id :"))

#         for student in students:
#             if student["id"]==id:
#                 students.remove(student)
#                 print("\nStudent Deleted Successfully !")

#     elif choice==4:
#         id = int(input("\nEnter student id :"))
#         for student in students:
#             if student["id"]==id:
#                student["name"]=input("Enter the new name :")
#                student["subjects"]=input("Enter the new subjects (comma seperated) :")

#                print("\nStudent updated successfully!")

#     elif choice==5:
#         id = int(input("\nEnter student id :"))
#         for student in students:
#             if student["id"]==id:
#                 print(f"\nID : {student["id"]} || NAME : {student["name"]} || SUBJECTS : {student["subjects"]}")
