<template>
  <div>
    <h1>Show Task</h1>
    <p>id: {{ task.id }}</p>
    <p>title: {{ task.title }}</p>
    <p>description: {{ task.description }}</p>
    <p>status: {{ task.status }}</p>
    <p>priority: {{ task.priority }}</p>
    <p>dueDate: {{ task.dueDate }}</p>
  </div>
</template>

<script>
import TasksService from '../../services/TasksService'

export default {
  data() {
    return {
      task: null
    }
  },
  async created() {
    const taskId = this.$route.params.taskId
    this.task = (await TasksService.show(taskId)).data
  }
}
</script>