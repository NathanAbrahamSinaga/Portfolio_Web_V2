const Contact = require('../models/Contact');
const sendEmail = require('../utils/emailService');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    await sendEmail(name, email, message);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error occurred while processing contact form:', error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};