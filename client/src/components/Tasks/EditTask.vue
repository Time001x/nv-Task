<template>
  <div>
    <h1>Edit Task</h1>
    <form v-on:submit.prevent="editTask">
      <p>title: <input type="text" v-model="task.title"></p>
      <p>description: <textarea v-model="task.description"></textarea></p>
      <p>status: <input type="text" v-model="task.status"></p>
      <p>priority: <input type="number" v-model="task.priority"></p>
      <p>dueDate: <input type="date" v-model="task.dueDate"></p>
      <p><button type="submit">แก้ไข Task</button></p>
    </form>
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
  methods: {
    async editTask() {
      await TasksService.put(this.task)
      this.$router.push({ name: 'tasks' })
    }
  },
  async created() {
    try {
      this.task = (await TasksService.show(this.$route.params.taskId)).data
    } catch {
      console.log('error')
    }
  }
}
</script>