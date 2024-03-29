require('dotenv').config();
const express = require("express");
const conn = require("./config/dbConn");
const router = require("./routes/authRoutes")
const cors = require("cors")
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors(
    {
        origin: ["https://mern-ecommerce-frontend-xi.vercel.app/login"],
        methods: ["POST", "GET"],
        credentials: true,
    }
))
app.use(express.json());
app.use("/api/auth", router)
app.get("/", (req, res) => res.send("Express on Vercel"));


app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map(item => {
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.name
                        },
                        unit_amount: (item.price) * 100,
                    },
                    quantity: item.quantity
                }
            }),
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/error'
        });

        res.json({ url: session.url });
    } catch (e) {
        console.error("Error creating checkout session:", e); // Log the error for debugging
        res.status(500).json({ error: e.message });
    }
});



app.listen(5000, () => {
    console.log("Server listening on port 5000.");
})

module.exports = app
