# Agile Software Practice - Assignment 1

Name: Yiwei Liu

Original Web App Dev assignment repository: 

Video: 

# Overview

# Test Document

+ __Site Header navigation__
  + __Test case__: Should navigate to Discover page
    __Test step__: Click on the "Home" button in the SiteHeader.
    __Expected outcome__: URL should be "http://localhost:3000/" (discover page, i.e. home page)
  + __Test case__: Should navigate to Favorites page
    __Test step__: Click on the "Favorites" button in the SiteHeader.
    __Expected outcome__: URL should include "/movies/favorites"
  + __Test case__: Should navigate to Upcoming Movies page
    __Test step__: Click on the "Upcoming" button in the SiteHeader.
    __Expected outcome__: URL should include "/movies/upcoming"
  + __Test case__: Should navigate to Daily Trending Movies page
    __Test step__: 1. Click on the "Trending" button in the SiteHeader. 
               2. Click on the "Day" button in the SiteHeader.
    __Expected outcome__: URL should include "/movies/trending/day"
  + __Test case__: Should navigate to Weekly Trending Movies page
    __Test step__: 1. Click on the "Trending" button in the SiteHeader. 
               2. Click on the "Week" button in the SiteHeader.
    __Expected outcome__: URL should include "/movies/trending/day"
  + __Test case__: Should navigate to User Profile page or Sign Up page
    __Test step__: Click on the button that contains an svg icon in the SiteHeader.
    __Expected outcome__: URL should include "/user" or "/signup". 