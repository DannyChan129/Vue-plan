import * as types from './types'
export const actions = {
    //list代表要添加的内容
    [types.ADD_PLAN]({commit},list){
      //{time,date,comment}
      let plan = {
        avatar:'http://f11.baidu.com/it/u=2754208607,630952272&fm=72',
        name:'handsome boy',
        ...list
      };
      commit(types.ADD_PLAN,plan);
    },
    [types.INCREMENT_TOTALTIME]({commit},n){
        commit(types.INCREMENT_TOTALTIME,n);
    },
    //删除计划
    [types.REMOVE_PLAN]({commit},list){
        commit(types.REMOVE_PLAN,list);
    },
    //减少总时间
    [types.DECREMENT_TOTALTIME]({commit},n){
       commit(types.DECREMENT_TOTALTIME,n);
    }
};
