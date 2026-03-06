import Api from './Api'

export default {
    index () {
        return Api().get('tasks')
    },
    show (taskId) {
        return Api().get('task/' + taskId)
    },
    post (task) {
        return Api().post('task', task)
    },
    put (task) {
        return Api().put('task/' + task.id, task)
    },
    delete (task) {
        return Api().delete('task/' + task.id)
    },
}