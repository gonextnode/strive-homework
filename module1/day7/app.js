/* EXERCISE 1
    Write a function for changing the title of the document in something else.
*/

function changeTitle() {
  const newTitle = "Sean's awesome page"
  document.title = newTitle
}

function changePageTitle() {
  const firstHeading = document.querySelector('h1')
  firstHeading.innerText = 'Yo this is my awesome page!'
  console.log(firstHeading)
}

/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/

function addClassToTitle() {
  const title = document.querySelector('h1')
  title.className = 'myHeading'
}

addClassToTitle()

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/

function changePcontent() {
  const p = document.querySelectorAll('div p')
  p.forEach((res) => (res.innerText = 'Respect my G'))
}

changePcontent()

/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/

function changeUrls() {
  const links = document.querySelectorAll('a')
  console.log(links)
  links.forEach((element) => {
    element.text = 'Google'
    element.href = 'https://www.google.com'
  })
}

changeUrls()

/* EXERCISE 5
 Write a function for adding a new item in the second list.
 */

function addToTheSecond(content) {
  const newItem = document.createElement('li')

  newItem.innerText = 'my appended item'
  newItem.style.color = 'grey'

  const secondList = document.getElementById('secondList')
  secondList.appendChild(newItem)
}

addToTheSecond()

/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/

function addParagraph(content) {
  const p = document.createElement('p')
  p.innerText = 'Exercise 6 completed ;)'
  const div = document.querySelector('div')
  div.appendChild(p)
}

addParagraph()

/* EXERCISE 7
Write a function for making the first UL disappear.
*/

function firstUlDisappear() {
  const list = document.querySelector('ul')
  list.remove()
}

firstUlDisappear()

/* EXERCISE 8
Write a function for making the background of every UL green.
*/

function paintItGreen() {
  const lists = document.querySelectorAll('ul')
  lists.forEach((res) => (res.style.backgroundColor = 'lightgreen'))
}

paintItGreen()

/* TODO EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/

function makeItClickable() {}

/* TODO EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/

function changeFooterText() {}

/* TODO EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

// const inputField = document.getElementById('input-field'){

// }

/* TODO EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {}

/* TODO EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/
