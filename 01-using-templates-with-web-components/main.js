
// This won't appear in your page until you grab a reference to it with Js and then append in to the DOM like in the exxample below. 

let template = document.getElementById('my-paragraph');
let templateContent = template.content;
document.body.appendChild(templateContent);


// Templates are useful on their own, but they work even better with web components.

customElements.define('my-paragraph',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('my-paragraph');
            let templateContent = template.contentEditable; 

            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild(template.cloneNode(true)
                );
        }
    }
);


