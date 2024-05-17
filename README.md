#### Todo App

This small React project was developed as a training exercise. The goal of the project was to create a simple Todo app using React.

![Todo App Screenshot](https://raw.githubusercontent.com/auxfuse/todoR/main/assets/img.png)

In the app, users can create new Todo items by typing in the input field and pressing enter. The new item is then added to the list and rendered to the DOM. Instead of modifying the original array of Todos during filtering, the `setFiltered` state is used to generate and display the Todo items.

Users can also update the status of each Todo item to show whether it has been completed or not. This is done by clicking on the item, which will toggle its status between completed and uncompleted. In addition, users can delete items from the todo list by clicking on the delete button. This removes the item from both the localStorage and the project's state.

The app also includes filtering functionality, which allows users to view `all`, `complete`, or `incomplete` tasks in the list. This is done by selecting the desired filter option from a dropdown menu.

Todos are saved to local storage so that they persist even when the user closes or refreshes the page. The `setTodos` state is used to access and update the saved Todos.

Overall, this project provides a simple but functional Todo app that allows users to create, update, and delete Todo items, as well as filter them based on their completion status.
