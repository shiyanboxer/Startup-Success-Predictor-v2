## Testing
The application is thoroughly tested using Jest and Supertest.
CodeCov is used to validate the 92% code coverage, and CirclCI is used to run all tests before a branch is merged to master.

This ensures the build isn't broken by changes in code logic.

How the tests work
An in-memory MongoDB database is built when Jest starts up, the database is seeded before every test, and the database is destroyed when all tests are completed.

Running the tests
npm install
Ensure that all packages are installed

npm test OR npm run test:watch
Run all suites of tests

npm run test:watch runs Jest in watch mode, where individual tests can be viewed. Type in p to filter tests by filename regex, then v2 and press Enter to view the tests for version 2 of the API.

## Contributing
Submit an issue (feature request or bug)
Create a branch: git checkout -b feature/feature-implementing
Commit changes to the branch: git add . && git commit -m "Present tense commit message"
Push the changes: git push -u origin feature/feature-implementing
Submit a pull request

## Versioning
There are 2 versions of the API available for use: Version 1 and Version 2.

Version 1
Requirements
Build a server side web api that can be used to fetch products either one at a time or all at once.
Every product should have a title, price, and inventory_count.
Querying for all products should support passing an argument to only return products with available inventory.
Products should be able to be "purchased" which should reduce the inventory by 1.
Products with no inventory cannot be purchased.
Endpoints
GET /api/v1/products

View all products in the store.

Optional Parameter: ?stocked=true

GET /api/v1/products/{sku}

View an individual product by SKU.

PATCH /api/v1/products/{sku}

Purchase an individual product by SKU.


### Learning Resources
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
