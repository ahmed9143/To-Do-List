<template>
  <div class="container mt-5">
    <h1 class="mb-4">To-Do List</h1>
    <AddTask />
    <TaskList />
  </div>
</template>

<script>
import AddTask from '../components/AddTask.vue';
import TaskList from '../components/TaskList.vue';

export default {
  components: {
    AddTask,
    TaskList
  }
};
</script>
