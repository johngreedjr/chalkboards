import Vue from 'vue'
import Chalkboards from '@/Chalkboards';

describe('Chalkboards.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Chalkboards)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.chalkboards h1').textContent)
      .to.equal('Walking Up the Sidewalk')
  })
})
