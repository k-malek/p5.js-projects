# p5.js-projects
2D/3D animation is my latest hobby. This repository contains some of my projects: links to animations and codes. I encourage you to begin journey through my world with project list.txt file.

# Geometria3D - p5.js

This file contains everything I created according to geometry in p5: matrix transformations, classes for 2D and 3D primitives and lots of other nerdy stuff ;D

# List of primitive figure classes

Every single class creates figure out of two points given - class Punkt(x,y,z). Every single class has rotate method x.obroc(A,B,theta), which asks for three variables: A,B - points from which the axis of rotation is created and theta - angle (in degrees). Geometria has degrees-to-radians change function so e.g. both 45 and deg(0.785398163...) are acceptable for correct angle in degrees input :)

- Trojkat(A,B) - equilatteral triangle
- Kwadrat(A,B) - square
- Pieciokat(A,B) - regular pentagon
- Czworoscian(A,B) - tetrahedron (requires Trojkat class)
- Osmioscian(A,B) - octahedron (requires Trojkat class)
- Dwunastoscian(A,B) - dodecahedron (requires Pieciokat class)

You can change the size of an object by changing distance between points given as function input.