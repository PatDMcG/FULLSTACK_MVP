const CORSBYPASS = "https://corsproxy.io/?"
const API = "https://fullstack-mvp.onrender.com/"

async function grabber(input) {

    const response = await fetch(`${input}`);
      const data = await response.json();
      //clear(document.getElementById("view"))
    console.log(data)
      
    
    };

grabber(`${API}chores`)
    