## **Software Architecture**
The program connects to the MongoDB database. When the user inputs criteria into the frontend, it sends a GET request to the Flask API. The model is wrapped in the 

### **UML Diagram**

![alt_text](images/image1.png "image_tooltip")

### **Control Flow Diagram**

![alt_text](images/image1.png "image_tooltip")

### **Database Schema**

![alt_text](images/image1.png "image_tooltip")

### **API Input and Output**
The user inputs total funding, founding year, and country and receives an output of 0 or 1. 

![alt_text](images/image1.png "image_tooltip")

### **Productionizing the Model with Flask and Heroku** 
In this step, I built a flask API endpoint that was hosted on a local webserver by following along with the [TDS tutorial](https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2) (Diagram by [Medium](https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2)).

![alt_text](images/image1.png "image_tooltip")

### **GUI Interface Sketch**
This is a rough sketch of the frontend. 

![alt_text](images/image1.png "image_tooltip")