import { PropType } from "vue"
export type buttonType =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"

export type buttonSize = "small" | "default" | "large"

export const buttonProps = {
  type: {
    type: String as PropType<buttonType>,
    default: "default"
  },
  size: {
    type: String as PropType<buttonSize>,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  round: {
    type:Boolean,
    default:false
  },
  plain: {
    type:Boolean,
    default:false
  },
  text: {
    type:Boolean,
    default:false
  },
  loading:{
    type:Boolean,
    default:false
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: "button"
  }
}