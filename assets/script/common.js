// 0.4秒後にis-open削除
const delayClass = () => {
  const spMenu = document.querySelector(".p-menu");
  if (spMenu.classList.contains("is-open")) {
    setTimeout(function () {
      spMenu.classList.remove("is-open");
    }, 400);
    const top = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  } else {
    spMenu.classList.add("is-open");
    document.body.style.top = `-${window.scrollY}px`;
  }
};

(function () {
  const jsText = document.querySelectorAll(".js-mv_title-item");
  jsText.forEach((target) => {
    let newText = "";
    const text = target.textContent;
    const result = text.split("");
    for (let i = 0; i < result.length; i++) {
      newText += "<span>" + result[i] + "</span>";
    }
    target.innerHTML = newText;
  });
})();

(function () {
  const jsLoaderBg = ".js-loader-bg";
  const jsDot = ".js-loader-dot-wrap > span";
  const jsText = ".js-mv_title-item span";
  document.cookie = "log=first; path=/";

  gsap.set([jsText], {
    opacity: 0,
    y: 30,
  });

  gsap.set(jsDot, {
    opacity: 0,
    y: -50,
  });

  const tl = gsap.timeline();

  tl.to(jsDot, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.8,
    stagger: {
      amount: 0.5,
      from: "start",
      ease: "power4.inOut",
    },
  })
    .to(
      jsDot,
      {
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      jsLoaderBg,
      {
        y: "-100%",
      },
      "+=0.5"
    )
    .to(
      jsText,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: {
          amount: 1,
          from: "start",
          ease: "sine.in",
        },
      },
      "-=0.1"
    )
    .to(
      jsText,
      {
        opacity: 0,
        y: 0,
        duration: 0.6,
      },
      "+=0.1"
    )
    .to(
      jsText,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: {
          amount: 1,
          from: "start",
          ease: "sine.in",
        },
      },
      "+=2"
    );
})();

(function () {
  var randomElm = document.getElementById("cBtn");

  //初期値、ど真ん中にする
  var randomTop = 500;
  var randomLeft = 50;

  randomElm.style.transform =
    "translate(" + randomLeft + "%, " + randomTop + "%)";

  var timer = setInterval(function () {
    if (Math.random() * 2 < 1) {
      randomTop++;
    } else {
      randomTop--;
    }

    if (Math.random() * 50 < 1) {
      randomLeft++;
    } else {
      randomLeft--;
    }

    randomElm.style.transform =
      "translate(" + randomLeft + "%, " + randomTop + "%)";
  }, 100);
})();
