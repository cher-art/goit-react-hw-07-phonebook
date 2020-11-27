import { createAction } from "@reduxjs/toolkit"
import { ALERT_ON, ALERT_OFF } from "../../redux/ducks"

export const alertOpenTool = createAction(ALERT_ON)
export const alertCloseTool = createAction(ALERT_OFF)