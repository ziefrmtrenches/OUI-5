const dev_name = document.getElementById("name_dev");
if (
  !dev_name ||
  dev_name.textContent.trim() != "TikTok: @sungsamtech - galaxyA15"
) {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
}
let home_wallpaper = "";
let lock_wallpaper = "";

document.getElementById("phoneName").textContent =
  localStorage.getItem("phoneName") || "Xiaomi 11 ";

initOriginDB(() => {
  getData("lock_wallpaper", (value) => {
    if (value) {
      const wallpaper_preview2 = document.querySelector(".wallpaper-preview2");
      const wallPaper2 = document.querySelector(".wallpaper2");
      const wallpaper = document.querySelector(".wallpaper");

      lock_wallpaper = value;
      wallpaper.style.backgroundImage = `url(${value})`;
      wallPaper2.style.backgroundImage = `url(${value})`;
      wallpaper_preview2.style.backgroundImage = `url(${value})`;
    } else {
    }
  });

  getData("home_wallpaper", (value) => {
    if (value) {
      home_wallpaper = value;
      document.documentElement.style.setProperty(
        "--bg--wallpaper",
        `url('${value}')`
      );
    }
  });

  getData("wallpaper_aod2_image", (value) => {
    if (value) {
      const wallpaper_aod2 = document.getElementById("wallpaper_aod2");

      wallpaper_aod2.style.backgroundImage = `url('${value}')`;
    }
  });
});

const dateElement = document.getElementById("dateText");
const dateElement2 = document.getElementById("dateText2");
const root2 = document.documentElement;
const border_radius_phone = getComputedStyle(root2)
  .getPropertyValue("--bg--border_radius_phone")
  .trim();

let custom_text_lock_screen =
  localStorage.getItem("custom_text_lock_screen") || "";

const now = new Date();
const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
};
const formatted = now.toLocaleDateString("en-US", options);

dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
dateElement2.textContent = formatted;
document.getElementById("dateText3").textContent = formatted;
document.getElementById(
  "dateTextPreview"
).textContent = `${formatted} ${custom_text_lock_screen}`;

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("lockclock").textContent = `${hours}:${minutes}`;
  document.getElementById("lockclock2").textContent = `${hours}:${minutes}`;
  document.getElementById("lockclock3").textContent = `${hours}:${minutes}`;
}
function updateTime2() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById(
    "lock-screen-preview"
  ).textContent = `${hours}:${minutes}`;
  document.getElementById("clock_preview").textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 10000);

const boxes = {
  box8: document.getElementById("box1"),
  box2: document.getElementById("box1"),
  box3: document.getElementById("box4"),
  box4: document.getElementById("box4"),
  box5: document.getElementById("box5"),
  box6: document.getElementById("box6"),
  box7: document.getElementById("box7"),
  box1: document.getElementById("box8"),
  box9: document.getElementById("box9"),
  box10: document.getElementById("box9"),
  box11: document.getElementById("box11"),
  box12: document.getElementById("box12"),
};

document.querySelector(".khayapp").classList.add("lock");

const appopen = {
  box8: document.getElementById("app1"),
  box2: document.getElementById("app1"),
  box3: document.getElementById("app4main"),
  box4: document.getElementById("app4main"),
  box5: document.getElementById("app5"),
  box6: document.getElementById("app6"),
  box7: document.getElementById("app7"),
  box1: document.getElementById("app8"),
  box9: document.getElementById("app9"),
  box10: document.getElementById("app9"),
  box11: document.getElementById("app11"),
  box12: document.getElementById("app12"),
};

const clickables = {
  box8: document.getElementById("clicke1"),
  box2: document.getElementById("clicke1"),
  box3: document.getElementById("clicke4"),
  box4: document.getElementById("clicke4"),
  box5: document.getElementById("clicke5"),
  box6: document.getElementById("clicke6"),
  box7: document.getElementById("clicke7"),
  box1: document.getElementById("clicke8"),
  box9: document.getElementById("clicke9"),
  box10: document.getElementById("clicke9"),
  box11: document.getElementById("clicke11"),
  box12: document.getElementById("clicke12"),
};

const WallPaper = document.querySelector(".wallpaper");
const allApp = document.getElementById("allApp");
const lp = document.getElementById("lp");
const target = document.getElementById("name_dev");
const nav = document.querySelector(".nav");
document.getElementById("name_dev").textContent = "";

let currentOpeningBtn = null;
let autoHideClickablesTimer = null;
let hideBlur = null;
let app = null;
let currentSpeed = 0.7;
let currentSpeed700 = 700 * currentSpeed;
let currentSpeed6 = 0.6 * currentSpeed;
let currentSpeed5 = 0.5 * currentSpeed;
let currentSpeed4 = 0.4 * currentSpeed;
let currentSpeed4_2 = 0.4 * currentSpeed * currentSpeed;
let currentSpeed3 = 0.3 * currentSpeed;
let currentSpeed2 = 0.2 * currentSpeed;

let multipleClickApp = localStorage.getItem("multipleClickApp_saved") || 1;
let multipleClickAppTime = multipleClickApp * currentSpeed5 * 1000;

let time_all = parseFloat(localStorage.getItem("time_all")) || 0.5;
let cubic_ratio =
  localStorage.getItem("cubic_ratio") || "cubic-bezier(0.07,0.74,0.37,0.98)";
let cubic_all =
  localStorage.getItem("cubic_all") || "cubic-bezier(0.25,0.1,0.25,1)";

let time_opening_app = time_all * currentSpeed;
let time_aspect_ratio_app = time_all * currentSpeed * 0.9;

let timeTransformClosing =
  (parseFloat(localStorage.getItem("timeTransformClosing")) || 0.5) *
  currentSpeed;

let cubicTransformClosing = `cubic-bezier(.25,.1,${
  parseFloat(localStorage.getItem("easingScaleClosing")) || 0.25
},${1 + (parseFloat(localStorage.getItem("dampingTransformClosing")) || 0)})`;

let timeScaleClosing =
  (parseFloat(localStorage.getItem("timeScaleClosing")) || 0.5) * currentSpeed;

let cubicScaleClosing = `cubic-bezier(.25,.1,${
  parseFloat(localStorage.getItem("easingScaleClosing")) || 0.25
},${1 + (parseFloat(localStorage.getItem("dampingScaleClosing")) || 0)})`;

let scaleWallpaper = localStorage.getItem("scaleWallpaperAnim") || 110;

let scaleAllApp = localStorage.getItem("scaleAllApp") || 86;
let scaleAllAppReverse = localStorage.getItem("scaleAllApp")
  ? 100 / parseFloat(localStorage.getItem("scaleAllApp"))
  : 1 / 0.86;

function hideAllClickables() {
  Object.values(clickables).forEach((el) => {
    el.style.display = "none";
  });
}

function openPopupFromCurrentButton() {
  showPopup_open_close(app);
  currentOpeningBtn.style.transition = `all ${time_opening_app}s ${cubic_all}, aspect-ratio ${time_aspect_ratio_app}s ${cubic_ratio}`;

  currentOpeningBtn.classList.add("open");
  currentOpeningBtn.style.scale = "100%";

  allApp.style.transition =
    wallpaper.style.transition = `all ${time_opening_app}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;

  lp.style.transition = `all ${time_opening_app}s cubic-bezier(0.23, 0.55, 0.54, 0.97), opacity ${currentSpeed3}s`;
  wallpaper.style.scale = `${scaleWallpaper}%`;
  lp.classList.add("open");

  lp.style.scale = `${scaleAllAppReverse}`;
  allApp.style.scale = `${scaleAllApp}%`;

  currentOpeningBtn.style.transform = `scale(${scaleAllAppReverse})`;

  nav.style.height = "40px";
}

target.innerText += "Ti";
const scale = 1;
let hide_app = null;
function closePopup() {
  hidePopup_open_close(app);
  app.style.pointerEvents = "none";

  currentOpeningBtn.style.transition = `all ${timeTransformClosing}s ${cubicTransformClosing}, transform ${timeTransformClosing}s ${cubicTransformClosing}, width ${timeScaleClosing}s ${cubicScaleClosing}, z-index ${timeTransformClosing}s, left ${timeScaleClosing}s ${cubicScaleClosing}, right ${timeScaleClosing}s ${cubicScaleClosing}`;
  clearTimeout(autoHideClickablesTimer);
  currentOpeningBtn.classList.remove("open");
  currentOpeningBtn.classList.remove("hien");
  currentOpeningBtn.style.scale = `${scale_icon}%`;

  lp.style.transition = `all ${currentSpeed5}s cubic-bezier(.35,.04,.69,.94), opacity ${currentSpeed6}s`;
  allApp.style.transition =
    wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(.13,.21,.45,.95)`;

  wallpaper.style.scale = `100%`;

  lp.classList.remove("open");
  lp.style.scale = 1;
  allApp.style.scale = 1;

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  currentOpeningBtn.style.transform = ``;

  if (currentOpeningBtn === boxes["box4"]) {
    document.getElementById("scaling-box").style.animation = "none";

    theme_option.style.pointerEvents = "auto";
    AboutInSetting.style.pointerEvents = "auto";
    animationInSetting.style.pointerEvents = "auto";

    removeAllUIEventListeners();

    hidePopup_open_close_noanim(app4);
    hidePopup_open_close_noanim(credits);
    hidePopup_open_close_noanim(app4_vesion);
    hidePopup_open_close_noanim(app4animation);
    hidePopup_open_close_noanim(app4_theme);
    hidePopup_open_close_noanim(app4_home);
    hidePopup_open_close_noanim(wallpaper_option);
    hidePopup_open_close_noanim(aod_option);
    hidePopup_open_close_noanim(lock_option);
    hidePopup_open_close_noanim(app4_finger);
    hidePopup_open_close_noanim("app4icon");
    hidePopup_open_close_noanim("app4audio");
    hidePopup_open_close_noanim(app4_lock_style);
    hidePopup_open_close_noanim(crea_pass);
    hidePopup_open_close_noanim(app4_more_animation);
    hidePopup_open_close_noanim(app4_unlock_animation);
    hidePopup_open_close_noanim(app4AppOpeningAnimation);
    hidePopup_open_close_noanim(app4AppClosingAnimation);
    hidePopup_open_close_noanim(app4ControlsCenterAnim);
    hideBorderRadiusSystem();
  }

  nav.style.height = "30px";
  currentOpeningBtn = null;
}

