const THEME_KEY = "hexletgram-theme-v1";

function readSavedTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch (error) {
    return null;
  }
  return null;
}

function systemTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

function setToggleState(theme) {
  const button = document.getElementById("themeToggleBtn");
  if (!button) {
    return;
  }

  const isDark = theme === "dark";
  button.textContent = isDark ? "Светлая тема" : "Темная тема";
  button.setAttribute("aria-pressed", String(isDark));
}

function applyTheme(theme, save = true) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);
  setToggleState(nextTheme);

  if (!save) {
    return;
  }

  try {
    localStorage.setItem(THEME_KEY, nextTheme);
  } catch (error) {
    console.warn("Не удалось сохранить тему", error);
  }
}

function initTheme() {
  const initialTheme = readSavedTheme() || systemTheme();
  applyTheme(initialTheme, false);

  const button = document.getElementById("themeToggleBtn");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

initTheme();
