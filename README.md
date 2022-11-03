# landing-page
landing page project for udacity course

## Table of Contents

- Create Navbar
- Create Section
- Global Variables
- Active Section
- Scroll to Section
- Surprise

## Create Navbar

- function creareNavbar
- pass number of index on function call
- create "li" elements
- set id's for created elements
- add to element "navbar__list" -> ul

## Create Section

- function createSection
- pass number of section you want to add on function call
- create element section & add to element "main"
- create div, add class "landing__container" and add to section
- add content of the div element

## Global Variables

- set global variables for sections and navbar items

## Active Section

- function to check, if a section is on screen isInViewport
- use getBoundingClientRect()
- returns true / false

- set section1 to active on navbar by default

- event listener on scroll
- check if different sections are on screen by calling isInViewport with id of section
- set section class to "your-active-class" and navbar item to "active"
    -> .active class added to CSS file
- remove those classes from other sections

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
