import { Vector3 } from "three";

export function getPos(relativePosition: number) {
    return new Vector3(relativePosition * 5, 0, 0);
}
