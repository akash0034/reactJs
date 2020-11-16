# react-interview

Hello & welcome to the ITWox interview process! 
We are glad you have reached this stage & excited to see how you approach the problem statement below:

**What you will build**

- Create a React app
- Create 3 screens
- Home 
    - default landing page 
    - should have a top navigation bar
    - When user is not signed in: should have a top navigation bar with a "sign in" link, which links to /sign-in
    - When user is signed in: should have a top navigation bar with a "dashboard" link to "/dashboard" & a "sign out" button which will sign out the user when clicked
- Dashboard
    - should have a top navigation bar
    - should be accessible only if the user is signed in
    - should have a title "Dashboard"
    - Should fetch a list of posts & its comments from
        - Posts API - https://jsonplaceholder.typicode.com/posts
        - Comments API - https://jsonplaceholder.typicode.com/comments 
    - List of posts should be paginated to show 10 records with an ability to move to next/previous page
- Sign In
    - should NOT have a top navigation bar
    - should allow the user to enter a username & password (both required fields, username should be an email address)
    - should validate input
    - when user click the "submit" then, it should login & redirect to the "/dashboard" if everything is successful
- State Management
    - use Redux or Context API to manage state of the user login
    - Post sign in, if the screen is refreshed, the user login state should remain
- Unit Testing
    - write unit tests using any framework of your choice to test the UI components & the client State
    - integrate your test script into the package.json so that it can be triggered from `npm test` command
- UI styling:
    - use any of the open source CSS toolkits (e.g.: Bootstrap, w3css etc.), if you want to improve the UI or feel free to write your own

**Submitting your work**

To submit your finished work:
- please create a branch with your name & role in the format as below:
    - Format: role-fullname
    - Example: reactdeveloper-johndoe
- Submit a PR with your code & the relevant comments for your work
