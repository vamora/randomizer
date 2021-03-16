//Unreliable Movie Recommendations

let movie = ['Jurassic Park (1990)', 'The Day After Tomorrow (2004)', 'Halloween (1978)', 'Shrek (2001)', 'Chicken Run (2000)', 'Moulin Rouge (2001)', 'House of Wax (2005)', 'The Boy (2016)', '10 Things I Hate About You (1999)', 'Friday the 13th (1980)', 'Batman Begins (2005)', 'Just My Luck (2006)', 'Scream (1996)', 'A Nightmare on Elm Street (1984)', 'Warm Bodies (2013)', 'Kung Fu Hustle (2004)', 'The Karate Kid (1984)','Rise of the Guardians (2012)', 'Tangled (2010)', 'Tuck Everlasting (2002)', 'Get Out (2017)', 'A Nightmare Before Christmas (1993)', 'Step Brothers (2008)', 'Rush Hour (1998)', 'The Fast and the Furious (2001)', 'Elisa and Marcela (2019)', 'Mad Max: Fury Road (2015)', 'Coco (2016)', 'Black Panther (2018)', 'Slumdog Millionaire (2008)', 'The Perks of Being a Wallflower (2012)', 'Us (2019)', 'Always Be My Maybe (2019)', 'Moonlight (2016)', 'Wolf Children (2012)', 'Train to Busan (2016)', 'Aladdin (2019)', 'Instructions Not Included (2013)'];

let genre = ['a horror', 'a comedy', 'a fantasy', 'a musical', 'a sci-fi', 'an action movie', 'a romantic comedy', 'a romance', 'a thriller', 'a western', 'a documentary', 'a drama', 'a mockumentary'];

let mr;
let gr;

let wrds1;
let wrds2;

function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(60);
  intText();
  // fortText();
  
}

function draw() {
}

function mousePressed(){
  mr = int(random(movie.length));
  gr = int(random(genre.length));
  fortText();
  wrds2 = movie[mr] + ',' + ' ' + genre[gr] + '.'; 
}

function intText() {
  fill(255, 0, 0);
  textAlign(CENTER);
  text('Movie time!', width * 0.5, height * 0.2);
  text('(A Confusing and Unreliable Movie Randomizer)', width * 0.5, height * 0.25);
}

function fortText() {
  background(0);
  intText();
  fill (255, 0, 0);
  textAlign(CENTER);
  text('You should watch:', width * 0.5, height * 0.8);
  text(wrds1, width * 0.5, height * 0.8);
  text(wrds2, width * 0.5, height * 0.85);
}