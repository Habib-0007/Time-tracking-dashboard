let tracks = document.querySelector(".tracks");

let fetchData = async () => {
    let res = await fetch("data.json");
    let data = await res.json();

    data.forEach(item => {
        let track = document.createElement("section");
        track.classList.add("track");
        track.innerHTML = `
      <div class="track-top" style="background-color: ${item.background}">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="track-bottom">
        <div>
          <h6>${item.title}</h6>
          <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
        </div>
        <div>
          <h1>${item.timeframes.weekly.current}hrs</h1>
          <div>
            <span>Last week</span> -
            <span>${item.timeframes.weekly.previous}</span>
          </div>
        </div>
      </div>
    `;
        tracks.appendChild(track);
    });
};

fetchData();
