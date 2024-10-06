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
    <title>Dashboard</title>
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
            </ul>
        </div>
    </nav>

    <div class="container mt-4">
        <h1 class="text-center mb-4">Dashboard</h1>

        <div class="mb-3">
            <a href="/jobs/new" class="btn btn-success btn-lg">List A New Position</a>
        </div>

        <div class="card mb-4">
            <div class="card-header">
                <h2 class="mb-0">Positions</h2>
            </div>
            <div class="card-body">
                <table class="table table-striped table-hover">
                    <tbody>
                        <c:forEach var="jobs" items="${jobService}">
                            <tr>
                                <td>
                                    <a href="/jobs/${jobs.id}"><c:out value="${jobs.jobname}"></c:out></a>
                                </td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2 class="mb-0">Available Developers</h2>
            </div>
            <div class="card-body">
                <table class="table table-striped table-hover">
                    <tbody>
                        <c:forEach var="devs" items="${devService}">
                            <tr>
                                <td>
                                    <a href="/devs/${devs.id}"><c:out value="${devs.devname}"></c:out></a>
                                </td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>
