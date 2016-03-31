# Comp 20 Templating Demo
A quick demo of jade templating for Comp 20 at Tufts. This is a mock superhero card game, where users can view cards for heroes.
try visiting localhost:5000/?=Batman
Review inline comments inside of

## Running the Demo
Create a mongo database called "heroes"
Run this command in your terminal

```
mongo heroes
```

Inside the mongo shell run these commands

```
db.heroes.insert({name: "Batman",health: 5,attack: 5, image:"batman.jpg", text:["Battlecry: Talks in a raspy voice","Deathrattle: Returns as Ben Affleck"]})
db.herose.insert({name: "Superman",health: 100,attack: 100, image:"superman.jpg", text:["Charge","Battlecry: Wins you the game because he's mad overpowered"]})
```

Now switch back to your terminal and run from inside the project directory.

```
nodejs index.js
```

Now visit localhost:5000/?=Batman in your browser.


## Things to Try:
1. Insert some more heroes into the database - see if you can get them to load into the app.
2. Change the header for all pages.
3. Change the card template so the cards look different.
4. Add a post route so that users can add their own heroes.
5. Try to crash the app with bad input!  
