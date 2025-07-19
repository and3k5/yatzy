import "./assets/main.css";

import { initGraphics } from "./engine/graphics";
import { createStates } from "./engine/states";

const { renderer, scene, animations } = initGraphics();
createStates(renderer, animations, scene);

document.body.appendChild(renderer.domElement);
