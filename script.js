function addProject() {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    if (!title || !desc) {
        alert("Fill all fields");
        return;
    }

    let container = document.getElementById("projects");

    container.innerHTML += `
        <div class="card">
            <h3>${title}</h3>
            <p>${desc}</p>
        </div>
    `;
}

function openWhatsApp() {
    window.open("https://wa.me/2347049138962", "_blank");
}

function makeCall() {
    window.location.href = "tel:07049138962";
}

function sendEmail() {
    window.location.href = "mailto:felixemmanuel18279@gmail.com";
}
