// const $div = $("<div></div>")
// $("body").append($div)

const $textInput = $("[type='text']")
const $submit = $("[type='submit']")
const $ul = $("#skills-display")

let skills = []

// loadLs();
renderLs();
renderUl();

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
    if (skills === null){
        skills = []
    } 
}

function renderLs(){
    // this will render the information stored 
    skills.forEach(skill => {
        renderUl()
    })
}

function renderUl(){
    // moved the $ul creation into a function
    $submit.on("click", (event) => {
        // prevents default form behavior
        // console.log("you clicked")
        event.preventDefault()
        // get the value from the input
        // textInput.value
        const newSkill = $textInput.val()
        // add to list of todos
        skills.push(newSkill)
        // console.log("i got your skill")
        // add an li with the new todo
        const $li = $("<li>")
        $li.html(`<div class="bullet">x</div>${newSkill}`)
        $ul.append($li)
        // add to localStorage 
        saveLs($ul)
        // add removal event listener
        const remove = (event) => {
            // turn the event target to a jQ object
            const $target = $(event.target)
            // remove it
            $target.remove()
            // console.log("remove success")
        }
        $li.on("click", remove)
        // clear the input
        $textInput.val("")
    })   
}