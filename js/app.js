console.log('Working')

// * ------ Cached Elements 
// We want to target the skills list, input, submit
const textInput = document.querySelector(".skill-input")
const submitBtn = document.querySelector(".btn-add")
const skillsList = document.querySelector(".skills-list")

// create a data structure to hold the created skills
let skills = []


// * ------ Functions 

// Business Logic these are the bread and butter of the application
renderSkills()

function renderSkills() {
    // on submit begin rendering the the UI
    submitBtn.addEventListener('click', (event) => {
        // prevent the default behavior
        event.preventDefault()

        // get the information from the input
        const newSkill = textInput.value

        // add the skill to our skills array
        skills.push(newSkill)

        // create the li element
        const li = document.createElement("li")
        li.innerHTML = `<div class='bullet'>X</div>${newSkill}`

        // append the new li to the DOM
        skillsList.append(li)

        // add an event listener to remove the li
        li.addEventListener('click', handleRemove)

        // clear the input
        textInput.value = ""

    })
}
// * ------ Event Listeners  

function handleRemove(event) {
    // cache the target
    const target = event.target

    // get the index of the target relative to its siblings
    let indexNumber = Array.prototype.indexOf.call(this.parentElement.children, this)
    // remove from the skills array
    skills.splice(indexNumber, 1)

    // remove form the ul
    target.remove()
}