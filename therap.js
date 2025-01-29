document.addEventListener("DOMContentLoaded", function () {
    const cardData = [
        { title: "😟 Anxiety?", description: "Neurotransmitter explicabo cognitive dissonance quia pariatur modi id sunt necessitativus quibusdam sed esse officia psychological resilience minus ratione autem deserunt." },
        { title: "😞 Depression?", description: "Neurotransmitter explicabo cognitive dissonance quia pariatur modi id sunt necessitativus quibusdam sed esse officia psychological resilience minus ratione autem deserunt." },
        { title: "☹️ Burnout?", description: "Neurotransmitter explicabo cognitive dissonance quia pariatur modi id sunt necessitativus quibusdam sed esse officia psychological resilience minus ratione autem deserunt." }
    ];

    const container = document.getElementById("card-container");

    cardData.forEach(data => {
        const card = document.createElement("div");
        card.className = "bg-indigo-100 w-[500px] h-auto p-5 rounded-2xl shadow-md";
        
        card.innerHTML = `
            <h3 class="uppercase text-indigo-700 font-serif text-xl">${data.title}</h3>
            <p class="text-gray-700 text-lg leading-relaxed my-3">${data.description}</p>
            <button class="bg-indigo-500 text-white capitalize font-mono text-xl px-5 py-3 rounded-xl hover:bg-indigo-400">
                discover
            </button>
        `;
        
        container.appendChild(card);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cardData = [
        {
            icon: "fa-facebook",
            title: "therapy.facebook.com",
            description: "24 hours service on Facebook connect with moderators",
            class: "facebook"
        },
        {
            icon: "fa-instagram",
            title: "therapy.instagram.com",
            description: "24 hours service on Instagram connect with moderators",
            class: "insta"
        },
        {
            icon: "fa-envelope",
            title: "therapy.email.com",
            description: "24 hours service on Email connect with moderators",
            class: "email"
        },
        {
            icon: "fa-whatsapp",
            title: "therapy.whatsapp.com",
            description: "24 hours service on WhatsApp connect with moderators",
            class: "whats"
        }
    ];

    const container = document.getElementById("service-card-container");

    cardData.forEach(data => {
        const card = document.createElement("div");
        card.className = `${data.class} flex items-center gap-3 p-6 border-b-3 border-red-50`;

        card.innerHTML = `
            <i class="fa-brands ${data.icon} w-16 h-16 p-6 rounded-4xl bg-stone-50 text-sky-300
            hover:text-stone-50 hover:bg-sky-300"></i>
            <div class="info">
                <h4 class="capitalize text-stone-100 font-serif">${data.title}</h4>
                <p>${data.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
});

