# landing-page
landing page project for udacity course
Author: Tatjana

# General information
- Open the index.html file, to run the project
- Used technologies: html, css, javascript

## Table of Contents

- Create Section
- Create Navbar
- Global Variables
- Active Section
- Scroll to Section
- Surprise

## Create Section

- function createSection
- pass number of section you want to add on function call
- create element section & add to element "main"
- create div, add class "landing__container" and add to section
- add content of the div element

## Create Navbar

- function createNavbar
- create "li" elements (depending on number of sections secNum)
- set id's for created elements
- add to element "navbar__list" -> ul

## Global Variables

- secNum -> get number of sections

## Active Section

- function to check, if a section is on screen isInViewport
- use getBoundingClientRect()
- returns true / false
    -> helping source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/

- set section 1 to active on navbar by default

- helper function: getSiblings
    -> returns all siblings of element, passed to function
    -> helping source: https://www.javascripttutorial.net/javascript-dom/javascript-siblings/
    
- event listener on scroll
- set variables sec & section with index i
- get siblings of elements
- check if different sections are on screen by calling isInViewport with id of section
- set section class to "your-active-class" and navbar item to "active"
    -> .active class added to CSS file
- remove those classes from other sections (siblings of element)
    -> heling source: https://stackoverflow.com/questions/46566873/add-a-class-to-each-element-within-an-array

## Scroll to Section

- for loop -> number of sections
- set variables for different sections and navbar items with i
- add event listener to navbar item
- call function scrollIntoView on section and add smooth scroll into center

## Surprise

- surprise button
- change color of button, heading and background on click
- added classes to be able to toggle, when pressing the button again
- add / remove classes on click
- "halloween", "halloween-heading"
