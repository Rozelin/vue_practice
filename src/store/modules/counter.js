const state = {
  counter: 0,
  click: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.click + ' clicks';
  }
};

const mutations = {
  incrementMutation: function (state) {
  state.counter++;
  state.click++;
  },
  decrementMutation: function (state) {
    state.counter--;
    state.click++;
  }
};

export default {
  state,
  mutations,
  getters
};
