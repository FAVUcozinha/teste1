document.addEventListener("DOMContentLoaded", function () {
    const scene = document.querySelector("a-scene");
    const container = document.getElementById("hearts-container");

    function createHeart() {
        let heart = document.createElement("a-text");
        heart.setAttribute("value", "❤️");
        heart.setAttribute("color", "orange");
        heart.setAttribute("position", `${(Math.random() * 4 - 2)} -1 -3`);
        heart.setAttribute("scale", "2 2 2");

        container.appendChild(heart);

        let y = -1;
        function animate() {
            if (y < 3) {
                y += 0.02;
                heart.setAttribute("position", `${heart.getAttribute("position").split(" ")[0]} ${y} -3`);
                requestAnimationFrame(animate);
            } else {
                container.removeChild(heart);
            }
        }
        animate();
    }

    setInterval(createHeart, 500);
});
