import type { FieldSetupBase, ItemBase } from ".";
import type { ItemType, SummaryType } from "./item-types";

export type SummaryFilter = (
    value: ItemBase<ItemType>,
    index: number,
    array: ItemBase<ItemType>[],
) => boolean;

export interface SummaryItem extends ItemBase<SummaryType> {
    filter: SummaryFilter;
}

export interface SummarySetup extends FieldSetupBase {
    filter: SummaryFilter;
}
