# 1. Project Overview

## **Problem Definition**
Traditionally, venture capital is considered more of an art than a science. Venture capitalists meet with founders, perform due diligence, and try to make the most informed investment decision; however, due to the nature of early-stage companies, financial and traction metrics are often scarce.

## **Objectives**
With the influx and access to data in recent decades, venture capitalists have turned to machine learning and artificial intelligence to help guide them in their investment decisions and explore market trends. Typically these models are not meant to replace VCs but rather enable them to quantify opportunities and avoid bias as much as possible.

This web application leverages data science, machine learning, and business principles to predict the success of startups based on common characteristics. The goal is to ensure reliability, scalability, and ease of use. These goals are met by the following design choices:

**Reliability**
- VCs are given accurate predictions. This is achieved by using an appropriate model, testing and tuning until it reaches above 90% accuracy. 

**Scalability**
- The technologies chosen for the web application enable the web app to be altered and scalable.

**Ease of Use**
- The user interface is intuitive to the user, eliminating any confusion.


## **Technologies** 
The following technologies were carefully chosen to ensure the design goals listed above. Below is a comparison of popular frontend frameworks, database, model, and API technologies. The following is the list of technologies I used for this project:

- **[React](https://reactjs.org/docs/create-a-new-react-app.html)** to build the frontend
  - **[Axios](https://www.npmjs.com/package/axios)**
  - Bootstrap **[Cards](https://mdbootstrap.com/docs/react/components/cards/)** and **[Forms](https://mdbootstrap.com/docs/react/forms/basic/)**
- **[Python 3.7](https://www.python.org/downloads/release/python-370/)** in **[Jupyter Notebook](https://jupyter.org/)** to build the model and clean
  - **[CSV](https://docs.python.org/3/library/csv.html)**
- **[Sklean](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)**
  - **[Numpy](https://numpy.org/doc/stable/reference/generated/numpy.array.html)**
  - **[Pandas](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html)**
  - **[Pickle](https://docs.python.org/3/library/pickle.html)**
- **[Flask](https://flask.palletsprojects.com/en/1.1.x/)** to build the API
  - **[Guicorn server](https://gunicorn.org/)**
- **[MongoDB](https://www.mongodb.com/2)** to build the database

### **Frontend Framework**
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

### **Database** 

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

## **Target User & Use Case**
The target user for the web application is a venture capitalist who is knowledgeable about the company and industry in question. This program would be used as an internal tool within the firm to help guide VCs on their investment decisions.

## **Scope**
One of the first things I had to consider for this project was defining success. Based on my research and talking to fellow VCs in the industry, I choose “status” as the metric of success. which can either be "operating" or "acquired" which I deemed successful or "closed” which I deemed unsuccessful. For the first iteration, I looked at total funding, founding year, and the country as the criteria that would determine success.

The program is an end to end solution consisting of five parts: 
1. **Clean**cleans dataset before building the model
2. **Model** predicts success 
3. **API** allows requests to the model
4. **Database** stores company data
5. **Frontend** allows user to inputs criteria

## **Limitations**
The following is a list of limitations that restricts the scope of the project:
- Limited knowledge of machine learning models
- Limited knowledge of venture capital
- 2-week time constraint
- Only one developer
- Limited learning resources / self-taught
- Limited budget (no money)

## **Assumptions**
The following is a list of assumptions made about the web application:
- The user inputs accurate details
- The user has a good understanding of VC and can use the predictions appropriately

## **Timeline**
**Notes**: Unit tests, integrations tests, debugging, and documentation were done throughout the development process.

### **Task Breakdown by Day**
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
