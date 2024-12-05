# Qarchitect Technical Assignment
Thanks for applying! The steps of this interview process are as follows:
1. Phone screening
2. Technical assessment <- *this is where we are now!*
3. Technical interview
4. Cultural interview
5. C-suite interview

## Technical Assignment Details
This assessment is meant to imitate what a working environment is like. You are welcome to use all the tools available to you as you would in the role itself. However, should you progress to the next round of interviews you will be expected to perform an in depth explanation of your solutions.

We do not want this to take any more of your time than necessary, so please do yourself a favor and set a maximum 3 hour time limit. 

We have created our own version of TODO MVC. It is the same as the regular one, but we've added a few bugs.

There are 3 main pieces to the homework. Each is described in more detail further in this doc.

3 Pieces of the assignment:

1. Create a test strategy for TODO MVC
2. Help update the existing Playwright tests as well as create new ones consistent with your testing strategy
3. Find a few of the bugs we have purposely created in TODO MVC and submit bug reports for each using GitHub issues on your personal repo

## Submission Details
1. To keep your work private from other applicants, pull this repo and create a [mirror](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository) in your personal GitHub account
2. Add your changes to the test plan, Playwright tests, and bugs reported in your Github issues
3. When you are ready to share, invite nate8282, sowardskimberly, matthewstclaire, dkarter, GibbyPDQ, JasonNoonan, Nickjgniklu, and jason-amick to your repo. Send an email to Jenna letting her know you are ready to have your work reviewed

## Set up TODO MVC

1. Clone this repo and create a [mirror](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository) in your personal GitHub account of this repo you are reading now - https://github.com/pdqcom/QA-ToDo-Assessment
2. Navigate your terminal to the repo
3. In your terminal run `npm install` - set up the dependencies
4. In your terminal run `npm run serve` - run the program locally on your machine
5. To run Playwright you might need to install Playwright. While in your project directory navigate to the tests folder and run `npx playwright install`
6. To run the Playright UI run `npx playwright test --ui`


### 1. Create a Test Strategy

#### Product Requirements
- When no todos are added users can only view the add item textbox
- Users can create a todo list item by typing into the box "What needs to be done?" then selecting Enter on the keyboard
- Users can have multiple items in their TODO list
- Once a user submits an item to their list, they can see: their todo item in the list, how many items are uncompleted, All button, Active button, Completed button, and Clear completed items buttons. The view will default to All items when the first todo is added
- Users can complete an item by selecting the radio button next to the item. Once selected a green checkmark appears and the item is crossed off the list. The number of items left updates to show how many are uncompleted
- Users can complete all items by selecting the down arrow above the radio buttons when there are uncompleted todos
- Once a task is completed it can be viewed in the All or Completed views
- Users can uncheck all todos by selecting the down arrow above radio buttons when all radios are selected
- Users can edit a todo item by double clicking the item, then selecting Enter on the keyboard to submit the change
- Users can delete an item in the todo list by selecting the "X" next to the todo item when they hover over the todo item. Once deleted the count of items left is updated to show uncompleted tasks. The item is removed from all lists. 
- User can select All. This will show all uncompleted and completed todos
- User can select Active. This will only show all uncompleted todos
- User can select Completed. This will only show all completed todos
- User can select Clear completed to delete all Completed tasks. All completed tasks will be immediately be removed from view
- Once a todo is added, the user will always see the bottom banner even if there is no todo in the view (All, Active, Completed)
- Refreshing the page starts a new state and the users can start again from scratch

### Test plan (add your own test plan to the bottom of this ReadMe)
For your test strategy, you can add your thoughts and comments at the bottom of this Readme. We've included a template of what we are expecting, but feel free to deviate if you would do it differently.
#### Outline a complete testing strategy that covers unit tests, integration tests, and E2E tests.

#### Describe how you would implement security testing within the testing lifecycle.

#### Propose how automated testing can be integrated into existing CI/CD pipelines.

#### Detail any tools and frameworks you would recommend for the testing process, including any specific for performance and load testing.

#### Discuss how you would ensure the testing strategy aligns with agile development practices.

### 2. Update/Create Playwright tests
We've created two example tests in Playwright, but they could use your help. Can you help improve these existing tests, and write new ones from your test plan? You can find these existing tests in the tests folder of this repo. 

