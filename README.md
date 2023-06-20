# Project Proposal

Our project, Learnly, aims to simplify personalized interactions by providing a platform for professionals to manage incoming requests for advice or guidance. It allows individuals to connect with professionals and seek personalized interactions, allowing knowledge and wisdom to be shared in a simplified and seamless manner.

* *Date Created*: 19 June 2023
* *Last Modification Date*: 20 June 2023
* *Deployed application URL*: <>
* *GIT URL*: <https://git.cs.dal.ca/taranjots/csci-5709-grp-10>

## Authors

* [Taranjot Singh (tr548284@dal.ca)](https://git.cs.dal.ca/taranjots)
* [Shivam Lakhanpal (sh475218@dal.ca)](https://git.cs.dal.ca/slakhanpal)
* [Amanjot Singh (am854663@dal.ca)](https://git.cs.dal.ca/amanjots)
* [Shubham Chauhan (shubhamchauhan@dal.ca)](https://git.cs.dal.ca/shubhamc)
* [Aadith Shameel (ad766375@dal.ca)](https://git.cs.dal.ca/shameel)

## Testing

In the context of my application, the end-to-end tests & coding style tests which I went through are described below:

### End to End Tests:

1. Testing Responsiveness

* Test: Resize the browser window to different screen sizes or use a responsive design testing tool to emulate various devices.

* Expectation: Verify that the website layout and components adapt appropriately to different screen sizes, ensuring readability and usability across devices. Elements should resize, reposition, or hide as necessary.

Note: Our application does not support responsiveness on 4K screens.

2. Submitting Message on Contact Page

* Test: Fill in the necessary fields on the Contact page and click the save button.

* Expectation:
    * Verify that a success message is displayed, indicating that the message has been submitted.
    * Verify that an error is displayed if the user leaves any field blank.
    * Validates that the user email is provided in a correct format and if not, then an error message is displayed.

3. Registration and Valid information

* Test: Registration with Valid Information

* Expectation:
The user should be able to successfully register by entering valid personal information, and a new user account should be created in the system. A confirmation email should be sent to the user, and upon clicking the confirmation link, the account should be activated. The user should be able to log in with their registered credentials.

* Test: Registration with Invalid Email Format

* Expectation: 
When the user enters an invalid email format, such as missing the '@' symbol, an error message should be displayed indicating the invalid format. The system should allow the user to correct the email format and proceed with the registration process. After successful registration, the user should receive a confirmation email and be able to activate their account.

* Test: Login with Correct Credentials
* Expectation: Upon entering the correct email and password combination, the system should verify the credentials and grant access to the user's account. The user should be redirected to their account dashboard, indicating a successful login.

* Test: Login with Incorrect Password

* Expectation: When the user enters the correct email but an incorrect password, the system should detect the incorrect password and display an error message. The user should be allowed to re-enter the correct password and upon successful login, be redirected to their account dashboard.

* Test: Account Activation with Expired Confirmation Link

* Expectation: By delaying the click on the confirmation link received via email, the system should recognize and handle the expired link properly. An error message should be displayed indicating the link has expired. The user should be prompted to request a new confirmation email to activate their account, and upon receiving the new email and clicking the confirmation link, the account should be successfully activated.
    
### Coding Style Tests:

1. Code formatting: Ensure that the code follows consistent indentation, spacing, and line wrapping rules. This helps improve code readability and maintainability.

* Example: Check that the components use consistent indentation with proper alignment of elements and logical grouping of code blocks.

2. Naming conventions: Verify that variables, functions, and components follow appropriate naming conventions for clarity and consistency.

* Example: Ensure that the names of functions and variables in the AvailableCalendar and Sidebar components are descriptive and follow a consistent naming convention, such as camelCase or PascalCase.

3. Modularity and organization: Assess how well the code is structured and organized, promoting maintainability and reusability.

* Example: Check that the code within the components is logically grouped, with related functions or styles placed together, and that code duplication is minimized.

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
