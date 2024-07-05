import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js'

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
const corsOptions = {
    origin: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth', authRoute)

// Set mongoose options
mongoose.set('strictQuery', false);

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database is connected');
    } catch (err) {
        console.log('MongoDB database connection failed', err);
    }
};

// Define a simple route
app.get('/', (req, res) => {
    res.send('API is working');
});

// Start the server and connect to the database
app.listen(port, async () => {
    await connectDB();
    console.log(`Server is running on port ${port}`);
});