Don't feel like you need to make every single test in your test plan, but we do want to see a good example of your coding. Start by making 6 tests, and then if you are out of time you can make comments of other tests you would have made. 

We also want to see an example of your API testing so we added 3 tests in there using the SWAPI API. More info is in the comments of the todo-CRUD.spec.ts folder of the SWAPI API and what tests we want to see.

Make sure you have run the setup instruction for Playwright from the "Set up TODO MVC" section of this ReadMe.

### 3. Submit bug reports
We've purposely added a handful of bugs to this repo.

In your private github repo, submit those bug reports to your repo



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

## Applicant Test Plan
# Testing Strategy

## Unit Tests
This should be the bulk of our testing from a raw numbers perspective.

Unit test coverage should handle:
- All Functions (mocking to be used where needed)
- Views / Components (aXe for ADA scanning as well)
- Controllers
- Form fields (good place to put boundary test to limit the amount of E2E tests needed on this like this)

Code coverage should be tracked, but I'm not a fan of targeting specific numbers. Code coverage will be situational. I'd like to have something like **SonarQube**/**SonarCloud** giving us feedback on PRs so it's at top of mind.

## Integration / API Tests
This would be the next highest test count behind unit tests.  
This will mostly be API tests. Since the results are much more black and white in this space (over UI testing), we should lean heavily on these in our pipelines to ensure we aren't releasing any new issues.

- I'd like to see these tests runnable in any environment (or better yet, without any environment at all).
- I'd prefer the tests set up their own data rather than relying on any static data. An alternate option would be to restore a db to a certain point prior to running the tests, but that leads to maintenance of the "gold" data as well so I'd prefer option 1.
- I'd like to have full request and response information on every API call logged to **ReportPortal** (see tools/frameworks below).

## E2E Tests
These tests are valuable but tend to be flaky.  
**Playwright** can be used here. Additionally, I'd like to implement a framework that handles logging seamlessly behind the scenes. All actions/ assertions should be logged to **ReportPortal** without the test having to explicitly write any logging statements.

- I prefer **Page Object Model (POM)** for these tests.
- I'd like these tests to focus on the core features of the application.
- I'd like these tests run after a build is complete, and have team members notified / monitoring results to ensure no regressions have been introduced.
- I'd like to follow the same data strategy as the Integration tests. However, where needed (potentially 3rd party dependencies or specific setups that require complicated data) we can use mocks (Playwright can handle these).

## Security Testing
- **SonarQube** or **SonarCloud** for static code analysis.  
  Scans run every PR.
- **Dependabot** or equivalent to monitor packages being used. Or something like **Artifactory** as a package proxy as an alternative.

### Implementing Automated Tests into Existing CI/CD Pipelines
The first and most basic step would be ensuring we are running/reporting on/breaking on unit tests. This should be implemented via GitHub Actions or whatever is being used for PRs.

To get integration tests running as part of the PR process, we would need to ensure that we can run our tests in an ephemeral environment. In the past, I've used containerization for the app/dependencies, and a proper data strategy to ensure the tests can be run and reported on as part of the PR process.

For E2E tests, we can have a job that runs the tests in whatever environment we choose. This can get triggered post deployment to a static environment. Alternatively, if we can get them running through containerization of everything, even E2E tests can be included in PR runs (unless they are taking too long to give feedback).

## Tooling / Framework
I prefer keeping the tech stacks matching the dev code where we can (e.g., .NET web services get C# + RestSharp).

For all UI testing, regardless of language, I have leaned heavily on **Playwright** with POM. I've been using Playwright since its infancy and it's been a very solid tool.

I mentioned this above, but I prefer writing frameworks to handle things like logging. For UI testing, all actions/ assertions get logged. And for API testing, all request/response/assertion information gets logged.

When attempting to scale the testing team and support multiple applications, I have distributed the frameworks via packages so that we don't have to make framework updates in multiple places.

I've also been using a tool called **ReportPortal** (https://reportportal.io/) since ~2019. It's a self-hosted (Docker or Kubernetes) application that uses listeners to report all of the testing we do.

For load testing, I've had a lot of success with **K6**. It's always been easy to implement and run both locally or in the cloud if more agents were needed. I'm open to other tools, but this has been a solid one for me.

## Aligning Testing with Agile Practices
For aligning testing with the team's agile practices, I would use the tools/processes that are in place to ensure the various forms of automation are being included throughout the life cycle of a project.

