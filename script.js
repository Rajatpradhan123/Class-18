// const List1 = document.querySelector(".List1")
// const img1 = document.querySelector(".List1 img")


// List1.addEventListener("Mousemove" ,function(e)
// {
//     img1.style.left = e.x + "px"
//     img1.style.top = e.y + "px"
// });


const lists = document.querySelectorAll(".List1");
console.log(lists);

lists.forEach(function (list) {
    list.addEventListener("mouseenter", function (e) {
        list.childNodes[3].style.opacity = 1;
        console.log(list.childNodes[3]);
    });

    list.addEventListener("mouseleave", function (e) {
        list.childNodes[3].style.opacity = 0;
        console.log(list.childNodes[3]);
    });

    list.addEventListener("mousemove", function (e) {
        list.childNodes[3].style.top = e.y + "px";
        list.childNodes[3].style.left = e.x + "px";
        console.log(list.childNodes[3]);
    });
});

