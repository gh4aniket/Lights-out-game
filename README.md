# 🔦 Lights Out Game (React)

Lights Out is a puzzle game where the goal is to turn off all the lights on the board. This version is built using **React**, showcasing component-based design, state management, and simple logic implementation in an interactive UI.

## 🧠 How the Game Works

The game starts with a grid of lights. Some are **on**, and some are **off** (highlighted visually). Clicking a light **toggles** its state (on/off) as well as the state of its **immediate neighbors** (up, down, left, right). 

The objective is to **turn off all the lights** — when every tile is off, you win the game!

---

## 🎮 Screenshots

### 🟢 1. Game Start Screen

This is the initial state of the board when the game loads. Lights are randomly turned on or off.

![Start of Game](images/start.png)

---

### 🟡 2. During Gameplay

Clicking a cell toggles that cell and its neighbors. The player must think ahead to minimize moves and reach the goal efficiently.

![In-Game Action](images/playing.png)

---

### 🏁 3. Winning the Game

All lights are off — the player has solved the puzzle and wins! A congratulatory message or animation is shown.

![Victory Screen](images/win.png)

---

## 🚀 Features

- Built entirely with **React (Functional Components + useState)**
- Randomized board generation on each refresh
- Toggle logic for adjacent cells
- Win detection logic
- Clean, interactive UI

---

## 🛠️ Technologies Used

- React (with `create-react-app`)
- JavaScript (ES6+)
- CSS for styling
- Git & GitHub for version control

---
