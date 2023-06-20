const CORSBYPASS = "https://corsproxy.io/?"
const API = "https://fullstack-mvp.onrender.com/"

async function grabber(input) {

    const response = await fetch(`${input}`);
      const data = await response.json();
    displayer(data)
    
    };
grabber(`${CORSBYPASS}${API}chores`)

    function displayer(data)
    {
        for(i=0;i<data.length;i++)
    {
        e= data[i].id
        tile = document.createElement("div")
        titleTile = document.createElement("div")
        timeTile = document.createElement("div")
        tile.id = `${e}`
        title = document.createElement("p1")
        time = document.createElement("p1")
        delet = document.createElement("button")
        delet.id = e
        delet.addEventListener("click", (e) => 
        {
            return fetch(`${API}chores/${e.target.id}`,{ method: 'DELETE'})
        })
        editTitle = document.createElement("button")
        editTitle.id = e
        editTitle.addEventListener("click" , (e) => 
        {
            let id = e.target.id
            edit(id)
        })
        editTime = document.createElement("button")
        editTime.id = e
        editTitle.innerText = "Edit Name "
        editTime.innerText = "Edit Time "
        delet.innerText = " Remove Chore "
        titleTile.appendChild(editTitle)
        timeTile.appendChild(editTime)
        title.innerText = data[i].title
        time.innerText = timeManipulation(data[i].est_time_min)
        console.log(time)
        titleTile.appendChild(title)
        timeTile.appendChild(time)
        tile.className = "test"
        titleTile.className = "inner"
        timeTile.className = "inner"
        tile.appendChild(titleTile)
        tile.appendChild(timeTile)
        tile.appendChild(delet)
        document.getElementById("chores").appendChild(tile)
    }
    }

function timeManipulation(time)
    {
        let hours = Math.floor(time / 60)
        let minutes = time % 60
        let timeString = `${hours} hours and ${minutes} minutes`
        return timeString
    }

function edit(id)
{
    console.log(id)
    document.getElementsByTagName("button")[0].style.display = "none"
    document.getElementsByClassName("line_3")[0].style.display = "none"
    document.getElementsByClassName("line_6")[0].style.display = "none"
    while(document.getElementById("chores").lastChild)
    {
        document.getElementById("chores").removeChild(document.getElementById("chores").firstChild)
    }
    grabber(`${CORSBYPASS}${API}chores/${id}`)
    let UI = document.createElement("input")
    UI.type = "text"
    UI.id = 'UI'
    p1 = document.createElement("p1")
    p1.innerText = "INSERT NEW CHORE NAME"
    button = document.createElement("button")
    button.innerText = "submit"
    button.id = id
    document.getElementsByClassName("container_verticle")[0].appendChild(button)
    document.getElementsByClassName("container_verticle")[0].appendChild(UI)
    document.getElementsByClassName("container_verticle")[0].appendChild(p1)
    button.addEventListener("click", (e) => {
        let input = document.getElementById('UI').value
        const requestOptions = {
         method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: `${input}` })
};
     return fetch(`${API}chores/${e.target.id}`, requestOptions);
    })
}  
document.getElementsByClassName("reset")[0].addEventListener("click" , () => {   return fetch(`${API}chores`,{ method: 'DELETE'})})