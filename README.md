# Elastic Data Fetcher

A web application built using Express.js for fetching and sorting data from Elasticsearch. This application provides endpoints to retrieve data from specific Elasticsearch indices and perform term aggregation.
Description

This project is designed to fetch data from Elasticsearch and present it in a structured format. It supports fetching data from specific sources and performing term aggregations to summarize data based on specified fields.
## Core Functionalities

 -   Data Fetching: Retrieve data from specific Elasticsearch indices and sources.
 -   Data Aggregation: Perform term aggregations on Elasticsearch data to summarize information.
 -   API Endpoints: Provides RESTful API endpoints for fetching and aggregating data.

## Technologies Used

 -   Express.js: Web framework for building the server and handling routes.
 -   Elasticsearch: Search engine for storing and retrieving data.
 -   Helmet: Middleware to enhance the security of the application.
 -   CORS: Middleware to enable Cross-Origin Resource Sharing.
-    dotenv: For managing environment variables.

## Setup

 1.   Clone the repository.

2. Install dependencies:

- npm install

3. Set up environment variables in a .env file.

4. Start the application:
   - npm start
   - npm run devStart (developement start)


## Environment Variables

 -   PORT: The port on which the server will run.
-    ELASTIC_CLOUD_ID: The ID of your Elastic Cloud instance.
 -   ELASTIC_PASSWORD: The password for your Elastic Cloud instance.

## API Endpoints

 -   GET /: Welcome message and basic usage instructions.
-    GET /source/
    /
    : Fetch data from a specific source in an Elasticsearch index.
  -  GET /term-aggregation/
    /
    /
    : Perform term aggregation on data in an Elasticsearch index.


## License

This project is licensed under the ISC License.
