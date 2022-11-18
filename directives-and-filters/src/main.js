import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Global Custom Directive
Vue.directive('highlight', {

  inserted: function(el) {

    el.style.background = 'yellow';
    el.style.color = 'white';
    el.style.padding = '4px';
    el.style.width = 'fit-content';

  }

})

// Global Custom Directive With Arguments
Vue.directive('customText', {

  inserted: function(el, binding) {

    el.style.textAlign = 'center';
    el.style.padding = '5px';

    // Fade heading on using .fade modifier
    if(binding.modifiers.fade) {
      el.style.opacity = '0.1';
    }

    // Dark Text On Using .dark modifier
    if(binding.modifiers.dark) {
      console.log("Dark Enabled");
      el.style.color = 'white';
      el.style.background = 'black';
    }

    console.log(binding.modifiers);

    if(binding.value == 'heading') {

      el.style.fontSize = '32px';
      el.style.fontWeight = '800';

    } else if(binding.value == 'title') {

      el.style.fontSize = '25px';
      el.style.fontWeight = '600';
      el.style.color = 'grey';

    } else if(binding.value == 'subtitle') {

      el.style.fontSize = '16px';
      el.style.fontWeight = '400';

    }
  }

})

// Global Filter to capitalize first letter of all words
Vue.filter('makeItCapital', (value) => {

  if(!value) return '';
  value = value.toString();

  let wordList = value.split(' ');
  wordList = wordList.map(item => item[0].toUpperCase() + item.slice(1));

  return wordList.join(' ');
})

new Vue({
  render: h => h(App),
}).$mount('#app')
