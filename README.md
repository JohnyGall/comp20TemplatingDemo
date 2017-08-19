# Comp 20 Templating Demo
A quick demo of Pug (formally Jade) templating using a Node.js back end for [Comp 20 at Tufts](http://www.cs.tufts.edu/comp/20/). This is a mock superhero card game, where users can view cards for superheroes.

The slides from the guest lecture can be found [here.](https://docs.google.com/presentation/d/17fevD0rNk_sgFOwMpxgXnlP5EH4YmOr9zngX-UV4r24/edit#slide=id.g13a8e06411_0_1583)


## Running the Demo
Clone this repo
Create a mongo database called "heroes" by running this command in your terminal 

```
mongo heroes
```

Inside the mongo shell run these commands

```
db.heroes.insert({name: "Batman",health: 5,attack: 5, image:"batman.jpg", text:["Battlecry: Talks in a raspy voice","Deathrattle: Returns as Ben Affleck"]})
db.heroes.insert({name: "Superman",health: 100,attack: 100, image:"superman.jpg", text:["Charge","Battlecry: Wins you the game because he's mad overpowered"]})
```

Now run this example from inside the project directory.

```
nodejs index.js
```

Now visit localhost:5000/?hero=Batman in your browser.


## Things to Try:
1. Insert some more heroes into the database - see if you can get them to load into the app.
2. Change the header for all pages.
3. Change the card template so the cards look different.
4. Add a post route so that users can add their own heroes.
5. Try to crash the app with bad input!  
