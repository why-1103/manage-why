export default {
  namespace: 'login',
  state: {
    currenUser: {},
  },
  effects: {
    *login({ payload, callback }: any, { call, put }: any) {
      // return { user: payload }
      yield put({
        type: 'setCurrenUser',
        payload: payload,
      });
    },
  },
  reducers: {
    setCurrenUser(state: any, { payload }: any) {
      return {
        ...state,
        currenUser: payload,
      };
    },
  },
};
