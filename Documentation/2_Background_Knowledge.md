# 2. Background Knowledge

## Model
This project uses a classification model, specifically random forest. It puts data in categories based on what it learns from historical data. Classification models are best to answer yes or no questions, providing broad analysis that’s helpful for guiding decisive action [(types of models).](https://www.logianalytics.com/predictive-analytics/predictive-algorithms-and-models/) Will this startup be successful (operating or acquired)? 

The dataset was split up into 80% training and 20% testing. 

### Linear Regression
I evaluated the model using Mean Absolute Error (MAE) which is easy to interpret and a good choice since outliers aren’t too bad for this type of model.

[Linear Regression](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/LinearReg.png)

### Dataset
The [Crunchbase](https://www.kaggle.com/arindam235/startup-investments-crunchbase/data) dataset consists of 39 categories with 5000 companies recorded up until 2015

## API

### API Endpoint
![Input and Output](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/InOut.jpg)

GET https://startup-success-predictor-api.herokuapp.com/

FUNCTION: hello

EXAMPLE RESPONSE

```
{
    "hello world"
}
```

POST https://startup-success-predictor-api.herokuapp.com/predict

FUNCTION: predict

EXAMPLE RESPONSE

```
{
    "response":"0.9108394" 
}
```

### REST API

![REST API]()

### Pickling

![Picking]()


