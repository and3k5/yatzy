import { Mesh, MeshBasicMaterial } from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import typeface from "../../../assets/helvetiker_bold.typeface.json?url";

export type FieldType = "field";
export type CalculatedType = "calculated";
export type ItemType = FieldType | CalculatedType;

export interface CalculationItem extends ItemBase<CalculatedType> {
    calculation: (items: ItemBase<ItemType>[]) => number;
}

export interface ItemBase<Type extends string> {
    key: string;
    type: Type;
    label: string;
    mesh: Mesh<TextGeometry, MeshBasicMaterial>;
}

export function createItem(key: string, label: string, type: FieldType): ItemBase<FieldType>;
export function createItem(key: string, label: string, type: CalculatedType): CalculationItem;
export function createItem(key: string, label: string, type: ItemType): ItemBase<ItemType> {
    const loader = new FontLoader();

    const lbl: ItemBase<ItemType> = {
        key,
        label: label,
        mesh: new Mesh(),
        type,
    };

    lbl.mesh.material = new MeshBasicMaterial({ color: 0x0000ff });

    loader.load(typeface, (font) => {
        lbl.mesh.geometry = new TextGeometry(label, {
            size: 0.1,
            depth: 0.01,
            font: font,
        });
    });

    if (type === "calculated") {
        lbl;
    }

    return lbl;
}
