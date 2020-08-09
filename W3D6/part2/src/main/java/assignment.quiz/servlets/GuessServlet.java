package assignment.quiz.servlets;



import assignment.quiz.business.Question;
import assignment.quiz.business.Quiz;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "GuessServlet",urlPatterns="/")
public class GuessServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    Quiz sessionQuiz = (Quiz) request.getSession().getAttribute("quiz");
    String result = (String) request.getParameter("txtAnswer");

    if(sessionQuiz.getNumCorrect() == sessionQuiz.getNumOfQtns()-1){
        RequestDispatcher dispatcher = request.getRequestDispatcher("gameover.jsp");
        dispatcher.forward(request, response);
    } else{
        if(sessionQuiz.isCorrect(result)){
            viewAttribute(request, sessionQuiz," ");
        }else{
            viewAttribute(request, sessionQuiz,"Wrong answer!");
        }
        RequestDispatcher dispatcher = request.getRequestDispatcher("quiz.jsp");
        dispatcher.forward(request, response);
    }
    }
   @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

       List<Question> questions = new ArrayList<>();
       questions.add(new Question("[3, 1, 4, 1, 5, ? ]", "9"));
       questions.add(new Question("[1, 1, 2, 3, 5, ? ]","8"));
       questions.add(new Question("[1, 4, 9, 16, 25, ? ]","36"));
       questions.add(new Question("[2, 3, 5, 7, 11, ? ]","13"));
       questions.add(new Question("[1, 2, 4, 8, 16, ? ]","32"));
       Quiz quiz = new Quiz(0, questions,0);
       HttpSession session = request.getSession();
       session.setAttribute("quiz" , quiz);

       Quiz sessQuiz = (Quiz) session.getAttribute("quiz");

       // setAttributes
       viewAttribute(request,sessQuiz,"");

       //View
       RequestDispatcher dispatcher = request.getRequestDispatcher("quiz.jsp");
       dispatcher.forward(request,response);
    }

    private void viewAttribute(HttpServletRequest request,Quiz quiz,String error){
        request.setAttribute("NumCorrect", quiz.getNumCorrect());
        request.setAttribute("currentQtn", quiz.getCurrentQuestion());
        request.setAttribute("error", error);
    }



}
