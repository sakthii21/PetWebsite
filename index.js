import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import adoptionRoutes from './routes/adoptionRoutes.js';// Add `.js` extension

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "https://682df553350b0d54b54b5f62--comfy-fox-0e397b.netlify.app/", credentials: true }));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api', adoptionRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
