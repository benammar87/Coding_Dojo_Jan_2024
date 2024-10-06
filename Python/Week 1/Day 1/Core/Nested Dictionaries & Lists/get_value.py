students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(key_name,some_list):
    for dictionary in some_list:
        if key_name in dictionary:
           print(dictionary[key_name])
    
iterateDictionary('first_name', students)
print("=" *50)
iterateDictionary('last_name', students)