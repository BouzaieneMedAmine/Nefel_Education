<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Counter Page</title>
</head>
<body>
<center>

    <h1>You've visited this site <c:out value="${count}" /> times.</h1>
    <a href="/">Back to Home</a><br>
    <br><br><br><br>
    <a href="/reset">Reset Counter</a>
    </center>

</body>
</html>
