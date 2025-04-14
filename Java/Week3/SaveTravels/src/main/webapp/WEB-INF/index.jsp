<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Save Travels</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Expense Tracker</h1>

    <form action="create" method="POST">
        Name: <input type="text" name="name" required><br>
        Vendor: <input type="text" name="vendor" required><br>
        Amount: <input type="number" step="0.01" name="amount" required><br>
        Description: <textarea name="description"></textarea><br>
        <button type="submit">Add Expense</button>
    </form>

    <table border="1">
        <tr><th>Name</th><th>Vendor</th><th>Amount</th><th>Actions</th></tr>
        <c:forEach var="expense" items="${expenses}">
            <tr>
                <td><a href="/expenses/${expense.id}">${expense.name}</a></td>
                <td>${expense.vendor}</td>
                <td>${expense.amount}</td>
                <td>
                    <a href="/expenses/edit/${expense.id}">Edit</a>
                    <form action="/expenses/delete/${expense.id}" method="delete" style="display:inline">
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
