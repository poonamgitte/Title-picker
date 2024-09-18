let btn = document.querySelector(".btn");

btn.addEventListener("click", async ()=>{
    let tab = await chrome.tabs.query({active: true, currentWindow: true});

    let tabTitle = tab[0].title;
    
        // Display the tab title in the popup
        document.getElementById('title').textContent = tabTitle;
    });
