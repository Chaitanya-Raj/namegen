<template>
  <div id="app">
    <header>
      <h1>RANDOM NAME GENERATOR</h1>
    </header>
    <main>
      <div>
        <input type="text" id="" disabled />
      </div>
      <div>
        <button>Generate</button>
      </div>
    </main>
    <footer>
      <p>Made with <span>💜</span> by Chaitanya Raj</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;900&display=swap");
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

input {
  font-family: "Montserrat", sans-serif;
  min-width: 70vw;
  min-height: 10vh;
  border-radius: 80px;
  background: var(--primary);
  color: var(--secondary);
  border-style: none;
  box-shadow: 5px 5px 10px #272b3a, -5px -5px 10px #34394d;
}

button {
  font-family: "Montserrat", sans-serif;
  margin-top: 20px;
  min-width: 30vw;
  min-height: 7vh;
  border-radius: 80px;
  border-style: none;
  background: var(--primary);
  color: var(--secondary);
  box-shadow: 5px 5px 10px #272b3a, -5px -5px 10px #34394d;
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

  input {
    min-width: 80vw;
    min-height: 8vh;
  }

  button {
    min-width: 40vw;
    min-height: 7vh;
  }
}
</style>
