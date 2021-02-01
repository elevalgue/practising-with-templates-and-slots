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


