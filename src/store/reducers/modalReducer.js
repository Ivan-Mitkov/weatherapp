import { OPEN_MODAL, CLOSE_MODAL } from "../types";

const initialState = {
  isModalOpen: false,
};
export const modalReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        isModalOpen: false,
      };

    default:
      return state;
  }
};
