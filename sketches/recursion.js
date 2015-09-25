var sketch = function( p ) {
    var squares = 5; 
    
    p.setup = function() {
        p.createCanvas(400, 400);
        p.noLoop();
    };
    
    p.draw = function() {
        p.background(255,0, 255);
        var w = p.width / squares;
        for(var i = 0; i < squares; i++) {
            p.fill(p.map(fibonacci(i+1), fibonacci(squares), 0, 0, 255));
            //p.fill(fibonacci(i+1));
            p.rect(i*w,0,w,50);
        }
    };
        
    function fibonacci(n) {
        // salida de la recursion
        if(n == 1)
            return 0;
        if(n == 2)
            return 1;
        // avance de la recursion:
        if( n > 2)
            return fibonacci(n-2) + fibonacci(n-1);
        // si n es negativo o 0
        return -1;
    }
};

var myp5 = new p5(sketch, 'recursion_id');