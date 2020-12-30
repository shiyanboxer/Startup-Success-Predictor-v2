# Startup-Success-Predictor-v2

By: Shiyan Boxer

Web App Link

[Heroku API Link](https://startup-success-predictor-api.herokuapp.com/)

[GitHub Link](https://github.com/shiyanboxer/Startup-Success-Predictor)

[Diagrams Link](https://drive.google.com/file/d/1b045bk2AsuREJoj_JI_nRwwf94sz22SE/view?usp=sharing)

### **Problem Definition**

Traditionally, venture capital is considered more of an art than a science. Venture capitalists meet with founders, perform due diligence, and try to make the most informed investment decision; however, due to the nature of early-stage companies, financial and traction metrics are often scarce.


### **Objectives**
With the influx and access to data in recent decades, venture capitalists have turned to machine learning and artificial intelligence to help guide them in their investment decisions and explore market trends. Typically these models are not meant to replace VCs but rather enable them to quantify opportunities and avoid bias as much as possible.

This web application leverages data science, machine learning, and business principles to predict the success of startups based on common characteristics. The goal is to ensure reliability, scalability, and ease of use. These goals are met by the following design choices:

**Reliability **
*   VCs are given accurate predictions. This is achieved by the calculateDistance() method in the Address class. It converts the longitude and latitude to radians and computes the distance between the user and the given location. 

**Scalability**
*   The technologies chosen for the web application enable the web app to be scalable.

**Ease of Use**
*   The user interface is intuitive to the user, eliminating any confusion. 


### **Target User & Use Case** {#target-user-&-use-case}

The target user for web application is a venture capitalist who is knowledgeable about the in question company and industry. This program would be used as an internal tool within the firm to help guide VCs on their investment decisions.


### **Scope** {#scope}

One of the first things I had to consider for this project was defining success. Based on my research and talking to fellow VCs in the industry, I choose “status” as the metric of success. which can either be "operating" or "acquired" which I deemed successful or "closed” which I deemed unsuccessful. For the first iteration, I looked at total funding, founding year, and country as the criteria that would determine success.

The program is an end to end solution consisting of five parts: 



1. **Clean - **cleans dataset before building the model
2. **Model **- predicts success 
3. **API **- allows requests to the model
4. **Database **- stores company data
5. **Frontend **- allows user to inputs criteria


### **Limitations** {#limitations}

The following is a list of limitations restrict the scope of the project:



*   Limited knowledge of machine learning models
*   Limited knowledge of venture capital
*   2 week time constraint
*   Only one developer
*   Limited learning resources / self taught
*   Limited budge (no money)


### **Assumptions** {#assumptions}

The following is a list of assumptions made about the web application:



*   The program is accessed only on desktop computers


### **Timeline** {#timeline}

**Notes**: Unit tests, integrations tests, debugging, and documentation were done throughout the development process.


##### **High level Gannt Chart** {#high-level-gannt-chart}



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")



##### **Task Breakdown by Day** {#task-breakdown-by-day}


<table>
  <tr>
   <td><strong>Day 1: Research & Outline</strong>
<ul>

<li>Research and compare existing solutions and models

<li>Define success and criteria

<li>Outline problem definition, objectives, target user & use case, scope, limitations, assumptions, timeline
</li>
</ul>
   </td>
   <td><strong>Day 8: Develop frontend</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Day 2: Plan & Diagrams</strong>
<ul>

<li>Research and compare technologies

<li>Create plan of execution and timeline

<li>Create software architecture, UML diagrams, GUI diagram,
</li>
</ul>
   </td>
   <td><strong>Day 9: Develop frontend</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Day 3: Clean dataset</strong>
   </td>
   <td><strong>Day 10: Unit Test, Integration Tests, & Debug</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Day 4: Develop database</strong>
   </td>
   <td><strong>Day 11: Unit Test, Integration Tests, & Debug</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Day 5: Develop model</strong>
   </td>
   <td><strong>Day 12: Deploy</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Day 6: Develop and train model</strong>
   </td>
   <td><strong>Day 13: Documentation</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Day 7: Productionize with API endpoint</strong>
<ul>

<li>
</li>
</ul>
   </td>
   <td><strong>Day 14: Documentation</strong>
<ul>

<li>Complete documentation
</li>
</ul>
   </td>
  </tr>
</table>



### 


### **Technologies** {#technologies}

The following technologies were carefully chosen to ensure the design goals listed above. Below is a comparison of popular frontend frameworks, database, model, and api technologies. I ultimately ended up using **React **to build the frontend, **MongoDB **to build the database, **Python** in **Jupyter Notebook **to build the model, and **Flask **to build the API. Additionally, I used the following modules: 



*   **CSV**
*   **Pandas **


##### **Frontend Framework** {#frontend-framework}


<table>
  <tr>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>Vue</strong>
   </td>
   <td><strong>React</strong>
   </td>
   <td><strong>Angular</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Usability</strong>
   </td>
   <td>
<ul>

<li>
</li>
</ul>
   </td>
   <td>
<ul>

<li>Good community support
</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Scalability</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



##### **Database** {#database}


<table>
  <tr>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>MongoDB</strong>
   </td>
   <td><strong>MySQL</strong>
   </td>
   <td><strong>Excel</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Usability</strong>
   </td>
   <td>
<ul>

<li>
</li>
</ul>
   </td>
   <td>
<ul>

<li>Good community support
</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Scalability</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



##### **Model** {#model}


<table>
  <tr>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>C</strong>
   </td>
   <td><strong>Python</strong>
   </td>
   <td><strong>Java</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Usability</strong>
   </td>
   <td>
<ul>

<li>
</li>
</ul>
   </td>
   <td>
<ul>

<li>Good community support

<li>requests

<li>Jupyter Notebook

<li>Pandas

<li>NumPy

<li>Sklearn

<li>Matplotlib
</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Scalability</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



##### **API** {#api}


<table>
  <tr>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>Django</strong>
   </td>
   <td><strong>Flask</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Usability</strong>
   </td>
   <td>
<ul>

<li>
</li>
</ul>
   </td>
   <td>
<ul>

<li>Pickle
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Scalability</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



### **Model** {#model}

This project uses a classification model, specifically random forest. It puts data in categories based on what it learns from historical data. Classification models are best to answer yes or no questions, providing broad analysis that’s helpful for guiding decisive action [(types of models).](https://www.logianalytics.com/predictive-analytics/predictive-algorithms-and-models/) Will this startup be successful (operating or acquired)? 

The dataset was split up into 70% training and 30% testing. 

Random Forest Random forests or random decision forests are an ensemble learning method for classification, regression and other tasks that operate by constructing a multitude of decision trees at training time and outputting the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees.[1][2] Random decision forests correct for decision trees' habit of overfitting to their training set [(The Elements of Statistical Learning)](https://web.stanford.edu/~hastie/ElemStatLearn/).


##### **Random Forest Model** {#random-forest-model}



<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")


Diagram by: [Medium](https://medium.com/analytics-vidhya/machine-learning-decision-trees-and-random-forest-classifiers-81422887a544)

I evaluated the model using Mean Absolute Error (MAE) which is easy to interpret and a good choice since outliers aren’t too bad for this type of model.


#### **Tune models GridsearchCV**



*   Input parameters
*   GridSearchCV implements a “fit” and a “score” method. The parameters of the estimator used to apply these methods are optimized by cross-validated grid-search over a parameter grid.
*   Run fit with all sets of parameters
*   Compare the score against the previous random forest cross val score

    ```
    from sklearn.linear_model import LinearRegression
    from sklearn.model_selection import cross_val_score
    lm = LinearRegression()
    lm.fit(X_train, y_train)
    np.mean(cross_val_score(lm,X_train,y_train, scoring = 'neg_mean_absolute_error', cv= 3))

    ```



### 


### **Dataset** {#dataset}

The dataset from [Crunchbase](https://www.kaggle.com/arindam235/startup-investments-crunchbase/data) consists of 39 categories with 5000 companies recorded up until 2015.


##### **[Crunchbase](https://www.kaggle.com/arindam235/startup-investments-crunchbase/data) dataset**


### **REST API**


## **Software Architecture** {#software-architecture}

The program connects to the MongoDB database. When the user inputs criteria into the frontend, it sends a GET request to the Flask API. The model is wrapped in the 


##### **UML Diagram** {#uml-diagram}


##### **Control Flow Diagram** {#control-flow-diagram}


##### **Database Schema** {#database-schema}


##### **API Input and Output** {#api-input-and-output}

The user inputs total funding, founding year, and country and receives an output of 0 or 1. 


    

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip")



##### **Productionizing the Model with Flask and Heroku** {#productionizing-the-model-with-flask-and-heroku}

In this step, I built a flask API endpoint that was hosted on a local webserver by following along with the [TDS tutorial](https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2) (Diagram by [Medium](https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2)).


### 

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip")



##### **GUI Interface Sketch** {#gui-interface-sketch}

This is a rough sketch of the frontend. 


### 
    

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image10.png "image_tooltip")



## 


## **Steps** {#steps}


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


## 


## **End Product** {#end-product}


### **Links & Demo**

Web App Link

[Heroku API Link](https://startup-success-predictor-api.herokuapp.com/)

[GitHub Link](https://github.com/shiyanboxer/Startup-Success-Predictor)

[Diagrams Link](https://drive.google.com/file/d/1b045bk2AsuREJoj_JI_nRwwf94sz22SE/view?usp=sharing)


### **Learnings** {#learnings}


### **Challenges** {#challenges}


### **What I Would Do Differently** {#what-i-would-do-differently}


### **Next Steps** {#next-steps}

The following is a list of features that are out of scope for this project but would be worthwhile exploring in future iterations. These features would provide a more comprehensive and desirable user experience.



*   Use Tensorflow to automatically classify pictures
*   Train dataset on multiple datasets
*   Add additional criteria
*   Explore other models
*   Add authentication


### **Resources** {#resources}



*   [Productionize a Machine Learning model with Flask and Heroku](https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2)
*   [How Other VC Firms are Looking at Data](https://medium.com/hackernoon/winning-by-eating-their-own-dogs-food-83-venture-capital-firms-using-data-ai-proprietary-da92b81b85ef)
*   [Raise of AI in VC](https://outsideinsight.com/insights/the-growing-focus-on-artificial-intelligence-in-venture-capital/)
*   [Network Charts and Venture Capital](https://towardsdatascience.com/data-science-in-venture-capital-8c13ec0c8458)
*   [Structure your data science project](https://www.youtube.com/watch?v=MpF9HENQjDo)
*   [Sample Project](https://github.com/PlayingNumbers/ds_salary_proj)
*   [Training a classifier with Pytorch](https://www.kaggle.com/danieldagnino/training-a-classifier-with-pytorch)
*   [Types of Models](https://www.logianalytics.com/predictive-analytics/predictive-algorithms-and-models/)
*   [MongoDB vs MySQL](https://www.mongodb.com/compare/mongodb-mysql#:~:text=MySQL%20is%20a%20relational%20database,(SQL)%20for%20database%20access.&text=MongoDB%20is%20a%20NoSQL%20database,data%20as%20JSON%2Dlike%20documents.)
