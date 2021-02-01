

// This won't appear in your page until you grab a reference to it with Js and then append in to the DOM like in the exxample below. 

let template = document.getElementById('my-paragraph');
let templateContent = template.content;
document.body.appendChild(templateContent);