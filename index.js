// -------------------------------  Element Variables --------------------------------- //

const container = document.querySelector(".container");
const searchBar = document.querySelector(".search-bar");
const buttonSubmit = document.querySelector(".button-submit");

// ----------------------------- Fetch Data For load First time ------------------------------------------------//

window.addEventListener("load", () => {
  fetch("https://mohamedsaid25.github.io/json/")
    .then((res) => res.json())
    .then((data) => {
      let getVideos = "";

      for (let i = 0; i < data.length; i++) {
        getVideos += `

             <div class="video" style="width: 345; height: 300px">
            <div class="img-card">
                    <img
                      src="${data[i].thumbnail}"
                      style="width: 320px; border-radius: 4%"
                      alt="youtube"
                    />
          </div>
      
          <div class="video-info">
            <div class="channel-icon">
              <img
                src="${data[i].channelLogo}"
                alt="youtube"
                style="width: 40px; border-radius: 50%"
              />
            </div>
            <div class="vid-title">
              <h3 style="font-size: 14px">${data[i].title}</h3>
              <p
                style="
                  color: rgba(113, 113, 113, 1);
                  margin: 3px 0 3px 0;
                  font-size: 12px;
                "
              >
                ${data[i].channelName}
              </p>
              <p style="color: rgba(113, 113, 113, 1); font-size: 12px">
                ${data[i].viewsAndago}
              </p>
              </div>
              </div>
          </div>
                  
                  `;

        container.innerHTML = getVideos;
      }
    });
});

// -------------------- JavaScript code for seach input -------------------------- ----------------------//

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let searchVal = searchBar.value;
  searchVal = searchVal.toLowerCase();

  // clear the dom from existing content

  container.innerHTML = "";

  // Fetch and get matching result

  fetch("https://mohamedsaid25.github.io/json/")
    .then((res) => res.json())
    .then((data) => {
      let getVideos = "";

      for (let i = 0; i < data.length; i++) {
        if (data[i].tag.toLowerCase() === searchVal) {
          getVideos += `

             <div class="video" style="width: 345; height: 300px">
            <div class="img-card">
                    <img
                      src="${data[i].thumbnail}"
                      style="width: 320px; border-radius: 4%"
                      alt="youtube"
                    />
          </div>
      
          <div class="video-info">
            <div class="channel-icon">
              <img
                src="${data[i].channelLogo}"
                alt="youtube"
                style="width: 40px; border-radius: 50%"
              />
            </div>
            <div class="vid-title">
              <h3 style="font-size: 14px">${data[i].title}</h3>
              <p
                style="
                  color: rgba(113, 113, 113, 1);
                  margin: 3px 0 3px 0;
                  font-size: 12px;
                "
              >
                ${data[i].channelName}
              </p>
              <p style="color: rgba(113, 113, 113, 1); font-size: 12px">
                ${data[i].viewsAndago}
              </p>
              </div>
              </div>
          </div>
                  
                  `;
        }

        if (getVideos.length == 0) {
          container.innerHTML = `<div class="not-found" style="align-items: center">
            <div class="msg" style="align-items: center">
              <span
                class="material-symbols-outlined side-icooon"
                style="
                  align-items: center;
                  margin: 5px 0 10px 107px;
                  font-size: 52px;
                "
              >
                error
              </span>
              <h1 style="align-items: center; margin: 5px 0 10px 62px">
                No results found
              </h1>
              <h2 style="align-items: center; margin: 5px 0 10px -15px">
                Try different keywords or remove search filters
              </h2>
            </div>
          </div>`;
        } else container.innerHTML = getVideos;
      }
    });
});
