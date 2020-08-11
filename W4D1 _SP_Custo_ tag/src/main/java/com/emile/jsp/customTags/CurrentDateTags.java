package com.emile.jsp.customTags;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTags extends SimpleTagSupport {

    private String size="";
    private String color="";


    public  void doTag()throws JspException, IOException{
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        JspWriter out = getJspContext().getOut();
        out.write(String.format("<span style='color:%s;font-size:%s'>%s</span>", color,size,ft.format(dNow)));
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
