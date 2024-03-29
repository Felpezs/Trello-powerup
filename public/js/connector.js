const GREY_ROCKET_ICON =
  "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717";
const WHITE_ROCKET_ICON =
  "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182";

TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
        text: "Estimate Size",
        //On click button
        callback: function (t) {
          return t.popup({
            title: "Estimation",
            url: "estimate.html",
          });
        },
      },
    ];
  },
  "card-badges": (t, options) => {
    return t.get("card", "shared", "estimate").then((estimate) => {
      return [
        {
          icon: estimate ? GREY_ROCKET_ICON : WHITE_ROCKET_ICON,
          text: estimate || "No Estimate!",
          color: estimate ? null : "red",
        },
      ];
    });
  },
  "card-detail-badges": function (t, options) {
    return t.get("card", "shared", "estimate").then((estimate) => {
      return [
        {
          title: "Estimate",
          text: estimate || "No Estimate!",
          color: estimate ? null : "red",
          callback: (t) => {
            return t.popup({
              title: "Estimation",
              url: "estimate.html",
            });
          },
        },
      ];
    });
  },
  "authorization-status": (t, options) => {
    return t.get("member", "private", "authToken").then((authToken) => ({
      authorized: authToken != null,
    }));
  },

  "show-authorization": (t, options) => {
    return t.popup({
      title: "Authorize 🥑 Account",
      url: "../auth.html",
      height: 140,
    });
  },
});
