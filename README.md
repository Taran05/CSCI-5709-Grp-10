# Assignment 3

Our project, Learnly, aims to simplify personalized interactions by providing a platform for professionals to manage incoming requests for advice or guidance. It allows individuals to connect with professionals and seek personalized interactions, allowing knowledge and wisdom to be shared in a simplified and seamless manner.

* *Date Created*: 20 July 2023
* *Last Modification Date*: 26 July 2023
* *Deployed application URL*: https://csci5709-group10-learnly.netlify.app/
* *GROUP GIT URL*: <https://git.cs.dal.ca/taranjots/csci-5709-grp-10>


## Authors

* [Amanjot Singh (am854663@dal.ca)](https://git.cs.dal.ca/amanjots)

Feature: User Registration and Authentication (User Profile Management)
=============================================


### Task 1: User Registration
1. The user navigates to the registration page.
2. The user enters their personal information, such as name, email, 
and password.
3. The system validates the entered information.
4. If the information is valid, the system creates a new user account
5. User is then redirected to Landing Page

In this task, we will implement the user registration functionality, allowing new users to create accounts on our platform. The process involves both frontend and backend validations to ensure that the provided information is accurate and meets the necessary requirements.

Frontend validations will include checks for:
- Valid email format
- Strong password requirements (e.g., minimum length, presence of special characters)
- Confirm password matching
- Other relevant fields validation, such as name, date of birth, etc.

Once the frontend validations pass, the data will be sent to the backend for further verification. Backend validations will include checks for:
- Unique email address to avoid duplicate registrations
- Server-side validation of password strength and complexity
- Any additional business logic checks for the registration process

Upon successful registration, the user's data will be stored in the database, and a session will be created for the user to handle subsequent logins and interactions.

### Task 2: User Login
1. The user navigates to the login page.
2. The user enters their email and password.
3. The system verifies the entered credentials.
4. The system grants access to the user's account if the credentials are 
correct.
5. The user is redirected to their account dashboard.

For this task, we will implement the user login functionality, allowing registered users to access their accounts on the platform. Similar to the registration process, user logins will be subject to validations on both the frontend and backend.

Frontend validations will include checks for:
- Valid email format
- Non-empty password field

Once the user provides their credentials, the data will be sent to the backend for verification. Backend validations will include checks for:
- Existence of the user's email address in the database
- Correctness of the provided password, using secure authentication methods like hashing and salting

Upon successful login, the user will be granted access to their account, and a session will be created to keep them authenticated during their visit to the platform. Additionally, the use of tokens (e.g., JSON Web Tokens) may be considered for handling stateless authentication.

### Task 3: Account Settings/Profile Editing
1. The user navigates to the profile settings page.
2. The user selects the option to edit their profile.
3. The system displays the user's current profile information.
4. The user makes the desired changes, such as updating their name, 
contact details, or profile picture.
5. The user saves the changes.
6. The system validates the updated information.
7. The system updates the user's profile with the new data if the 
information is valid.
8. The user's profile is now updated with the edited information.


This task focuses on providing users with the ability to edit their profile information and customize their accounts according to their preferences. Users will have access to an "Account Settings" section where they can modify various fields, including:

- **Name:** Users can change their displayed name.
- **Email:** Users may update their registered email address.
- **About You:** An optional field allowing users to provide a short description or bio about themselves.
- **Display Name:** Users can customize the name that appears publicly on the platform.

The frontend will handle validations to ensure that the provided data adheres to any specified constraints, such as character limits or valid email formats.Upon saving the changes, the data will be sent to the backend, which will handle the necessary updates in the database and session management.


### Additional Task: Creating Navigation Bar, Footer, and Sidebar Drawer

In this task, I created a navigation bar that contains all the required links for easy navigation throughout the platform. The navigation bar will have conditional changes based on whether the user is logged in or not. If the user is logged in, certain links, such as "My Account" or "Log Out," will be displayed, while for non-logged-in users, links like "Login" or "Register" will be shown.

Additionally, I designed and implemented a footer section that provides essential information about the platform, such as contact details, links to social media, and any legal disclaimers.

Furthermore, I also created a sidebar drawer with relevant sections that offer quick access to specific features or pages. The sidebar drawer will be easily accessible and can be toggled open or closed for a seamless user experience.

By completing these tasks, my goal is to create a user-friendly and intuitive user interface, making it easier for users to navigate the platform and access various functionalities while maintaining a consistent and aesthetically pleasing design.

## Folders Path of Files I developed

### Frontend-Components
- profileManagement
- navbar
- login
- register
- sideBarDrawer
### Frontend-Pages
- profileManagement
- login
- register

### Backend
- Backend\Dev\controllers\userAuthentication
- Backend\Dev\controllers\profileManagement
- Backend\Dev\models\usersModel.ts
- Backend\Dev\routes\userAuthentication
-Backend\Dev\util\hashingUtil.ts

## Testing

In the context of my application, the end-to-end tests & coding style tests which I went through are described below:

## End to End Tests:

### Test: Registration with Valid Information

**Expectation:**
The user should be able to successfully register by entering valid personal information, and a new user account should be created in the system. A confirmation email should be sent to the user, and upon clicking the confirmation link, the account should be activated. The user should be able to log in with their registered credentials.

### Test: Registration with Invalid Email Format

**Expectation:**
When the user enters an invalid email format, such as missing the '@' symbol, an error message should be displayed indicating the invalid format. The system should allow the user to correct the email format and proceed with the registration process. After successful registration, the user should receive a confirmation email and be able to activate their account.

### Test: Login with Correct Credentials

**Expectation:**
Upon entering the correct email and password combination, the system should verify the credentials and grant access to the user's account. The user should be redirected to their account dashboard, indicating a successful login.

### Test: Login with Incorrect Password

**Expectation:**
When the user enters the correct email but an incorrect password, the system should detect the incorrect password and display an error message. The user should be allowed to re-enter the correct password, and upon successful login, be redirected to their account dashboard.


### Test: Profile Editing

**Expectation:**
The user should be able to access the "Account Settings" or "Profile Editing" section and modify their profile information. Changes made to fields such as name, email, about you, and display name should be successfully updated in the system. The updated information should be reflected in the user's profile and account details. Additionally, any validations on the frontend and backend should be in place to ensure data integrity and accuracy during the profile editing process.

    

## Deployment

To deploy the project environment, We have used Netlify. The steps we followed for the deployment are as follows:

1. Pushed our code to a GitHub repository.
2. Created a Netlify account.
3. Integrated our GitHub account with Netlify.
4. Selected the repository we want to deploy.
5. Configured the site settings, such as providing a name for the site, etc.
6. Clicked on the "Deploy site" button. The site was deployed within a few minutes. The link to the code and the deployed site is also
   provided above.

Note: Ensure that the code is properly pushed to the GitHub repository before proceeding with the Netlify deployment.

## Built With

* [Node.js](https://nodejs.org/en/download) - Dependency Management.
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Package Management.
* [React](https://react.dev/learn/installation) - Used it to build the user interface (UI) and manage the
                                                  application's component-based architecture.
* [Material-UI](https://mui.com/) - Used it's components like FormControlLabel, ThemeProvider, Checkbox, 
                                    MenuItem, etc to create a visually appealing and responsive web application.
                                                                                                                           
NOTE: We need to have Node.js installed, which includes npm, in order to install and use React and Material-UI in our project.
