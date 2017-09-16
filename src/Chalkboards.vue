<template>
  <div id="main">
    <div class="row">
      <div class="text-center">
        <button v-on:click="newContents" class="btn btn-default btn-lg next-button" >Eh.. Fuck this place. Next.</button>
      </div>
    </div>
    <div class="row">
      <div class="chalk-wrapper">
        <div class="chalk-title">
          <h2>{{contents.restaurantName}} {{contents.restaurantSubName}}</h2>
        </div>
        <div class=chalk-body>
          <p>
            Today's Special:
          </p>
          <p class="food-modifier">
            {{ contents.modifier }}
          </p>
          <p>
            {{contents.adjective}} {{contents.noun}}
          </p>
          <p>
            Only {{ contents.price}}!!
          </p>
          <p>
            From {{contents.startTime}} to {{contents.endTime}}
          </p>
        </div>
      </div>
    </div>
    <h1 class="title">Walking Up the Sidewalk...</h1>
  </div>

</template>
<script>

import Chalkboards from './Chalkboards'

export default {
  data() {
    return {
      contents: {}
    }
  },
  mounted()  {
    this.contents = this.generateContents();
  },
  methods: {
    generateContents: function() {
      var choices = fetchData();
      return {
        noun: randomize(choices.noun),
        adjective: randomize(choices.adjective),
        modifier: randomize(choices.modifier),
        price: randomize(choices.price),
        startTime: randomize(choices.startTime),
        endTime: randomize(choices.endTime),
        absurdPhrase: randomize(choices.absurdPhrase),
        restaurantName: randomize(choices.restaurantName),
        restaurantSubName: randomize(choices.restaurantSubName)
      }
    },
    newContents: function() {
      this.contents = this.generateContents();
    }
  },
  components: {
    Chalkboards
  }

};

function randomize(word) {
  return word[Math.floor(Math.random() * word.length)]
}

import Words from './words'

//refactor into a giant file obviously
function fetchData() {
  return {
    noun: Words.noun,
    adjective: Words.adjective,
    modifier: Words.modifier,
    price: Words.price,
    startTime: Words.startTime,
    endTime: Words.endTime,
    absurdPhrase: Words.absurdPhrase,
    restaurantName: Words.restaurantName,
    restaurantSubName: Words.restaurantSubName
  };
}

</script>

<style>
body {
    background-image: url("../static/sign.jpg");
    background-size: 55%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #1f1f2e;
}
html, body {
  font-family: 'Fredericka the Great', cursive;
  height: 100%;
  margin: 0;
  padding: 0;
}

img {
  padding: 0;
  display: block;
  margin: 0 auto;
  max-height: 100%;
  max-width: 100%;
}

.title {
  text-align: center;
  font-size: 4vw;
  position:fixed;
  left:0px;
  bottom:75px;
  height:30px;
  width:100%;
}

.chalk-wrapper {
  display: inline-block;
  max-width: 33%;
  padding-left: 1.5vw;
}

.chalk-wrapper .chalk-title {
  text-align: center;
  width:100%;
  height:0;
	font-size: 2.5vw;
  line-height: 0;
	color:white;
  position:absolute;
  top:20%;
}

.chalk-wrapper .chalk-body {
  text-align: center;
  width:100%;
  height:0;
	font-size: 1.3vw;
  line-height: 0;
	color:white;
  position:absolute;
  top:30%;
}

.chalk-body p {
  margin-bottom: 75px;
}

.food-modifier {
  margin-bottom: 30px !important;
}

.next-button {
  min-width: 250px;
  margin-top: 50px;
  margin-left: 30px;
}



</style>
