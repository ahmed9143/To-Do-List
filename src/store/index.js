import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [
      { id: 1, text: 'Learn Vue.js', completed: false },
      { id: 2, text: 'Read Vuex documentation', completed: false },
      { id: 3, text: 'Create a to-do list app', completed: false },
      { id: 4, text: 'Style app with Bootstrap', completed: false },
      { id: 5, text: 'Deploy app to Netlify', completed: false }
    ]
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    TOGGLE_TASK(state, taskId) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    EDIT_TASK(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task);
    },
    deleteTask({ commit }, taskId) {
      commit('DELETE_TASK', taskId);
    },
    toggleTask({ commit }, taskId) {
      commit('TOGGLE_TASK', taskId);
    },
    editTask({ commit }, updatedTask) {
      commit('EDIT_TASK', updatedTask);
    }
  },
  getters: {
    allTasks: state => state.tasks
  }
});
