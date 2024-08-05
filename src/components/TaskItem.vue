<template>
  <li :class="['list-group-item', { 'list-group-item-success': task.completed }]">
    <div class="d-flex align-items-center">
      <input type="checkbox" v-model="task.completed" @change="toggleTask" class="form-check-input me-2" />
      <div v-if="!editing" class="flex-grow-1">
        <span :class="{ 'text-decoration-line-through': task.completed }">{{ task.text }}</span>
      </div>
      <input
        v-if="editing"
        v-model="taskText"
        @blur="updateTask"
        @keyup.enter="updateTask"
        class="form-control me-2 shadow-none"
      />
      <div class="ms-auto">
        <button v-if="!editing" @click="enableEditing" class="btn btn-primary btn-sm me-2">Edit</button>
        <button @click="deleteTask" class="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      editing: false,
      taskText: this.task.text
    };
  },
  methods: {
    deleteTask() {
      this.$emit('delete-task', this.task.id);
    },
    toggleTask() {
      this.$emit('toggle-task', this.task.id);
    },
    enableEditing() {
      this.editing = true;
      this.taskText = this.task.text;
    },
    updateTask() {
      if (this.taskText.trim()) {
        this.$emit('edit-task', { ...this.task, text: this.taskText });
        this.editing = false;
      } else {
        this.editing = false;
      }
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
