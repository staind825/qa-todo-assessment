import { test } from '@playwright/test';
import { TodoPage } from './pages/todo.page';

test.describe('Todo CRUD Operations', () => {
    let todoPage: TodoPage;

    test.beforeEach(async ({ page }) => {
        todoPage = new TodoPage(page);
        await todoPage.goto();
    });

    test('add list item', async () => {
        await todoPage.addTodo('testing 123 testing');
        await todoPage.expectTodoCount(1);
        await todoPage.expectTodoText('testing 123 testing');
    });

    test('delete list item', async () => {
        await todoPage.addTodo('testing 123 testing');
        await todoPage.addTodo('testing 123 testing');
        await todoPage.deleteTodo(0);
        await todoPage.expectTodoCount(1);
    });

    test('complete list item', async () => {
        await todoPage.addTodo('testing 123 testing');
        await todoPage.toggleTodo();
        await todoPage.expectTodoCompleted(0, true);
    });

    test('filter active items', async () => {
        await todoPage.addTodo('active task');
        await todoPage.addTodo('completed task');
        await todoPage.toggleTodo(1);
        await todoPage.filterTodos('Active');
        await todoPage.expectTodoCount(1);
        await todoPage.expectTodoText('active task');
    });

    test('clear completed items', async () => {
        await todoPage.addTodo('task to clear');
        await todoPage.toggleTodo();
        await todoPage.clearCompletedTodos();
        await todoPage.expectTodoCount(0);
    });

    test('toggle all items', async () => {
        await todoPage.addTodo('task 1');
        await todoPage.addTodo('task 2');
        await todoPage.toggleAll();
        await todoPage.expectTodoCompleted(0, true);
        await todoPage.expectTodoCompleted(1, true);
    });

    test.fixme('plural item count', async () => {
        await todoPage.addTodo('task 1');
        await todoPage.expectItemsCountText('1 item left');
        await todoPage.addTodo('task 2');
        await todoPage.expectItemsCountText('2 items left');
    });
});

