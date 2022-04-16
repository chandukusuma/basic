<h1>User Authentication</h1>

<h3>Tech stack used :</h3>

<li>
    <ul>javascript</ul>
    <ul>Express.js</ul>
    <ul>Node.js</ul>
    <ul>MongoDB</ul>
</li>

<p>There are different packages used in this application for backend REST api developement,</p>
<p>In this application the user can register with the details (email and password)</p>

<img src="./images/register_pic.png" />

<p>This picture refers to the working of api endpoint with which user can register with their details,</p>
<p>The jasonwebtoken package is used in this application to create security for the details of users</p>

<img src="./images/login_pic.png" />

<p>The above picture refers to the endpoint for login where the user can logs in securely, this process is done securely with the JWT function where the access tokens are created which are unique for every individual</p>

<img src="./images/defaultinloginpage_pic.png" />

<p>Every user should login with the proper credentials which user uses while registering, If the password or email entered cannot match with the data stored in database the user wouldn't get access to login with the application</p>

<img src="./images/update_pic.png" />

<p>User can update his/her details by using the endpoint "/user/:id". This endpoint finds the user details by unique id and updates the data which will change automatically in database management system</p>

<img src="./images/getrequest.png" />

<p>The total users for the application can be easily available with the endpoint called get request.</p>


