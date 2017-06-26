<template>
    <div>
      <router-link to="/time/time-add" class="btn btn-primary">创建</router-link>
      <hr>
      <router-view></router-view>
      <ul class="list-group" v-for="list in lists">
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-2 text-center">
              <img :src="list.avatar" class="img-circle img-responsive">
              {{list.name}}
            </div>
            <div class="col-md-3">
              <div>
                <i class="glyphicon glyphicon-time"></i>{{list.time}}小时
              </div>
              <div class="text-info">
                <i class="glyphicon glyphicon-calendar "></i>{{list.date}}
              </div>
            </div>
            <div class="col-md-5">
              <div>
                {{list.comment}}
              </div>
            </div>
            <div class="col-md-2">
              <button class="btn btn-danger" @click=" &times;</button>
            </div>
          </div>
        </li>
      </ul>

      <div class="text-warning h3" v-show="!isShow">亲 添加计划吧,你的计划空空如也~</div>
    </div>
</template>
<script>
import * as types from '@/store/types'
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
    data(){
        return {}
    },
    computed:{
      ...mapGetters(['isShow']),
      ...mapState(['lists'])
    },
    components: {},
    methods: {
        ...mapActions([
          types.REMOVE_PLAN,
          types.DECREMENT_TOTALTIME
        ]),
        remove(list){ //list表示当前删除的那一项
          this[types.REMOVE_PLAN](list);
          this[types.DECREMENT_TOTALTIME](list.time);
        }
    }
}
</script>
<style scoped>
  div{line-height: 35px;}
</style>
