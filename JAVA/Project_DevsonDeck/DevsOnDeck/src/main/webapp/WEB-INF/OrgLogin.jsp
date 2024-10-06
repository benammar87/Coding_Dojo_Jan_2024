<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page isErrorPage="true"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/style.css" />
<meta charset="ISO-8859-1">
<title>Org-Login</title>
</head>
<body class="dark-background">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">DevsOnDeck</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/orgs/register">Org Register</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/devs/register">Dev Register</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/devs/login">Dev Login</a>
            </li>
        </ul>
    </div>
</nav>

	<div class="container mt-5">
		<h1 class="text-center text-white">Org Log In</h1>
		<form:form action="/orgs/login" method="post" modelAttribute="newLogin" class="mt-4">
			<div class="form-group">
				<label for="email" class="text-white">Email</label>
				<form:input path="email" class="form-control" id="email"/>
				<form:errors path="email" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="password" class="text-white">Password</label>
				<form:input path="password" class="form-control" type="password" id="password"/>
				<form:errors path="password" cssClass="text-danger"/>
			</div>
			<div class="form-group text-center">
				<input class="button btn btn-primary" type="submit" value="Log In" style="width:auto; padding: 10px 20px;"/>
			</div>
		</form:form>
	</div>
</body>
</html>
