import { Mesh, MeshBasicMaterial } from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import typeface from "../../../assets/helvetiker_bold.typeface.json?url";

export function createItem(label: string) {
    const loader = new FontLoader();

    const lbl = {
        label: label,
        mesh: new Mesh(),
    };

    lbl.mesh.material = new MeshBasicMaterial({ color: 0x0000ff });

    loader.load(typeface, (font) => {
        lbl.mesh.geometry = new TextGeometry(label, {
            size: 0.1,
            depth: 0.01,
            font: font,
        });
    });

    return lbl;
}
