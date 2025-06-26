#  Todo App with Docker (Made Simple)

##  What is this?

This is a **Todo List App** made using:
- A **backend** (server) using Node.js + Express + MongoDB
- A **frontend** (mobile app) using React Native + Expo
- Everything runs using **Docker containers**

You can:
- Add tasks 
- See your tasks 
- Delete tasks 


##  How it works

We made 3 main parts:

1.  **Frontend** – The mobile app  (built with Expo)
2.  **Backend** – The server that saves tasks (Node.js + Express)
3.  **Database** – tasks are stored here (MongoDB)

All these communicate to each other using Docker’s **app-network**



## Tools We Used

 Part        Tool                     
 Frontend   | React Native + Expo      
 Backend    | Node.js + Express + Mongoose 
 Database   | MongoDB (official image) 
 Docker     | For everything     

## Tasks
1.Make Docker Network

docker network create app-network

2.Start MongoDB

docker volume create mongo-data
docker run -d --name mongo --network app-network -v mongo-data:/data/db -p 27017:27017 mongo

3.Build Backend Image

cd backend
docker build -t todo-backend .

4.Start Backend Server

docker run -d --name backend --network app-network -p 3000:3000 todo-backend

5.Run Mobile App

cd ../frontend
npx expo start







