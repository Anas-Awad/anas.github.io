window.onload = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "data/data.json");
  request.send();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(this.responseText);
      setProjectsData(data);
      setHomeData(data);
      setAboutData(data);
      setBackGrounds(data["background_images"]);
    }
  };
  function setHomeData(data) {
    let homeElement = document.querySelector(".first-content");
    homeElement.querySelector("h2").innerText = data["home"]["name"];
    homeElement.querySelector("p").innerText = data["home"]["description"];
    homeElement
      .querySelector("img")
      .setAttribute("src", "img/" + data["home"]["imageURL"]);
  }

  function setAboutData(data) {
    let aboutElement = document.querySelector(".second-content");
    aboutElement.querySelector(".left-content h2").innerText =
      data["about"]["header"];
    aboutElement.querySelector(".left-content p").innerText =
      data["about"]["paragraph"];

    aboutElement
      .querySelector(".right-image img")
      .setAttribute("src", `${"img/" + data["about"]["image"]}`);
  }

  function setProjectsData(data) {
    let projectsElement = document.querySelector("#projcets");
    for (let i = 0; i < data["projects"].length; i++) {
      let el = document.createElement("div");
      el.innerHTML = `<div class="col-md-4 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <a target="blank" href=${
                      data["projects"][i]["url"]
                    } data-lightbox="image-1"
                      ><div class="hover-effect">
                        <div class="hover-content">
                          <h2>${data["projects"][i]["name"]}</h2>
                          <p>
                           ${data["projects"][i]["description"]}
                          </p>
                        </div>
                      </div></a
                    >
                    <div class="image">
                      <img src=${"img/" + data["projects"][i]["image"]} />
                    </div>
                  </div>
                </div>
              </div>
`;
      projectsElement.appendChild(el);
    }
  }
  function setBackGrounds(data) {
    document.getElementById(
      "1"
    ).style.cssText = `background-image:url(img/${data["home"]});`;
    document.getElementById(
      "2"
    ).style.cssText = `background-image:url(img/${data["about"]});`;
    document.getElementById(
      "3"
    ).style.cssText = `background-image:url(img/${data["work"]});`;
    document.getElementById(
      "4"
    ).style.cssText = `background-image:url(img/${data["contact"]});`;
  }
};
