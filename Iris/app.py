import uvicorn 
from fastapi import FastAPI
from IrisNode import IrisNode
import numpy as np
import pickle
import pandas as pd
import joblib
app = FastAPI()
# pickle_in = open("model.pkl","rb")
# classifier = pickle.load(pickle_in)
pradict = joblib.load('model.pkl')
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post('/predict')
def predict_iris(data:IrisNode):
    data = data.dict()
    print(data)
    SepalLengthCm = data['SepalLengthCm']
    SepalWidthCm = data['SepalWidthCm']
    PetalLengthCm = data['PetalLengthCm']
    PetalWidthCm = data['PetalWidthCm']
    prediction = pradict.predict([[SepalLengthCm,SepalWidthCm,PetalLengthCm,PetalWidthCm]])
    if(prediction == [0]):
        prediction = "The Data is Setoca"
    elif(prediction == [1]):
        prediction = "The Data is Versicolor"
    elif(prediction == [2]):
        prediction = "The Data is Virginica"
    return{
        'prediction': prediction 
    }


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8080)