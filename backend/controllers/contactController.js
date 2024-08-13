const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const emailService = require('../utils/emailService');

exports.submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    await emailService.sendContactNotification(name, email, message);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error occurred while processing contact form:', error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};