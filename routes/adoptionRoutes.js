
import express from 'express';
import Adoption from '../models/Adoption.js';
import dotenv from 'dotenv';


dotenv.config();
const router = express.Router();

// Handle Adoption Form Submission
router.post('/adopt', async (req, res) => {
  try {
    const { name, phone, address, state, city, pincode} = req.body;

    // Basic validation
    if (!name || !phone || !address || !state || !city || !pincode) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Save to Database
    const newAdoption = new Adoption({ name, phone, address, state, city,pincode });
    await newAdoption.save();

    res.status(201).json({ success: true, message: 'Thank you for choosing to adopt! We will get in touch with you soon to arrange a smooth transition for your new pet.' });
  } catch (error) {
    console.error('Error submitting adoption request:', error);
    res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
});

export default router; // ✅ Correct