target.innerText += "kT";

let sensitivityNav = localStorage.getItem("sensitivityNavBar") || 0.08;
let maxNav = localStorage.getItem("maxDragNav") || 150;

function updateTransform(y, x) {
  y = Math.max(0, y);
  y = Math.min(maxNav, y);

  currentOpeningBtn.style.transition = `all ${sensitivityNav}s`;
  currentOpeningBtn.style.transform = `translateX(${x}px) translateY(${-y}px) scale(${
    scaleAllAppReverse - y / 250
  })`;
}

function resetpop() {
  currentOpeningBtn.style.transition = `all ${currentSpeed3}s`;
  currentOpeningBtn.style.transform = `scale(${scaleAllAppReverse})`;
}

let actions;
let handlersMap = new Map();

function updateActionsMap() {
  actions = new Map([
    [boxes["box3"], isPlaying_music ? closePopupToIsland3 : closePopup],
    [boxes["box9"], isRunning_clock ? closePopupToIsland : closePopup],
  ]);
  handlersMap.clear();
  if (isRunning_clock) handlersMap.set(boxes["box9"], handlers.box9);
  if (isPlaying_music) handlersMap.set(boxes["box3"], handlers.box3);
}

let startY = 0;
let startX = 0;
let deltaY = 0;
let deltaX = 0;
let dragging = false;

target.innerText += "ok";

nav.addEventListener("touchstart", (e) => {
  nav.style.bottom = "10px";
  if (!currentOpeningBtn) return;
  startY = e.touches[0].clientY;
  startX = e.touches[0].clientX;

  deltaY = 0;
  deltaX = 0;
});

nav.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    if (!currentOpeningBtn) return;
    deltaY = startY - e.touches[0].clientY;
    deltaX = e.touches[0].clientX - startX;
    updateTransform(deltaY, deltaX);
  },
  {
    passive: false,
  }
);

target.innerText += ": ";

nav.addEventListener("touchend", () => {
  nav.style.bottom = "0px";
  if (deltaY > 40) (actions.get(currentOpeningBtn) || closePopup)();
  else resetpop();
  deltaY = 0;
  deltaX = 0;
});

nav.addEventListener("mousedown", (e) => {
  deltaY = 0;
  deltaX = 0;
  startY = 0;
  startX = 0;
  nav.style.bottom = "10px";

  if (!currentOpeningBtn) return;
  hideAllClickables();
  dragging = true;
  startY = e.clientY;
  startX = e.clientX;
});

target.innerText += "@su";

window.addEventListener("mousemove", (e) => {
  if (!dragging || !currentOpeningBtn) return;
  deltaY = startY - e.clientY;
  deltaX = e.clientX - startX;
  updateTransform(deltaY, deltaX);
});

window.addEventListener("mouseup", () => {
  nav.style.bottom = "0px";
  if (!dragging || !currentOpeningBtn) return;
  dragging = false;
  if (deltaY > 40) (actions.get(currentOpeningBtn) || closePopup)();
  else resetpop();
});

