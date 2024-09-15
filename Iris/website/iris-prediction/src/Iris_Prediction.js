
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import axios from 'axios';
import React, { useState } from 'react';

function IrisPrediction() {
    const [responseMessage, setResponseMessage] = useState('');
  
    const submitHandler = async (event) =>{
        event.preventDefault();
        const SepalLengthCm = event.target.SepalLengthCm.value;
        const SepalWidthCm = event.target.SepalWidthCm.value;
        const PetalLengthCm = event.target.PetalLengthCm.value;
        const PetalWidthCm = event.target.PetalWidthCm.value;
        // console.log(SepalLengthCm);
        let headers = {
            headers:{
            'Content-Type': 'application/json',
            'accept': 'application/json'
            }
          };
        var data = {
            SepalLengthCm: SepalLengthCm,
            SepalWidthCm: SepalWidthCm,
            PetalLengthCm: PetalLengthCm,
            PetalWidthCm: PetalWidthCm
        };
        await axios.post('http://127.0.0.1:8080/predict', data, headers)
        
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
          setResponseMessage(res.data.prediction)
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })

    }

    return(
        <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="card text-center col-md-4 mt-3 col-sm-10 p-0">
            <div class="card-header p-2 pt-4">
                <h1>Iris Prediction</h1>
            </div>
            <div class="card-body">
                <div class="container">
                    <form onSubmit={submitHandler} method="POST">
                        <div class="form-group row">
                            <label for="inputName" class="col-sm-1-12 col-form-label">Sepal Length Cm</label>
                            <div class="col-sm-1-12">
                                <input type="text" class="form-control" name="SepalLengthCm" id="SepalLengthCm" placeholder=""/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputName" class="col-sm-1-12 col-form-label">Sepal Width Cm</label>
                            <div class="col-sm-1-12">
                                <input type="text" class="form-control" name="SepalWidthCm" id="SepalWidthCm" placeholder=""/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputName" class="col-sm-1-12 col-form-label">PetalLengthCm</label>
                            <div class="col-sm-1-12">
                                <input type="text" class="form-control" name="PetalLengthCm" id="PetalLengthCm" placeholder=""/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputName" class="col-sm-1-12 col-form-label">Petal Width Cm</label>
                            <div class="col-sm-1-12">
                                <input type="text" class="form-control" name="PetalWidthCm" id="PetalWidthCm" placeholder=""/>
                            </div>
                        </div>
                        <br></br>
                        <div class="form-group row ">
                            <div class=" col-md-12 text-center">
                            <button type="submit" class="btn btn-primary">Predict</button>
                            </div>
                        </div>
                    </form>
                    <br></br>
                    <div class="alert alert-success" role="alert">
                        <strong>{responseMessage}</strong>
                    </div>
                </div>
  
            </div>
            <div class="card-footer text-muted">developed by: Ridoy Khan
            </div>
          </div>
  
        </div>
      </div>
    )

}
export default IrisPrediction;