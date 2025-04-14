<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Receipt</title>
</head>
<body> 


    <h1>Receipt</h1>
    
    
    
    <p><strong>Name:</strong> <c:out value="${name}"/></p>
    <p><strong>Item:</strong> <c:out value="${itemName}"/></p>
    <p><strong>Price:</strong> $<c:out value="${price}"/></p>
    
    <p><strong>Description:</strong> <c:out value="${description}"/></p>
    
    
    <p><strong>Vendor:</strong> <c:out value="${vendor}"/></p>
</body>
</html>
