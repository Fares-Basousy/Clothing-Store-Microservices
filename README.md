# Clothing Store Microservices

This project is an implementation of two microservices that communicate with each other to handle orders in a clothing store. Microservice 1 is responsible for handling user requests and generating receipts, while Microservice 2 acts as the storage for the clothing items.

## Architecture Overview

The architecture of this project involves the following components:

- **Client-side:** A website interface where users can request the quantity of clothing items they want to purchase.
- **Microservice 1:** Receives user requests and communicates with Microservice 2 to check the availability of items and generate receipts.
- **Microservice 2:** Stores the available clothing items and responds to Microservice 1 with the availability status.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clonehttps://github.com/Fares-Basousy/Clothing-Store-Microservices.git```

2. Navigate to the project directory
    ```bash
    cd clothing-store-microservice

3. Install dependencies for both microservices

    to install from the packages.json file run:

 ```bash
    npm install
 ```
   or you can run:
   
   
    npm install express cors body-parser
   
    
## Usage

1. To run the project, you need to start both microservices.

	1. Start the Microservice 1 (Order Handling):
	    ```
	    node ms1.js
	    ```

	2. Start the Microservice 2 (Storage):
	
	    ```
	    node ms2.js
    	    ```

2. Open the website in your browser:


3. Enter the quantity of clothing items you want to purchase (e.g., shirts, T-shirts, dresses) and submit the form.

    Microservice 1 will communicate with Microservice 2 to check the availability of items in the storage.

    If the items are available, Microservice 1 will generate a receipt and send it back to the client-side.

## Dependencies

The project dependencies are listed in the package.json file. To install them, make sure you have Node.js and npm (Node Package Manager) installed. Then, run npm install in the project directory to install all the required dependencies.

The main dependencies used in this project include:

   Express: Web framework for handling HTTP requests. \
   Cors: Middleware for enabling Cross-Origin Resource Sharing. \
   Body-parser: Middleware for parsing HTTP request bodies. 

## Note

i took the frontend from https://www.free-css.com/free-css-templates/page287/eflyer
