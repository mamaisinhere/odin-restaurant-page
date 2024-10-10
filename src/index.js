import "./styles.css";
import { StartPage } from "./start-page.js";
import { AboutPage } from "./about-page.js";
import { MenuPage } from "./menu-page.js";

StartPage.render();

const clearContent = () => {
    document.getElementById("content").innerHTML = "";
};

const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const menuBtn = document.getElementById("menu-btn");

homeBtn.addEventListener("click", () => {
    clearContent();
    StartPage.render();
});

aboutBtn.addEventListener("click", () => {
    clearContent();
    AboutPage.render();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    MenuPage.render();
});