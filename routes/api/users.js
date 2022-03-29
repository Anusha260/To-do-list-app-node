const express = require("express")

const router = express.Router();
const gravatar = require("gravatar")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")

process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
const { check, validationResult } = require("express-validator")

const User = require("../../models/User");
// @route   post api/users
// @desc    registerconst gravatar = require("gravatar")
// const bc user
// @access  public


/** 
 @api {post} /auth Get user information for the authentication of the user
 * @apiName postusers
 * @apiGroup users
 *
 * @apiSuccess {String} Username, name of the User.
 * @apiSuccess {String} password, password of the User.
 * @apiSuccess {String} email, email of the User.
; */

router.post("/", [
        check("Username", "Name is required")
        .not()
        .isEmpty(),
        check("email", "please include a valid email").isEmail(),
        check(
            "password",

            "please enter a password with 6 or more characters"
        ).isLength({ min: 6, max: 12 }),

        // email checking
        check("email").custom(async(email) => {
            const user = await User.findOne({ email })
            if (user) {
                throw new Error("email is already exist")
            }
            return true
        })
    ],
    async(req, res) => {
        // console.log(req.body)

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
            return;
        }

        const { Username, email, password } = req.body;
        try {

            const avatar = gravatar.url(email, {
                s: "200",
                r: "pg",
                d: "mm"
            })

            const user = new User({
                email,

                Username,
                password,
                avatar,

            })


            const salt = await bcrypt.genSalt(10); // 10 how much we will give that much it is protected

            user.password = await bcrypt.hash(password, salt)

            await user.save();
            // return json webtoken
            // res.send("successfully completed");

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                config.get("jwtSecret"), { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                })

        } catch (err) {
            console.error(err.message);
            res.status(500).send("server error");


        }
    });
module.exports = router;