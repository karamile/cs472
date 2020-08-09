package assignment.quiz.business;

import java.util.List;

public class Quiz {
    private int score;
    private List<Question> questions;
    private int currentQuestionIndex;

    public Quiz(int score, List<Question> questions, int currentQuestionIndex){
        this.score = score;
        this.questions = questions;
        this.currentQuestionIndex = currentQuestionIndex;
    }

    public boolean isCorrect(String answer){
        Question question= this.questions.get(currentQuestionIndex);
        if(answer.equals(question.getAnswer())){
            score++;
            currentQuestionIndex++;
            return true;
        }
        return false;
    }
    public String getCurrentQuestion(){
        return questions.get(currentQuestionIndex).getQuestion();
    }
    public int getScore() {
        return score;
    }
    public int getCurrentQuestionIndex(){
        return currentQuestionIndex;
    }

    public List<Question> getQuestions() {
        return questions;
    }
    public int getNumCorrect(){
        return score;
    }
    public int  getNumOfQtns(){
        return questions.size();
    }
}
