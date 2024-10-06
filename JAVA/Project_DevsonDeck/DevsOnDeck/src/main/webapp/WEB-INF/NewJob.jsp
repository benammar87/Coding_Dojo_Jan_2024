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
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/style.css" />
<meta charset="ISO-8859-1">
<title>Add A Job</title>
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
				<li class="nav-item active"><a class="nav-link"
					href="/orgs/dashboard">Main Page</a></li>
			</ul>
		</div>
	</nav>
	<div class="container mt-5">
		<form:form class="form" action="/jobs" method="post"
			modelAttribute="job">
			<h3 class="text-center">Create A Job Listing</h3>
			<hr>
			
			<div class="form-group">
				<label for="jobname">Job Name</label>
				<form:input path="jobname" class="form-control" id="jobname"/>
				<form:errors path="jobname" cssClass="text-danger"/>
			</div>
			
			<div class="form-group">
				<label for="jobdesc">Description</label>
				<form:textarea path="jobdesc" class="form-control" id="jobdesc" rows="5"></form:textarea>
				<form:errors path="jobdesc" cssClass="text-danger"/>
			</div>
			
			<div class="form-group">
				<label>Skills</label><br />
				<form:errors path="skills" cssClass="text-danger"/><br />
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="Java" class="form-check-input"/>
					<label class="form-check-label">Java</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="Danjo" class="form-check-input"/>
					<label class="form-check-label">Danjo</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="Flask" class="form-check-input"/>
					<label class="form-check-label">Flask</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="Rails" class="form-check-input"/>
					<label class="form-check-label">Rails</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="Spring" class="form-check-input"/>
					<label class="form-check-label">Spring</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="SQL" class="form-check-input"/>
					<label class="form-check-label">SQL</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="JS" class="form-check-input"/>
					<label class="form-check-label">JS</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="C#" class="form-check-input"/>
					<label class="form-check-label">C#</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="GO" class="form-check-input"/>
					<label class="form-check-label">GO</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="CSS" class="form-check-input"/>
					<label class="form-check-label">CSS</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="RUBY" class="form-check-input"/>
					<label class="form-check-label">RUBY</label>
				</div>
				<div class="form-check form-check-inline">
					<form:checkbox path="skills" value="Python" class="form-check-input"/>
					<label class="form-check-label">Python</label>
				</div>
			</div>
			
			<div class="form-group text-center">
				<input type="submit" value="Submit" class="btn btn-primary" style="width:auto; padding: 10px 20px;"/>
			</div>
		</form:form>
	</div>
</body>
</html>
