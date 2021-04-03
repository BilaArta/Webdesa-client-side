<template>
  <div class="container">
  <h1 class="level-1 rectangle">CEO</h1>
  <ol class="level-2-wrapper">
    <li>
      <h2 class="level-2 rectangle">Director A</h2>
      <ol class="level-3-wrapper">
        <li>
          <h3 class="level-3 rectangle">Manager A</h3>
          <ol class="level-4-wrapper">
            <li>
              <h4 class="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
        <li>
          <h3 class="level-3 rectangle">Manager B</h3>
          <ol class="level-4-wrapper">
            <li>
              <h4 class="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li>
      <h2 class="level-2 rectangle">Director B</h2>
      <ol class="level-3-wrapper">
        <li>
          <h3 class="level-3 rectangle">Manager C</h3>
          <ol class="level-4-wrapper">
            <li>
              <h4 class="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
        <li>
          <h3 class="level-3 rectangle">Manager D</h3>
          <ol class="level-4-wrapper">
            <li>
              <h4 class="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 class="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
</div>
</template>

<script>
export default {

}
</script>

<style>
:root {
  --level-1: #8dccad;
  --level-2: #f5cc7f;
  --level-3: #7b9fe0;
  --level-4: #f27c8d;
  --black: black;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ol {
  list-style: none;
}

body {
  margin: 50px 0 100px;
  text-align: center;
  font-family: "Inter", sans-serif;
}

.container {
  max-width: 1000px;
  padding: 0 10px;
  margin: 0 auto;
}

.rectangle {
  position: relative;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}


/* LEVEL-1 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-1 {
  width: 50%;
  margin: 0 auto 40px;
  background: var(--level-1);
}

.level-1::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background: var(--black);
}


/* LEVEL-2 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-2-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.level-2-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: calc(26% + 7px);
  width: 49%;
  height: 2px;
  background: var(--black);
}

.level-2-wrapper::after {
  display: none;
  content: "";
  position: absolute;
  left: -20px;
  bottom: -20px;
  width: calc(100% + 20px);
  height: 2px;
  background: var(--black);
}

.level-2-wrapper li {
  position: relative;
}

.level-2-wrapper > li::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background: var(--black);
}

.level-2 {
  width: 70%;
  margin: 0 auto 40px;
  background: var(--level-2);
}

.level-2::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background: var(--black);
}

.level-2::after {
  display: none;
  content: "";
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-100%, -50%);
  width: 15%;
  height: 2px;
  background: var(--black);
}


/* LEVEL-3 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-3-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  width: 90%;
  margin: 0 auto;
}

.level-3-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: calc(29% - 5px);
  width: calc(50% + 0px);
  height: 2px;
  background: var(--black);
}

.level-3-wrapper > li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 2px;
  height: 20px;
  background: var(--black);
}

.level-3 {
  margin-bottom: 20px;
  background: var(--level-3);
}


/* LEVEL-4 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-4-wrapper {
  position: relative;
  width: 80%;
  margin-left: auto;
}

.level-4-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: -20px;
  width: 2px;
  height: calc(100% + 20px);
  background: var(--black);
}

.level-4-wrapper li + li {
  margin-top: 20px;
}

.level-4 {
  font-weight: normal;
  background: var(--level-4);
}

.level-4::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-100%, -50%);
  width: 30%;
  height: 2px;
  background: var(--black);
}


/* MQ STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 800px) {
  .rectangle {
    padding: 20px 10px;
  }

  .level-1,
  .level-2 {
    width: 100%;
  }

  .level-1 {
    margin-bottom: 20px;
  }

  .level-1::before,
  .level-2-wrapper > li::before {
    display: none;
  }
  
  .level-2-wrapper,
  .level-2-wrapper::after,
  .level-2::after {
    display: block;
  }

    .level-2::after {
        width: 7%;
    }

  .level-2-wrapper {
    width: 85%;
    margin-left: 10%;
  }

  .level-2-wrapper::before {
    left: -20px;
    width: 2px;
    height: calc(100% + 40px);
  }

  .level-2-wrapper > li:not(:first-child) {
    margin-top: 50px;
  }

  .level-3-wrapper::before {
    left: calc(30% - 16px);
    width: calc(50% + 0px);
  }

  .level-4::before {
        width: 22%;
    }

}

@media screen and (max-width: 700px) {

    .level-2::after {
        width: 13%;
    }

    .level-4::before {
        width: 52%;
    }

    .level-3-wrapper::before {
        left: calc(35% - 18px);
        width: calc(50% - 2px);
    }

}

@media screen and (max-width: 400px) {
    .level-2::after {
        width: 15%;
    }

    .level-4::before {
        width: 65%;
    }
    .level-3-wrapper::before {
        left: calc(35% - 13px);
        width: calc(50% - 2px);
    }

}

@media screen and (max-width: 320px) {
    .level-2::after {
        width: 17%;
    }
    .level-4::before {
        width: 80%;
    }

    .level-3-wrapper::before {
        left: calc(35% - 7px);
        width: calc(50% + 2px);
    }

}

</style>