package servlet;

import quiz.Question;
import quiz.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "GuessAnswer",urlPatterns="/")
public class GuessAnswer  extends HttpServlet {
    @Override
    protected   void doPost(HttpServletRequest request , HttpServletResponse response)
        throws ServletException, IOException{
    String ans = (String)request.getParameter("txtAnswer");
        Quiz quiz = (Quiz)request.getSession().getAttribute("quiz");
        if(quiz.getNumCorrect() == quiz.getNumQuestios() -1){
            genQuizOverPage(response.getWriter());
        }else {
            if(quiz.isCorrect(ans)){
                genQuizPage(quiz,response.getWriter(),quiz.getCurrentQuestion(),false,ans);
            }else {
                genQuizPage(quiz,response.getWriter(),quiz.getCurrentQuestion(),true,ans);
            }
        }
    }
    @Override
   protected void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException,IOException{
        List<Question> questions = new ArrayList<>();
        questions.add(new Question("[3, 1, 4, 1, 5, ? ]","9"));
        questions.add(new Question("[1, 1, 2, 3, 5, ? ]","8"));
        questions.add(new Question("[1, 4, 9, 16, 25, ? ]","36"));
        questions.add(new Question("[2, 3, 5, 7, 11, ? ]","13"));
        questions.add(new Question("[1, 2, 4, 8, 16, ? ]","32"));
        int timout=20;
        Quiz quiz = new Quiz(0,questions,0);
        HttpSession session = request.getSession(true);
        session.setAttribute("quiz",quiz);
        session.setMaxInactiveInterval(timout);

        Quiz sessQuiz = (Quiz) session.getAttribute("quiz");
        String currQuest = sessQuiz.getCurrentQuestion();
        genQuizPage(sessQuiz,response.getWriter(),currQuest,true,null);
    }
    private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

        out.print("<html>");
        out.print("<head>");
        out.print("	<title>NumberQuiz</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post'>");
        out.print("		<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br></br>");
        out.print("<p>Guess the next number in the sequence! ");
        out.print(currQuest + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        /* if incorrect, then print out error message */
        if (error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' value='Next' /></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }

    private void genQuizOverPage(PrintWriter out) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<p style='color:red'>The number quiz is over!</p>	</body> ");
        out.print("</html> ");
    }
}
