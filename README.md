# Agile Software Practice - Assignment 1

Name: Yiwei Liu

Original Web App Dev assignment repository: https://github.com/lyw02/react-movies-app-assignment

Video: 

# Overview

# Test Document

+ __Site Header navigation__
  + __Test case__: Should navigate to Discover page
    __Test step__: Click on the "Home" button in the SiteHeader.
    __Expected outcome__: URL should be "http://localhost:3000/" (discover page, i.e. home page).
  + __Test case__: Should navigate to Favorites page.
    __Test step__: Click on the "Favorites" button in the SiteHeader.
    __Expected outcome__: URL should include "/movies/favorites".
  + __Test case__: Should navigate to Upcoming Movies page.
    __Test step__: Click on the "Upcoming" button in the SiteHeader.
    __Expected outcome__: URL should include "/movies/upcoming".
  + __Test case__: Should navigate to Daily Trending Movies page.
    __Test step__: 
    1. Click on the "Trending" button in the SiteHeader. 
    2. Click on the "Day" button in the SiteHeader.

    __Expected outcome__: URL should include "/movies/trending/day".
  + __Test case__: Should navigate to Weekly Trending Movies page.
    __Test step__: 
    1. Click on the "Trending" button in the SiteHeader. 
    2. Click on the "Week" button in the SiteHeader.

    __Expected outcome__: URL should include "/movies/trending/day".
  + __Test case__: Should navigate to User Profile page or Sign Up page.
    __Test step__: Click on the button that contains an svg icon in the SiteHeader.
    __Expected outcome__: URL should include "/user" or "/signup". 

+ __Firebase authentication (sign up, log in, log out)__
  + __Test case__: Should log in successfully.
    __Test step__: 
    1. Enter valid email and password.
    2. Click log in button.
    3. Use a Cypress Custom command to handle logging in.
    4. Visit user profile page and click log out button (avoid effecting following tests).

    __Expected outcome__: URL should be "http://localhost:3000/" after logging in.
  + __Test case__: Should fail to login.
    __Test step__: 
    1. Enter invalid email and password.
    2. Click log in button.
    3. Use a Cypress Custom command to handle logging in.

    __Expected outcome__: Display alert "Failed to log in".
  + __Test case__: Should sign up successfully.
    __Test step__: 
    1. Use a Cypress Custom command to generate random email.
    2. Enter valid email, password and password confirmation.
    3. Click sign up button.

    __Expected outcome__: URL should be "http://localhost:3000/login" (jump to log in page).
  + __Test case__: Should fail to sign up (passwords do not match).
    __Test step__: 
    1. Use a Cypress Custom command to generate random email.
    2. Enter valid email, but different password and password confirmation.
    3. Click sign up button.

    __Expected outcome__: Display alert "Passwords do not match".
  + __Test case__: Should reset password successfully.
    __Test step__: 
    1. Enter valid email.
    2. Click reset button.

    __Expected outcome__: Display alert "Email sent. Please check your inbox".
  + __Test case__: Should fail to send reset email.
    __Test step__: 
    1. Enter invalid email.
    2. Click reset button.

    __Expected outcome__: Display alert "Failed to send reset email".
  + __Test case__: Should log out.
    __Test step__: 
    1. Visit user profile page.
    2. Click log out button.

    __Expected outcome__: URL should be "http://localhost:3000/" (jump to home page).
+ __User profile__
  + __Test case__: should prompt the user to log in (if not logged in).
    __Test step__: Visit user profile page (without logging in).
    __Expected outcome__: Should include text "Please log in.".
  + __Test case__: should display user profile information (if logged in).
    __Test step__: 
    1. Use a Cypress Custom command to log in.
    2. Visit user profile page.

    __Expected outcome__: Should contain "Email" label and user email.