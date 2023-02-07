document.addEventListener("DOMContentLoaded", function () {
    /*const spotify = document.getElementById("spotify")

    fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jacktym&api_key=8851234eb5c54a6f9853de93f26c0288&format=json&limit=1", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    })
        .then(response => response.json())
        .then(data => {
            const artistName = data.recenttracks.track[0].artist["#text"];
            const trackName = data.recenttracks.track[0].name;
            fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(`track:${trackName} artist:${artistName}`)}&type=track`)
                .then(response => response.json())
                .then(searchResult => {
                    console.log(searchResult)
                    const track = searchResult.tracks.items[0];
                    spotify.src = `https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`;
                });
        })
        .catch(error => {
            console.error(error);
        });

    spotify.height = "500";*/

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
    setInterval(function () {
        $("#fadingName").fadeOut(1000, function () {
            $("#fadingName").text(currentValue === 1 ? "JackTYM" : "Jackson Yarger");
            $("#fadingName").fadeIn(1000);
            currentValue = currentValue === 1 ? 2 : 1;
        });
    }, 5000);

    let isScrolling = false;

    $('.Language').on('mouseup', function(e) {
        if (!isScrolling) {
            $('.Language a').off('click');
        }
    });

    $('.Language a').on('click', function(e) {
        if (isScrolling) {
            e.preventDefault();
        }
    });

    $('.Language').on('mousedown', function(e) {
        e.preventDefault();
        var initialX = e.pageX;
        var scrollLeft = $(this).scrollLeft();

        $(this).on('mousemove', function(e) {
            isScrolling = true;
            var currentX = e.pageX;
            $(this).scrollLeft(scrollLeft - currentX + initialX);
        });

        $(this).on('mouseup', function(e) {
            isScrolling = false;
            e.preventDefault();
            $(this).off('mousemove');
        });

        $('.Language a').on('click', function(e) {
            e.preventDefault();
        });
    });
});