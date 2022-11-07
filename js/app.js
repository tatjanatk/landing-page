document.addEventListener("DOMContentLoaded", function app() {

    // fucntion to create a section
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

    // create more sections -> numeration
    createSection(4);
    createSection(5);

    //count sections - 2 elements which are no sections
    const sections = document.getElementById("section1").parentNode;
    const secNum = sections.childElementCount-2;

    // build the nav depending on number of sections
    function createNavbar() {
        const nav = document.getElementById("navbar__list");
        const fragment = document.createDocumentFragment();

        for (let i = 1; i <= secNum; i++) {
            const newNav = document.createElement("li");
            newNav.innerHTML = "Section " + i;
            newNav.classList.add("menu__link");
            newNav.setAttribute("id", "sec" + i);

            fragment.appendChild(newNav);
        }

        nav.appendChild(fragment);
    }

    createNavbar();

    // add class 'active' to section when near top of viewport

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
    document.getElementById("sec1").className = "active";

    //function that returns all siblings of an element
    function getSiblings (element) {
        // for collecting siblings
        let siblings = []; 
        // if no parent, return no sibling
        if(!element.parentNode) {
            return siblings;
        }
        // first child of the parent node
        let sibling  = element.parentNode.firstChild;
        // collecting siblings
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== element) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    };

    //set section to class active, if in viewport
    document.addEventListener("scroll", function setActive(){
        for (let i=1; i<=secNum; i++){

            const sec = document.getElementById("sec" + i);
            const section = document.getElementById("section" + i);
            let siblingsSection = getSiblings(section);
            let siblingsSec = getSiblings(sec);

            if (isInViewport(section)) {
                section.className = "your-active-class";
                sec.className = "active";
                [].forEach.call(siblingsSection, function(el) {
                    el.classList.remove("your-active-class");
                });
                [].forEach.call(siblingsSec, function (el) {
                    el.className = "menu__link";
                });
            }
        }
    });

    // Scroll to section onclick -> i <= number of sections
    for (let i=1; i<=secNum; i++){
        const sec = document.getElementById("sec" + i);
        const section = document.getElementById("section" + i);
        sec.addEventListener("click", function scrollTo() {
            section.scrollIntoView({behavior: "smooth", block: "start"})
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