document.querySelector("li a") 
//this will display <a href="https://www.google.com">Google</a>

document.querySelector("h1").style.color = "red";
// it will display h1 as color red

document.getElementById("Title").innerHtml="Good Bye";
// it will change title of html head

document.querySelector("h1").style.fontSize = "10rem";

document.querySelector("html").style.backgroundColor="yellow";
// change background color


document.querySelector("button").style.backgroundColor="yellow";
// change button background color yellow

document.querySelector("button").classList;
// it will display button class name i.e btn

document.querySelector("button").classList.add("invisible");
// it will add invisible as class name inside button

document.querySelector("button").classList.remove("invisible");
// it will remove invisible as class name inside button

document.querySelector("button").classList.toggle("invisible");
// If class invisible is already applied it will remove it
//if class invisible is not applied it will add it.

document.querySelector("h1").innerHTML;
// it will display '<strong>Hello</strong>'

document.querySelector("h1").textContent;
// it will display hello only

document.querySelector("h1").innerHTML = "<em> Good Bye</em>";
// change the text hello to good bye

document.querySelector("a").attributes;
// list of all attributes that are attached to the html elements

document.querySelector("a").setAttribute("href","https://www.facebook.com");
// it will display facebook when we click inti google