const handlers = {
  box9: () => {
    Object.assign(island.style, {
      height: "25px",
      borderRadius: "25px",
      width: "120px",
    });
    buttons_island.classList.remove("show");
    time_island.classList.remove("show");
    image_island_right.classList.add("show");

    if (isPlaying_music) {
      island2.style.transition =
        "transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)";
      island2.style.width = "25px";
      island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
      clickables["box3"].style.pointerEvents = "auto";

      island.style.width = "120px";
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";

      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
  },
  box3: () => {
    Object.assign(island2.style, {
      height: "25px",
      borderRadius: "25px",
      width: "120px",
    });

    image_island_right2.classList.remove("show");
    controls_music2.classList.remove("show");
    popupTitle_music2.classList.remove("show");
    progressBar_music2.classList.remove("show");

    if (isRunning_clock) {
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
  },
};

["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].forEach(
  (num) => {
    document
      .getElementById(`clicke${num}`)
      .addEventListener("pointerup", () => {
        clearTimeout(autoHideClickablesTimer);
        if (currentOpeningBtn) {
          currentOpeningBtn.style.transition = `all ${time_opening_app}s ${cubicScaleClosing}`;
          currentOpeningBtn.classList.remove("open");
          currentOpeningBtn.classList.remove("hien");
          currentOpeningBtn.style.scale = `${scale_icon}%`;

          Object.values(clickables).forEach((el) => {
            el.style.display = "block";
          });

          hidePopup_open_close(app);
          app.style.display = "none";
          app = appopen[`box${num}`];

          //lp.style.transition = "all 0.15s";
          //lp.classList.remove("open");

          currentOpeningBtn.style.transform = ``;

          //lp.style.transition = "all 0.3s";
          //WallPaper.classList.remove("open");

          // Dùng 1 lần gọi duy nhất:
          const handler = handlersMap.get(currentOpeningBtn);
          if (handler) handler();

          currentOpeningBtn = boxes[`box${num}`];
          openPopupFromCurrentButton();

          clickables[`box${num}`].style.display = "none";
          autoHideClickablesTimer = setTimeout(() => {
            if (currentOpeningBtn) {
              hideAllClickables();
              app.style.pointerEvents = "auto";
            }
          }, multipleClickAppTime);
        } else {
          currentOpeningBtn = boxes[`box${num}`];
          app = appopen[`box${num}`];
          app.style.display = "none";
          openPopupFromCurrentButton();

          clickables[`box${num}`].style.display = "none";
          autoHideClickablesTimer = setTimeout(() => {
            if (currentOpeningBtn) {
              hideAllClickables();
              app.style.pointerEvents = "auto";
            }
          }, multipleClickAppTime);
        }
      });
  }
);

target.innerText += "ngs";

const island = document.getElementById("island");
const island_circle = document.getElementById("island_circle");
const buttons_island = document.querySelector(".buttons_island");
const time_island = document.querySelector(".time_island");
const image_island_right = document.querySelector(".image_island_right");
let timeHideIsland = null;

island.addEventListener("click", () => {
  if (island.offsetWidth >= 120) {
    hideAllClickables();
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island.style.width = "calc(var(--bg--size_width_phone) - 6%)";
    island.style.height = "75px";
    island.style.borderRadius = "calc(var(--bg--border_radius_phone) - 10px)";
    buttons_island.classList.add("show");
    time_island.classList.add("show");
    image_island_right.classList.remove("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";

    if (isPlaying_music) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(-50%) scale(1)";
    }
  }
});

document.addEventListener("pointerdown", function (e) {
  if (!island.contains(e.target) && island.offsetWidth >= 290) {
    island.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;

    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "120px";
    buttons_island.classList.remove("show");
    time_island.classList.remove("show");
    image_island_right.classList.add("show");

    battery1.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
    battery1.style.transform = "translateX(0px)";
    clock.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
    clock.style.transform = "translateX(0px)";

    if (!isRunning_clock) {
      setTimeout(() => {
        island.style.transition = `all ${currentSpeed5}s ease-out`;
        island.style.height = "25px";
        island.style.borderRadius = "25px";
        island.style.width = "25px";
        image_island_right.classList.remove("show");

        if (isPlaying_music) {
          clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
          clock.style.scale = "1";
          clock.style.left = "30px";

          island_circle.style.transition =
            "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
          island_circle.style.transform = "translateX(-50%) scale(1)";
          island2.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
          island2.style.width = "120px";
        }
      }, 20);
    }

    if (isPlaying_music) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    }

    if (!currentOpeningBtn) {
      Object.values(clickables).forEach((el) => {
        el.style.display = "block";
      });
    }
  }
});

clickables["box9"].addEventListener("pointerup", () => {
  if (isPlaying_music) {
    island.style.transition = `all 0.2s ease-out`;
    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "25px";

    island_circle.style.transition = "all 0.3s";
    island_circle.style.transform = "translateX(-50%) scale(1)";

    island2.style.transition = "all 0.5s cubic-bezier(.68,.01,.62,.14)";
    island2.style.width = "120px";
    island2.style.transform = "translateX(-50%) translateY(0) scale(1)";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "1";
    clock.style.left = "30px";
  } else {
    island.style.transition = `all 0.35s ease-out`;
    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "25px";
  }
});

function closePopupToIsland() {
  hidePopup_open_close(app);
  currentOpeningBtn.style.transition = `all ${currentSpeed3}s, opacity ${currentSpeed2}s cubic-bezier(1,0,1,0.2)`;
  clearTimeout(autoHideClickablesTimer);
  clearTimeout(timeHideIsland);

  allApp.style.transition = `all ${currentSpeed5}s`;
  wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(.35,.04,.69,.94)`;

  wallpaper.style.scale = `100%`;

  lp.style.transition = `all ${currentSpeed5}s cubic-bezier(0.2, 0.2, 0.12, 1)`;
  lp.classList.remove("open");
  lp.style.scale = 1;
  allApp.style.scale = 1;

  island.style.transition = `transform 0.2s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
  document.querySelector(".camera").style.transform =
    "translateX(-50%) translateY(-1px) scale(1.2)";
  island.style.transform = "translateX(-50%) translateY(-1px) scale(1.2)";
  if (!isPlaying_music) {
    island.style.width = "120px";
  }
  if (isPlaying_music) {
    island2.style.transition = "all 0.4s";
    island2.style.width = "25px";
    island2.style.transition = `transform 0.2s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island2.style.transform = "translateX(-50%) translateY(-1px) scale(1.2)";
    clickables["box3"].style.pointerEvents = "none";
  }

  battery1.style.transition = `transform 0.3s`;
  battery1.style.transform = "translateX(-7px)";
  clock.style.transition = `transform 0.3s`;
  clock.style.transform = "translateX(7px)";

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  boxes[
    "box9"
  ].style.transform = `translateY(calc(-33% * ${scaleAllAppReverse})) scale(0.25)`;
  boxes["box9"].classList.add("island_200");
  boxes["box9"].classList.remove("hien");
  boxes["box9"].style.opacity = 0;
  currentOpeningBtn = null;

  nav.style.height = "30px";
  clickables["box9"].style.pointerEvents = "none";

  setTimeout(() => {
    boxes["box9"].style.scale = `${scale_icon}%`;
    boxes["box9"].style.transition = "all 0s, opacity 0.3s";
    boxes["box9"].classList.remove("island_200");
    boxes["box9"].classList.remove("open");
    boxes["box9"].style.transform = `translateX(0%) translateY(0%) scale(1)`;
    boxes["box9"].style.opacity = 1;

    clickables["box9"].style.pointerEvents = "auto";
    island.style.transform = "translateX(-50%) translateY(0) scale(1)";
    document.querySelector(".camera").style.transform =
      "translateX(-50%) translateY(0px) scale(1)";
    if (isPlaying_music) {
      island2.style.transition = `transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)`;
      island.style.width = "120px";
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
      island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
      clickables["box3"].style.pointerEvents = "auto";
      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
    image_island_right.classList.add("show");
    battery1.style.transform = "translateX(0px)";
    clock.style.transform = "translateX(0px)";
  }, 300 * currentSpeed);
}

const island2 = document.getElementById("island2");
const image_island_right2 = document.querySelector(".image_island_right2");
const controls_music2 = document.querySelector(".controls_music2");

island_circle.addEventListener("click", () => {
  hideAllClickables();
  island2.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;

  Object.assign(island2.style, {
    height: "25px",
    borderRadius: "25px",
    width: "25px",
  });

  island.style.transition = `all 0.35s ease-out`;
  island.style.height = "25px";
  island.style.borderRadius = "25px";
  island.style.width = "25px";

  island_circle.style.transition = "all 0.3s";
  island_circle.style.transform = "translateX(-50%) scale(1)";

  setTimeout(() => {
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island2.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island2.style.width = "calc(var(--bg--size_width_phone) - 6%)";
    island2.style.height = "150px";
    island2.style.borderRadius = "calc(var(--bg--border_radius_phone) - 10px)";

    image_island_right2.classList.add("show");
    controls_music2.classList.add("show");
    popupTitle_music2.classList.add("show");
    progressBar_music2.classList.add("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";
  }, 200);
});

island2.addEventListener("click", () => {
  if (island2.offsetWidth >= 120) {
    hideAllClickables();
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island2.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island2.style.width = "calc(var(--bg--size_width_phone) - 6%)";
    island2.style.height = "150px";
    island2.style.borderRadius = "calc(var(--bg--border_radius_phone) - 10px)";

    image_island_right2.classList.add("show");
    controls_music2.classList.add("show");
    popupTitle_music2.classList.add("show");
    progressBar_music2.classList.add("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";
  }
});

document.addEventListener("pointerdown", function (e) {
  if (!island2.contains(e.target) && island2.offsetWidth >= 290) {
    if (!currentOpeningBtn) {
      Object.values(clickables).forEach((el) => {
        el.style.display = "block";
      });
    }
    if (!isRunning_clock) {
      island2.style.height = "25px";
      island2.style.borderRadius = "25px";

      if (!isPlaying_music) {
        island2.style.transition = `all 0.3s, width 0.4s`;
        island2.style.width = "25px";
        image_island_right2.classList.remove("show");
        controls_music2.classList.remove("show");
        popupTitle_music2.classList.remove("show");
        progressBar_music2.classList.remove("show");
      } else {
        island2.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;
        island2.style.width = "120px";
        image_island_right2.classList.remove("show");
        controls_music2.classList.remove("show");
        popupTitle_music2.classList.remove("show");
        progressBar_music2.classList.remove("show");
      }

      battery1.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
      battery1.style.transform = "translateX(0px)";
      clock.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
      clock.style.transform = "translateX(0px)";
    } else {
      island2.style.transition = `all 0.35s ease-out, width 1.2s cubic-bezier(.14,1.34,.41,1)`;
      island2.style.height = "25px";
      island2.style.borderRadius = "25px";
      island2.style.width = "25px";
      image_island_right2.classList.remove("show");
      controls_music2.classList.remove("show");
      popupTitle_music2.classList.remove("show");
      progressBar_music2.classList.remove("show");

      battery1.style.transform = "translateX(0px)";
      clock.style.transform = "translateX(0px)";
      setTimeout(() => {
        island.style.transform = "translateX(-50%) translateY(0) scale(1)";
        island2.style.transition = `transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)`;
        island.style.width = "120px";
        island_circle.style.transition =
          "all 0.7s cubic-bezier(.67,.2,.38,1.27)";

        if (!isPlaying_music) {
          island2.style.transition = `all 0.3s`;
          island2.style.width = "25px";
          island_circle.style.transition =
            "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
          island_circle.style.transform = "translateX(-50%) scale(1)";
        } else {
          island_circle.style.transform =
            "translateX(calc(-50% - 77px)) scale(1)";
        }
        island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
        clickables["box3"].style.pointerEvents = "auto";
        clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
        clock.style.scale = "0.8";
        clock.style.left = "25px";
        image_island_right.classList.add("show");
      }, 300);
    }
  }
});

clickables["box3"].addEventListener("pointerup", () => {
  if (isRunning_clock) {
    island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
    island_circle.style.transform = "translateX(-50%) scale(1)";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "1";
    clock.style.left = "30px";
  } else {
    island2.style.transition = `all ${currentSpeed5}s ease-out`;
    island2.style.height = "25px";
    island2.style.borderRadius = "25px";
    island2.style.width = "25px";
  }
});

function closePopupToIsland3() {
  hidePopup_open_close(app);

  currentOpeningBtn.style.transition = `all ${currentSpeed3}s, opacity ${currentSpeed2}s cubic-bezier(1,0,1,0.2)`;
  clearTimeout(autoHideClickablesTimer);
  clearTimeout(timeHideIsland);

  allApp.style.transition = `all ${currentSpeed5}s`;
  wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(.35,.04,.69,.94)`;

  wallpaper.style.scale = `100%`;

  lp.style.transition = `all ${currentSpeed5}s cubic-bezier(0.2, 0.2, 0.12, 1)`;
  lp.classList.remove("open");
  lp.style.scale = 1;
  allApp.style.scale = 1;

  nav.style.height = "30px";

  document.querySelector(".camera").style.transform =
    "translateX(-50%) translateY(-1px) scale(1.2)";
  island2.style.transform = "translateX(-50%) translateY(-1px) scale(1.2)";
  if (isRunning_clock) {
    island2.style.transition = `all 0.3s`;

    island2.style.transform = "";
    island.style.transition = `transform 0.2s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island.style.transform = "translateX(-50%) translateY(-1px) scale(1.2)";
    island.style.width = "80px";
    clickables["box9"].style.pointerEvents = "none";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";

    island2.style.width = clock.style.left = "25px";
    clock.style.scale = "0.8";
  } else {
    island2.style.transition = `transform 0.2s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island2.style.width = "120px";
  }

  battery1.style.transition = `transform 0.3s`;
  battery1.style.transform = "translateX(-7px)";
  clock.style.transition = `transform 0.3s`;
  clock.style.transform = "translateX(7px)";

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  boxes[
    "box3"
  ].style.transform = `translateY(calc(-33% * ${scaleAllAppReverse})) scale(0.25)`;
  boxes["box3"].classList.add("island_200");
  boxes["box3"].classList.remove("hien");
  boxes["box3"].style.opacity = 0;
  currentOpeningBtn = null;

  clickables["box3"].style.pointerEvents = "none";

  setTimeout(() => {
    document.querySelector(".camera").style.transform =
      "translateX(-50%) translateY(0) scale(1)";
    boxes["box3"].style.scale = `${scale_icon}%`;
    boxes["box3"].style.transition = "all 0s, opacity 0.3s";
    boxes["box3"].classList.remove("island_200");
    boxes["box3"].classList.remove("open");
    boxes["box3"].style.transform = `translateX(0%) translateY(0%) scale(1)`;
    boxes["box3"].style.opacity = 1;

    clickables["box3"].style.pointerEvents = "auto";
    if (isRunning_clock) {
      island.style.width = "120px";
      island.style.transform = "translateX(-50%) translateY(0) scale(1)";
      clickables["box9"].style.pointerEvents = "auto";
    } else {
      island2.style.width = "120px";
      island2.style.transform = "translateX(-50%) translateY(0) scale(1)";
    }
    battery1.style.transform = "translateX(0px)";
    clock.style.transform = "translateX(0px)";
    if (isRunning_clock) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    }
  }, 300 * currentSpeed);
}

