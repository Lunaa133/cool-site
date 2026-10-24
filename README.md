# cool-site

#### Video Demo: [click click](https://youtu.be/qb6uYscGHKI)

## Overview

a site where you can listen to some of my fav tracks and also draw something :D

(the project is structured around a multi-page architecture)

---
## File Breakdown

* **`wu.js`:**
  we can divide it into 2 main parts:
  1. *playlist:* a structured `playlist` object mapping artist keys ('avril', 'offspring', 'sum41', 'mcr') to arrays of audio file paths. it utilizes a state tracker object (`c`) to monitor the current playback index for each artist. the `play(a)` function targets the `<audio>` element (`id="hey"`), assigns the correct track source based on the artist key, initiates playback, and updates the index (`(index + 1) % tracks.length`) to loop through the artist's discography upon repeated clicks.
  2. *drawing:* initializes the 2D rendering context (`aaa`) for the canvas. listens for `mousedown`, `mousemove`, `mouseup`, and `mouseleave` events to track user interaction. and includes the `cls()` function to clear the canvas.

* **`draw.html`:**
  wanna draw draw draw? you can, thx to this page. there is a `<canvas>` element (1500x800px). a button tied to the `cls()` function allows us to clean the canvas.

* **`cd.html`:**
  there are clickable "blinkies" for each artist!!! : <br>
  <img width="150" height="20" alt="image" src="https://github.com/user-attachments/assets/316b0a7e-052a-4a5b-81d2-4c1ddb07c3fc" /><br>
  <img width="150" height="20" alt="image" src="https://github.com/user-attachments/assets/6d66fbc8-8fd9-4842-b333-07002b9c17c2" /><br>
  <img width="150" height="20" alt="image" src="https://github.com/user-attachments/assets/841ea0c1-3bbb-4d0e-bbde-1b62a4db179b" /><br>
  <img width="150" height="20" alt="image" src="https://github.com/user-attachments/assets/6ca99c32-865b-4adb-bbb5-39a9c7931777" /><br>
  when you click on any of them, a song of the artist starts to play, looping thru a playlist of one or more songs!
  
* **`index.html`:**
  this is the main/welcome page. there is a corckboard and when you click on the offsprşng album, the page changes to `cd.html`
  when you clikc on the colorful stars, then `draw.html` is your current page!!

* **`style.css`:**
  this is where i keep the corckboard design!!

## Want to Create Your Own Version? / Setup

```bash
# 1. clone the repository
git clone https://github.com/Lunaa133/cool-site
cd cool-site

# 2. open index.html
# on Windows:
start index.html

# on Mac:
open index.html
```

---

## Deployment - with GitHub

 1. push your changes to github
``` 
git add .
git commit -m "Update cool-site"
git push origin main
```
    
 2. go to your Repository Settings on GitHub.

 3. click Pages in the left sidebar.

 4. under Branch, select main (or master) and keep folder as / (root).

 5. click Save — wait a bit until a url is generated, that is where your site will be live at. (this is how mine looks like: https://lunaa133.github.io/cool-site/)

---

