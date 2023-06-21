const CORSBYPASS = "https://corsproxy.io/?"
const API = "https://fullstack-mvp.onrender.com/"

async function grabber(input) {

    const response = await fetch(`${input}`);
      const data = await response.json();
    displayer(data)
    
    };
grabber(`${API}chores`)

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
        delet.addEventListener("click", async (e) => 
        {
            let res = await fetch(`${API}chores/${e.target.id}`,{ method: 'DELETE'})
                let data = await res.json()
                console.log(data)
                setTimeout(reload, 100)
                return data
                
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
        editTime.addEventListener("click" , (e) => 
        {
            let id = e.target.id
            editT(id)
        })
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
        p1.id = 'KILL'
        button = document.createElement("button")
        button.innerText = "submit"
        button.id = id
        document.getElementsByClassName("container_verticle")[0].appendChild(button)
        document.getElementsByClassName("container_verticle")[0].appendChild(UI)
        document.getElementsByClassName("container_verticle")[0].appendChild(p1)
        button.addEventListener("click", async (e) => {
            let input = document.getElementById('UI').value
            const requestOptions = {
             method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: `${input}` })
            };
         let res = await fetch(`${API}chores/${e.target.id}`, requestOptions);
         let data = await res.json()
         reset()
         return data
        })
    }  

function editT(id)
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
    p1 = document.createElement("p2")
    p1.innerText = "INSERT NEW ESTIMATED TIME IN MINUTES"
    p1.id = 'KILL'
    button = document.createElement("button")
    button.innerText = "submit"
    button.id = id
    document.getElementsByClassName("container_verticle")[0].appendChild(button)
    document.getElementsByClassName("container_verticle")[0].appendChild(UI)
    document.getElementsByClassName("container_verticle")[0].appendChild(p1)
    button.addEventListener("click", async (e) => {
        let input = document.getElementById('UI').value
        const requestOptions = {
         method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ est_time_min: `${input}` })
        };
     let res = await fetch(`${API}chores/${e.target.id}`, requestOptions);
     let data = await res.json()
    
     reset()
     return data
     
    })
}  
function reset()
{   
    document.getElementsByTagName("button")[0].style.display = "block"
    document.getElementsByClassName("line_3")[0].style.display = "block"
    document.getElementsByClassName("line_6")[0].style.display = "block"
    document.getElementsByClassName("container_verticle")[0].removeChild(document.getElementById('KILL'))
    document.getElementsByClassName("container_verticle")[0].removeChild(document.getElementById('UI'))
    console.log(document.getElementsByClassName("container_verticle")[0].removeChild(document.getElementsByClassName("container_verticle")[0].lastChild))
    while(document.getElementById("chores").lastChild)
    {
        document.getElementById("chores").removeChild(document.getElementById("chores").firstChild)
    }
    grabber(`${API}chores`)
}

function reload()
{
    while(document.getElementById("chores").lastChild)
    {
        document.getElementById("chores").removeChild(document.getElementById("chores").firstChild)
    }
    grabber(`${API}chores`)
}
document.getElementsByClassName("reset")[0].addEventListener("click" , async () => {  
   await fetch(`${API}chores`,{ method: 'DELETE'})
 return setTimeout(reload, 100)})
document.getElementById("new").addEventListener("click" , makeNew)

function makeNew()
{
    while(document.getElementById("chores").lastChild)
    {
        document.getElementById("chores").removeChild(document.getElementById("chores").firstChild)
    }
    document.getElementsByClassName("line_6")[0].style.display= "none"
    document.getElementsByClassName("line_3")[0].style.display= "none"
    let UI = document.createElement("input")
    UI.type = "text"
    UI.id = 'UI'
    p1 = document.createElement("p2")
    p1.innerText = "INSERT ESTIMATED TIME IN MINUTES"
    p2 = document.createElement("p2")
    p2.innerText = "INSERT CHORE NAME"
    tile = document.createElement("div")
    titleTile = document.createElement("div")
    timeTile = document.createElement("div")
    title = document.createElement("input")
    title.type = "text"
    title.id = "title"
    time = document.createElement("input")
    time.type = "text"
    time.id = "time"
    submit = document.createElement("button")
    submit.id = 0
    submit.addEventListener("click", async (e) => 
    {
        const requestOptions = {
            method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ est_time_min: `${parseInt(document.getElementById("time").value)}`, title : `${document.getElementById("title")}` })
           };
        let res = await fetch(`${API}chores`, requestOptions);
        let data = await res.json()
            console.log(data)
            setTimeout(reload, 100)
            document.getElementsByClassName("line_6")[0].style.display= "Block"
            document.getElementsByClassName("line_3")[0].style.display= "Block"
            return data
            
    })
    titleTile.appendChild(p2)
    timeTile.appendChild(p1)
    titleTile.appendChild(title)
    timeTile.appendChild(time)
    tile.className = "test"
    titleTile.className = "inner"
    timeTile.className = "inner"
    submit.innerText = "ADD NEW CHORE"
    tile.appendChild(titleTile)
    tile.appendChild(timeTile)
    tile.appendChild(submit)
    document.getElementById("chores").appendChild(tile)


}