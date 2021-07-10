<template>
  <div id="app">
    <header>
      <h1>RANDOM NAME GENERATOR</h1>
    </header>
    <main>
      <div>
        <p @click="copyName">{{ this.generatedName }}</p>
      </div>
      <div>
        <button @click="fetchWords">Generate</button>
      </div>
    </main>
    <footer>
      <span>Made with 💜 by Chaitanya Raj</span>
    </footer>
  </div>
</template>

<script>
import words from "./assets/words.json";

export default {
  name: "App",
  data() {
    return {
      allWords: words.words,
      generatedName: "",
    };
  },
  methods: {
    fetchWords: function() {
      this.generatedName = this.allWords
        .slice(0, 2)
        .map(function() {
          return this.splice(Math.floor(Math.random() * this.length), 1)[0];
        }, this.allWords.slice())
        .join(" ");
      console.log(this.generatedName);
    },
    copyName: function() {
      this.$clipboard(this.generatedName);
      this.$toasted.show("Copied to clipboard");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");

:root {
  --primary: #2d3142;
  --secondary: #dbdbdb;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.toast {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  border-radius: 80px;
  border-style: none;
  background: var(--primary);
  color: var(--secondary);
  cursor: pointer;
  box-shadow: 5px 5px 10px #272b3a, -5px -5px 10px #34394d;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--primary);
  color: var(--secondary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px; /* Height of the footer */
}

h1 {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 4rem;
  font-weight: 900;
  word-wrap: normal;
  margin-bottom: 50px;
  text-shadow: 5px 5px 10px #363636, -5px -5px 10px #424242;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70vw;
  min-height: 10vh;
  border-radius: 80px;
  background: var(--primary);
  color: var(--secondary);
  border-style: none;
  cursor: copy;
  box-shadow: 5px 5px 10px #272b3a, -5px -5px 10px #34394d;
}

button {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  margin-top: 20px;
  min-width: 30vw;
  min-height: 7vh;
  border-radius: 80px;
  border-style: none;
  background: var(--primary);
  color: var(--secondary);
  cursor: pointer;
  box-shadow: 5px 5px 10px #272b3a, -5px -5px 10px #34394d;
}

p:active,
button:active {
  box-shadow: 5px 5px 3px #272b3a, -5px -5px 3px #34394d;
}

footer {
  font-family: "Caveat", cursive;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Height of the footer */
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2.1rem;
  }

  p {
    min-width: 80vw;
    min-height: 8vh;
  }

  button {
    min-width: 40vw;
    min-height: 7vh;
  }
}
</style>
