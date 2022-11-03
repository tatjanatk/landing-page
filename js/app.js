document.addEventListener("DOMContentLoaded", function app() {

    // build the nav
    function createNavbar(index) {
        const nav = document.getElementById("navbar__list");
        const fragment = document.createDocumentFragment();

        for (let i = 1; i <= index; i++) {
            const newNav = document.createElement("li");
            newNav.innerHTML = "Section " + i;
            newNav.classList.add("menu__link");
            newNav.setAttribute("id", "sec" + i);

            fragment.appendChild(newNav);
        }

        nav.appendChild(fragment);
    }

    // Create section
    function createSection(number) {
        const section = document.createElement("section");
        main.appendChild(section);
        section.setAttribute("id", "section" + number);
        const div = document.createElement("div");
        section.appendChild(div);
        div.classList.add("landing__container");
        div.innerHTML = "<h2>Section " + number + "</h2>" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>" + 
        "<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>"
    }

    createNavbar(4);
    createSection(4);

    // Add class 'active' to section when near top of viewport
    // set variables
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("section4");
    const s1 = document.getElementById("sec1");
    const s2 = document.getElementById("sec2");
    const s3 = document.getElementById("sec3");
    const s4 = document.getElementById("sec4");

    //check if section is in Viewport
    function isInViewport(section) {
        const rect = section.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    //set s1 to active by default
    s1.className = "active";
    //set section to class active, if in viewport
    document.addEventListener("scroll", function setActive(){
        if (isInViewport(section1)) {
            section1.className = "your-active-class";
            section2.classList.remove("your-active-class");
            section3.classList.remove("your-active-class");
            section4.classList.remove("your-active-class");
            s1.className = "active";
            s2.className = "menu__link";
            s3.className = "menu__link";
            s4.className = "menu__link";
        }
        else if (isInViewport(section2)) {
            section2.className = "your-active-class";
            section1.classList.remove("your-active-class");
            section3.classList.remove("your-active-class");
            section4.classList.remove("your-active-class");
            s2.className = "active";
            s1.className = "menu__link";
            s3.className = "menu__link";
            s4.className = "menu__link";
        }
        else if (isInViewport(section3)) {
            section3.className = "your-active-class";
            section1.classList.remove("your-active-class");
            section2.classList.remove("your-active-class");
            section4.classList.remove("your-active-class");
            s3.className = "active";
            s1.className = "menu__link";
            s2.className = "menu__link";
            s4.className = "menu__link";
        }
        else if (isInViewport(section4)) {
            section4.className = "your-active-class";
            section1.classList.remove("your-active-class");
            section2.classList.remove("your-active-class");
            section3.classList.remove("your-active-class");
            s4.className = "active";
            s1.className = "menu__link";
            s2.className = "menu__link";
            s3.className = "menu__link";
        }
    });

    // Scroll to section onclick -> i <= number of sections
    for (let i=1; i<=4; i++){
        const sec = document.getElementById("sec" + i);
        const section = document.getElementById("section" + i);
        sec.addEventListener("click", function scrollTo() {
            section.scrollIntoView({behavior: "smooth", block: "center"})
        });
    }

    /** Hide Sections
    for (let i=0; i<=3; i++){
        const container = document.getElementsByClassName("landing__container");
        const elem = container[i];
        elem.children[0].addEventListener("click", function toggleSection() {
            elem.children[1].style.display = "none";
            elem.children[2].style.display = "none";
        });
    }
    */

    //surprise button -> toggle halloween mode
    const surprise = document.getElementById("surprise");
    surprise.addEventListener("click", function mystery() {
        surprise.classList.toggle("halloween");
        const body = document.getElementById("body");
        body.classList.toggle("halloween");
        const mainHeading = document.querySelector("h1");
        mainHeading.classList.toggle("halloween-heading");
    });
});