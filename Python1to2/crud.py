# list of dicts

# students = [
#     {"name":"sumit","age":23},
#     {"name":"rahul","age":21},
#     {"name":"vivek","age":25},
#     {"name":"herit","age":19}
# ]

# # print(students[2]["name"])

# students[2]["age"] = 35

# students.remove(students[2])

# for st in students:
#     print(st["name"],"---",st["age"])


students = []

while True:

    print("\nWelcome to our programme !\n")

    print("1. Add")
    print("2. Read")
    print("3. Delete")
    print("4. Update")
    print("0. Exit\n")

    choice = int(input("Enter your choice : "))

    if choice==1:
        st = {
            "stId":int(input("Enter Student Id : ")),
            "name":input("Enter Student Name : "),
            "city": input("Enter Student City :")
        }
        students.append(st)

        print("\nStudent added Successfully ! \n")
    elif choice==2:

        if(len(students)<=0):
            print("List is empty")

        for st in students:
            # print(f"Student Id : {st['stId']} , Student Name : {st['name']},Student City : {st['city']}")
            print("name : ",st["name"],"City :" ,st["city"] )

    elif choice==3:
        stId = int(input("Enter student id to remove :"))
        for st in students:
            if st["stId"] == stId:
                students.remove(st)
                print("Student removed ! \n")
    elif choice==4:
        stId = int(input("Enter student id to update :"))
        for st in students:
            if st["stId"] == stId:
                st["name"] = input("Enter the new name :")
                st["city"] = input("Enter the new city : ")
                print("Student updated ! \n")
    elif choice==0:
        print("Exiting")
        break
    else:
        print("Invalid")