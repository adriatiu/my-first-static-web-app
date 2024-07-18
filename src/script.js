// Speichern Sie diesen Code als "script.js" und binden Sie ihn in Ihrer HTML-Datei mit dem <script>-Tag ein.

document.addEventListener("DOMContentLoaded", function() {
    // Erhalten Sie eine Referenz auf die Navigationslinks
    const navLinks = document.querySelectorAll("nav ul li a");

    // Fügen Sie jedem Navigationslink einen Klick-Event-Listener hinzu
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Verhindern Sie das Standardverhalten des Links
            event.preventDefault();

            // Erhalten Sie die Zielabschnitts-ID aus dem href-Attribut des Links
            const targetSectionId = link.getAttribute("href").substring(1);

            // Scrollen Sie sanft zum Zielabschnitt
            document.getElementById(targetSectionId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fügen Sie einen Scroll-Event-Listener hinzu, um den aktiven Abschnitt in der Navigation hervorzuheben
    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll("section");
        const currentScrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionBottom) {
                // Fügen Sie dem entsprechenden Navigationslink die Klasse "active" hinzu
                const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                navLinks.forEach(link => link.classList.remove("active"));
                activeLink.classList.add("active");
            }
        });
    });
});
