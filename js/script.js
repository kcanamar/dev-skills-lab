// const $div = $("<div></div>")
// $("body").append($div)

const $textInput = $("[type='text']")
const $submit = $("[type='submit']")
const $ul = $("#skills-display")

let skills = []

loadLs();
renderLs();
renderUl();

const $test = $("#test") //test button
const $test2 = $("#test2") //test2
const $test3 = $("#test3")

$test.on("click", (event) => {
    localStorage.clear()
    console.log(localStorage)
})
$test2.on("click", (event) => {
    console.log(localStorage)
})
$test3.on("click", (event) => {
    console.log(skills)
})

function saveLs() {
    // this will convert our array into a string
    let skillsString = JSON.stringify(skills)
    // this will save the (key, value) to the object localStorage 
    localStorage.setItem("skills", skillsString)
}

function loadLs() {
    // this will retrieve the (key, value) from the object localStorage
    let retrieved = localStorage.getItem("skills");
    // this will take the retrieved data and create a 
    skills = JSON.parse(retrieved)
    if (skills === null) {
        skills = []
    }
}

function renderLs() {
    // this will render the information stored 
    skills.forEach(skill => {
        // renderUl()
        const $li = $("<li>")
        $li.html(`<div class="bullet">x</div>${skill}`)
        $ul.append($li)
        $li.on("click", addRemovalClickListener)
    })
}


function renderUl() {
    // moved the $ul creation into a function
    $submit.on("click", (event) => {
        // prevents default form behavior
        event.preventDefault()

        // get the value from the input
        const newSkill = $textInput.val()

        // add to array
        skills.push(newSkill)

        //populates the ul with the li
        const $li = $("<li>")
        $li.html(`<div class="bullet">x</div>${newSkill}`)
        $ul.append($li)

        //mirror array to localstorage
        saveLs()

        //add li listener
        $li.on("click", addRemovalClickListener)

        // clear the input
        $textInput.val("")
    })
}

function addRemovalClickListener(event) {
    const $target = $(event.target)
    let indexNumber = Array.prototype.indexOf.call(this.parentElement.children, this) //gets index of click target relative to siblings
    skills.splice(indexNumber, 1) //cuts it out of the array
    $target.remove() //removes clicked target
    saveLs() // mirrors array contents to localstorage
}
