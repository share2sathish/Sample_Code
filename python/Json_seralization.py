# importing the module
import json

# JSON string
students = '{"id":"9607", "name": "Sunny", "department":"Computer"}'

# convert string to Python dict
student_dict = json.loads(students)
print(student_dict)

print(student_dict['name'])
print('Deserialization Completed.')


data = {
"id": "877",
"name": "Mayur",
"department": "Comp"
}
	
# Serializing json
json_object = json.dumps(data)
print(json_object)
print('Serialization Completed.')

