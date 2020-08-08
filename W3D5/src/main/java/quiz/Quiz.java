package quiz;

import org.junit.Test;

import java.util.List;

import static org.junit.Assert.assertEquals;



public class Quiz {
 private  int score;
 private List<Question> questions;
 private  int currentQuestionIndex;
 public  Quiz(int score, List<Question> questions, int currentQuestionIndex){
     this.score = score;
     this.questions = questions;
     this.currentQuestionIndex = currentQuestionIndex;
 }
 public boolean isCorrect(String answer) {
     Question question = this.questions.get(currentQuestionIndex);
     if (answer.equals(question.getAnswer())) {
         score++;
         currentQuestionIndex++;
         return true;
     }
     return false;
 }
 public String getCurrentQuestion(){
     return questions.get(currentQuestionIndex).getQuestion();
 }
 public int getScore(){
     return score;
 }
 public  int getCurrentQuestionIndex(){
     return currentQuestionIndex;
 }
 public  List<Question> getQuestions(){
     return questions;
 }
 public int getNumCorrect(){
     return score;
 }
 public  int getNumQuestios(){
     return  questions.size();
 }
 @Test

 public  void testIsCorrect(){
     assertEquals("9","[3, 1, 4, 1, 5, ? ]");
     assertEquals("8","[1, 1, 2, 3, 5, ? ]");

 }
}
