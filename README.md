# Project: nv-Task

This project is a variation of the nv-webblog68 project, extended with a new model: **Task**.

## New Model: Task

### Schema
- **title**: STRING\n- **description**: TEXT\n- **status**: STRING\n- **priority**: INTEGER\n- **dueDate**: DATE

## New Controller
A dedicated controller `TaskController` has been added to handle CRUD operations for `Task`.

## New Routes
The following routes have been added to `server/src/routes.js`:

- **GET** `/tasks` - Get all tasks
- **POST** `/task` - Create a new task
- **GET** `/task/:taskId` - Get a task by ID
- **PUT** `/task/:taskId` - Update a task
- **DELETE** `/task/:taskId` - Delete a task

## Usage
Follow standard setup instructions for Client and Server.
