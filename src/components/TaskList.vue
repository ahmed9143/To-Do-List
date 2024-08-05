<template>
  <ul class="list-group">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @delete-task="deleteTask"
      @toggle-task="toggleTask"
      @edit-task="editTask"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  computed: {
    ...mapGetters(['allTasks']),
    tasks() {
      return this.allTasks;
    }
  },
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId);
    },
    toggleTask(taskId) {
      this.$store.dispatch('toggleTask', taskId);
    },
    editTask(updatedTask) {
      this.$store.dispatch('editTask', updatedTask);
    }
  }
};
</script>
