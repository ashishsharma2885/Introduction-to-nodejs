const express = require('express');
const path = require('path'); // Import path module to handle file paths

const app = express();

app.use(express.json());

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/user', (req, res) => {
    console.log("User was called");
    // res.send("Hello User")
    // Send data json format
    res.json({
        name: "Ashish",
        age: 25,
        multiply: req.body.a * req.body
    });
});

app.get("/", (req, res) => { // Corrected the order of parameters
    // res.send("server is now working")
    // res.sendFile(path.join(__dirname, 'index.html /'));/ Corrected the file path
    // res.json({
    //  success: true
    // })
    res.sendFile(path.join(__dirname, 'index.html')); // Corrected the file path
});

app.post("/user", (req, res) => {
    console.log(req.body);
    res.json({
        name: "Pooja",
        age: 23
    });
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
