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
        e=i+1
        tile = document.createElement("div")
        titleTile = document.createElement("div")
        timeTile = document.createElement("div")
        tile.id = `${e}`
        title = document.createElement("p1")
        time = document.createElement("p1")
        delet = document.createElement("button")
        editTitle = document.createElement("button")
        editTime = document.createElement("button")
        titleTile.appendChild(editTitle)
        timeTile.appendChild(editTime)
        title.innerText = data[i].title
        time.innerText = data[i].est_time_min
        console.log(time)
        titleTile.appendChild(title)
        timeTile.appendChild(time)
        tile.appendChild(titleTile)
        tile.appendChild(timeTile)
        tile.appendChild(delet)
        document.getElementById("chores").appendChild(tile)
    }
    }