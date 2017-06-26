import * as types from './types'
import {setStorage} from './local'
export const mutations = {
  //state代表当前容器中的状态
  [types.ADD_PLAN](state, plan){
    state.lists.push(plan);
    setStorage(state);
  },
  [types.INCREMENT_TOTALTIME](state, n){
    state.totalTime += n;
    setStorage(state);
  },
  [types.DECREMENT_TOTALTIME](state, n){
    state.totalTime -= n;
    setStorage(state);
  },
  [types.REMOVE_PLAN](state, list){
    state.lists = state.lists.filter(item=>item != list);
    setStorage(state);
  }
};
