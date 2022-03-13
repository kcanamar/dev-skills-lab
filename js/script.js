// const $div = $("<div></div>")
// $("body").append($div)

const $textInput = $("[type='text']")
const $submit = $("[type='submit']")
const $ul = $("#skills-display")

const skills = []

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