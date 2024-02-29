# React Router

This repo will demonstrate how to use React Router.

1. In order to make use of the React Router package in our code, we first need to install it! 
    <details open>
    <summary>We can install the latest verion by using the following command:</summary>
    <code> npm install react-router-dom </code>
    </details>
    <br />

2. Any part of the app that uses routing should be wrapped in a Router. 
This is normally the entire app, in your app entry point. 
Import the relevant component from React Router and wrap the entire App in a router. (Remember to use an alias)

3. Now let's add the other two imports from the package. Can you remember what they both do?

4. Before making use of our new imports let's create two new components / pages.
    - We want to create three pages `Home`, `Search` and `Products`
    - Now we have these pages, we can create routes for each of them
    - The `Products` page will be take a route parameter, we'll call this it's `id`

5. We can access this is in the `Products` component by using one of the router hooks 
Can you remember all of the route specific hooks, lets import them all and use them in our code.
nb: You will need to create a handler function for one

6. So far we've used the url bar to navigate around the app. A navbar would be very helpful!