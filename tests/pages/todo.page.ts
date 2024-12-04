import { type Locator, type Page, expect } from '@playwright/test';

export class TodoPage {
    readonly page: Page;
    readonly newTodoInput: Locator;
    readonly todoList: Locator;
    readonly todoItems: Locator;
    readonly toggleAllCheckbox: Locator;
    readonly clearCompleted: Locator;
    readonly todoCount: Locator;
    readonly filters: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTodoInput = page.locator('.new-todo');
        this.todoList = page.locator('.todo-list');
        this.todoItems = this.todoList.locator('li');
        this.toggleAllCheckbox = page.locator('.toggle-all');
        this.clearCompleted = page.locator('.clear-completed');
        this.todoCount = page.locator('.todo-count');
        this.filters = page.locator('.filters li');
    }

    async goto() {
        await this.page.goto('http://127.0.0.1:7002');
    }

    async addTodo(text: string) {
        await this.newTodoInput.fill(text);
        await this.newTodoInput.press('Enter');
    }

    async toggleTodo(index: number = 0) {
        await this.todoItems.nth(index).locator('.toggle').click();
    }

    async deleteTodo(index: number = 0) {
        const item = this.todoItems.nth(index);
        await item.locator('[data-testid=todo-item-toggle]').hover();
        await item.locator('[data-testid=todo-item-button]').click();
    }

    async toggleAll() {
        await this.toggleAllCheckbox.click();
    }

    async clearCompletedTodos() {
        await this.clearCompleted.click();
    }

    async filterTodos(filter: 'All' | 'Active' | 'Completed') {
        const filterMap = { All: 0, Active: 1, Completed: 2 };
        await this.filters.nth(filterMap[filter]).click();
    }

    // Assertions
    async expectTodoCount(count: number) {
        await expect(this.todoItems).toHaveCount(count);
    }

    async expectTodoText(text: string, index: number = 0) {
        await expect(this.todoItems.nth(index)).toHaveText(text);
    }

    async expectTodoCompleted(index: number = 0, completed: boolean = true) {
        await expect(this.todoItems.nth(index)).toHaveClass(completed ? /completed/ : /^(?!.*completed).*$/);
    }

    async expectItemsCountText(text: string) {
        await expect(this.todoCount).toContainText(text);
    }
} 