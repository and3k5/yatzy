import { Mesh, MeshBasicMaterial } from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import typeface from "../../../assets/helvetiker_bold.typeface.json?url";
import type { SummaryItem, SummarySetup } from "./summary";
import type { ItemType, CalculatedType, FieldType, SummaryType } from "./item-types";
import type { CalculatedSetup, CalculationItem } from "./calculated-field";

export interface ItemBase<Type extends ItemType> {
    key: string;
    type: Type;
    label: string;
    mesh: Mesh<TextGeometry, MeshBasicMaterial>;
    includeInScore: boolean;
}

export interface FieldSetupBase {
    key: string;
    label: string;
}

type FieldSetup = FieldSetupBase;

type ItemSetup = FieldSetup | CalculatedSetup | SummarySetup;

export function createItem(type: FieldType, setup: FieldSetup): ItemBase<FieldType>;
export function createItem(type: CalculatedType, setup: CalculatedSetup): CalculationItem;
export function createItem(type: SummaryType, setup: SummarySetup): SummaryItem;
export function createItem<TItemType extends ItemType>(
    type: TItemType,
    setup: ItemSetup,
): ItemBase<ItemType> | ItemBase<FieldType> | CalculationItem {
    const loader = new FontLoader();

    const lbl: Pick<ItemBase<TItemType>, "key" | "label" | "mesh"> = {
        key: setup.key,
        label: setup.label,
        mesh: new Mesh(),
    };

    lbl.mesh.material = new MeshBasicMaterial({ color: 0x0000ff });

    loader.load(typeface, (font) => {
        lbl.mesh.geometry = new TextGeometry(setup.label, {
            size: 0.1,
            depth: 0.01,
            font: font,
        });
    });

    if (type === "field") {
        return { ...lbl, type: type, includeInScore: true };
    } else if (type === "calculated") {
        if (!("calculation" in setup)) throw new Error("invalid setup");
        const calcLbl: CalculationItem = {
            ...lbl,
            type: type,
            calculation: setup.calculation,
            includeInScore: true,
        };
        return calcLbl;
    } else if (type === "summary") {
        if (!("filter" in setup)) throw new Error("invalid setup");
        const sumLbl: SummaryItem = {
            ...lbl,
            type: type,
            includeInScore: false,
            filter: setup.filter,
        };
        return sumLbl;
    }

    throw new Error("Unknown type");
}
