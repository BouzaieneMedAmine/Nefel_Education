<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Ninja Gold Game</title>
    <link rel="stylesheet" type="text/css" href="/CSS/style.css">
</head>
<body>
    <h1>Your Gold: <c:out value="${gold}" /></h1>

    <form action="/process" method="POST">
        <input type="hidden" name="location" value="farm" />
        <button>Farm</button>
    </form>

    <form action="/process" method="POST">
        <input type="hidden" name="location" value="cave" />
        <button>Cave</button>
    </form>

    <form action="/process" method="POST">
        <input type="hidden" name="location" value="house" />
        <button>House</button>
    </form>

    <form action="/process" method="POST">
        <input type="hidden" name="location" value="quest" />
        <button>Quest</button>
    </form>

    <h2>Activities:</h2>
    <c:forEach var="activity" items="${log}">
        <p>${activity}</p>
    </c:forEach>
</body>
</html>
