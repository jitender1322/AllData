class Employee:
    def __init__(self,emp_id,name,age,salary):
        self.emp_id = emp_id
        self.name = name
        self.age = age
        self.salary = salary

    def show(self):
        pass


class Manager(Employee):
    def __init__(self, emp_id, name, age, salary,department):
        super().__init__(emp_id, name, age, salary)
        self.department = department
    
    def show(self):
        pass


class Developer(Employee):
    def __init__(self, emp_id, name, age, salary, programming_lang):
        super().__init__(emp_id, name, age, salary)
        self.programming_lang = programming_lang
    
    def show(self):
        pass


emp = []
man= []
dev= []

