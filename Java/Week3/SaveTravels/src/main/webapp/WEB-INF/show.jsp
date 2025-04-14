
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>  <link rel="stylesheet" href="/css/style.css">
    <title>Expense Details</title>
</head>
<body>
    <h1>${expense.name}</h1>
    <p><strong>Vendor:</strong> ${expense.vendor}</p>
    <p><strong>Amount:</strong> ${expense.amount}</p>
    <p><strong>Description:</strong> ${expense.description}</p>
    <a href="/">Back to list</a>
</body>
</html>
