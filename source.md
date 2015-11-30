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

  
More information on [Wikipedia](https://en.wikipedia.org/wiki/Space_Invaders) <!-- .element: class="fragment" data-fragment-index="1"-->

V: 
### Clouds
  > How far can you go?? The sky is the limit. With this game you will jump the higher you can. Just move te bus with the mouse to go up.


The inspiration for this game was the experience as a gamer. <!-- .element: class="fragment" data-fragment-index="1"-->
V:
## Sticks 
> This game was based on the Towers of Hanoi. This Puzzle is a mathematical game invented in 1883 by the French mathematician Edouard Lucas.


The more you play, the more difficult it will become. 

For more information, on [Wikipedia]( https://es.wikipedia.org/wiki/Torres_de_Hanói)

V:
## Colors
<!-- .slide: data-background="#7E2121"  -->
> This game consist of let the drop fall in the correct color cube. The drop will follow the mouse position.If you lose, just ckick any part of the canvas, a the game will start again.  
V:

## Bounce
 >Version of the classic game of the red ball that have to pass thought different mazes to achive their goal. The ball obeys the up/down, right/left arrows of the keyboard. 

V:
## Resume 
| The games   | How to play them                 |
| ------------|:--------------------------------:|
| Galaga      | Up/down arrows and mouse press   |
| Clouds      | With the position of the mouse   |  
| Sticks      | Ckick the towers with the mouse  | 
| Colors      | Follow the mouse position        |
|Bounce       | Use your keyboard arrows to play |

V:

# *The way we did it *:
Each one of the games is a class, and Games, is the super class.  


