# set -> unordered , does not allow duplicates

# sett = {"apple","orange","graps","apple","graps"}
# sett = frozenset({"apple","orange","graps","apple","graps"})

# sett.add("banana")
# sett.remove("cherry")
# # sett.clear()
# # pop add remove discard union intesection 



# print(sett)



# Dict - orederd  mutable 

# key value

student = {
    "name" : "Rahul",
    "age" : 34,
    "city":"Rajkot",
    "married":False,
    "height" : 5.4
}

students = [
    {
    "name" : "Rahul",
    "age" : 34,
    "city":"Rajkot",
    "married":False,
    "height" : 5.4
},{
    "name" : "Rahul",
    "age" : 34,
    "city":"Rajkot",
    "married":False,
    "height" : 5.4
},{
    "name" : "Rahul",
    "age" : 34,
    "city":"Rajkot",
    "married":False,
    "height" : 5.4
},{
    "name" : "Rahul",
    "age" : 34,
    "city":"Rajkot",
    "married":False,
    "height" : 5.4
},{
    "name" : "Rahul",
    "age" : 34,
    "city":"Rajkot",
    "married":False,
    "height" : 5.4
},{
    "name" : "Rahul",
    "age" : 34,
    "city":"Rajkot",
    "married":False,
    "height" : 5.4
},{
    "name" : "Rahul",
    "age" : 34,
    "city":"Rajkot",
    "married":False,
    "height" : 5.4
}
]


student["state"] = "Gujrat" #add
 
student["age"] = 24  #update

del student["height"]  #delete

print(student.get("country","-"))  # return the default value if the key not exist


print(student)
# print(student)
# print(student["name"])

# for key in student:
#     print(key)

# for key,value in student.items():
#     print(key,"->",value)