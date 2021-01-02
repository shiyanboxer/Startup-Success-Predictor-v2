## **Software Architecture**

### **UML Diagram**

![alt_text](images/image1.png "image_tooltip")

### **Control Flow Diagram**

![alt_text](images/image1.png "image_tooltip")

### Input and Output

The user inputs total funding and founding year and receives an output of 0 or 1. 

![Input and Output](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/InOut.jpg)

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

### Ineraction between Client and API

![Ineraction between Client and API](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/Software%20Architecture.png)

### Pickling

![Picking](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/python_pickle.png)

### Productionizing the Model with Flask and Heroku

![Productionizing the Model with Flask and Heroku](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/Software%20Architecture.png)

### Website Sketch

This is a rough sketch of the frontend. 

![Website Sketch](https://github.com/shiyanboxer/Startup-Success-Predictor-v2/blob/master/Images/WebsiteSketch.jpg)
