# Prerequisites

Before attempting to contribute, make sure you have the required software:
- [NodeJS](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/)

If you have never used Git or Github before, this video helps: <https://www.youtube.com/watch?v=mJ-qvsxPHpY>
# Contributing

Here is how you can contribute to this project:
1. Create the necessary database for this project. All the commands needed can be found in ```.../game-shop-server/db/db.sql```. To avoid any errors, you should use the same credentials, which can be found in ```.../game-shop-server/.env```. If this is your first time using PostgreSQL, you can watch the first 37 minutes of this video(but use the info in ```/.env```): <https://www.youtube.com/watch?v=J01rYl9T3BU>.
1. Fork this project to your account
2. Clone your fork
3. In your cloned project: ```cd game-shop-server```
4. Install the project's dependencies: ```npm install```
5. Do the same for game-shop-client: ```cd game-shop-client``` and ```npm install```
6. In ```game-shop-server```, start up the API server by running this command: ```npm start```
7. In ```game-shop-client```, start up the frontend server by running this command: ```npm run dev```
8. You will be able to see the web app in your browser at: <http://localhost:3000/> and the API response at <http://localhost:3002/api/v1/products>
9. Code up your solution and commit it to your fork.
10. Make a pull request and I'll accept it if it works.



## To do
- Billing Tab: ```.../game-shop-client/pages/billing/index.js```
- Unit Converter Tab: ```.../game-shop-client/pages/unit-converter/index.js```
- Inventory Tab: ```.../game-shop-client/pages/inventory/index.js```
