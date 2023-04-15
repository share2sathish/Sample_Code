# importinig the module
import pickle

data = {'st_name': 'Sunny', 'st_id': '9607', 'st_add': 'Nasik'}
with open('data.pickle', 'wb') as  serialization:		

	# converts object to byte stream(list, dict, etc.)
	pickle.dump(data, serialization)	
	print('Pickling Completed...')

with open('data.pickle', 'rb') as deseralization :
	print('Unpickling the data : ')
	
	# converts byte stream(generated through pickling)back into object
	data = pickle.load(deseralization)
	print(data)
