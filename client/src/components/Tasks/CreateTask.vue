<template>
  <div>
    <h1>Create Task</h1>
    <form v-on:submit.prevent="createTask">
      <p>title: <input type="text" v-model="task.title"></p>
      <p>description: <textarea v-model="task.description"></textarea></p>
      <p>status: <input type="text" v-model="task.status"></p>
      <p>priority: <input type="number" v-model="task.priority"></p>
      <p>dueDate: <input type="date" v-model="task.dueDate"></p>
      <p><button type="submit">สร้าง Task</button></p>
    </form>
  </div>
</template>

<script>
import TasksService from '../../services/TasksService'

export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        status: '',
        priority: 0,
        dueDate: ''
      }
    }
  },
  methods: {
    async createTask() {
      try {
        await TasksService.post(this.task)
        this.$router.push({ name: 'tasks' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>