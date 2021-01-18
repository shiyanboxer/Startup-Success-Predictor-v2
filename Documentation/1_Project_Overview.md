# 1. **Project Overview**

## **Problem Definition**
Traditionally, venture capital is considered more of an art than a science. Venture capitalists meet with founders, perform due diligence, and try to make the most informed investment decision; however, due to the nature of early-stage companies, financial and traction metrics are often scarce.

## **Objectives**
With the influx and access to data in recent decades, venture capitalists have turned to machine learning and artificial intelligence to help guide them in their investment decisions and explore market trends. Typically models are built, not with the intention to replace VCs but rather enable them to quantify opportunities and avoid bias as much as possible.

This web application leverages data science, machine learning, and business principles to predict the success of startups based on common characteristics. The goal is to ensure reliability, scalability, and ease of use. These goals are met by the following design choices:

- **Reliability**: VCs are given accurate predictions. This is achieved by using an appropriate model, testing, and tuning until it reaches above 90% accuracy. 
-  **Scalability**: The technologies chosen for the web application enable the web app to be altered and scalable.
- **Ease of Use**: The user interface is intuitive to the user, eliminating any confusion.

## **Technologies** 
The following technologies were carefully chosen to ensure the design goals listed above. Below is a comparison of popular frontend frameworks, database, model, and API technologies. The following is the list of technologies I used for this project:

