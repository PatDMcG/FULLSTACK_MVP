const CORSBYPASS = "https://corsproxy.io/?"
const API = "https://fullstack-mvp.onrender.com/"

async function grabber(input) {

    const response = await fetch(`${input}`);
      const data = await response.json();
      
    for(i=0;i<data.length;i++)
    {
        chores = document.createElement("p1")
    chores.innerText = data[i]
    document.getElementById("chores").appendChild(chores)
    console.log(chores)
    }
    
    };
grabber(`${API}chores`)

    