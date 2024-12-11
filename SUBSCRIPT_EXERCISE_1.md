# SUBSCRIPT EXERCISE 1 - TODO APP

## Features

    1) USERS
    2) TODOS: tasks to be done
    3) COMMENTS: comments on task, they can be replied

## Database Design

1) Users:
    - id
    - name

2) Todos:
    - id
    - title
    - order
    - completed
    - assigned_to user fk, can be empty
    - created_by user fk

3) Comments:
    - id
    - text
    - todo fk
    - user fk
    - reply_to comment fk, can be empty

## Tasks

1) TASK-1: Recreate architecture
2) TASK-2: create user
    - Create simple user
    - Create API to create user
    - Test it
3) TASK-3: Assign TODOS
    - Add created_by and assigned_to to TODOS
    - Update post to TODOS to receive created_by and assigned_to
    - Update patch to TODOS to accept assigned_to
    - Test it
4) TASK-4: Comment
    - Create comment table
    - Create API to create comment
    - Test it