function open_all_island() {
  if (
    isPlaying_music &&
    isRunning_clock &&
    currentOpeningBtn != boxes["box9"] &&
    currentOpeningBtn != boxes["box3"]
  ) {
    island2.style.transition = `all 0.2s`;
    island2.style.width = "25px";
    island.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.62,0,.25,1.36)`;
    island.style.width = "120px";
    island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
    island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
    clickables["box3"].style.pointerEvents = "auto";
    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "0.8";
    clock.style.left = "25px";
  } else {
    if (isRunning_clock && currentOpeningBtn != boxes["box9"]) {
      island.style.height = "25px";
      island.style.borderRadius = "25px";
      island.style.width = "120px";
      buttons_island.classList.remove("show");
      time_island.classList.remove("show");
      image_island_right.classList.add("show");
    }

    if (isPlaying_music && currentOpeningBtn != boxes["box3"]) {
      island2.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;
      island2.style.width = "120px";
      image_island_right2.classList.remove("show");
      controls_music2.classList.remove("show");
      popupTitle_music2.classList.remove("show");
      progressBar_music2.classList.remove("show");
    }
  }
}

function close_all_island() {
  island_circle.style.transition = "all 0.2s";
  island_circle.style.transform = "translateX(-50%) scale(1)";

  island.style.transition = `all 0.35s ease-out`;
  island.style.height = "25px";
  island.style.borderRadius = "25px";
  island.style.width = "25px";

  island2.style.transition = `all ${currentSpeed5}s ease-out`;
  island2.style.height = "25px";
  island2.style.borderRadius = "25px";
  island2.style.width = "25px";
}

// DOM elements
const lockscreen = document.getElementById("lockscreen");
const wallpaper = document.getElementById("wallpaper");
const unlockBtn = document.getElementById("unlock-btn");
const powerbtn = document.querySelector(".power-button");
const fingerprint = document.querySelector(".lock-fingerprint");
const lockclock = document.querySelector(".lock-clock");
const lock_clock_date = document.getElementById("lock_content");
target.innerText += "amt";
const dateText = document.getElementById("dateText");
const clock = document.getElementById("lockclock2");
const battery3 = document.querySelector(".battery-num");
const battery2 = document.querySelector(".battery-small");
const battery1 = document.querySelector(".status-battery");
const phone = document.querySelector(".phone");
const footerText = document.querySelector(".footer-text2");

let finger_biometrics = 0;
const saved_finger_local = localStorage.getItem("finger_saved");
if (saved_finger_local !== null) {
  finger_biometrics = parseInt(saved_finger_local);
}

let ison = true;
let islock = true;
allApp.style.transition = "all 0s";
allApp.classList.add("lock");
hideAllClickables();

//lock();
clock.classList.add("hien");
let wallpaper_lock_off_height = 50; //%
let wallpaper_lock_off_scale = 40; //%
let wallpaper_lock_off_borderRadius = 0; //px
let wallpaper_lock_off_opacity = 1;
let wallpaper_lock_off_transform = "translateY(0px)";

let wallpaper_lock_height = 70; //%
let wallpaper_lock_scale = 80; //%
let wallpaper_lock_borderRadius = 15; //px
let wallpaper_lock_opacity = 1;
let wallpaper_lock_transform = "translateY(250px)";

let current_wallpaper_lock = 1;

let lockscreen_style_opacity = 1;

function lock() {
  if (!islock) {
    finger_print.stop();
    finger_print.play();
  }
  hideAllClickables();
  lockscreen.style.display = "flex";

  islock = true;

  lockscreen.style.transition = "all 0.3s";
  lockscreen.style.opacity = lockscreen_style_opacity;
  lockscreen.style.pointerEvents = "auto";
  wallpaper.classList.remove("unlock");

  //wallpaper.classList.add("open");

  allApp.style.transition = "all 0s";
  allApp.classList.add("lock");

  if (lock_wallpaper) {
    wallpaper.style.transition = `all ${currentSpeed3}s, height ${currentSpeed5}s, width ${currentSpeed5}s, scale ${currentSpeed5}s, borderRadius ${currentSpeed5}s, transform ${currentSpeed5}s, opacity ${currentSpeed5}s`;
    wallpaper.style.backgroundImage = `url("${lock_wallpaper}")`;
  }

  clock.classList.remove("hien");
  document.querySelector(
    ".khayapp"
  ).style.transition = `all 0s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  document.querySelector(".khayapp").classList.add("lock");

  Object.entries(anim_unlock).forEach(([id, transform]) => {
    const box = boxes[id];
    clearSpringAnimationByID(box);
    box.style.transform = transform;
    box.style.opacity = "0";
    box.style.transition = "all 0s";
  });

  fingerprint.style.pointerEvents = "auto";

  if (!pass_password || !finger_biometrics) fingerprint.style.display = "none";
  if (pass_password && finger_biometrics) fingerprint.style.display = "flex";

  addCustomLockscreenTime(); // để tắt

  playmusic("originos_data/ui/Lock.ogg", volume_unlock_volume);
  nav.classList.remove("unlock");

  hideAllAlerts();
}

let timeUnlock =
  (parseFloat(localStorage.getItem("timeAnimationUnlock")) || 0.6) *
  currentSpeed;
let easingAnimationForUnlock =
  parseFloat(localStorage.getItem("easingAnimationUnlock")) || 0.25;
let speedUnlockHand = 1;
function unlock() {
  fingerprint.style.pointerEvents = "none";
  island.style.pointerEvents = "auto";
  island2.style.pointerEvents = "auto";
  island_circle.style.pointerEvents = "auto";

  thanhS1.style.pointerEvents = "auto";

  islock = false;
  ison = true;

  phone.style.background = phone_lock_background;
  lockscreen.style.opacity = 0;
  lockscreen.style.transition = "none";
  lockscreen.style.display = "none";
  lockscreen.style.pointerEvents = "none";

  document.getElementById("lockclock").style.filter = "brightness(1)";
  document.getElementById("dateText").style.filter = "brightness(1)";

  wallpaper.style.display = "flex";
  wallpaper.style.height = "100%";
  wallpaper.style.width = `100%`;
  wallpaper.style.scale = "100%";
  wallpaper.style.borderRadius = border_radius_phone;
  wallpaper.style.opacity = 1;
  wallpaper.style.transform = "translateY(0px)";
  wallpaper.classList.add("unlock");

  if (home_wallpaper) {
    wallpaper.style.transition = `all 0.2s, height ${currentSpeed5}s, width ${currentSpeed5}s, scale ${currentSpeed5}s, borderRadius ${currentSpeed5}s, transform ${currentSpeed5}s, opacity ${currentSpeed5}s`;
    wallpaper.style.backgroundImage = `url("${home_wallpaper}")`;
  }

  lock_clock_date.style.transform = "none";
  lock_clock_date.style.filter = "brightness(1)";

  allApp.style.transition = `all ${currentSpeed6}s`;
  allApp.classList.remove("lock");

  battery1.classList.remove("close");
  battery3.classList.remove("close");
  battery3.style.opacity = battery2.style.opacity = battery1.style.opacity = 1;

  clock.classList.add("hien");

  footerText.classList.remove("shake-animate");
  footerText.style.opacity = 0;

  powerbtn.classList.add("hidden");
  powerbtn.classList.remove("hidden");

  input_password = "";
  updateDots_password();
  removeKeys_password();
  nav.classList.add("unlock");

  Object.values(clickables).forEach((el) => {
    el.style.display = "flex";
  });

  groups_anim.forEach((group, groupIndex) => {
    const delay = groupIndex * 100 * currentSpeed;
    group.ids.forEach((id) => {
      const box = boxes[id];

      // ios 26 anim
      //box.style.transition = `opacity ${currentSpeed2}s ease ${delay}ms`;
      //box.style.opacity = "1";
      //springAnimationByID(
      //  box,
      //  "translateX(0px) translateY(0px) scale(1)",
      //  delay,
      //  7,
      //  40,
      //  12 - speedUnlockHand
      //);

      // normal anim
      box.style.transition = `all ${timeUnlock}s cubic-bezier(.25,.1,${easingAnimationForUnlock},1), opacity ${currentSpeed3}s`;
      box.style.transitionDelay = `${delay}ms`;
      box.style.transform = "translateX(0px) translateY(0px) scale(1)";
      box.style.opacity = "1";
    });
  });

  // Khay app xuất hiện sau nhóm cuối
  const khay = document.querySelector(".khayapp");
  const lastDelay = (groups_anim.length + 1) * 0.1 * currentSpeed; // delay của nhóm cuối
  khay.style.transition = `all ${timeUnlock}s cubic-bezier(.25,.1,${easingAnimationForUnlock},1)`;
  khay.style.transitionDelay = `${lastDelay}s`;
  khay.classList.remove("lock");

  clearTimeout(id_holding_locksreen);
  clearTimeout(id_holding_locksreen2);
  id_holding_locksreen = null;
  id_holding_locksreen2 = null;
  is_holding_locksreen = false;

  removeCustomLockscreenTime();
  playmusic("originos_data/ui/Unlock.ogg", volume_unlock_volume);

  fogot_pass_btn.style.display = "none";
}

target.innerText += "ech";

