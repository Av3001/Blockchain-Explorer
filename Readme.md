# Project Title

Blockchain Explorer

## Technology Stack/Libraries Used
 
- *Programming Language:*
    - Typescript
- *Frontend:*
  - React.js
  - vite CRA
  - Tailwind CSS

- *Backend:*
  - Node.js
  - Express 
  - MongoDB (mongoose)

- Moralis Api for interacting with Ethereum chain  

## Steps to Run/Build the Project

1. *Starting the project*
   
   - touch .env
     ## *(open .env file and paste your Moralis Api and MONGODB_URL there (refer to  .env.sample)*
   - cd backend && npm i && tsc -b
   - npm run start
     
     ## *(Your backend will up and running at http://localhost:8000/)*
    
   *for stopping the backend server*
   - pm2 kill

   *check running processes*
   - pm2 list

    *list of running processes*
   - pm2 list

   *For frontend*
   - cd frontend && npm i && npm run dev

     ## *(Frontend will be ap and running at http://localhost:5173/)*

   ## demo video
   https://github.com/Av3001/Blockchain-Explorer/assets/113854539/772759ae-84f3-44ba-93d0-b5ccca5c43ba


   ## Full working Video link
    https://drive.google.com/file/d/195MidrgadirjD3qcJVBVVj-WBoPZD7-q/view?usp=drive_link



## Public Hosted Link

Visit the live demo of the project at [Vercel](https://blockchain-explorer-three.vercel.app/) 

## Approach

In approaching this task, I focused on leveraging modern technologies to create a scalable solution. The frontend is built with React.js, providing a dynamic and interactive user interface. Tailwind CSS is used for styling, ensuring a clean and responsive design. The project follows best practices for modularization and maintainability. The backend utilizes Node.js and Express for efficient server-side operations, with MongoDB serving as the database.The backend request the the transactions and balance data from the Ethereum Chain with the help of Moralis Api and then the store the response in the database.Client gets the data from the database thereby reducing third party Api calls.  The step-by-step guide facilitates easy setup and running of the project locally. The demo video offers a comprehensive overview of the project's features and functionality.
