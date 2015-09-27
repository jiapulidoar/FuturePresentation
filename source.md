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

# Successions 

by some [Sebastian Chaves](https://github.com/adamantwharf) - [Laura Santos](https://github.com/lsfinite) - [Jimmy Pulido](https://github.com/jiapulidoar)

H:

# Index

<!-- .slide: data-background="#7E2121" --> 
 1. Abundant Numbers <!-- .element: class="fragment" data-fragment-index="1"-->
 1. Leyland Numbers <!-- .element: class="fragment" data-fragment-index="2"-->

H:

# Abundant Numbers 
<!-- .slide: data-background="#005050" -->
V:
 
 ## What is it about?
 Explanation of suseccion <!-- .element: class="fragment" data-fragment-index="1"-->

 Important functions used in the code<!-- .element: class="fragment" data-fragment-index="2"-->

 The final code <!-- .element: class="fragment" data-fragment-index="3"--> 
V:
## Abundant Number

 What is?
  
   >In number theory, an abundant number is a number for which the sum of its proper divisors is greater than the number itself. The amount by which the sum exceeds the number is the abundance. 

   Take from [Wikipedia](https://en.wikipedia.org/wiki/Abundant_number)
V:
## Example:
12 is an abundant number. 
Divisors: 1, 2, 3, 4, 6 <!-- .element: class="fragment" data-fragment-index="1"-->

Sum: 16  <!-- .element: class="fragment" data-fragment-index="2"-->

Abundance:4  <!-- .element: class="fragment" data-fragment-index="3"-->

> 16 Is grater than 12 <!-- .element: class="fragment" data-fragment-index="4"-->
V:
## Important functions used in the code (explanation)
### Sum_of_div
```java

int sum_of_div ( int n )
{
  tmp.append(n);
  int sum = 0;
  for ( int i = 1; i < n ; i ++)
     if ( n % i == 0 )
	 {
        sum = sum + i;
        tmp.append(i);
	  }
	    return sum;    
}

 ```
V:
## Code Processing: 
```java
<!--
int sum_of_div ( int n ) 
ArrayList<IntList>  abundants = new ArrayList <IntList>();
IntList tmp = new IntList();
int sum_of_div ( int n )
{
  tmp.append(n);
  int sum = 0;
  for ( int i = 1; i < n ; i ++)
    if ( n % i == 0 )
    {
      sum = sum + i;
      tmp.append(i);
    }
  return sum;    
}
// a comment to test git
void setup ()
{
   PImage image = loadImage("stallman.jpg"); 
   size( 610,400);
     background(0,50,50);
   int n = 10;

   int cont = 0;
   int number = 1;

   while ( true )
   {
     if ( cont == n )
       break;
     tmp = new IntList();
     int sumDiv = sum_of_div(number);
     if ( number < sumDiv)
     {
       tmp.append(sumDiv);
       abundants.add(tmp);
       cont ++ ;
     }
     number ++ ;
      
   }
   for ( int i = 0 ; i < cont ; i ++ )
   {
      println (i + " " + abundants.get(i) );
   }
   float scale = 3;
   float x = 0;
   for ( int xi = 0 ; xi < 6 ; xi ++ )
   {
     
     x += abundants.get(xi).get(abundants.get(xi).size() - 1 )/2.0 * scale;
     float y = abundants.get(xi).get(0)/2.0 * scale;
     fill(255,255,200);
     noStroke();
     ellipse(x,y, abundants.get(xi).get(0) * scale ,abundants.get(xi).get(0) * scale);
     y += abundants.get(xi).get(0)/2.0* scale;
     
     for ( int i = 1 ; i < abundants.get(xi).size(); i ++ )
     {
       int size = abundants.get(xi).size();
       float a = map(abundants.get(xi).get(i),abundants.get(xi).get(1) 
                 ,abundants.get(xi).get(size-2)*1.1,0,255);
       fill(255,255-a,255-a); 
       noStroke();
       y += abundants.get(xi).get(i)/2.0 * scale;
       println(y);
       ellipse(x, y , abundants.get(xi).get(i)* scale,abundants.get(xi).get(i)* scale);
       y += abundants.get(xi).get(i)/2.0 * scale;  
     }
     x += abundants.get(xi).get(abundants.get(xi).size() - 1 )/2.0 * scale;
   }
}
-->
```
V:
##The result 

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

##Functions in the code
