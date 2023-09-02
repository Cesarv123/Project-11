# Project-11
Project 11 with working javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project 11</title>
    <link rel="stylesheet" href="./CSS/index-style.css">
</head>
<body>
    <div class="form">
        <form action="" id="contactForm">
            <div class="alert">Your message sent</div> 

            <div class="inputBox">
                <input type="text" id="name" placeholder="Your name....">
            </div>

            <div class="inputBox">
                <input type="text" id="emailid" placeholder="Your Email....">
            </div>  

            <div class="inputBox">
                <textarea id="msgContent" cols="30" rows="10" placeholder="Message"></textarea>
            </div>

            <div class="inputBox">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>
<script src="./JavaScript/main.js"></script>
</body>
</html>
