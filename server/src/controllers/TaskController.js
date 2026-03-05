const { Task } = require('../models')

module.exports = {
  // get all task
  async index (req, res) {
    try {
      const tasks = await Task.findAll()
      res.send(tasks)
    } catch (err) {
      res.status(500).send({
        error: 'The tasks information was incorrect'
      })
    }
  },

  // create task
  async create (req, res) {
    try {
      const task = await Task.create(req.body)
      res.send(task.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Create task incorrect'
      })
    }
  },

  // edit task, suspend, active
  async put (req, res) {
    try {
      await Task.update(req.body, {
        where: {
          id: req.params.taskId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Update task incorrect'
      })
    }
  },

  // delete task
  async remove (req, res) {
    try {
      const task = await Task.findOne({
        where: {
          id: req.params.taskId
        }
      })

      if (!task) {
        return res.status(403).send({
          error: 'The task information was incorrect'
        })
      }

      await task.destroy()
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'The task information was incorrect'
      })
    }
  },

  // get task by id
  async show (req, res) {
    try {
      const task = await Task.findByPk(req.params.taskId)
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'The task information was incorrect'
      })
    }
  }
}
