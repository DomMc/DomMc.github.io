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
        var homeLink = `<li><a href="../index.html" title="Home"><strong>Home</strong></a></li>`;
        var aboutLink = `<li><a href="about.html" title="About"><strong>About</strong></a></li>`;
        var portfolioLink = `<li><a href="portfolio.html" title="Portfolio"><strong>Portfolio</strong></a></li>`;
        var contactlink = `<li><a href="contact.html" title="Contact"><strong>Contact</strong></a></li>`;

        /* Changes the link styling to highlight the active page to the user */
        if (window.location.href.includes("about"))
        {
            aboutLink = `<li><a href="about.html" title="About" class="active"><strong>About</strong></a></li>`;
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
        this.innerHTML = "<ul>" + homeLink + aboutLink + portfolioLink + contactlink + "</ul>";
    }
}

customElements.define('navbar-component', Navbar);

