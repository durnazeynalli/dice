# Dice Game

A simple, interactive two-player dice game built with vanilla JavaScript, HTML, and CSS. The application simulates random dice rolls and evaluates the winner using client-side DOM manipulation.

- **Live Demo:** [https://durnazeynalli.github.io/dice/](https://durnazeynalli.github.io/dice/)

## Features

- **Randomized Rolls:** Generates random dice values between 1 and 6 for each player on page refresh.
- **Dynamic Image Switching:** Updates the displayed dice faces dynamically based on generated numbers.
- **Outcome Display:** Evaluates results and renders whether Player 1 won, Player 2 won, or the match ended in a draw.
- **Lightweight & Dependency-Free:** Built strictly with standard web technologies requiring no build tools or package managers.

## Tech Stack

- **JavaScript (Vanilla)** - Core game logic and DOM manipulation
- **HTML5** - Page structure and dice containers
- **CSS3** - Layout styling and responsive presentation

## Project Structure

```text
dice/
├── css/
│   └── styles.css       # Main stylesheet
├── images/              # Dice face assets (dice1.png - dice6.png)
├── js/
│   └── index.js         # Dice roll logic and DOM updates
├── index.html           # Main application entry point
└── README.md
```

## Getting Started

Because this project uses static HTML, CSS, and JavaScript, no build step or package installation is required.

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/durnazeynalli/dice.git
   cd dice
   ```

2. Open `index.html` directly in your browser:
   - Double-click `index.html` in your file explorer, or
   - Serve using a local server such as Python:
     ```bash
     python3 -m http.server 8000
     ```
     Then visit `http://localhost:8000` in your web browser.