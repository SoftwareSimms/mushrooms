document.addEventListener("DOMContentLoaded", function() {
    const mushrooms = [
        {
            name: "Mushroom A",
            description: "Description for Mushroom A"
        },
        {
            name: "Mushroom B",
            description: "Description for Mushroom B"
        }
        // Add more mushrooms as needed
    ];

    const container = document.getElementById("mushroomContainer");

    mushrooms.forEach(mushroom => {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.textContent = mushroom.name;
        div.appendChild(h2);
        const p = document.createElement("p");
        p.textContent = mushroom.description;
        div.appendChild(p);
        container.appendChild(div);
    });
});
