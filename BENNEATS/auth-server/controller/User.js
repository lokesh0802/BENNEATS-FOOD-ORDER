const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/User');
const otpGenerator = require('otp-generator');


const nodemailer = require('nodemailer');

const register = async (req, res) => {
    try {
        const existingUSer = await User.findOne({ email: req.body.email });
        if (existingUSer) {
            return res.status(200).send({
                message: "User already exists",
                success: false,
            });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;

        const confirmPassword = await bcrypt.hash(req.body.passwordConfirm, salt);

        const otp = otpGenerator.generate(6, {
            upperCase: false,
            specialChars: false,
            alphabets: false
        });

        req.body.passwordConfirm = confirmPassword;
        if (req.body.password == req.body.passwordConfirm) {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                passwordConfirm: req.body.passwordConfirm,
                otp: otp,
                profileImage: req.body.profileImage,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "lokesh08519137@gmail.com",
                    pass: "bbdqmdvgizyrergj",
                },
            });

            const mailOptions = {
                from: "Auth client webdev warriors",
                to: req.body.email,
                subject: "OTP for verification",
                text: `Your OTP is ${otp}`,
            };

        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send({ message: error.message });
            }
            res.send({
                message: "OTP sent successfully",
                success: true,
            });
        });
        return res.status(201).send({
            message: "User registered successfully",
            data: {
                user: newUser,
                token,
            },
            success: true,
        });
        
    } catch (error) {
        return res.status(500).send({
            message: "An error occurred",
            success: false,
        });
    }
};
module.exports = { registerController };