let unlock_time = null;
unlockBtn.addEventListener("pointerdown", () => {
  animation.stop();
  animation.play();
  unlock_time = setTimeout(() => {
    if (show_pass_for_cuslock) {
      currentOpeningBtn = boxes["box4"];
      app = appopen[`box4`];
      app.style.display = "none";
      handleShowLockOption_noanim();
      showPopup_open_close_noanim("app4theme");
      hideAllClickables();
      id_holding_locksreen = null;
      lock_preview.style.transform = "translateX(-50%) scale(1)";
      unlock_noanim();
      openPopupFromCurrentButton_noanim();
      updateTime2();

      id_holding_locksreen2 = setTimeout(() => {
        lock_preview.style.transform = "translateX(-50%) scale(0.7)";

        AboutInSetting.style.pointerEvents = "none";
        animationInSetting.style.pointerEvents = "none";

        lockscreen.style.transform = "translateX(-50%) scale(1)";
        id_holding_locksreen2 = null;
        is_holding_locksreen = false;
        show_pass_for_cuslock = false;

        wallpaper_btn.addEventListener("click", handleOpenWallpaperPopup);
        wallpaper_btn2.addEventListener("click", handleOpenWallpaperPopup);
        back4.addEventListener("click", handleCloseWallpaperPopup);

        aod_btn.addEventListener("click", handleOpenAODOption);
        back5.addEventListener("click", handleCloseAODOption);

        lock_btn.addEventListener("click", handleShowLockOption);
        back6.addEventListener("click", handleHideLockOption);

        home_btn.addEventListener("click", showHomeApp);
        back8.addEventListener("click", hideHomeApp);

        finger.addEventListener("click", showFingerPopup);
        back9.addEventListener("click", hideFingerPopup);

        removeCustomLockscreenTime(); // để tắt
        addEventListeners_aod_preview();
      }, 100);
    } else {
      open_all_island();
      unlock();
    }
  }, time_unlock_finger);
});
unlockBtn.addEventListener("pointerup", () => {
  clearTimeout(unlock_time);

  // Reset lại animation nếu đã từng chạy trước đó
  footerText.classList.remove("shake-animate");
  void footerText.offsetWidth; // trigger reflow
  footerText.classList.add("shake-animate");

  document.getElementById("wallpaper_aod2").classList.remove("open");
  document.getElementById("lockclock").style.filter = "brightness(1)";
  document.getElementById("dateText").style.filter = "brightness(1)";
});

let phone_lock_off_background = "#000000";
let phone_lock_background =
  "linear-gradient(to bottom, rgba(47, 11, 34, 255), rgba(147, 111, 134, 255))";
wallpaper.style.height = `${wallpaper_lock_height}%`;
wallpaper.style.scale = `${wallpaper_lock_scale}%`;
wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
wallpaper.style.opacity = 1;

let lockclock_style_transform = "scale(0.75) translateY(250px)";
let dateText_style_transform = "translateY(160px) translateX(-50%) scale(0.95)";

wallpaper.style.transform = "translateY(250px)";
phone.style.background = phone_lock_background;
function powerbtnEvent() {
  if (!islock) lock();
  lock_content.style.opacity = `1`;
  swipeHandle.style.opacity = "1";
  if (ison) {
    swipeHandle.style.opacity = `0`;
    swipeHandle.style.pointerEvents = `none`;

    battery3.style.transition =
      battery2.style.transition =
      battery1.style.transition =
      lock_clock_date.style.transition =
      wallpaper.style.transition =
        `all calc(0.5s * ${currentSpeed}) cubic-bezier(0.23, 0.55, 0.54, 0.97)`;

    battery3.style.opacity =
      battery2.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
        lockscreen_style_opacity;

    if (
      current_wallpaper_lock == "1" ||
      !always_on_displays ||
      hide_wallpaper
    ) {
      wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;
      wallpaper.style.height = `${wallpaper_lock_off_height}%`;
      wallpaper.style.width = `100%`;
      wallpaper.style.scale = `${wallpaper_lock_off_scale}%`;
      wallpaper.style.borderRadius = `${wallpaper_lock_off_borderRadius}px`;
      wallpaper.style.opacity = `${wallpaper_lock_off_opacity}`;
      wallpaper.style.transform = wallpaper_lock_off_transform;
      phone.style.background = phone_lock_off_background;
      lock_clock_date.style.transform = lockclock_style_transform;
    } else {
      wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;
      wallpaper.style.height = `${wallpaper_lock_height}%`;
      wallpaper.style.scale = `calc(${wallpaper_lock_scale}% + 5%)`;
      wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
      wallpaper.style.opacity = `calc(${wallpaper_lock_opacity} * 0.5)`;
      wallpaper.style.transform = wallpaper_lock_transform;

      phone.style.background = phone_lock_off_background;
      lock_clock_date.style.transform = "scale(0.93) translateY(30px)";
    }

    document.getElementById("wallpaper_aod2").classList.remove("hidden");
    wallpaper.style.display = display_wallpaper_for_show_aod_img;

    ison = false;
    removeSwipeEvents();
    document.getElementById("lockclock").style.filter = "brightness(3)";
    document.getElementById("dateText").style.filter = "brightness(3)";

    battery1.classList.add("close");
    battery3.classList.add("close");
    thanhS1.style.pointerEvents = "none";
    closePopup_noanim();
    if (!always_on_displays) close_all_island();

    island.style.pointerEvents = "none";
    island2.style.pointerEvents = "none";
    island_circle.style.pointerEvents = "none";

    show_pass_for_cuslock = false;
    clearTimeout(container_password_timeout);
    removeKeys_password();
  } else {
    swipeHandle.style.opacity = `1`;
    swipeHandle.style.pointerEvents = `auto`;

    battery3.style.opacity =
      battery2.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
        1;

    wallpaper.style.display = "flex";
    wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;
    wallpaper.style.height = `${wallpaper_lock_height}%`;
    wallpaper.style.width = `100%`;
    wallpaper.style.scale = `${wallpaper_lock_scale}%`;
    wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
    wallpaper.style.opacity = 1;

    document.getElementById("wallpaper_aod2").classList.add("hidden");

    wallpaper.style.transform = wallpaper_lock_transform;
    phone.style.background = phone_lock_background;

    ison = true;
    addSwipeEvents();
    lock_clock_date.style.transform = "none";
    document.getElementById("lockclock").style.filter = "brightness(1)";
    document.getElementById("dateText").style.filter = "brightness(1)";

    battery1.classList.remove("close");
    battery3.classList.remove("close");
    thanhS1.style.pointerEvents = "auto";

    island.style.pointerEvents = "auto";
    island2.style.pointerEvents = "auto";
    island_circle.style.pointerEvents = "auto";

    if (!always_on_displays) open_all_island();
  }

  footerText.classList.remove("shake-animate");
  footerText.style.opacity = 0;

  dongnotification();
  closeControlsCenter();
}

target.innerText += " -";

lockscreen.addEventListener("click", () => {
  if (!ison) {
    battery3.style.opacity =
      battery2.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
        1;
    battery1.classList.remove("close");
    battery3.classList.remove("close");

    wallpaper.style.display = "flex";
    wallpaper.style.height = `${wallpaper_lock_height}%`;
    wallpaper.style.scale = `${wallpaper_lock_scale}%`;
    wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
    wallpaper.style.width = `100%`;
    wallpaper.style.opacity = 1;

    document.getElementById("wallpaper_aod2").classList.add("hidden");

    wallpaper.style.transform = wallpaper_lock_transform;
    phone.style.background = phone_lock_background;

    ison = true;
    lock_clock_date.style.transform = "none";
    lock_clock_date.style.filter = "brightness(1)";
    thanhS1.style.pointerEvents = "auto";

    swipeHandle.style.opacity = `1`;
    swipeHandle.style.pointerEvents = `auto`;

    island.style.pointerEvents = "auto";
    island2.style.pointerEvents = "auto";
    island_circle.style.pointerEvents = "auto";

    open_all_island();

    document.getElementById("wallpaper_aod2").classList.remove("open");
    document.getElementById("lockclock").style.filter = "brightness(1)";
    document.getElementById("dateText").style.filter = "brightness(1)";
  }

  addSwipeEvents();
});

function openPopupFromCurrentButton_noanim() {
  if (!currentOpeningBtn) return;

  if (app) showPopup_open_close_noanim(app);
  app.style.pointerEvents = "all";

  currentOpeningBtn.style.transition = "all 0s, height 0s, top 0s";

  allApp.style.transition = wallpaper.style.transition = "all 0s";

  wallpaper.style.scale = `${scaleWallpaper}%`;

  currentOpeningBtn.classList.add("open");
  currentOpeningBtn.style.scale = "100%";
  currentOpeningBtn.style.transform = `scale(${scaleAllAppReverse})`;

  lp.style.transition = "all 0s";
  lp.classList.add("open");
  lp.style.scale = `${scaleAllAppReverse}`;

  allApp.style.scale = `${scaleAllApp}%`;
  nav.style.height = "40px";
}

