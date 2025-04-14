<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Omikuji Form</title>
</head>
<body>
    <form action="/omikuji/process" method="POST">
        <p>Pick any number from 5 to 25:</p>
        <input type="number" name="number" required>

        <p>Enter the name of a city:</p>
        <input type="text" name="city" required>

        <p>Enter the name of any real person:</p>
        <input type="text" name="person" required>

        <p>Enter professional endeavor or hobby:</p>
        <input type="text" name="hobby" required>

        <p>Enter any type of living thing:</p>
        <input type="text" name="thing" required>

        <p>Say something nice to someone:</p>
        <textarea name="message" required></textarea>

        <br><br>
        <button type="submit">Send</button>
    </form>
</body>
</html>
