<template>
  <div>
    <h2>Get all tasks</h2>
    <p><button v-on:click="logout">Logout</button></p>
    <p><button v-on:click="navigateTo('/task/create')">สร้าง Task</button></p>
    <h4>จำนวน task {{ tasks.length }}</h4>
    <div v-for="task in tasks" v-bind:key="task.id">
      <p>id: {{ task.id }}</p>
      <p>title: {{ task.title }}</p>
      <p>description: {{ task.description }}</p>
      <p>status: {{ task.status }}</p>
      <p>priority: {{ task.priority }}</p>
      <p>dueDate: {{ task.dueDate }}</p>
      <p><button v-on:click="navigateTo('/task/' + task.id)">ดูข้อมูล Task</button></p>
      <p><button v-on:click="navigateTo('/task/edit/' + task.id)">แก้ไข Task</button></p>
      <p><button v-on:click="deleteTask(task)">ลบข้อมูล Task</button></p>
      <hr>
    </div>
  </div>
</template>

<script>
import TasksService from '../../services/TasksService'
import { useAuthenStore } from '../../stores/authen'

export default {
  data() {
    return { tasks: [] }
  },
  async created() {
    try {
      this.tasks = (await TasksService.index()).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    logout () {
      const authenStore = useAuthenStore()
      authenStore.logout()
      this.$router.push({ name: 'login' })
    },
    navigateTo(route) {
      this.$router.push(route)
    },
    async deleteTask(task) {
      if (confirm('Want to delete?')) {
        await TasksService.delete(task)
        this.refreshData()
      }
    },
    async refreshData() {
      this.tasks = (await TasksService.index()).data
    }
  }
}
</script>