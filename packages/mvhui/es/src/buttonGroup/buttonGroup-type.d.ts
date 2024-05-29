import { PropType } from "vue";
export declare type directionType = "across" | "vertical";
export declare const buttonGroupProps: {
    direction: {
        type: PropType<directionType>;
        default: string;
    };
};
