<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page isErrorPage="true" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/style.css"/>
<meta charset="ISO-8859-1">
<title>Organization Sign-Up</title>
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
                <a class="nav-link" href="/devs/register">Dev Register</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/orgs/login">Org Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/devs/login">Dev Login</a>
            </li>
        </ul>
    </div>
</nav>

	<div class="container mt-5">
		<h1 class="welcome d-flex justify-content-center">Organization Sign-Up</h1>
		<form:form action="/orgs/register" method="post" modelAttribute="newOrg" class="mt-4">
			<div class="form-group">
				<label for="org" class="white">Org Name</label>
				<form:input path="org" class="form-control"/>
				<form:errors path="org" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="firstName" class="white">First Name</label>
				<form:input path="firstName" class="form-control"/>
				<form:errors path="firstName" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="lastName" class="white">Last Name</label>
				<form:input path="lastName" class="form-control"/>
				<form:errors path="lastName" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="email" class="white">Contact Email</label>
				<form:input path="email" class="form-control"/>
				<form:errors path="email" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="orgAddress" class="white">Org Address</label>
				<form:input path="orgAddress" class="form-control"/>
				<form:errors path="orgAddress" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="orgCity" class="white">Org City</label>
				<form:input path="orgCity" class="form-control"/>
				<form:errors path="orgCity" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="state" class="white">State</label>
				<form:input path="state" class="form-control"/>
				<form:errors path="state" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="password" class="white">Password</label>
				<form:input path="password" type="password" class="form-control"/>
				<form:errors path="password" cssClass="text-danger"/>
			</div>
			<div class="form-group">
				<label for="confirm" class="white">Confirm Password</label>
				<form:input path="confirm" type="password" class="form-control"/>
				<form:errors path="confirm" cssClass="text-danger"/>
			</div>
			<div class="form-group d-flex justify-content-center">
				<!-- Button with adjusted size -->
				<input class="button btn btn-primary" type="submit" value="Register" style="width:auto; padding: 10px 20px;"/>
			</div>
			<div>
	<a class="nav-link" href="/devs/register">Need to Sign Up as a Developer ?</a>
	</div>
		</form:form>
	</div>
	
</body>
</html>
