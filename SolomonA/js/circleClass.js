class circleClass 
{
    constructor(x, y, size, speed)
    {
        this.x = x; 
        this.y = y; 
        this.size = size; 
        this.speed = speed; 
    }

    getX()
    {
        return this.x; 
    }
    
    setX(x)
    {
       this.x = x;  
    }
    
    getY()
    {
        return this.y; 
    }

    setY(y)
    {
        this.y = y; 
    }

    getSize()
    {
        return this.size; 
    }

    moveDown()
    {
        this.y += this.speed; 
    }

    drawCircle()
    {   
        //draw()
        //{
            circle(this.x, this.y, this.size);
        //}
    }
}