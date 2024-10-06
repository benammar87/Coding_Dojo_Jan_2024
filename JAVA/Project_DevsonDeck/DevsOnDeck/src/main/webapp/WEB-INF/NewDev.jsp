<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="/css/style.css"/>
    <meta charset="ISO-8859-1">
    <title>Create A Profile</title>
</head>
<body class="dark-background">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">DevsOnDeck</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link" href="/orgs/dashboard">Main Page</a></li>
            </ul>
        </div>

    </nav>

    <div class="container mt-5">
        <h2 class="text-center">Create A Profile</h2>
        <form:form class="form" action="/devs" method="post" modelAttribute="dev">
            <hr>
            <div class="form-group">
                <label for="devname">Name</label>
                <form:input path="devname" class="form-control" id="devname"/>
                <form:errors path="devname" cssClass="text-danger"/>
            </div>

            <div class="form-group">
                <label for="devdescription">Description</label>
                <form:textarea path="devdescription" class="form-control" id="devdescription" rows="5"/>
                <form:errors path="devdescription" cssClass="text-danger"/>
            </div>

            <div class="form-group">
                <h3>Languages</h3>
                <form:errors path="languages" cssClass="text-danger"/>
                <div class="form-check">
                    <form:checkbox path="languages" value="Java" class="form-check-input" id="langJava"/>
                    <label class="form-check-label" for="langJava">Java</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="Danjo" class="form-check-input" id="langDanjo"/>
                    <label class="form-check-label" for="langDanjo">Danjo</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="Flask" class="form-check-input" id="langFlask"/>
                    <label class="form-check-label" for="langFlask">Flask</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="Rails" class="form-check-input" id="langRails"/>
                    <label class="form-check-label" for="langRails">Rails</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="Spring" class="form-check-input" id="langSpring"/>
                    <label class="form-check-label" for="langSpring">Spring</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="SQL" class="form-check-input" id="langSQL"/>
                    <label class="form-check-label" for="langSQL">SQL</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="JS" class="form-check-input" id="langJS"/>
                    <label class="form-check-label" for="langJS">JS</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="C#" class="form-check-input" id="langCSharp"/>
                    <label class="form-check-label" for="langCSharp">C#</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="GO" class="form-check-input" id="langGO"/>
                    <label class="form-check-label" for="langGO">GO</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="CSS" class="form-check-input" id="langCSS"/>
                    <label class="form-check-label" for="langCSS">CSS</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="RUBY" class="form-check-input" id="langRUBY"/>
                    <label class="form-check-label" for="langRUBY">RUBY</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="languages" value="Python" class="form-check-input" id="langPython"/>
                    <label class="form-check-label" for="langPython">Python</label>
                </div>
            </div>

            <div class="form-group">
                <h3>Frameworks</h3>
                <form:errors path="frameworks" cssClass="text-danger"/>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="Java" class="form-check-input" id="frameJava"/>
                    <label class="form-check-label" for="frameJava">Java</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="Danjo" class="form-check-input" id="frameDanjo"/>
                    <label class="form-check-label" for="frameDanjo">Danjo</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="Flask" class="form-check-input" id="frameFlask"/>
                    <label class="form-check-label" for="frameFlask">Flask</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="Rails" class="form-check-input" id="frameRails"/>
                    <label class="form-check-label" for="frameRails">Rails</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="Spring" class="form-check-input" id="frameSpring"/>
                    <label class="form-check-label" for="frameSpring">Spring</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="SQL" class="form-check-input" id="frameSQL"/>
                    <label class="form-check-label" for="frameSQL">SQL</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="JS" class="form-check-input" id="frameJS"/>
                    <label class="form-check-label" for="frameJS">JS</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="C#" class="form-check-input" id="frameCSharp"/>
                    <label class="form-check-label" for="frameCSharp">C#</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="GO" class="form-check-input" id="frameGO"/>
                    <label class="form-check-label" for="frameGO">GO</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="CSS" class="form-check-input" id="frameCSS"/>
                    <label class="form-check-label" for="frameCSS">CSS</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="RUBY" class="form-check-input" id="frameRUBY"/>
                    <label class="form-check-label" for="frameRUBY">RUBY</label>
                </div>
                <div class="form-check">
                    <form:checkbox path="frameworks" value="Python" class="form-check-input" id="framePython"/>
                    <label class="form-check-label" for="framePython">Python</label>
                </div>
            </div>

            <div class="form-group text-center">
                <input type="submit" value="Submit" class="btn btn-primary"style="width:auto; padding: 10px 20px;"/>
            </div>
        </form:form>
    </div>
</body>
</html>
