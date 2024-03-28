require("dotenv").config();
const express = require("express");
const User = require("../models/UserSchema")
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const home = async (req, res) => {
    res.send("Home Page");
}

const register = async (req, res) => {
    if (req.body.name && req.body.email && req.body.password) {
        // const { name, email, password } = req.body;
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.send("This email is already registered!");
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                name,
                email,
                password: hashedPassword
            });
            let result = await user.save();
            result.toObject();
            delete result.password;
            Jwt.sign({ data: result }, process.env.JwtKey, { expiresIn: '1h' }, (error, token) => {
                if (error) {
                    res.json("Something went wrong while registeration!")
                }
                else {
                    res.json({ success: true, message: 'Registration Successful', token, data: result });
                }
            });

        }
    } else {
        res.send("Please pass all the fields!");
    }
}

const login = async (req, res) => {
    if (req.body.email && req.body.password) {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);
            if (passwordMatch) {
                Jwt.sign({ data: user }, process.env.JwtKey, { expiresIn: '1h' }, (error, token) => {
                    if (error) {
                        res.status(500).json("Something went wrong while logging in!");
                    } else {
                        res.json({ success: true, message: 'Login Successful', token, data: user });
                    }
                });
                return;
            } else {
                res.status(401).json("Incorrect password!");
                return;
            }
        } else {
            res.status(401).json("This email is not registered!");
            return;
        }
    } else {
        res.status(400).json("Email and password are required!");
        return;
    }
};


module.exports = { register, login, home }
