<template>
  <div>
        <h1 class="title rectangle">PERBEKEL <hr></h1>
        <h1 class="level-1 rectangle">I Made Ardena</h1>
        <ol class="level-2-wrapper right">
            <li>
                <!-- <h2></h2> -->
            </li>
            <li>
                <h2 class="title rectangle">Title<hr></h2>
                <h2 class="level-2 rectangle">Name</h2>
            </li>
        </ol>
        <ol class="level-2-wrapper right">
            <li>
                <ol class="level-3-wrapper">
                    <li>
                        <h3 class="level-3 rectangle">...</h3>
                    </li>
                    <li>
                        <h3 class="level-3 rectangle">...</h3>
                    </li>
                </ol>
            </li>
            <li>
                <ol class="level-3-wrapper">
                    <li>
                        <h3 class="level-3 rectangle">...</h3>
                    </li>
                    <li>
                        <h3 class="level-3 rectangle">...</h3>
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
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;
}
 
.rectangle {
  position: relative;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.title {
    width: 50%;
    margin: 0 auto 0px;
    background: var(--level-1);
}

.level-2-wrapper .title {
    width: 70%;    
    background: var(--level-2);
}

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
  height: 450px;
  background: var(--black);
}

.right {
    margin-left: 30%;
      
}

.level-2-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
 
.level-2-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: calc(25% + 10px);
  width: 50%;
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
  width: 20px;
  height: 2px;
  background: var(--black);
}

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
  left: calc(27% - 5px);
  width: calc(50% + 10px);
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

</style>