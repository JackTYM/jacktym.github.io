document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("Discord");
    copyButton.addEventListener("click", () => {
        const textToCopy = "JackTYM#3898";
        const tempInput = document.createElement("input");
        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        // Custom alert
        const customAlert = document.createElement("div");
        customAlert.style = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: green;
        color: white;
        padding: 10px;
        text-align: center;
    `;
        customAlert.innerHTML = "Copied: " + textToCopy + " to the clipboard!";
        document.body.appendChild(customAlert);
        setTimeout(() => {
            customAlert.style.display = "none";
        }, 2000);
    });

    let currentValue = 1;
    setInterval(function() {
        $("#fadingName").fadeOut(1000, function() {
            $("#fadingName").text(currentValue === 1 ? "JackTYM" : "Jackson Yarger");
            $("#fadingName").fadeIn(1000);
            currentValue = currentValue === 1 ? 2 : 1;
        });
    }, 5000);
});