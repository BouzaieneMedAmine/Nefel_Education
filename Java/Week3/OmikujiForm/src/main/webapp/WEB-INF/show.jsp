<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page session="true" %>
<html>
<head>
    <title>Your Omikuji</title>
</head>
<body>
    <h2>Here's your Omikuji!</h2>
    <p>
        In <%= session.getAttribute("number") %> years, you will live in <%= session.getAttribute("city") %>
        with <%= session.getAttribute("person") %> as your roommate, doing <%= session.getAttribute("hobby") %>
        for a living. The next time you see a <%= session.getAttribute("thing") %>, you will have good luck.
        <br><br>
        <strong><%= session.getAttribute("message") %></strong>
    </p>
    <a href="/omikuji">Go Back</a>
</body>
</html>
