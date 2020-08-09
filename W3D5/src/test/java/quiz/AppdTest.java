package quiz;

import junit.textui.TestRunner;
import org.junit.Test;

import javax.annotation.security.RunAs;

import static org.junit.Assert.assertEquals;

class AppTest {

    @Test



    public  void testIsCorrect(){
        assertEquals("9","[3, 1, 4, 1, 5, ? ]");
        assertEquals("8","[1, 1, 2, 3, 5, ? ]");

    }
}
