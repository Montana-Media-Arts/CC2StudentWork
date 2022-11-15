class squareClass
{
    constructor(x, y, size)
    {
        this.x = x; 
        this.y = y; 
        this.size = size; 
    }

    getX()
    {
        return this.x; 
    }

    getY()
    {
        return this.y; 
    }

    getSize()
    {
        return this.size; 
    }

    drawSquare()
    {
        square(this.x, this.y, this.size); 
    }
}