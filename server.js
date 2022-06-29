const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://Pratik:Pratik1999@cluster0.qwyqv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => { console.log("DataBase Connected!") })
    .catch((error) => { console.log(error) })

app.use(express.json());

//SignUp Page 
const Employee = mongoose.model('Employee', { name: String, email: String, role: String, id: Number, city: String, dob: Date, status: Boolean });

app.post('/signup', (req, res) => {
    let Emp_name = req.body.name;
    let Emp_email = req.body.email;
    let Emp_role = req.body.role;
    let Emp_id = req.body.id;
    let Emp_dob = new Date(req.body.dob);
    let Emp_city = req.body.city;
    let Emp_status = req.body.status;
    const emp = new Employee({ name: Emp_name, email: Emp_email, role: Emp_role, id: Emp_id, city: Emp_city, dob: Emp_dob, status: Emp_status });
    emp.save().then(() => {
        res.status(200).send({ status: "Success", messsage: "Data add In DaEmp_tabse!" });
    }).catch((error) => {
        res.status(400).send({ status: "error", messsage: "error" })
    })
});

//server
const PORT = 5040;
app.listen(PORT, () => {
    console.log("Server Start at" + PORT)
})