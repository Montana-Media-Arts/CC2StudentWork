class myGrid
{
    constructor(x, y, title)
    {
        this.x = x;
        this.y = y;
        this.title=title;
    }

    drawGrid()
    { 
        fill(0, 0, 0);
        textFont(boldFont);
        text(this.title, this.x, this.y);
        if(timerVal>=10){
          text("0:"+ timerVal, this.x+103, this.y);
          }
        if(timerVal<10){
          text("0:0"+ timerVal, this.x+103, this.y);
          }

        fill (230, 230, 255);
        square(this.x, this.y+10, 124);
        fill(255, 200, 200);
        rect(this.x, this.y+155, 124, 20);
        line(this.x+5, this.y+165, this.x+119, this.y+165);

        line(this.x, this.y+41, this.x+124, this.y+41);
        line(this.x, this.y+72, this.x+124, this.y+72);
        line(this.x, this.y+103, this.x+124, this.y+103);
        line(this.x+31, this.y+10, this.x+31, this.y+134);
        line(this.x+62, this.y+10, this.x+62, this.y+134);
        line(this.x+93, this.y+10, this.x+93, this.y+134);

        fill(30, 30, 30);
        rect(x+this.x+5, this.y+160, 5, 10);


    }
}