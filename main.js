import includeHTML from "./src/includeHTML.js";
import renderRow from "./src/home_cards.js";
import swiper from "./src/newsCarousel.js";
import swiper2 from "./src/teamCarousel.js";
import createGlobe from 'https://cdn.skypack.dev/cobe'
import showTabHome from "./src/homePortfolio.js";

includeHTML();

renderRow();

// let phi = 0
// let canvas = document.getElementById("cobe")

// const globe = createGlobe(canvas, {
//         devicePixelRatio: 2,
//         width: 1000,
//         height: 1000,
//         phi: 0,
//         theta: 0,
//         dark: 0,
//         diffuse: 1.2,
//         scale: 1,
//         mapSamples: 16000,
//         mapBrightness: 6,
//         baseColor: [1, 1, 1],
//         markerColor: [1, 0.5, 1],
//         glowColor: [1, 1, 1],
//         offset: [0, 0],
//         markers: [
// { location: [37.7595, -122.4367], size: 0.03 },
// { location: [40.7128, -74.006], size: 0.1 },
// ],
// onRender: (state) => {
// // Called on every animation frame.
// // state will be an empty object, return updated params.
// state.phi = phi
// phi += 0.01
// },
// })