window.onload = () => {

    var elements = document.getElementsByTagName("*");

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];

        let t = element.getAttribute("data-gte-target");
        let o = element.getAttribute("data-gte-offset");

        if (t) {

            element.onclick = () => {

                let tar = document.getElementById(t);

                window.scrollTo({
                    top: tar.offsetTop - parseInt(o),
                    behavior: "smooth",
                });
            }
        }
    }
};