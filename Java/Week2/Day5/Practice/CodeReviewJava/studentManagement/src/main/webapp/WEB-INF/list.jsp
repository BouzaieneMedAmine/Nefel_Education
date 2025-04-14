<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Students List</title>
</head>
<body>



<h2>Students List</h2>

<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Course</th>
</tr>
</thead>
<tbody>
<c:forEach items="${students}" var="student">
<tr>
<td>${student.email}</td>
<td>${student.course}</td>

</tr> </c:forEach>
</tbody>
</table>
</body>
</html>