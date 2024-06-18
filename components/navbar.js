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

    static ShowVerticalMenu()
    {
        var pageElement = document.getElementById("navbar");

        /* Only run if the nav bar isn't already in responsive mode. */
        if (!pageElement.className.includes("responsive"))
        {
            pageElement.className += " responsive";
        }
    }

    static HideVerticalMenu() 
    {
        var pageElement = document.getElementById("navbar");

        /* Only run if the nav bar is in responsive mode. */
        if (pageElement.className.includes("responsive"))
        {
            pageElement.className = "nav";
        }
    }

    connectedCallback()
    {
        /* The basic link syntax */
        var homeLink = `<a href="../index.html" title="Home"><strong>Home</strong></a>`;
        var aboutLink = `<a href="about.html" title="About"><strong>About</strong></a>`;
        var portfolioLink = `<a href="portfolio.html" title="Portfolio"><strong>Portfolio</strong></a>`;
        var contactlink = `<a href="contact.html" title="Contact"><strong>Contact</strong></a>`;
        var expandLink = '<a href="javascript:void(0)" class="icon" onclick="Navbar.ShowVerticalMenu()">&#9776</a>'

        switch (document.body.id)
        {
            case '0': // Home page
                homeLink = `<a href="index.html" title="Home" class="active"><strong>Home</strong></a>`;
                aboutLink = `<a href="pages/about.html" title="About"><strong>About</strong></a>`;
                portfolioLink = `<a href="pages/portfolio.html" title="Portfolio"><strong>Portfolio</strong></a>`;
                contactlink = `<a href="pages/contact.html" title="Contact"><strong>Contact</strong></a>`;
                break;
            case '1': // About page
                aboutLink = `<a href="about.html" title="About" class="active"><strong>About</strong></a>`;
                break;
            case '2': // Portfolio page
                portfolioLink = `<a href="portfolio.html" title="Portfolio" class="active"><strong>Portfolio</strong></a>`;
                break;
            case '3': // Contact page
                contactlink = `<a href="contact.html" title="Contact" class="active"><strong>Contact</strong></a>`;
            default:
                break;
        }

        /*
            Constructs the navigation bar with the standard link order.
        */
        this.innerHTML  = '<div class="nav" id="navbar">'
                        + homeLink
                        + aboutLink
                        + portfolioLink
                        + contactlink
                        + expandLink
                        + '</div>';
    }
}

customElements.define('navbar-component', Navbar);

