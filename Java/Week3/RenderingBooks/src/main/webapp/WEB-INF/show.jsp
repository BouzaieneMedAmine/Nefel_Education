<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Book Details</title>
</head>
<body>
    <h1>Book Info</h1>
    <p><strong>Title:</strong> ${book.title}</p>
    <p><strong>Description:</strong> ${book.description}</p>
    <p><strong>Language:</strong> ${book.language}</p>
    <p><strong>Pages:</strong> ${book.numberOfPages}</p>

    <a href="/books">Back to Book List</a>
</body>
</html>
