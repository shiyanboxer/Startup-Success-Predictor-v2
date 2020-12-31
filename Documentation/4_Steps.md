## **Steps**


### **Clean** {#clean}

The first step was to clean the dataset so it could be used by the model. This code can be found in the Clean folder of the repository. I made the following changes:



1. Create a new excel sheet that will have changes “after.xlsx”
2. Remove companies with blank cells in funding_total_usd, status, country_code, founded_year and remove total funding with NA
3. Make new column for company “success” (0 = “operating or “acquired” and 1 = “closed”)

Dependencies for this step include:



*   pandas
*   os
*   csv


##### **Before Investment CSV** {#before-investment-csv}



<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image11.png "image_tooltip")



##### **After Investment CSV** {#after-investment-csv}


### 

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image12.png "image_tooltip")



### 


### **Database** {#database}

[https://www.linode.com/docs/guides/build-database-clusters-with-mongodb/](https://www.linode.com/docs/guides/build-database-clusters-with-mongodb/)


### 


### **Model** {#model}

The model was built by doing the following:



1. Choose relevant columns
2. Get dummy data
3. Split training and testing data
4. Multiple linear regression
5. Tune model with GridsearchCV
6. Test ensembles

Dependencies for this step include:



*   pandas
*   os
*   numpy 
*   pickle
*   [sklearn train test split](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html)
*   [sklearn RandomForestRegressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)
*   [sklearn GridSearchCV](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
*   [sklearn mean_absolute_error](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_absolute_error.html)


##### **Choosing relevant columns** {#choosing-relevant-columns}



<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image13.png "image_tooltip")



##### **Training set** {#training-set}



<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image14.png "image_tooltip")



### **Cross Value Score** {#cross-value-score}

np.mean(cross_val_score(rf, X_train, y_train, scoring = 'neg_mean_absolute_error', cv= 3))

-0.09884320925159278

**Mean Absolute Error \
**I evaluated the model using Mean Absolute Error (MAE) which is easy to interpret and a good choice since outliers aren’t too bad for this type of model.


### **API** {#api}

In this step, I built a flask API endpoint that was hosted on a local webserver. 



1. **Pickle the model. **This converts the object into a byte stream which can be stored, transferred, and converted back to the original model at a later time. Pickles are one of the ways python lets you save just about any object out of the box.
2. **Build Flask API**


### **Deploy API** {#deploy-api}

I deployed the API to Heroku. 



1. Create an app “create startup-success-predictor-api”
2. Push app to heroku “git push heroku master”
3. Get link to send API requests [https://startup-success-predictor-api.herokuapp.com/](https://startup-success-predictor-api.herokuapp.com/)


### 


### **Frontend** {#frontend}

I created a simple website using react



1. Make request to API curl -X GET https://flask-ml-api-123.herokuapp.com/predict -H “Content-Type: application/json” -d '{"input”:”9"}'
2. Deploy website to Netlify


### 


### **Testing** {#testing}
