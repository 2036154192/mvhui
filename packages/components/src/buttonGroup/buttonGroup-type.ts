import { PropType } from "vue"

export type directionType = 
| "across"
| "vertical"

export const buttonGroupProps = {
  direction:{
    type:String as PropType<directionType>,
    default:'across'
  }
}