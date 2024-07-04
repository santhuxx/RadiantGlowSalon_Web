import User from '../models/UserSchema.js';
import Beautician from '../models/BeauticianSchema.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        let user = null;

        if (role === 'client') {
            user = await User.findOne({ email });
        } else if (role === 'beautician') {
            user = await Beautician.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'client') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        } else if (role === 'beautician') {
            user = new Beautician({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }

        await user.save();

        res.status(200).json({ success: true, message: 'User successfully created' });

    } catch (err) {
        console.error('Error in registration:', err);
        res.status(500).json({ success: false, message: 'Server error, try again' });
    }
};

export const login = async (req, res) => {
    try {
        // Implement login functionality here
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).json({ success: false, message: 'Internal Server error, try again' });
    }
};
