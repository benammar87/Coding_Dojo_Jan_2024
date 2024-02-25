

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]


def iteratorDictionary(some_list):
    for student in some_list:
        print(f"first_name : {student["first_name"]} , last_name : {student["last_name"]}")

print(iteratorDictionary(students))

    

