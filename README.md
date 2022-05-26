# techblog

# 14 Model View Controller (MVC): Tech Blog

The intention of this effort was to build a CMS-style blog that would allow for posts and comments on coding development topics.

Much of the site was constructed by modifying code from the related module, Just Tech New. Some elements of this transposition and modifcation work--often quite challenging at this stage of experience--were more successful than others. The core work was put in place, but failed to find a workable version--still more 'deplorable' than 'deployable'--in the time available.

As require, the structure of the app does follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

The key elements expected of the app are outlined in the user story below. Although a good number of the code files and subfiles come close to fulfilling these requisites, the whole did not function or deploy. 

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
 THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
 THEN I am taken to the homepage
WHEN I click on any other links in the navigation
 THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
 THEN I am prompted to create a username and password
WHEN I click on the sign-up button
 THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
 THEN I am prompted to enter my username and password
WHEN I am signed in to the site
 THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
 THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
 THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
 THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
 THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
 THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
 THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
 THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
 THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
 THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock-Up

A mock-up was provided that demonstrated the desirec application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif)


## Getting Started

The application’s folder structure follows the Model-View-Controller paradigm. It install and uses a number of npm packages:  express-handlebars, mysql2 and sequelize, and an express.js API for the controllers.

The app also installs dotenv, bcrypt, express-session, and connetct-session-sequelize for environment variables, password hash, sessions and authentication. The express-session module uses session cookies that have a built-in timeout function.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.
As noted, althought the herokuapp was set up, it did not succesffuly deploy. (The logged errors remain too numerous to review, but npm start derails early with mysql password issues.) It is intended to be:


* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

The 

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reseatusrved.

