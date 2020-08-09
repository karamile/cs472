<%--
  Created by IntelliJ IDEA.
  User: emileKaramutsa
  Date: 8/09/2020
  Time: 9:21 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page isELIgnored="false" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Number Game</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
</head>

<body>
    <form method="post">
        <h3>Have fun with NumberQuiz!</h3>
        <p> Your current score is : ${NumCorrect}</p>
        <p> Guess the next number in the quiz! ${currentQtn}</p>
        <p> Your answer:<input type='text' name='txtAnswer' value=''> </p>
        <p style='color:red'>${error}</p>
        <p> <input type='submit' name='btnNext' value='Next' /> </p>

    </form>
</body>

</html>
