const footer = document.querySelector(".js--footer");
const footerActiveTemp = document.querySelector(".js--footerActiveTemp");
const mainCard = document.querySelector(".js--mainCard");


document.addEventListener("click", function(e) {
    const element = e.target;
    
    if (document.body.contains(document.querySelector(".js--footerActive")))
    {
        const footerActive = document.querySelector(".js--footerActive");

        if ((element !== footerActive && element.parentElement !== footerActive))
        {
            mainCard.removeChild(footerActive);
            mainCard.appendChild(footer);
        }
    }
    else
    {
        if (element.classList.contains("js--share"))
        {
            const clone = footerActiveTemp.content.cloneNode(true);
            mainCard.removeChild(footer);
            mainCard.appendChild(clone);
        }
    }
});