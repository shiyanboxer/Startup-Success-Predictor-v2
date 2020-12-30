# Startup-Success-Predictor-v2

By: Shiyan Boxer

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5faaeb5-1617-4e1f-9b9e-04fc68c52591/deploy-status)](https://app.netlify.com/sites/startup-success-predictor/deploys)


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

### **Target User & Use Case**
The target user for web application is a venture capitalist who is knowledgeable about the in question company and industry. This program would be used as an internal tool within the firm to help guide VCs on their investment decisions.

### **Scope**
One of the first things I had to consider for this project was defining success. Based on my research and talking to fellow VCs in the industry, I choose “status” as the metric of success. which can either be "operating" or "acquired" which I deemed successful or "closed” which I deemed unsuccessful. For the first iteration, I looked at total funding, founding year, and country as the criteria that would determine success.

The program is an end to end solution consisting of five parts: 

1. **Clean - **cleans dataset before building the model
2. **Model **- predicts success 
3. **API **- allows requests to the model
4. **Database **- stores company data
5. **Frontend **- allows user to inputs criteria


### **Limitations**
The following is a list of limitations restrict the scope of the project:

*   Limited knowledge of machine learning models
*   Limited knowledge of venture capital
*   2 week time constraint
*   Only one developer
*   Limited learning resources / self taught
*   Limited budge (no money)


### **Assumptions**
The following is a list of assumptions made about the web application:
*   The program is accessed only on desktop computers

### **Timeline**

**Notes**: Unit tests, integrations tests, debugging, and documentation were done throughout the development process.


##### **High level Gannt Chart**


##### **Task Breakdown by Day**
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

### **Technologies** 
The following technologies were carefully chosen to ensure the design goals listed above. Below is a comparison of popular frontend frameworks, database, model, and api technologies. I ultimately ended up using **React **to build the frontend, **MongoDB **to build the database, **Python** in **Jupyter Notebook **to build the model, and **Flask **to build the API. Additionally, I used the following modules: 

### **Learnings**

### **Challenges**

### **What I Would Do Differently**
### **Next Steps**
The following is a list of features that are out of scope for this project but would be worthwhile exploring in future iterations. These features would provide a more comprehensive and desirable user experience.

*   Use Tensorflow to automatically classify pictures
*   Train dataset on multiple datasets
*   Add additional criteria
*   Explore other models
*   Add authentication

### **Resources**
**VC**
- [How Other VC Firms are Looking at Data](https://medium.com/hackernoon/winning-by-eating-their-own-dogs-food-83-venture-capital-firms-using-data-ai-proprietary-da92b81b85ef)
- [Sample Project](https://github.com/PlayingNumbers/ds_salary_proj)
- [Raise of AI in VC](https://outsideinsight.com/insights/the-growing-focus-on-artificial-intelligence-in-venture-capital/)
- [Network Charts and Venture Capital](https://towardsdatascience.com/data-science-in-venture-capital-8c13ec0c8458)
- [Structure your data science project](https://www.youtube.com/watch?v=MpF9HENQjDo)

**Model**
- [Training a classifier with Pytorch](https://www.kaggle.com/danieldagnino/training-a-classifier-with-pytorch)
- [Types of Models](https://www.logianalytics.com/predictive-analytics/predictive-algorithms-and-models/)

**API**
- [Productionize a Machine Learning model with Flask and Heroku](https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2)

**Frontend**
- [Create react single-page app](https://reactjs.org/docs/create-a-new-react-app.html)

**Database**
- [MongoDB vs MySQL](https://www.mongodb.com/compare/mongodb-mysql#:~:text=MySQL%20is%20a%20relational%20database,(SQL)%20for%20database%20access.&text=MongoDB%20is%20a%20NoSQL%20database,data%20as%20JSON%2Dlike%20documents)

