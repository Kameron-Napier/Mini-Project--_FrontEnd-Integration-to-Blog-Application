import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/posts', postRoutes);

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to database'))
.catch(error => console.log('Database connection error:', error));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
