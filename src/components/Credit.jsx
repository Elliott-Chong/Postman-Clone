import React from "react";

const Credit = () => {
  const [theme, setTheme] = React.useState("night");
  const changeTheme = () => {
    const themes = [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ];
    let theme = themes[Math.floor(Math.random() * themes.length)];
    setTheme(theme);
    document.querySelector("html").dataset.theme = theme;
  };
  return (
    <p className="absolute bottom-4 right-4 flex flex-col gap-2">
      <button onClick={changeTheme} className="btn">
        {theme}
      </button>
      <span>
        <a
          className="underline font-bold"
          href="https://github.com/elliott-chong/postman-clone"
          target="_blank"
        >
          Elliott Chong
        </a>
      </span>
    </p>
  );
};

export default Credit;
