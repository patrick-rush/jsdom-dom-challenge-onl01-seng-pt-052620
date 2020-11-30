document.addEventListener("DOMContentLoaded", () => {

    // As a user, I should see the timer increment every second once the page has loaded.

    let counter = setInterval(incrementCounter, 1000);

    const counterNode = document.getElementById("counter")

    let counterNumber = parseInt(counterNode.innerHTML.trim(), 10)

    function incrementCounter() {
        counterNumber++;
        counterNode.innerHTML = counterNumber.toString()
    }

    function decrementCounter() {
        let counterNumber = parseInt(counterNode.innerHTML.trim(), 10)
        counterNumber--;
        counterNode.innerHTML = counterNumber.toString()
    }
    
    // As a user, I can manually increment and decrement the counter using the plus and minus buttons.

    let plusButton = document.getElementById("plus")
    let minusButton = document.getElementById("minus")

    plusButton.addEventListener("click", incrementCounter)
    minusButton.addEventListener("click", decrementCounter)

    // As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

    // const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

    // let likes = []

    // function likeCounter() {
    //     thisLikeNumber = counterNumber
    //     likes.push(thisLikeNumber)
    //     let likesHash = countOccurrences(likes)
    //     const ul = document.getElementById("likes")
    //     const li = document.createElement("li")
    //     if thisLikeNumber in likesHash {

    //     }
    //     li.innerHTML = `${counterNumber}`
    //     ul.appendChild(li)
    // }

    let likeButton = document.getElementById("heart")

    // likeButton.addEventListener("click", likeCounter)

    // As a user, I can pause the counter, which should
    // // pause the counter
    // // disable all buttons except the pause button
    // // the pause button should then show the text "resume."

    let pauseButton = document.getElementById("pause")

    pauseButton.addEventListener("click", pauseAction)

    function pauseAction() {
        clearInterval(counter)
        pauseButton.innerHTML = "resume"
        plusButton.disabled = true
        minusButton.disabled = true
        likeButton.disabled = true
        commentButton.disabled = true
        pauseButton.addEventListener("click", resumeAction)
    }

    // When 'resume' is clicked, it should restart the counter and re-enable the buttons.

    function resumeAction() {
        pauseButton.innerHTML = "pause"
        plusButton.disabled = false
        minusButton.disabled = false
        likeButton.disabled = false
        commentButton.disabled = false
        counter = setInterval(incrementCounter, 1000)
        pauseButton.removeEventListener("click", resumeAction)
    }


    // As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

    let commentButton = document.getElementById("submit")

});