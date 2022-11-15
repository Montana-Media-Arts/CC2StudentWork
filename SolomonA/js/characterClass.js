class characterClass
{
    constructor(x, y, animation)
    {
        this.x = x; 
        this.y = y; 
        this.animation = animation; 
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

    getAnimation()
    {
        return this.animation; 
    }

    drawCharacter()
    {   
        animation(this.animation, this.x, this.y); 
    }
}