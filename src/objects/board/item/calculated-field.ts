import type { Player } from "@/engine/logic/player";
import type { ItemBase, FieldSetupBase } from ".";
import type { ItemType, CalculatedType } from "./item-types";

export type CalculationFunction = (items: ItemBase<ItemType>[], player: Player) => number;

export interface CalculationItem extends ItemBase<CalculatedType> {
    calculation: CalculationFunction;
}
export interface CalculatedSetup extends FieldSetupBase {
    calculation: CalculationItem["calculation"];
}
