const express = require("express");
const router = express.Router();
const User = require("../models/userModel"); // Imported User model

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Received data:', { name, email, password });

    // Create a new instance of the User model
    const newUser = new User({ name, email, password });

    try {
        await newUser.save(); // Await the save operation to ensure it completes before responding
        res.send('User Registered Successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(400).json({ message: error.message });
    }
});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email }); // Find user by email

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Ideally, you should hash the password and compare
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Send back user data, including password and isAdmin
        res.json({ 
            message: 'Login successful', 
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email, 
                isAdmin: user.isAdmin 
            } 
        });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports=router;