# 2. **Background Knowledge**

## Dataset
The [Crunchbase dataset](https://www.kaggle.com/arindam235/startup-investments-crunchbase/data) consists of 39 categories with 5000 companies recorded up until 2015. "Founding year" and "Total funding" were chosen as the X coordinates (input parameters) and "Success" was chosen as the Y coordinate (prediction). Data were split up into 80% training and 20% testing.

## Model
This project uses linear regression to predict success. Linear regression attempts to model the relationship between two variables by fitting a linear equation to observed data. One variable is considered to be an explanatory variable, and the other is considered to be a dependent variable [(Resource)](http://www.stat.yale.edu/Courses/1997-98/101/linreg.htm).

![Linear Regression](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/LinReg.png)

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

## REST API

An API is an application programming interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.

REST determines how the API looks like. It stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their API. One of these rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL [(Resource)](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

![REST API](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/what_is_rest_api.png)
