# 2. Background Knowledge

## Dataset
The [Crunchbase dataset](https://www.kaggle.com/arindam235/startup-investments-crunchbase/data) consists of 39 categories with 5000 companies recorded up until 2015. "Foudning year" and "Total funding" were chosen as the X coordinates (input parameters) and "Success" was chosen as the Y coordinate (prediction). Data was split up into 80% training and 20% testing. 

## Model
This project uses linear regression to predict the success. Linear regression attempts to model the relationship between two variables by fitting a linear equation to observed data. One variable is considered to be an explanatory variable, and the other is considered to be a dependent variable [Yale Ed](http://www.stat.yale.edu/Courses/1997-98/101/linreg.htm).

### Testing the Accuracy of the Model

**Method 1: Using a built in libary**

```
from sklearn.metrics import accuracy_score
accuracy_score(y_test, np.around(model.predict(X_test),0))
0.9437570303712036
```

**Method 1: Manually calculating using X_test and y_test**
```
predictions = model.predict(X_test)
answer = list(np.around(predictions,0) == y_test)
acc = answer.count(True) / len(answer)
```

## API

### API Endpoint
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

![REST API](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/what_is_rest_api.png)

### Ineraction between Client and API

![Ineraction between Client and API](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/Software%20Architecture.png)

### Input and Output

![Input and Output](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/InOut.jpg)

### Pickling

![Picking](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/python_pickle.png)
