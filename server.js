var express=require('express');
var app=express();



app.get("/",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            +"<hr/>"
            +"<h3>Smart Devices for sale</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Laptops</li>"
            +"<li>Mobile Phones</li>"
            +"<li>Hololgraphic Devices</li>"
            +"<li>Samrt Watches</li>"
            +"<li>Gaming Consoles</li>"
            +"<li>friend consoles</li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Room 3 </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Chief Mentor: Ravi Tambade</li>"
            +"<li>Director: Shubhangi Tambade</li>"
            +"<li>Subject Matter Expert: Rohit Gore</li>"
            + "</ol>"
    );
});

//login page

app.get("/login",(req, res)=>{
    res.send(

            "<form>"
            +"<div class='mb-3'>"
            +"<label for='exampleInputEmail1' class='form-label'>Email address</label>"
            +"<input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'>"
            +"<div id='emailHelp' class='form-text'>We'll never share your email with anyone else.</div>"
            + "</div>"
            +"<div class='mb-3'>"
            +"<label for='exampleInputPassword1' class='form-label'>Password</label>"
            +"<input type='password' class='form-control' id='exampleInputPassword1'>"
            + "</div>"
            +"<div class='mb-3 form-check'>"
            +"<input type='checkbox' class='form-check-input' id='exampleCheck1'>"
            +"<label class='form-check-label' for='exampleCheck1'>Check me out</label>"
            +"</div>"
            +"<button type='submit' class='btn btn-primary'>Submit</button>"
            +"</form>"
       
            
    );
});





var server=app.listen(8080);
console.log("Vijay Sales Online shopping running on port 8080");

