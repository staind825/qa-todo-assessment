# Qarchitect Technical Assignment
Thanks for applying! The steps of this interview process are as follows:
1. Phone screening
2. Technical assessment <- this is where we are now!
3. Technical interview
4. Cultural interviewv
5. C-suite interview

## Technical Assignment Details
This assessment is meant to imitate what a working environment is like. You are welcome to use all the tools available to you as you would in the role itself. However, should you progress to the next round of interviews you will be expected to perform an in depth explanation of your solutions.

We do not want this to take any more of your time than necessary, so please do yourself a favor and set a maximum 3 hour time limit. 

We have created our own version of TODO MVC. It is the same as the regular one, but we've added a few bugs.

There are 3 main pieces to the homework. Each is described in more detail further in this doc.

3 Pieces of the assignment:

1. Create a test strategy for TODO MVC
2. Help update/create the existing Playwright tests in this repo 
3. Find 4 of the bugs we have purposely created and submit bug reports for each

## Submition Details
1. Fork this repo into a private repo on your personal github account 
2. Add your changes to the test plan, Playwright tests, and bug reports 
3. Send a shareable link to Jenna of your repo. She will share the link with the hiring team

## Set up TODO MVC

1. Create a private fork of this repo you are reading now - https://github.com/pdqcom/QA-ToDo-Assessment
2. Clone the repo to your machine, then navigate your terminal to the repo
3. In your terminal run `npm install` - set up the dependencies
4. In your terminal run `npm run serve` - run the program locally on your machine


### 1. Create a Test Strategy
For your test strategy, you can add your thoughts and comments here in the Readme. We've included a template of what we are expecting, but feel free to deviate if you would do it differently.

#### Product Requirements
- When no todos are added users can only view the add item textbox
- Users can create a todo list item by typing into the box "What needs to be done?" then selecting Enter on the keyboard
- Users can have multiple items in their TODO list
- Once a user submits an item to their list, they can see: thier todo item in the list, how many items are incompleted, All button, Active button, Completed button, and Clear completed items buttons. The view will default to All items when the first todo is added
- Users can complete an item by selecting the radio button next to the item. Once selected a green checkmark appears and the item is crossed off the list. The number of items left updates to show how many are uncompleted
- Users can complete all items by selecting the down arrow above the radio buttons when there are uncompleted todos
- Once a task is completed it can be viewed in the All or Completed views
- Users can uncheck all todos by selecting the down arrow above radio buttons when all radios are selected
- Users can edit a todo item by double clicking the item, then selecting Enter on the keyboard to submit the change
- Users can delete an item in the todo list by selecting the "X" next to the todo item when they hover over the todo item. Once deleted the count of items left is updated to show uncompleted tasks. The item is removed from all lists. 
- User can select All. This will show all incompleted and completed todos
- User can select Active. This will only show all uncompleted todos
- User can select Completed. This will only show all completed todos
- User can select Clear completed to delete all Completed tasks. All completed tasks will be immediately be removed from view
- Once a todo is added, the user will always see the bottom banner even if there is no todo in the view (All, Active, Completed)
- Refreshing the page starts a new state and the users can start again from scratch

### Test plan
#### Outline a complete testing strategy that covers unit tests, integration tests, and E2E tests.

#### Describe how you would implement security testing within the testing lifecycle.

#### Propose how automated testing can be integrated into existing CI/CD pipelines.

#### Detail any tools and frameworks you would recommend for the testing process, including any specific for performance and load testing.

#### Discuss how you would ensure the testing strategy aligns with agile development practices.

### 2. Update/Create Playwright tests
We've created a handful of tests in Playwright, but they could use your help. Can you help improve these existing tests, and write a new one? You can find these tests in the tests folder.

To run Playwright you might need to install Playwright
While in your project directory navigate to the tests folder and run `npx playwright install`
To run the Playright UI run `npx playwright test --ui`

### 3. Submit bug reports
We've purposely added a handful of bugs to this repo.

In your private github repo, submit 4 bug reports to your repo



# TodoMVC: React

## Description

This application uses React 17.0.2 to implement a todo application.

-   [React](https://reactjs.org/) is a JavaScript library for creating user interfaces.

## Requirements

The only requirement is an installation of Node, to be able to install dependencies and run scripts to serve a local server.

```
* Node (min version: 18.13.0)
* NPM (min version: 8.19.3)
```


