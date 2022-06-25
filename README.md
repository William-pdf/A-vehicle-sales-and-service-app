# CarCar

Team:

* Conner - Sales
* William - Service 

## Design

(It is possible that the project shipped without a working database, to ensure that the api works correctly please use insomnia and the provided urls to add objects for manufacturers, Automobile, Model)

This application has 3 major categories Service, Sales, and inventory. The inventory was our starting point and contains a list of models, manafactureres and autos. These were used to create functionality for each of the following microservices. 

We used react to create the front end of the application. This was a challenging task for most of the time we worked on it. Completing the Django models was the fundamental challenge for the project. 

The app is a bootstrap application that was designed to be as simple as possible for the average user. There is no difficult language or harsh forms.


## Service microservice

Microservice to display service appointments, a list of said appointments with details including but not limited to (VIN, customer name, date, reason for service, etc.) services,  with an assigned technician on each of these features. 
This goes along with a service history which will show appointments for a specific vin and all the previous customer/vehicle data.
The front end is maintained with React.

## Sales microservice
The sales microservice keeps track of our Sales employees performance history, our customers, and general information related to the purchasing/sales process. Our microservice contains different view functions to handle incoming requests, most functions handling multiple types of requests. We have two RESTful API's for each resource. The first one, "/api/<<resource>>/" returns a list of all instances of that resource to GET requests, and a POST request to the same endpoint creates a new instance. The second endpoint, "/api/<<resource>>/<int:pk>/" handles GET, PUT, and DELETE requests. These requests are dealing with a specific instance of our resource, which is pointed to by adding an id to the end of the URL.


Our SalesRecord model is the only aggregate model in our microservice, meaning that it must have an instance of a Customer, a SalesPerson, and an AutomobileVO in the database in order to be created. Each of the other models can create an instance of itself without the existence of any other model. The VO (ValueObject) that is tacked on to the end of the model name is an indicator placed there to let software engineers who may be working on the code know that our microservice does not "own" this class so to speak. The Automobile class is defined in the Inventory service, which means that instances of Automobiles can never be changed/updated in our microservice, only used as they are. We are getting our updated Inventory list by polling the Inventory API, which I believe is the best solution for accessing the relevant data. Queuing would not be a good option for this kind of app because both our, and the Service microservice both rely on the inventory data. The scale of this application is not large enough to be concerned about the demand placed on Inventory by multiple microservices polling it simultaneously, but if it were, pub/sub would be a better solution.