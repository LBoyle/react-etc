# 02-welrod

This is the first version of a chat app I'm making, it will be something like Slack.

### Techs:

- Node / Express / MongoDB / socket.io
- React v4 / Redux / Router / jsonwebtoken / axios
- Skeleton.css
- It has working JWT authentication and protected routes, bcrypt hashed passwords, register and login, get all users.

The API works as I want it to for now, can make conversations and send messages, currently building out the front end.

### Setup:

- Clone the repo
- Ensure MongoDB is running
- Run ```yarn``` or ```npm install``` in the root dir for the server.
- You may run ```node db/seeds``` to seed the DB with two users if you like. 
- Then also in the welrod/welrod-frontends/welrodweb/ folder for the front end.
- Run both front and back end with ```yarn start``` or ```npm start```.

***

### Node Express MongoDB back-end - /:

This part of the app works perfectly for now, I'm quite happy with it. 

***

### React Native front-end - /frontends/welrodApp:

# Don't use yet.

Implemented but not working properly, I have done no work here.  

The iOs emulator works fine on my mac.

The Android emulator works on my Linux workstation, but the app doesn't connect to it, more configuration to do. 

*** 

### React/Redux v4 front-end - /frontends/wellrodweb:

The authentication, login and register features work.

The web socket server works and has been tested, the front-end code is commented out in the Home.js component