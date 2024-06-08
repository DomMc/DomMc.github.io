/*
    Footer component
*/
class Footer extends HTMLElement
{
    constructor()
    {
        /* Run the HTMLElement constructor */
        super();
    }

    connectedCallback()
    {
        const prefix = "<footer>";
        const suffix = "</footer>"
        const year = new Date().getFullYear();

        const text = "&copy; Dom McCollum 2020 - " + year;

        this.innerHTML = prefix + text + suffix;
    }
}

customElements.define('footer-component', Footer);

