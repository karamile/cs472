<%--
  Created by IntelliJ IDEA.
  User: emilekaramutsa
  Date: 8/10/20
  Time: 2:31 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
  <head>
    <title>Custom Tag</title>
    <%@ taglib prefix="ct" uri="/WEB-INF/currentDateTags.tld"%>
  </head>
  <body>
  <h2>Current  Date Custom</h2>
   <ct:CurrentDateTags  color="red" size="12px"/>
   <p><strong>Thanks You!!</strong></p>
  </body>
</html>