function unlock_noanim() {
  fingerprint.style.pointerEvents = "none";
  island.style.pointerEvents = "auto";
  island2.style.pointerEvents = "auto";
  island_circle.style.pointerEvents = "auto";

  thanhS1.style.pointerEvents = "auto";

  islock = false;
  ison = true;

  phone.style.background = phone_lock_background;
  lockscreen.style.opacity = 0;
  lockscreen.style.transition = "none";
  lockscreen.style.display = "none";
  lockscreen.style.pointerEvents = "none";

  document.getElementById("lockclock").style.filter = "brightness(1)";
  document.getElementById("dateText").style.filter = "brightness(1)";

  wallpaper.style.display = "flex";
  wallpaper.style.height = "100%";
  wallpaper.style.width = `100%`;
  wallpaper.style.scale = "100%";
  wallpaper.style.borderRadius = border_radius_phone;
  wallpaper.style.opacity = 1;
  wallpaper.style.transform = "translateY(0px)";
  wallpaper.classList.add("unlock");

  if (home_wallpaper) {
    wallpaper.style.transition = `all 0s`;
    wallpaper.style.backgroundImage = `url("${home_wallpaper}")`;
  }

  lock_clock_date.style.transform = "none";
  lock_clock_date.style.filter = "brightness(1)";

  allApp.style.transition = "all 0s";
  allApp.classList.remove("lock");

  battery1.classList.remove("close");
  battery3.classList.remove("close");
  battery1.style.opacity = battery2.style.opacity = battery3.style.opacity = 1;

  clock.classList.add("hien");

  footerText.classList.remove("shake-animate");
  footerText.style.opacity = 0;

  powerbtn.classList.add("hidden");
  powerbtn.classList.remove("hidden");

  input_password = "";
  updateDots_password();
  removeSwipeEvents();
  nav.classList.add("unlock");

  const boxIds = [
    "box12",
    "box11",
    "box9",
    "box10",
    "box6",
    "box7",
    "box5",
    "box8",
    "box1",
    "box2",
    "box3",
    "box4",
  ];
  boxIds.forEach((id) => {
    boxes[id].style.transform = "translateX(0px) translateY(0px) scale(1)";
    boxes[id].style.opacity = "1";
    boxes[id].style.transition = "all 0s";
  });

  document.querySelector(".khayapp").style.transition = "all 0s";
  document.querySelector(".khayapp").classList.remove("lock");

  fogot_pass_btn.style.display = "none";
}

function hidePopup_open_close_noanim(target) {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  el.classList.remove("open");

  hideTimeouts_open_close[id] = setTimeout(() => {
    el.style.display = "none";
    hideTimeouts_open_close[id] = null;
  }, 0);
}

function showPopup_open_close_noanim(target) {
  const target2 =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!target2) return;

  target2.style.transition = "none";

  target2.style.display = "flex";
  target2.classList.remove("close");
  target2.classList.add("open");

  requestAnimationFrame(() => {
    target2.style.transition = "all 0.4s ease";
  });
}

function handleShowLockOption_noanim() {
  showPopup_open_close_noanim(lock_option);

  colorCircles.forEach((circle) => {
    circle.addEventListener("click", handleColorCircleClick);
  });
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");

  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  controls_locktext.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  customColorBtn.addEventListener("click", handleCustomColorClick);
  colorPicker.addEventListener("input", handleColorPickerInput);
  sizeSlider.addEventListener("input", handleSizeSliderInput);

  document.getElementById("btn1").addEventListener("click", handleBtn1Click);
  document.getElementById("btn2").addEventListener("click", handleBtn2Click);

  button_decor.addEventListener("click", handleDecorClick);
  close_controls_locktext.addEventListener(
    "click",
    handleclose_controls_locktextClick
  );

  addeventlistener_color_circle2();
}

let is_holding_locksreen = false;
let id_holding_locksreen = null;
let id_holding_locksreen2 = null;

function addCustomLockscreenTime() {
  lockscreen.addEventListener("pointerdown", onLockscreenPointerDown);
  lockscreen.addEventListener("pointerup", onLockscreenPointerUp);
}

function removeCustomLockscreenTime() {
  lockscreen.removeEventListener("pointerdown", onLockscreenPointerDown);
  lockscreen.removeEventListener("pointerup", onLockscreenPointerUp);
  clearTimeout(id_holding_locksreen);
  clearTimeout(id_holding_locksreen2);
  id_holding_locksreen = null;
  id_holding_locksreen2 = null;
  is_holding_locksreen = false;
  lockscreen.style.transform = "translateX(-50%)";
}

let show_pass_for_cuslock = false;
function onLockscreenPointerDown(e) {
  if (e.target !== lockscreen || !ison) return;
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");

  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  controls_locktext.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  lockscreen.style.transform = "translateX(-50%) scale(0.98)";
  is_holding_locksreen = true;

  hidePopup_open_close(credits);
  hidePopup_open_close(app4_vesion);
  hidePopup_open_close(app4animation);
  hidePopup_open_close(app4_home);
  hidePopup_open_close(wallpaper_option);
  hidePopup_open_close(aod_option);
  hidePopup_open_close(app4_finger);
  hidePopup_open_close(app4icon);
  hidePopup_open_close(app4audio);
  hidePopup_open_close(app4_lock_style);
  hidePopup_open_close(crea_pass);

  id_holding_locksreen = setTimeout(() => {
    if (pass_password) {
      swipeHandle.style.opacity = "0";
      lock_content.style.opacity = `0`;
      clearTimeout(container_password_timeout);
      container_password.classList.add("show");
      container_password.style.display = "flex";
      container_password.style.pointerEvents = "auto";
      showKeys_password();
      input_password = "";
      updateDots_password();
      show_pass_for_cuslock = true;
      lockscreen.style.transform = "translateX(-50%)";
    } else {
      currentOpeningBtn = boxes["box4"];
      app = appopen[`box4`];
      app.style.display = "none";
      hideAllClickables();
      handleShowLockOption_noanim();
      showPopup_open_close_noanim("app4theme");
      id_holding_locksreen = null;
      lock_preview.style.transform = "translateX(-50%)";
      unlock_noanim();
      openPopupFromCurrentButton_noanim();
      updateTime2();

      id_holding_locksreen2 = setTimeout(() => {
        lock_preview.style.transform = "translateX(-50%) scale(0.7)";

        AboutInSetting.style.pointerEvents = "none";
        animationInSetting.style.pointerEvents = "none";

        lockscreen.style.transform = "translateX(-50%)";
        id_holding_locksreen2 = null;
        is_holding_locksreen = false;

        wallpaper_btn.addEventListener("click", handleOpenWallpaperPopup);
        wallpaper_btn2.addEventListener("click", handleOpenWallpaperPopup);
        back4.addEventListener("click", handleCloseWallpaperPopup);

        aod_btn.addEventListener("click", handleOpenAODOption);
        back5.addEventListener("click", handleCloseAODOption);

        lock_btn.addEventListener("click", handleShowLockOption);
        back6.addEventListener("click", handleHideLockOption);

        home_btn.addEventListener("click", showHomeApp);
        back8.addEventListener("click", hideHomeApp);

        finger.addEventListener("click", showFingerPopup);
        back9.addEventListener("click", hideFingerPopup);

        removeCustomLockscreenTime(); // để tắt
        addEventListeners_aod_preview();
      }, 100);
    }
  }, 600);
}

function onLockscreenPointerUp() {
  if (id_holding_locksreen) {
    clearTimeout(id_holding_locksreen);
    id_holding_locksreen = null;
    if (id_holding_locksreen2) {
      clearTimeout(id_holding_locksreen2);
      id_holding_locksreen2 = null;
    }
  }
  is_holding_locksreen = false;
  lockscreen.style.transform = "translateX(-50%)";
}

addCustomLockscreenTime();

//DDDDDDDDDDDD-------------DDDDDDDDDDDDD
//DDDDDDDDD--DDDDDDDDDDDDDDD--DDDDDDDDDD
//DDDDDD--DDDDDDDDDDDDDDDDDDDDD--DDDDDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDDDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDDDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDDDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDDDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDDDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDDDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDDDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDDDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDD---DDDDDD--DDDD
//DDD--DDDDDDDDDDDDDDDDDDDDDD--DDD--DDDD
//DDDDDD--DDDDDDDDDDDDDDDDDDDDD--DDDDDDD
//DDDDDDDDD--DDDDDDDDDDDDDDD--DDD--DDDDD
//DDDDDDDDDDDD-------------DDDDDDDD---DD

// -- nofication --
const thanhS1 = document.querySelector(".thanh-status");
const thanhS2 = document.querySelector(".thanh-status2");
const lp2 = document.querySelector(".lp2");
const notificationcenter = document.querySelector(".left-text-tb");

let draggingS = false;
let isMoS = false;
let startYS = 0;
let startXS = 0;
let deltaYS = 0;
let deltaXS = 0;

function updateTransformS(y) {
  let y2 = y;
  if (y2 < -80) y2 = -80;
  if (y2 > 0) y2 = 0;
  //if (y < -50) y = -50;
  if (y > 0) y = 0;

  const scale = 1 + -y2 / 60;

  clock.style.transition = "all 0.2s";
  clock.style.transform = `translateX(calc(${-y2}px / 3)) translateY(${-y2}px) scale(${scale})`;
  lp2.style.transition = "all 0.1s";
  lp2.style.opacity = `${scale - 1} `;
  lp2.style.zIndex = 10000;

  thanhS1.style.transition = "none";
  thanhS1.style.transform = `translateY(${-y2}px)`;
}

thanhS1.addEventListener("touchstart", (e) => {
  if (!ison) return;
  console.log(ison);

  isMoS = true;
  startYS = e.touches[0].clientY;
  startXS = e.touches[0].clientX;
  clock.classList.add("hien");
  notificationcenter.style.transform = "translateY(0px)";
});

