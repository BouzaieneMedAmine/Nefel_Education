<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/script.js"></script>
    <title>Date</title>
</head>
<body>
    <h1>Current Date:</h1>
    <p><c:out value="${currentDate}" /></p>
</body>
</html>
