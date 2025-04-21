<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<title>Registration</title>
</head>
<body>
	
		<h1 class="text-warning text-center mt-2">User</h1>
		
			<div class="mb-3 d-flex ">
				<div class="flex-grow-1">
					<form:form class="m-5 w-50" action="/register" method="post"
						modelAttribute="newUser">
						<h2 class="mb-4">New User</h2>

						<div class="mb-3 d-flex align-items-center gap-2">
							<label for="fname" class="form-label">Name</label>
							<form:input type="text" class="form-control" path="name"
								id="fname"></form:input>
							<form:errors path="name" class="text-danger" />
						</div>

						<div class="mb-3 mb-3 d-flex align-items-center gap-2">
							<label for="exampleInputEmail1" class="form-label">Email</label>
							<form:input path="email" type="email" class="form-control"
								id="exampleInputEmail1"></form:input>
							<form:errors path="email" class="text-danger" />
						</div>
						<div class="mb-3 mb-3 d-flex align-items-center gap-2">
							<label for="exampleInputPassword1" class="form-label">Password</label>
							<form:input path="password" type="password" class="form-control"
								id="exampleInputPassword1"></form:input>
							<form:errors path="password" class="text-danger" />
						</div>
						<div class="mb-3 mb-3 d-flex align-items-center gap-2">
							<label for="confirmp" class="form-label">Confirm Password</label>
							<form:input path="confirm" type="password" class="form-control"
								id="confirmp"></form:input>
							<form:errors path="confirm" class="text-danger" />
						</div>

						<button type="submit" class="btn btn-outline-dark">Register</button>
					</form:form>
				</div>
				<hr />
				<div class="flex-grow-1">
					<form:form class="m-5 w-50" action="/login" method="post"
						modelAttribute="newLogin">
						<h2 class="mb-4">Log in</h2>

						<div class="mb-3 mb-3 d-flex align-items-center gap-2">
							<label for="exampleInputEmail1" class="form-label">Email</label>
							<form:input path="email" type="email" class="form-control"
								id="exampleInputEmail1"></form:input>
							<form:errors path="email" class="text-danger" />
						</div>
						<div class="mb-3 mb-3 d-flex align-items-center gap-2">
							<label for="exampleInputPassword1" class="form-label">Password</label>
							<form:input path="password" type="password" class="form-control"
								id="exampleInputPassword1"></form:input>
							<form:errors path="password" class="text-danger" />
						</div>


						<button type="submit" class="btn btn-outline-dark">Login</button>
					</form:form>
				</div>
			</div>
</body>
</html>