# cool-site

#### Video Demo: [click click](https://youtu.be/qb6uYscGHKI)

## Overview

a site where you can listen to some of my fav tracks and also draw something :D

(the project is structured around a multi-page architecture)

---
## File Breakdown

* **`wu.js`:**
  we can divide it into 2 main parts:
  1. *playlist:* a structured `playlist` object mapping artist keys ('avril', 'offspring', 'sum41', 'mcr') to arrays of audio file paths. it utilizes a state tracker object (`c`) to monitor the current playback index for each artist. The `play(a)` function targets the `<audio>` element (`id="hey"`), assigns the correct track source based on the artist key, initiates playback, and updates the index (`(index + 1) % tracks.length`) to loop through the artist's discography upon repeated clicks.
  2. *drawing:* initializes the 2D rendering context (`aaa`) for the canvas. listens for `mousedown`, `mousemove`, `mouseup`, and `mouseleave` events to track user interaction. and includes the `cls()` function to clear the canvas.

* **`draw.html`:**
  wanna draw draw draw? you can, thx to this page. there is a `<canvas>` element (1500x800px). a button tied to the `cls()` function allows us to clean the canvas.

* **`cd.html`:**
  there are clickable "blinkies" for each artist!!! :
  <img width="150" height="20" alt="image" src="https://github.com/user-attachments/assets/316b0a7e-052a-4a5b-81d2-4c1ddb07c3fc" />
  <img width="234" height="51" alt="image" src="https://github.com/user-attachments/assets/6d66fbc8-8fd9-4842-b333-07002b9c17c2" />
  


* **`index.html`:**
  

* **`style.css`:**
  

---
