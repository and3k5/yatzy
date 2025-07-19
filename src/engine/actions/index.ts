import { defineStore } from "pinia";
import { EventDispatcher } from "three";
import { reactive, ref } from "vue";

export class Action extends EventDispatcher<{ click: object }> {
    key: string;
    label: string;
    visible: boolean;
    disabled?: boolean;

    constructor(key: string, label: string, visible: boolean, disabled: boolean | undefined) {
        super();
        this.key = key;
        this.label = label;
        this.visible = visible;
        this.disabled = disabled;
    }
}

let counter = 0;
export const useActionsStorage = defineStore("actions", () => {
    const actions = ref<Action[]>([]);
    return {
        createAction(act: Pick<Action, "disabled" | "label">) {
            const action = reactive<Action>(
                new Action((counter++).toString(), act.label, false, act.disabled),
            );
            actions.value.push(action);
            return action;
        },
        actions,
    };
});