thanhS1.addEventListener(
  "touchmove",
  (e) => {
    if (!ison) return;
    console.log(ison);
    e.preventDefault();
    if (!isMoS) return;
    deltaYS = startYS - e.touches[0].clientY;
    deltaXS = e.touches[0].clientX - startXS;
    updateTransformS(deltaYS);

    if (deltaYS < -70) {
      //close_all_island();
      closeControlsCenter();
      notificationcenter.classList.add("open");
    } else {
      //open_all_island();
      notificationcenter.style.transform = "translateY(0px)";
      notificationcenter.classList.remove("open");
    }
  },
  {
    passive: false,
  }
);

thanhS1.addEventListener("touchend", () => {
  if (deltaYS < -70) monotification();
  else dongnotification();
  deltaYS = 0;
  deltaXS = 0;
  thanhS1.style.transform = ``;
});

window.addEventListener("mousemove", (e) => {
  if (!draggingS || !isMoS) return;
  deltaYS = startYS - e.clientY;
  deltaXS = e.clientX - startXS;
  updateTransformS(deltaYS);
  if (deltaYS < -70) {
    //close_all_island();
    closeControlsCenter();
    notificationcenter.classList.add("open");
  } else {
    //open_all_island();
    notificationcenter.style.transform = "translateY(0px)";
    notificationcenter.classList.remove("open");
  }
});

window.addEventListener("mouseup", () => {
  if (!draggingS || !isMoS) return;
  draggingS = false;
  if (deltaYS < -70) monotification();
  else dongnotification();
  deltaYS = 0;
  deltaXS = 0;
  thanhS1.style.transform = ``;
});

lp2.addEventListener("pointerup", () => {
  dongnotification();
});

function monotification() {
  clock.style.transition = "all 0.5s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
  clock.style.transform = `translateX(25px) translateY(50px) scale(calc(1 + 50 / 40))`;
  lp2.style.transition = "all 0s";
  notificationcenter.classList.add("open");
  lp2.style.opacity = `1`;
  lp2.style.zIndex = 10000;
  clock.classList.add("open");
  thanhS1.style.pointerEvents = "none";
  closeControlsCenter();
}
function dongnotification() {
  clock.style.transition = "all 0.4s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
  clock.style.transform = `none`;
  lp2.style.transition = "all 0.3s";
  lp2.style.opacity = `0`;
  lp2.style.zIndex = 1;
  notificationcenter.style.transform = "translateY(0px)";
  notificationcenter.classList.remove("open");
  clock.classList.remove("open");
  if (islock) clock.classList.remove("hien");
  thanhS1.style.pointerEvents = "auto";
}
function closePopup_noanim() {
  if (!currentOpeningBtn) return;
  hidePopup_open_close(app);

  currentOpeningBtn.style.transition = `all 0s`;
  clearTimeout(autoHideClickablesTimer);
  currentOpeningBtn.classList.remove("open");
  currentOpeningBtn.style.scale = `${scale_icon}%`;
  lp.style.transition = allApp.style.transition = `all 0s`;

  lp.classList.remove("open");
  lp.style.scale = 1;
  allApp.style.scale = 1;

  nav.style.height = "30px";

  currentOpeningBtn.classList.remove("hien");
  currentOpeningBtn = null;

  open_all_island();
}

const speedBoxes = document.querySelectorAll(".speed-box");
let savedSpeed = parseFloat(localStorage.getItem("currentSpeed"));
if (!isNaN(savedSpeed)) {
  currentSpeed = savedSpeed;
  speedBoxes.forEach((b) => b.classList.remove("active"));
  speedBoxes.forEach((box) => {
    if (parseFloat(box.dataset.speed) === currentSpeed) {
      box.classList.add("active");
    }
  });

  updateSpeedVars(currentSpeed);
}
speedBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    speedBoxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");
    currentSpeed = parseFloat(box.dataset.speed);
    localStorage.setItem("currentSpeed", currentSpeed);
    updateSpeedVars(currentSpeed);
  });
});
function updateSpeedVars(speed) {
  currentSpeed6 = 0.6 * speed;
  currentSpeed5 = 0.5 * speed;
  currentSpeed4 = 0.4 * speed;
  currentSpeed3 = 0.3 * speed;
  currentSpeed2 = 0.2 * speed;
  duration = 1.7 * speed;

  multipleClickAppTime = multipleClickApp * currentSpeed5 * 1000;

  time_opening_app = time_all * speed;
  time_aspect_ratio_app = time_all * speed * 0.9;

  timeTransformClosing =
    (parseFloat(localStorage.getItem("timeTransformClosing")) || 0.5) * speed;
  timeScaleClosing =
    (parseFloat(localStorage.getItem("timeScaleClosing")) || 0.5) * speed;

  document.getElementById(
    "scaling-box"
  ).style.animation = `scaleUpDown ${duration}s ease-out infinite`;

  let timeHidingIcon = parseFloat(localStorage.getItem("timeHidingIcon"));
  if (isNaN(timeHidingIcon)) {
    timeHidingIcon = 0.3;
  }
  document.documentElement.style.setProperty(
    "--bg--timeHidingIcon",
    `${timeHidingIcon * currentSpeed}s`
  );

  let delayHidingIcon = parseFloat(localStorage.getItem("delayHidingIcon"));
  if (isNaN(delayHidingIcon)) {
    delayHidingIcon = 0;
  }
  document.documentElement.style.setProperty(
    "--bg--delayHidingIcon",
    `${delayHidingIcon * currentSpeed}s`
  );

  timeUnlock =
    (parseFloat(localStorage.getItem("timeAnimationUnlock")) || 0.6) *
    currentSpeed;
}

let animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "originos_data/Artboard_1.json",
});
animation.setSpeed(0.7 * currentSpeed);
animation.goToAndStop(animation.totalFrames - 1, true);

const finger_print = lottie.loadAnimation({
  container: document.getElementById("unlock-btn2"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "originos_data/finger_print.json",
});
finger_print.setSpeed(currentSpeed);
finger_print.goToAndStop(animation.totalFrames - 1, true);

// battery
let battery_level = 100;
let charging = false;
const battery4 = document.querySelector(".battery-small2");
const battery_num = document.querySelector(".battery-num");

function updateBatteryInfo(battery) {
  battery_level = Math.round(battery.level * 100);
  charging = battery.charging;
  battery4.style.width = `calc(${battery_level}%)`;
  if (battery_level <= 20) battery4.style.background = "red";
  if (battery_level == 20) playmusic("originos_data/ui/LowBattery.ogg");
  if (battery_level > 20) battery4.style.background = "white";
  battery_num.textContent = `${battery_level}`;
  if (charging) {
    battery4.style.background = "#26bd44";
    playmusic("originos_data/ui/charge_full.ogg", volume_charge_volume);
  }
}

if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    updateBatteryInfo(battery);

    battery.addEventListener("levelchange", () => updateBatteryInfo(battery));
    battery.addEventListener("chargingchange", () =>
      updateBatteryInfo(battery)
    );
  });
}

const row = document.querySelector(".button-row");
const items = row.querySelectorAll(".img-button");

function updateRotation() {
  const rowRect = row.getBoundingClientRect();
  const centerX = rowRect.left + rowRect.width / 2;

  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const distance = itemCenter - centerX;

    const maxAngle = 80; // càng lớn xoay càng mạnh
    const maxDistance = rowRect.width / 1.3;
    const ratio = Math.max(-1, Math.min(1, distance / maxDistance));
    const angle = ratio * maxAngle;

    const scale = 1 - Math.abs(ratio) * 0.5;
    const z = Math.round((1 - Math.abs(ratio)) * 100);

    item.style.transform = `
    rotateY(${-angle}deg)
    scale(${scale})
    translateX(${-ratio * 80}px)`;
    item.style.zIndex = z;
  });
  updatePhoneScale();
}
updateRotation();
row.addEventListener("scroll", updateRotation);
window.addEventListener("resize", updateRotation);

function removeWithFade(elementOrId, duration = 500) {
  // Nếu là chuỗi (id), chuyển thành element
  let element =
    typeof elementOrId === "string"
      ? document.getElementById(elementOrId)
      : elementOrId;

  if (!element) return;

  // Thêm transition nếu chưa có
  element.style.transition = `opacity ${duration}ms ease`;
  element.style.opacity = "0";

  // Xóa khỏi DOM sau khi hoàn tất animation
  setTimeout(() => {
    if (element && element.parentNode) {
      element.remove();
    }
  }, duration);
}

function parseTransforms(transformStr) {
  const regex = /([a-zA-Z]+)\((-?[0-9.]+)([a-z%]*)\)/g;
  let match;
  const result = [];
  while ((match = regex.exec(transformStr)) !== null) {
    result.push({
      type: match[1],
      value: parseFloat(match[2]),
      unit: match[3] || "",
    });
  }
  return result;
}

const springStates = new WeakMap();

