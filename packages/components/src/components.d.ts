import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MuButton: typeof components.Button;
    MuIcon: typeof components.Icon;
    MuButtonGroup: typeof components.ButtonGroup;
  }
}
export {};