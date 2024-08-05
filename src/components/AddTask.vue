<template>
  <div class="input-group mb-3">
    <input
      v-model="taskText"
      @keyup.enter="addTask"
      type="text"
      class="form-control shadow-none header-title "
      placeholder="Add a new task"
    />
    <button @click="addTask" class="btn btn-primary ">Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskText: ''
    };
  },
  methods: {
    addTask() {
      if (this.taskText.trim()) {
        this.$store.dispatch('addTask', {
          id: Date.now(),
          text: this.taskText,
          completed: false
        });
        this.taskText = '';
      }
    }
  }
};
</script>



<style>
.header-title ::placeholder{
  background-color: aliceblue;
  color: aliceblue;
}
</style>