- **[React](https://reactjs.org/docs/create-a-new-react-app.html)** to build the frontend
  - **[Axios](https://www.npmjs.com/package/axios)**
  - MDBReact **[Cards](https://mdbootstrap.com/docs/react/components/cards/)** and **[Forms](https://mdbootstrap.com/docs/react/forms/basic/)**
- **[Python 3.7](https://www.python.org/downloads/release/python-370/)** in **[Jupyter Notebook](https://jupyter.org/)** to build the model and clean
  - **[CSV](https://docs.python.org/3/library/csv.html)**
  - **[Sklean](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)**
  - **[Numpy](https://numpy.org/doc/stable/reference/generated/numpy.array.html)**
  - **[Pandas](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html)**
  - **[Pickle](https://docs.python.org/3/library/pickle.html)**
- **[Flask](https://flask.palletsprojects.com/en/1.1.x/)** to build the API
  - **[Guicorn server](https://gunicorn.org/)**
  - **CORS** to run seprate local hosts
  - **JSON** to load and dump data
- **[MongoDB](https://www.mongodb.com/2)** to build the database
- **[Postman](https://www.postman.com/)** and **[CircleCI](https://circleci.com/)** for testing
- **[Netlify](https://www.netlify.com/)** and **[Heroku](https://dashboard.heroku.com/)** to deploy the React App and Flask API
### **[Frontend Framework](https://www.codeinwp.com/blog/angular-vs-vue-vs-react/)**

<table>
  <tr>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>Vue </strong>- Good choice if you prefer simplicity, but also like flexibility but not widely used at companies. 
   </td>
   <td><strong>React - </strong>Good choice for getting started with front-end JavaScript frameworks, startups and developers who like some flexibility. The ability to integrate with other frameworks seamlessly gives it a great advantage for those who would like some flexibility in their code.
   </td>
   <td><strong>Angular - </strong>Good choice for companies with large teams and developers who already use TypeScript.
   </td>
  </tr>
  <tr>
   <td><strong>Usability</strong>
   </td>
   <td>
<ul>

<li>UI and behavior are a part of components, which makes things more intuitive. 

<li>Vue provides higher customizability and hence is easier to learn than Angular or React
</li>
</ul>
   </td>
   <td>
<ul>

<li>React, the same part of the code is responsible for creating a UI element and dictating its behavior.

<li>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow.
</li>
</ul>
   </td>
   <td>
<ul>

<li>Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code.

<li>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Scalability and Reliability</strong>
   </td>
   <td>
<ul>

<li>Least stable in terms of versioning 

<li>Driven by community support

<li>Increasing in popularity

<li>Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
</li>
</ul>
   </td>
   <td>
<ul>

<li>Most stable in terms of versioning 

<li>Driven by Facebook support

<li>Popular framework

<li>React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. 
</li>
</ul>
   </td>
   <td>
<ul>

<li>Driven by Google support

<li>Angular is the most mature of the frameworks, has good backing in terms of contributors and is a complete package.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Interest and Familiarity </strong>
   </td>
   <td>
<ul>

<li>Not the most desired skill in the job market

<li>No experience 
</li>
</ul>
   </td>
   <td>
<ul>

<li>Desired skill in job market

<li>Prior experience 
</li>
</ul>
   </td>
   <td>
<ul>

<li>Desired skill in job market

<li>No experience 
</li>
</ul>
   </td>
  </tr>
</table>



### **[Database](https://blog.panoply.io/mongodb-and-mysql)**

<table>
  <tr>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>MongoDB - </strong>Flexible data schema, good for unstructured data and scalability 
   </td>
   <td><strong>MySQL - Good for structured data and traditions need for  relational database </strong>
   </td>
   <td><strong>Excel</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Usability</strong>
   </td>
   <td>
<ul>

<li>MongoDB is a NoSQL database that stores data as JSON-like documents. Documents store related information together and use the MongoDB query language (MQL) for access. Fields can vary from document to document - there is no need to declare the structure of documents to the system, as documents are self-describing. 
</li>

<li>MongoDB schemas are unstructured which make it harder to ensure that every document in a collection has the same scheme, this problem is usually solved with some sort of interface (i.e mongoose), MySQL doesn’t have this problem.
</li>
</ul>
   </td>
   <td>
<ul>

<li>MySQL is a relational database management system (RDBMS) from the Oracle Corporation. Like other relational systems, MySQL stores data in tables and uses structured query language (SQL) for database access.

<li>More established: developers, community, code, tools, etc
</li>
</ul>
   </td>
   <td>
<ul>

<li>Easy to view data

<li>Requires lost of work to format and manipulate data 
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Scalability and Reliability</strong>
   </td>
   <td>
<ul>

<li>If an index is not found, every document within a collection must be scanned to select the documents that provide a match to the query statement.

<li>Replication of data using nodes that hold the same data set are called replica sets. Replica sets enable high availability of data, with developers able to fine-tune their consistency requirements for even greater performance and availability.

<li>Working with data as flexible JSON documents, rather than as rigid rows and columns, is proven to help developers move faster

<li>Sharding allows for horizontal scaling (additional resources into your system by adding more machines to your network), which is difficult to implement in MySQL.
</li>
</ul>
   </td>
   <td>
<ul>

<li>Lookups by index are very fast

<li>If an index is not defined, the database engine must scan the entire table to find all relevant rows.

<li>MySQL supports master – slave replication and master – master replication. Multisource replication allows you to replicate from several masters in parallel (vertical scaling - adding more power to your existing machine)
</li>
</ul>
   </td>
   <td>
<ul>

<li>Not very scalable data stays static
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Interest and Familiarity</strong>
   </td>
   <td>
<ul>

<li>Some experience

<li>Desired skill in job market
</li>
</ul>
   </td>
   <td>
<ul>

<li>Some experience

<li>Desired skill in job market 
</li>
</ul>
   </td>
   <td>
<ul>

<li>Experience manipulating data in Excel
</li>
</ul>
   </td>
  </tr>
</table>



### **[Backend](https://www.tutorialspoint.com/cplusplus-vs-java-vs-python)**

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

<li>Compiled Programming Language

<li>More complex syntax

<li>Strongly typed, need to define the exact datatype of variables

<li>Use of pointers, structures, union
</li>
</ul>
   </td>
   <td>
<ul>

<li>Python is an interpreted programming language

<li>Good community support

<li>requests

<li>

<li>Easy syntax

<li>Dynamic, no need to define the exact datatype of variables.
</li>
</ul>
   </td>
   <td>
<ul>

<li>Java is both compiled and interpreted language, which is first compiled and then interpreted into a byte code

<li>More complex syntax

<li>Strongly typed, need to define the exact datatype of variables
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Scalability and Reliability</strong>
   </td>
   <td>
<ul>

<li>Comparatively available with low level functionalities

<li>Platform dependent, must be recompiled for different platform
</li>
</ul>
   </td>
   <td>
<ul>

<li>Expected to run slower than Java programs

<li>Useful libraries for data manipulation and modelling

<li>Most commonly used for stats and AI/ML

<li>Offers API frameworks 
</li>
</ul>
   </td>
   <td>
<ul>

<li>Java is much faster than python in terms of speed.

<li>Platform independent, byte code generated works on every OS.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Interest and Familiarity</strong>
   </td>
   <td>
<ul>

<li>Experience through school 
</li>
</ul>
   </td>
   <td>
<ul>

<li>Lots of experience
</li>
</ul>
   </td>
   <td>
<ul>

<li>Some experience through school 
</li>
</ul>
   </td>
  </tr>
</table>


### **[Python Web Frameworks for API](https://testdriven.io/blog/django-vs-flask/)**

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

<li>Django provides this functionality along with account management and support for sessions (via the User model) out-of-the-box.

<li>Django includes a simple yet powerful ORM (Object Relational Mapping) that supports a number of relational databases out-of-the-box -- SQLite, PostgreSQL, MySQL, and Oracle. 
</li>
</ul>
   </td>
   <td>
<ul>

<li>Easier to get started with as it’s a simpler framework

<li>Flask, by design, is much more flexible than Django, and it's meant to be extended.

<li>Flask provides support for cookie-based sessions, but you'll have to turn to the extension network for account management, authentication, and authorization.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Scalability and Reliability</strong>
   </td>
   <td>
<ul>

<li>Django embraces stability and comes with a number of tools, patterns, features, and functionality

<li>In terms of stability, Django generally has longer, more rigid release cycles.

<li>
</li>
</ul>
   </td>
   <td>
<ul>

<li>Flask handles the core scaffolding well like URL routing, request and error handling, templating, cookies, support for unit testing, a debugger, and a development server. 

<li>Since most web applications need more features, you get to decide how you want to build your application. 
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Interest and Familiarity</strong>
   </td>
   <td>
<ul>

<li>No experience
</li>
</ul>
   </td>
   <td>
<ul>

<li>Some experience at work
</li>
</ul>
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
4. **Database** stores company data (not yet complete)
5. **Frontend** allows user to inputs criteria

## **Limitations**
The following is a list of limitations that restricts the scope of the project:
- Limited knowledge of machine learning models
- Limited knowledge of venture capital
- 2-week time constraint
- Only one developer (me)
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
   <td>Day 1: Research & Outline
<ul>

<li>Research and compare existing solutions and models

<li>Define success and criteria

<li>Outline problem definition, objectives, target user & use case, scope, limitations, assumptions, timeline
</li>
</ul>
   </td>
   <td>Day 5: Develop Frontend and Connect to Backend
<ul>

<li>Create a react app

<li>Basic styling forms and cards bootstrap

<li>Connect the front and backend (send input from forms to api, get back a response, and display on website)
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Day 2: Plan & Diagrams
<ul>

<li>Research and compare technologies

<li>Create plan of execution and timeline

<li>Create software architecture, UML diagrams, UI diagram
</li>
</ul>
   </td>
   <td>Day 5: Develop Frontend and Connect to Backend
<ul>

<li>Connect the front and backend (send input from forms to api, get back a response, and display on website)

<li>Change output, if the response if above 0.5 round up -> 1 = success, else unsuccessful
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Day 3: Clean Dataset & Develop Model
<ul>

<li>Remove NA cells

<li>Select relevant columns

<li>Create success column

<li>Trains test split

<li>Train and test model

<li>Pickle the model
</li>
</ul>
   </td>
   <td>Day 7: Test, Debug & Deploy API to Heroku & Website to Netlify
<ul>

<li>Test program in website using inspect tool to see if response is correct

<li>Deploy API to Heroku

<li>Create a separate website repo

<li>Deploy API to Netlify 
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Day 4: Develop Flask API
<ul>

<li>Create the predict, load_model, and hello functions in app.py

<li>Test on local host
</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
</table>
