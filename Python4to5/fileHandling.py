# file = open("oop.py","r");

# content = file.read() all content
# con = file.readline() first line
# con = file.readlines() all lines in a list

# file.close()

# print(con)

# file = open("demoo.txt","x")

# file.write("\nThis is new line appended\n")

# file.write("-----------------------------\n")
# file.write("-----------------------------\n")
# file.write("Hello Python\n")
# file.write("Hello Python\n")
# file.write("Hello Python\n\n\n\n")
# file.write('''
# THERE IS A LION 
# IN THE FOREST.''')
# file.write("-----------------------------\n")
# file.write("-----------------------------\n")

# file.close()


def createFile(name):
    try:
      with open(name,"x") as file:
        print("\nFile created successfully !\n")
    except FileExistsError:
       print("\nFile already there ! \n")

def readFile(name):
    try:
       with open(name,"r") as file:
         content = file.read()
         print(content)
    except FileNotFoundError:
       print("\nFile not found ! \n")

def appendFile(name,data):
    try:
       with open(name,"a") as file:
         file.write("\n-------------------\n")
         file.write(data)
         file.write("\n-------------------\n")
    except FileNotFoundError:
       print("\nFile not found ! \n")

def clearFile(name):
    try:
       with open(name,"w") as file:
        pass
    except FileNotFoundError:
       print("\nFile not found ! \n")

def searchEntry(name,keyword):
    try:
       with open(name,"r") as file:
         li = file.readlines()
         for index,line in enumerate(li):
            if keyword in line:
                print(index)
                print(line)
    except FileNotFoundError:
       print("\nFile not found ! \n")


li = [
"Read mode (default)",
"Write mode (overwrites existing content)",
"Append mode (adds content without deleting existing data)",
"Create mode (creates a new file, gives error if file exists)",
"Binary mode (for non-text files like images)"]

for index,line in enumerate(li):
   if "error" in line:
        print(index)
        print(line)
    


