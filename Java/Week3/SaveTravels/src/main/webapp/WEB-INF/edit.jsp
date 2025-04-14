
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>  <link rel="stylesheet" href="/css/style.css">
    <title>Edit Expense</title>
</head>
<body>
    <h1>Edit Expense</h1>
    <form action="/expenses/update/${expense.id}" method="POST">
        Name: <input type="text" name="name" value="${expense.name}" required><br>
        Vendor: <input type="text" name="vendor" value="${expense.vendor}" required><br>
        Amount: <input type="number" step="0.01" name="amount" value="${expense.amount}" required><br>
        Description: <textarea name="description">${expense.description}</textarea><br>
        <button type="submit">Update</button>
    </form>
    <a href="/">Back to list</a>
</body>
</html>
