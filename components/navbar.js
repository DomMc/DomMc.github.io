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

        switch (document.body.id)
        {
            case '0': // Home page
                homeLink = `<li><a href="index.html" title="Home" class="active"><strong>Home</strong></a></li>`;
                aboutLink = `<li><a href="pages/about.html" title="About"><strong>About</strong></a></li>`;
                portfolioLink = `<li><a href="pages/portfolio.html" title="Portfolio"><strong>Portfolio</strong></a></li>`;
                contactlink = `<li><a href="pages/contact.html" title="Contact"><strong>Contact</strong></a></li>`;
                break;
            case '1': // About page
                aboutLink = `<li><a href="about.html" title="About" class="active"><strong>About</strong></a></li>`;
                break;
            case '2': // Portfolio page
                portfolioLink = `<li><a href="portfolio.html" title="Portfolio" class="active"><strong>Portfolio</strong></a></li>`;
                break;
            case '3': // Contact page
                contactlink = `<li><a href="contact.html" title="Contact" class="active"><strong>Contact</strong></a></li>`;
                break;
            default:
                break;
        }

        /*
            Constructs the navigation bar.
        */
        this.innerHTML = "<ul>" + homeLink + aboutLink + portfolioLink + contactlink + "</ul>";
    }
}

customElements.define('navbar-component', Navbar);

