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
@font-face {
  font-family: "Caveat";
  src: url("assets/Caveat-VariableFont_wght.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/Montserrat-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/Montserrat-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/Montserrat-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}

:root {
  --primary: #2d3142;
  --secondary: #dbdbdb;
}

* {
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

*:focus {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
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
  padding-bottom: 40px; /* Height of the footer */
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

h1 {
  font-size: 4rem;
  font-weight: 900;
  word-wrap: normal;
  animation: fade-in 2s ease-out;
  margin-bottom: 50px;
  text-shadow: 5px 5px 10px #272b3a, -2px -2px 10px #34394d;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fade-in 2s ease-out;
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
  box-shadow: 5px 5px 10px #272b3a, -2px -2px 10px #34394d;
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
  box-shadow: 5px 5px 10px #272b3a, -2px -2px 10px #34394d;
}

p:active,
button:active {
  box-shadow: 2px 2px 10px #272b3a, -1px -1px 10px #34394d;
}

footer {
  font-family: "Caveat", cursive;
  font-size: small;
  animation: fade-in 2s ease-out;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px; /* Height of the footer */
  text-shadow: 2px 2px 5px #272b3a, -2px -2px 5px #34394d;
}

@media screen and (max-width: 768px) {
  #app {
    padding-bottom: 40px;
  }

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

  footer {
    height: 40px;
  }
}
</style>
