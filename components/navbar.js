/*
    Navbar component
*/
class Navbar extends HTMLElement
{
    constructor()
    {
        /* Run the HTMLElement constructor */
        super();
    }

    connectedCallback()
    {
        /* The basic link syntax */
        var aboutLink = `<li><a href="../index.html" title="Home"><strong>About</strong></a></li>`;
        var portfolioLink = `<li><a href="portfolio.html" title="Portfolio"><strong>Portfolio</strong></a></li>`;
        var contactlink = `<li><a href="contact.html" title="Contact"><strong>Contact</strong></a></li>`;

        /* Changes the link styling to highlight the active page to the user, the home page requires additional changes */
        if (window.location.href.includes("index"))
        {
            aboutLink = `<li><a href="index.html" title="Home" class="active"><strong>About</strong></a></li>`;
            portfolioLink = `<li><a href="pages/portfolio.html" title="Portfolio"><strong>Portfolio</strong></a></li>`;
            contactlink = `<li><a href="pages/contact.html" title="Contact"><strong>Contact</strong></a></li>`;
        }

        if (window.location.href.includes("portfolio"))
        {
            portfolioLink = `<li><a href="portfolio.html" title="Portfolio" class="active"><strong>Portfolio</strong></a></li>`;
        }

        if (window.location.href.includes("contact"))
        {
            contactlink = `<li><a href="contact.html" title="Contact" class="active"><strong>Contact</strong></a></li>`;
        }

        /*
            Constructs the navigation bar.
        */
        this.innerHTML = "<ul>" + aboutLink + portfolioLink + contactlink + "</ul>";
    }
}

customElements.define('navbar-component', Navbar);

