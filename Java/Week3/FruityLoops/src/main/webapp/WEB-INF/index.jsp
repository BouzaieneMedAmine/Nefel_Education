<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Fruit Store</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Fruity Loops - Fruit Store</h1>
    <table>
        <tr>
            <th>Fruit</th>
            <th>Price ($)</th>
        </tr>
        <c:forEach var="fruit" items="${fruits}">
            <tr>
                <td class="${fruit.name.startsWith('G') ? 'orange' : ''}">${fruit.name}</td>
                <td>${fruit.price}</td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
