import { actionTypes } from "../../constants/actionTypes";

export const userEvents = (events) => ({
    type: actionTypes.USER_EVENTS,
    events,
});
