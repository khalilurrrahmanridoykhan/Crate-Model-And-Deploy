from sklearn.ensemble import RandomForestClassifier
from sklearn import datasets
import joblib
import numpy as np

iris = datasets.load_iris()
feature = iris.data
target = iris.target

classifer = RandomForestClassifier()
model =  classifer.fit(feature,target)
# print(target.shape)

joblib.dump(model, './model.pkl')
['./model.pkl']
pradict = joblib.load('model.pkl')
new_objervation = [[5.2, 2.7, 3.9, 1.4]]
# new_objervation = [[0,0,0,0]]
data = pradict.predict(new_objervation)
if data == [0]:
    print("The Data is Setoca")
elif data == [1]:
    print("The Data is Versicolor")
elif data == [2]:
    print("The Data is Virginica")
# print(data)