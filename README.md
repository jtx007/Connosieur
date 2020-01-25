
# Connosieur V2

## Project is deployed at the link [here](https://connosieurfrontend.herokuapp.com/)

This application was built with sneaker enthusiasts in mind.  It's platform for individuals to find their favorite sneakers and show them off on their individual profiles.  They can also go to the thread page and discuss all things sneaker and engage in conversations with other users and see their sneakers. 

Try out the application with the following credentials:

#### Username: Test

#### Password: 123

## Getting Started

### Prerequisites
This project needs Node v12.8.0 as well as npm v6.13.0 so make sure that those are present on your local machine


### Development
In order to develop the project locally, run the following commands in your terminal

```
git clone
npm install
npm start
```
Currently the project is hooked up to the heroku backend. If you wish to swap to the local backend repo, just change out the BaseURL and run this frontend instance at a different port other than 3000. Leave port 3000 for the Rails backend.

## Tech Stack: 
- React 16.11.0
- Ruby on Rails ([backend repo](https://github.com/jtx007/ConnosieurBackend))
- [Bulma-CSS](https://bulma.io/)

![Connosiuer](/src/assets/connosieur.png)


## Please check out this [video demo](https://youtu.be/PVA6Xyg6c74) to see it in action



I have a standard login and authentication is handled with [bcrypt](https://github.com/codahale/bcrypt-ruby) and the gem [knock](https://github.com/nsarno/knock) for the backend.

The pivotal piece of this project is the database of sneakers.  This data was scraped from a website called [StockX](https://stockx.com/), a well known sneaker consignment platform.

## The sneaker database

![Database](/src/assets/database.png)

Here users can add their favorite sneakers to their "OWN" or "WANTS" lists.  The user then can engage in discussions with other users about sneakers or any other related topics by clicking on the threads button in the navbar or after creating a new post via their profile page.  

If there are any issues or concerns or if you would like to provide some feedback, please do not hesistate to email me at

#### jamesjacobthomas7@gmail.com


