const addNote = () => {
    const noteInput = document.getElementById("noteInput")
    const noteText = noteInput.value
    console.log(noteText);
    noteInput.value = ''; //  input value clear
    if (noteText.trim() === "") {  //trim() ==> space alert dibe 
        alert("Please enter a note.");
        return;
    }
    // li tag js code
    const li = document.createElement("li") // create li tag 
    // li.innerText = noteText
    li.innerHTML = `
    <span>${noteText}</span>
    <div class="twoButton">
        <button class="edit" onclick="editNote(this)">Edit</button>
        <button class="delate" onclick="delateNote(this)">Delate</button>
     </div>`
    document.getElementById("noteList").appendChild(li);
};
// delate button
function delateNote(data){
    const li = data.closest("li")
    li.remove();
}

