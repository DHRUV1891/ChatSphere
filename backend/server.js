import express from 'express';
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';


const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000 ;

app.use(express.json());
app.get('/', (req, res) => { res.send("Welcome to ChatSphere!");
}) ;

app.use('/api/auth',authRoutes)


 app.listen(PORT,()=>{ 
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)}
);