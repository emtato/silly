const title = document.getElementById("title");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const gif = document.getElementById("hello");

// btn1.addEventListener("click", () => {
//   title.textContent = "Button 1";
//   title.style.color = "hotpink";
// });

btn1.addEventListener("click", () => {
    // Toggle title size

    if (title.style.fontSize !== "96px" && btn2.style.fontSize !== "139px" && btn2.style.fontSize !== "62px" && btn2.style.fontSize !== "256px" && btn2.style.fontSize !== "450px") {
        title.style.fontSize = "96px";
        title.textContent = "WILL U BE MY VALENTINE????";
         const newImg = document.createElement("img");
        newImg.src = "https://media.tenor.com/oRtwCtxLiQgAAAAi/angry.gif"; // replacement GIF
        newImg.alt = "Replacement GIF";
        newImg.style.width = "200px";
        gif.replaceWith(newImg);
    } else if (btn2.style.fontSize !== "62px" && btn2.style.fontSize !== "256px" && btn2.style.fontSize !== "139px" && btn2.style.fontSize !== "450px") {
        btn2.style.fontSize = "62px";
    } else if (btn2.style.fontSize !== "256px" && btn2.style.fontSize !== "139px" && btn2.style.fontSize !== "450px") {
        title.textContent = "BE MY VWALENTINE";
        btn2.style.fontSize = "139px";

    } else if (btn2.style.fontSize !== "256px") {
        btn2.style.fontSize = "256px";
        btn1.style.fontSize = "3px";
        const aa = document.createElement("img");
        aa.src = "https://media.tenor.com/HYCA4wful0kAAAAj/sad.gif"; // replacement GIF
        aa.alt = "Replacement GIF";
        aa.style.width = "200px";
        gif.replaceWith(aa);
    } else {
        btn1.remove()
        btn2.textContent = "CLICK ME :<";
        btn2.style.fontSize = "270px";
    }


});
btn2.addEventListener("click", () => {
    if (btn2.style.fontSize === "270px") {
        const currentImg = document.querySelector("img");

        const newImg = document.createElement("img");
        newImg.src = "https://media.tenor.com/CnP64S7lszwAAAAi/meme-cat-cat-meme.gif";
        newImg.alt = "Replacement GIF";
        newImg.style.width = "200px";

        currentImg?.replaceWith(newImg);
        title.style.fontsize = "30px";
        title.textContent = ":>";
        btn2.textContent = ":>";
        btn2.style.fontSize = "20px";

        let extra = document.getElementById("extra");

        if (!extra) {
            extra = document.createElement("div");
            extra.id = "extra";

            const extraImg = document.createElement("img");
            extraImg.src = "https://pbs.twimg.com/media/GJn4PVXW0AAQjt_.jpg";
            extraImg.alt = "Extra GIF";
            extraImg.style.width = "400px";

            extra.appendChild(extraImg);
            extra.style.marginTop = "20px";
            document.body.appendChild(extra);
        } else {
            extra.remove();
        }
    }
    else if(btn2.textContent === ":>"){
        title.textContent = "i love you so much!! <3";
    }

});
btn2.addEventListener("mouseenter", () => {
    if (btn2.style.fontSize !== "270px" && btn2.textContent !== ":>") {
        btn2.style.opacity = "0";
    }
});

btn2.addEventListener("mouseleave", () => {
    btn2.style.opacity = "1";
});