function springAnimationByID(
  el,
  transform = "scale(2)",
  delay = 0,
  mass = 4,
  tension = 3,
  friction = 9
) {
  if (!el) return;

  clearSpringAnimationByID(el);

  const currentTransformStr =
    el.style.transform && el.style.transform !== "none"
      ? el.style.transform
      : getComputedStyle(el).transform === "none"
      ? ""
      : el.style.transform;

  const startTransforms = parseTransforms(currentTransformStr);
  const endTransforms = parseTransforms(transform);

  const animParts = endTransforms.map((end) => {
    const start = startTransforms.find((s) => s.type === end.type);
    return {
      type: end.type,
      start: start ? start.value : 0,
      end: end.value,
      unit: end.unit,
    };
  });

  const state = {};

  state.timeout = setTimeout(() => {
    let velocity = animParts.map(() => 0);
    let lastTime = performance.now();

    function animate(now) {
      const deltaTime = (now - lastTime) / 1000; // giây
      lastTime = now;

      let stillRunning = false;

      animParts.forEach((part, i) => {
        const force = (part.end - part.start) * tension;
        const acceleration = force / mass;
        velocity[i] += acceleration * deltaTime * 30; // scale theo 60fps
        velocity[i] *= 1 - friction / 100;
        part.start += (velocity[i] / 60) * (deltaTime * 60);

        if (
          Math.abs(part.end - part.start) > 0.001 ||
          Math.abs(velocity[i]) > 0.001
        ) {
          stillRunning = true;
        } else {
          part.start = part.end;
        }
      });

      el.style.transform = animParts
        .map((p) => `${p.type}(${p.start}${p.unit})`)
        .join(" ");

      if (stillRunning) {
        state.raf = requestAnimationFrame(animate);
      }
    }

    state.raf = requestAnimationFrame((time) => {
      lastTime = time;
      animate(time);
    });
  }, delay);

  springStates.set(el, state);
}

function clearSpringAnimationByID(el) {
  const state = springStates.get(el);
  if (state) {
    if (state.raf) cancelAnimationFrame(state.raf);
    if (state.timeout) clearTimeout(state.timeout);
    springStates.delete(el);
  }
}

let oldApps = [];

function closeAppToLeft() {
  const closingBox = currentOpeningBtn;
  const closingApp = app;
  app.style.pointerEvents = "none";

  closingBox.style.transition = `all ${currentSpeed6}s, scale ${currentSpeed3}s`;
  clearTimeout(autoHideClickablesTimer);

  // nếu app đã có trong oldApps → clear timeout cũ trước
  const existing = oldApps.find((item) => item.el === closingBox);
  if (existing) {
    clearTimeout(existing.timeoutId);
    oldApps = oldApps.filter((item) => item.el !== closingBox);
  }

  // tạo timeout mới
  const timeoutId = setTimeout(() => {
    closingBox.style.transition = "all 0s";
    closingBox.classList.remove("open");
    closingBox.classList.remove("hien");
    closingBox.style.scale = `${scale_icon}%`;
    closingBox.style.transform = "";
    hidePopup_open_close(closingApp);

    // xóa app này khỏi mảng khi xong
    oldApps = oldApps.filter((item) => item.el !== closingBox);
  }, currentSpeed6 * 1000);

  // push vào mảng (element + timeout id)
  oldApps.push({ el: closingBox, timeoutId });

  // hiệu ứng dịch sang trái
  closingBox.style.scale = 0.95;
  closingBox.style.transform = `translateX(-120%)`;

  lp.style.transition = `all ${currentSpeed5}s cubic-bezier(.35,.04,.69,.94), opacity ${currentSpeed6}s`;
  allApp.style.transition =
    wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(.35,.04,.69,.94)`;

  wallpaper.style.scale = `100%`;
  closingBox.style.zIndex = "";

  lp.classList.remove("open");
  allApp.style.scale = 1;

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });

  if (closingBox === boxes["box4"]) {
    document.getElementById("scaling-box").style.animation = "none";

    theme_option.style.pointerEvents =
      AboutInSetting.style.pointerEvents =
      animationInSetting.style.pointerEvents =
        "auto";

    removeAllUIEventListeners();

    hidePopup_open_close_noanim(app4);
    hidePopup_open_close_noanim(credits);
    hidePopup_open_close_noanim(app4_vesion);
    hidePopup_open_close_noanim(app4animation);
    hidePopup_open_close_noanim(app4_theme);
    hidePopup_open_close_noanim(app4_home);
    hidePopup_open_close_noanim(wallpaper_option);
    hidePopup_open_close_noanim(aod_option);
    hidePopup_open_close_noanim(lock_option);
    hidePopup_open_close_noanim(app4_finger);
    hidePopup_open_close_noanim("app4icon");
    hidePopup_open_close_noanim("app4audio");
    hidePopup_open_close_noanim(app4_lock_style);
    hidePopup_open_close_noanim(crea_pass);
    hidePopup_open_close_noanim(app4_more_animation);
    hidePopup_open_close_noanim(app4_unlock_animation);
    hidePopup_open_close_noanim(app4AppOpeningAnimation);
    hidePopup_open_close_noanim(app4AppClosingAnimation);
    hidePopup_open_close_noanim(app4ControlsCenterAnim);
    hideBorderRadiusSystem();
  }

  nav.style.height = "30px";
  currentOpeningBtn = null;
}

let timeOutOpenAppFromRight = null;
function openAppFromRight() {
  showPopup_open_close(app);
  lp.style.transition =
    allApp.style.transition =
    wallpaper.style.transition =
    currentOpeningBtn.style.transition =
      `all 0s`;

  currentOpeningBtn.classList.add("open");
  currentOpeningBtn.style.scale = "90%";
  currentOpeningBtn.style.transform = `translateX(130%)`;

  wallpaper.style.scale = `${scaleWallpaper}%`;
  lp.classList.add("open");

  lp.style.scale = `${scaleAllAppReverse}`;
  allApp.style.scale = `${scaleAllApp}%`;

  nav.style.height = "40px";

  const existing = oldApps.find((item) => item.el === currentOpeningBtn);
  if (existing) {
    clearTimeout(existing.timeoutId);
    oldApps = oldApps.filter((item) => item.el !== currentOpeningBtn);
  }

  clearTimeout(timeOutOpenAppFromRight);
  timeOutOpenAppFromRight = setTimeout(() => {
    currentOpeningBtn.style.transition = `all ${
      currentSpeed * 0.7
    }s , scale ${currentSpeed}s cubic-bezier(0,-2.28,.62,.94)`;
    currentOpeningBtn.style.scale = "1";
    currentOpeningBtn.style.transform = `scale(${scaleAllAppReverse})`;
  }, currentSpeed * 10);
}

function openAppFromCenter() {
  showPopup_open_close(app);

  allApp.style.transition = currentOpeningBtn.style.transition = `all 0s`;
  lp.style.transition = `opacity ${time_opening_app}s`;
  wallpaper.style.transition = `all ${time_opening_app}s`;
  currentOpeningBtn.classList.add("open");
  currentOpeningBtn.classList.add("hien");
  currentOpeningBtn.style.scale = "80%";
  currentOpeningBtn.style.transform = `scale(${scaleAllAppReverse})`;

  wallpaper.style.scale = `${scaleWallpaper}%`;
  lp.classList.add("open");

  lp.style.scale = `${scaleAllAppReverse}`;
  allApp.style.scale = `${scaleAllApp}%`;

  const boxId = Object.keys(boxes).find(
    (key) => boxes[key] === currentOpeningBtn
  );
  if (boxId) clickables[boxId].style.display = "none";
  nav.style.height = "40px";

  clearTimeout(timeOutOpenAppFromRight);

  timeOutOpenAppFromRight = setTimeout(() => {
    currentOpeningBtn.style.transition = `scale ${currentSpeed4}s`;
    currentOpeningBtn.style.scale = "1";
  }, currentSpeed * 10);
}

function openApp(idApp) {
  // idApp (1 - 12)
  if (islock) {
    tb_system("Unlock your phone first!");
    return;
  }
  if (currentOpeningBtn && currentOpeningBtn != boxes[`box${idApp}`]) {
    closeAppToLeft();
    currentOpeningBtn = boxes[`box${idApp}`];
    app = appopen[`box${idApp}`];
    app.style.display = "none";
    openAppFromRight();
    hideAllClickables();
    app.style.pointerEvents = "auto";
  } else {
    if (currentOpeningBtn == boxes[`box${idApp}`]) return;
    currentOpeningBtn = boxes[`box${idApp}`];
    app = appopen[`box${idApp}`];
    app.style.display = "none";
    openAppFromCenter();
    clickables[`box${idApp}`].style.display = "none";
    hideAllClickables();
    app.style.pointerEvents = "auto";
  }
}

function updatePhoneScale() {
  updatePhoneScaleNonFullScreen();
}
function updatePhoneScaleNonFullScreen() {
  const defaultHeight = 700 + 150;
  const defaultWidth = 330 + 150;

  // Lấy kích thước viewport thực (không tính thanh địa chỉ)
  const vh = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;
  const vw = window.visualViewport
    ? window.visualViewport.width
    : window.innerWidth;

  const scaleH = vh / defaultHeight;
  const scaleW = vw / defaultWidth;

  const scale = Math.min(scaleH, scaleW);

  document.documentElement.style.setProperty(
    "--bg--scale_phone",
    scale.toFixed(3)
  );
}

function updatePhoneScaleFullScreen() {
  const BASE_H = 700;
  const BASE_W = 330;

  // Viewport thực (loại trừ thanh địa chỉ trên mobile)
  const vv = window.visualViewport;
  const vh = vv ? vv.height : window.innerHeight;
  const vw = vv ? vv.width : window.innerWidth;

  // Scale để chiều cao sau transform = chiều cao viewport
  const S = vh / BASE_H;

  // Base width để width sau transform = chiều rộng viewport
  const W = vw / S; // => scaledWidth = W * S = vw

  // Tỉ lệ phải là width / 700 (luôn cố định theo yêu cầu)
  const ratio = W / BASE_H; // cũng bằng vw / vh

  const root = document.documentElement;
  root.style.setProperty("--bg--ratio_phone", ratio);
  root.style.setProperty("--bg--size_width_phone", `${W}px`);
  root.style.setProperty("--bg--scale_phone", S.toFixed(3));
}

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", updatePhoneScale);
}
