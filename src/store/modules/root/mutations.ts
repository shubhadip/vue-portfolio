import { MutationTree } from "vuex";
import { RootMutationsTypes, IRootState, IUserData } from "./../../interfaces";
import { ROOT_STORE } from "@/store/constants";
import { AppType } from "@/shared/interfaces";

export const mutations: MutationTree<IRootState> & RootMutationsTypes = {
  [ROOT_STORE.MUTATIONS.UPDATE_VERSION](state: IRootState, payload: string) {
    state.version = payload;
  },
  [ROOT_STORE.MUTATIONS.USER_LISTS](state, payload: IUserData[]) {
    state.userlists = payload;
  },
  [ROOT_STORE.MUTATIONS.DEVICE_TYPE](state, payload: AppType) {
    state.deviceType = payload;
  }
};
