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
    <link rel="stylesheet" href="/css/style.css" />
    <meta charset="ISO-8859-1">
    <title>Developer Details</title>
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
                <li class="nav-item active"><a class="nav-link" href="/logout">LogOut</a></li>
                <li class="nav-item"><a class="nav-link" href="/orgs/dashboard">Main Page</a></li>
                <li class="nav-item"><a class="nav-link" href="/jobs/new">Add A Job</a></li>
            </ul>
        </div>
    </nav>

    <div class="container mt-5">
        <h1 class="text-center mb-4">Developer Details</h1>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Dev Name</th>
                        <th>Languages</th>
                        <th>Frameworks</th>
                        <th>Get To Know The Dev</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><c:out value="${dev.devname}"></c:out></td>
                        <td><c:out value="${dev.languages}"></c:out></td>
                        <td><c:out value="${dev.frameworks}"></c:out></td>
                        <td><c:out value="${dev.devdescription}"></c:out></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="text-center mt-4">
            <form:form action="/devs/${dev.id}" method="post" modelAttribute="dev">
                <input type="hidden" name="_method" value="delete">
                <input class="btn btn-danger btn-lg" type="submit" value="Hire This Dev" style="width:auto; padding: 10px 20px;">
            </form:form>
        </div>
    </div>
</body>
</html>
