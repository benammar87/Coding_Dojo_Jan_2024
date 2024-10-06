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
    <title>Dev-Login</title>
</head>
<body class="dark-background">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">DevsOnDeck</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link" href="/orgs/register">Org Register</a></li>
                <li class="nav-item"><a class="nav-link" href="/orgs/login">Org Login</a></li>
                <li class="nav-item"><a class="nav-link" href="/devs/register">Dev Register</a></li>
            </ul>
        </div>
    </nav>

    <div class="container mt-5">
        <h2 class="text-center">Dev-Log In</h2>
        <form:form action="/devs/login" method="post" modelAttribute="newLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <form:errors path="email" cssClass="text-danger"/>
                <form:input path="email" class="form-control" id="email"/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <form:errors path="password" cssClass="text-danger"/>
                <form:input type="password" path="password" class="form-control" id="password"/>
            </div>
            <div class="form-group text-center">
                <input class="btn btn-primary" type="submit" value="Log In" style="width:auto; padding: 10px 20px;"/>
            </div>
        </form:form>
    </div>
</body>
</html>
