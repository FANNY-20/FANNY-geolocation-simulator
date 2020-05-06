const PUSH_MESSAGE = "PUSH_MESSAGE";
const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export const state = () => ({
  messages: [],
});

export const getters = {};

export const mutations = {
  [PUSH_MESSAGE](state, { id, date, value, color }) {
    state.messages.push({
      id,
      date,
      value,
      color,
    });
  },
  [CLEAR_MESSAGES](state) {
    state.messages = [];
  },
};

export const actions = {
  pushMessage({ commit }, { value, color }) {
    const id = Math.random();
    const date = this.$moment();

    commit(PUSH_MESSAGE, {
      id,
      date,
      value,
      color,
    });
  },
  clearMessages({ commit }) {
    commit(CLEAR_MESSAGES);
  },
};
