const CORSBYPASS = "https://corsproxy.io/?"
const API = "https://fullstack-mvp.onrender.com/"

async function grabber(input) {

    const response = await fetch(`${input}`);
      const data = await response.json();
      console.log(data)
    return data
      
    
    };
    chores = document.createElement("p1")
    chores.innerText = grabber(`${API}chores`)
    document.getElementById("chores").appendChild(chores)
    console.log(chores)