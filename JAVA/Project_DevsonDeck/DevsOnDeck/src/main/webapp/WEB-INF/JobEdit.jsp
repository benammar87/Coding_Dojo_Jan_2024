<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/css/style.css" />
    <meta charset="ISO-8859-1">
    <title>Update Job Listing</title>
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
                <li class="nav-item active"><a class="nav-link" href="/orgs/dashboard">Main Page</a></li>
            </ul>
        </div>
    </nav>

    <div class="container mt-5">
        <h3 class="text-center">Update A Job Listing</h3>
        <form:form action="/jobs/${job.id}" method="post" modelAttribute="job">
            <input type="hidden" name="_method" value="put">
            <div class="form-group">
                <label for="jobname">Name</label>
                <form:errors path="jobname" cssClass="text-danger"/>
                <form:input path="jobname" class="form-control" id="jobname"/>
            </div>
            <div class="form-group">
                <label for="jobdesc">Description</label>
                <form:errors path="jobdesc" cssClass="text-danger"/>
                <form:textarea path="jobdesc" class="form-control" rows="7" id="jobdesc"/>
            </div>
            <div class="form-group">
                <label>Skills</label>
                <form:errors path="skills" cssClass="text-danger"/>
                <div>
                    Java <form:checkbox path="skills" value="Java"/>
                    Danjo <form:checkbox path="skills" value="Danjo"/>
                    Flask <form:checkbox path="skills" value="Flask"/>
                    Rails <form:checkbox path="skills" value="Rails"/>
                    Spring <form:checkbox path="skills" value="Spring"/>
                    SQL <form:checkbox path="skills" value="SQL"/>
                    JS <form:checkbox path="skills" value="JS"/>
                    C# <form:checkbox path="skills" value="C#"/>
                    GO <form:checkbox path="skills" value="GO"/>
                    CSS <form:checkbox path="skills" value="CSS"/>
                    RUBY <form:checkbox path="skills" value="RUBY"/>
                    Python <form:checkbox path="skills" value="Python"/>
                </div>
            </div>
            <div class="text-center">
                <input type="submit" class="btn btn-primary" value="Update Job"/>
                <a href="/orgs/dashboard" class="btn btn-secondary ml-2">Cancel</a>
            </div>
        </form:form>

        <div class="text-center mt-4">
            <form:form action="/jobs/${job.id}" method="post" modelAttribute="job">
                <input type="hidden" name="_method" value="delete">
                <input class="btn btn-danger" type="submit" value="Delete Job"style="width:auto; padding: 10px 20px;">
            </form:form>
        </div>
    </div>
</body>
</html>
