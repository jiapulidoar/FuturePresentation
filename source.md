<section id="themes">
	<h2>Themes</h2>
		<p>
			Set your presentation theme: <br>
			<!-- Hacks to swap themes after the page has loaded. Not flexible and only intended for the reveal.js demo deck. -->
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/black.css'); return false;">Black (default)</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/white.css'); return false;">White</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/league.css'); return false;">League</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/sky.css'); return false;">Sky</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/beige.css'); return false;">Beige</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/simple.css'); return false;">Simple</a> <br>
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/serif.css'); return false;">Serif</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>
		</p>
</section>

H:

# ** FUTURE GAMES ** 

by  [Sebastian Chaves](https://github.com/adamantwharf) - [Laura Santos](https://github.com/lsfinite) - [Jimmy Pulido](https://github.com/jiapulidoar)
I
H:

# Index

<!-- .slide: data-background="#7E2121" --> 
 1. The main idea  <!-- .element: class="fragment" data-fragment-index="1"-->
 1. The Games <!-- .element: class="fragment" data-fragment-index="2"-->
 1. The way we did it <!-- .element: class="fragment" data-fragment-index="3"-->
H:

# *The main idea*
<!-- .slide: data-background="#005050" -->
V:
 
 ## What is it about?
  
  >The idea of the game was creat a serie of mini games. Easy to play, easy to lose.This will become attractive to the player, so she/he will play it again and again.  
  *Do you wanna play it?* <!-- .element: class="fragment" data-fragment-index="2"-->
V:
## Mini Games?:
Yeap, we have made five of them, so you can play the one you consider more interesting. 
<!-- .element: class="fragment" data-fragment-index="1"-->

Just see the squares...  <!-- .element: class="fragment" data-fragment-index="2"-->

**And make your choice!!!** <!-- .element: class="fragment" data-fragment-index="3"-->

H:
# *The Games*
V:
### Galaga 
  >A version of the clasic game. Is an arcade video game developed by Tomohiro Nishikado and released in 1978 <!-- .element: class="fragment" data-fragment-index="1"-->
##### More information on [Wikipedia](https://en.wikipedia.org/wiki/Space_Invaders)

V: 
### Clouds
  > How far can you go?? The sky is the limit. With this game you will jump the higher you can. Just move te bus with the mouse to go up.
  The inspiration for this game was the experience as a gamer. <!-- .element: class="fragment" data-fragment-index="1"-->
V:
## Sticks 
> This game was based on the Hanoi Towers. UN puzzle Towers of Hanoi is or mathematical game invented in 1883 by the French mathematician Edouard Lucas.
###### For more information, on [Wikipedia]( https://es.wikipedia.org/wiki/Torres_de_Hanói)

<div id='abundant_id'> </div>


H:
# Leyland Numbers
<!-- .slide: data-background="#7E2121"  -->
V:

## What is it about?

Explanation of suseccion <!-- .element: class="fragment" data-fragment-index="1"-->
 
Important functions used in the code<!-- .element: class="fragment" data-fragment-index="2"-->

The final code <!-- .element: class="fragment" data-fragment-index="3"-->

V:
## Leyland numbers

What is?
>In number theory, a Leyland number is a number of the form **x^y + y^x** where x and y are integers greater than 1.

This requirement is important, since without it every positive integer would be a Leyland number of the form x1 + 1x.
Also, because of the commutative property of addition, the condition x ≥ y is usually added to avoid double-covering the set of Leyland numbers (so we have 1 < y ≤ x).<!-- .element: class="fragment" data-fragment-index="1"-->
   

Take from [Wikipedia](https://en.wikipedia.org/wiki/Leyland_number) 

V:

## Example:


**X=2    and     Y=2**      (x,y > 1)
> X^Y + Y^X = 2^2 + 2^2 =  <!-- .element: class="fragment" data-fragment-index="1"-->
8

8 is the first leyland number  <!-- .element: class="fragment" data-fragment-index="2"-->


V:
## Important functions used in the code (explanation)
### Pow
The best way to calculate the power of a number.
```java
<!--
int pow(int n, int p)
{
  if(p==0) return 1;
    
  else if ( p % 2 == 1 )
    return n * pow(n,p-1);
  
  int a = pow ( n , p%2);
  return a * a;
}
-->
 ```

 
V:
## Important functions used in the code (explanation)
### leyland
```java
<!--
IntList v;
IntList leyland (int n)
{
  if (n>13)
    n=13;
  v=new IntList();
  enesimo= new IntList();
  for(int i=0;i<n;i++)
    for(int j=0;j<=n-i;j++)
      {
          int m = ( pow(i+2,j+2) + pow(j+2,i+2) ); 
          if(! v.hasValue(m) )
            v.append(m);
      }
   //println(v);
   v.sort();
   //println(v);
   for(int i=0;i<n;i++)
      enesimo.append(v.get(i));
   return enesimo;
}
-->
 ```

V:
## Code Processing: 
```java
<!-- 
IntList v;
IntList enesimo;
int pow(int n, int p)
{
  if(p==0) return 1;
    
  else if ( p % 2 == 1 )
    return n * pow(n,p-1);
  int a = pow ( n , p/2);
  return a * a;
}

IntList layland (int n)
{
  if (n>13)
    n=13;
  v=new IntList();
  enesimo= new IntList();
  for(int i=0;i<n;i++)
    for(int j=0;j<=n-i;j++)
      {
          int m = ( pow(i+2,j+2) + pow(j+2,i+2) ); 
          if(! v.hasValue(m) )
            v.append(m);
      }
   //println(v);
   v.sort();
   //println(v);
   for(int i=0;i<n;i++)
      enesimo.append(v.get(i));
   return enesimo;
}

void setup()
{
  background(0);
  //ellipse(200,200,55,55);
  size(400,400);
  int n = 12;
  IntList lay =layland(n);
  IntList layr = layland(n);
  layr.sortReverse();
  
  for(int i=0;i<lay.size();i++)
  {
    float a = map (layr.get(i),lay.get(0),layr.get(0),lay.get(0),width+width/4);
    float b = map (lay.get(i),lay.get(0),layr.get(0),0,255);
    fill(b,0,0);
    noStroke();
    ellipse(width/2,height/2,a,a);
  }
}
-->
```


V:
## Code JavaScript:

```java
<!-- 
var circles= 10; 
    
    function setup() {
        
        createCanvas(400, 400);
        noLoop();       
    }
    
    
    
    function draw() {
        background(0);
        
        var lay = leyland();
        var layr = leyland();
        layr.reverse();
        for(var i=0;i<circles;i++)
        {
            var a = map(layr[i],lay[0],layr[0],lay[0],width+width/4);
            var b = map(lay[i],lay[0],layr[0],0,255);
            //console.log(lay);
            noStroke();
            fill(b,0,0);
            ellipse(width/2,height/2,a,a);
            
        }

        }
        

        
        function  pow(n, p)
        {
            if(p==0) 
                return 1;
            else 
                return n * pow(n,p-1);
        }
        
        function leyland()
        {
            var myset = new Set();
            for(var i=0; i<circles;i++)
                for(var j=0;j<circles-i;j++)
                {
                    var m = (Math.pow(i+2,j+2) + Math.pow(j+2,i+2));
                    myset.add(m);
                }
            //console.log(myset);
            var arr = Array.from(myset);
            arr.sort(CompareNumbers);
            //console.log(arr);
            return arr.slice(0,circles);
        }
        
        function CompareNumbers(a, b){
            return a-b; 
        }
-->
```
V: 

##The result 

<div id='leyland_id'> </div>




