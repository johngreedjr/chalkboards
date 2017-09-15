<template>
<div>
<h1>Walking Up the Sidewalk</h1>
<h2>{{contents.restaurantName}} {{contents.restaurantSubName}}</h2>
<p>
Today's Special: {{ contents.modifier }} {{contents.adjective}} {{contents.noun}}
</p>
<p>
  Only {{ contents.price}}!!
</p>
<p>
  From {{contents.startTime}} to {{contents.endTime}}
</p>
<p>
  {{contents.absurdPhrase}}
</p>
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
    }
  },
  components: {
    Chalkboards
  }

};

function randomize(word) {
  return word[Math.floor(Math.random() * word.length)]
}

//refactor into a giant file obviously
function fetchData() {
  return {
    noun: ['Steak', 'Vodka', 'Gin', 'Chicken', 'Lamb'],
    adjective: ['Roasted', 'Cheesy', 'Purple', 'Juicy'],
    modifier: ['Farm-to-Table', 'Fresh', 'Artisinally Crafted', 'Handmade', 'Handcrafted'],
    price: ['$39.89', '49.56', '$10.99', '$90'],
    startTime: ['6pm', '7pm', '5pm'],
    endTime: ['6pm', '7pm', '5pm'],
    absurdPhrase: ['Here you are family', 'Come on in the water is warm'],
    restaurantName: ['Tasty', 'Raving', 'Midnight', 'Jumping'],
    restaurantSubName: ['Jacks', 'Moes', 'Mickels']
  };
}

</script>

<style>

</style>
