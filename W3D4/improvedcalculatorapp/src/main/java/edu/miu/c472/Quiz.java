package edu.miu.c472;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/test")
public class Quiz extends  HttpServlet{


        @Override
        public void doPost(HttpServletRequest request, HttpServletResponse response)
                throws ServletException, IOException {
            String message = request.getParameter("hello");
            int amount = Integer.parseInt(request.getParameter("amount"));
            PrintWriter out = response.getWriter();

            for (int i = 0; i  < amount; i++) {
                out.write("<p>" + message + "</p>");
            }
        }
    }


