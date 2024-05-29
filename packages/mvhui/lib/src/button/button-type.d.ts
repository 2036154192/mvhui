import { PropType } from "vue";
export declare type buttonType = "default" | "primary" | "success" | "info" | "warning" | "danger";
export declare type buttonSize = "small" | "default" | "large";
export declare const buttonProps: {
    type: {
        type: PropType<buttonType>;
        default: string;
    };
    size: {
        type: PropType<buttonSize>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
};
