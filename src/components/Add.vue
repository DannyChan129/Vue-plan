<template>
    <div>
      <form>
        <div class="form-group">
         <div class="row">
           <div class="col-md-6">
             <label for="date" class="control-label">日期</label>
             <input type="date" class="form-control" id="date" placeholder="Date" v-model="date">
           </div>
           <div class="col-md-6">
             <label for="time" class="control-label">时间</label>
             <input type="number" class="form-control" id="time" placeholder="Time" v-model.number="time">
           </div>
         </div>
        </div>
        <div class="form-group">
          <textarea class="form-control" placeholder="请输入提示内容" v-model="comment"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-success" @click="add">添加计划</button>
          <button class="btn btn-default" @click="cancel">取消</button>
        </div>
      </form>
    </div>
</template>
<script>
  import * as types from '@/store/types'
  import {mapActions} from 'vuex';
    export default {
        data(){
            return {date:'',time:'',comment:''}
        },
        components: {},
        methods: {
            ...mapActions([types.ADD_PLAN,types.INCREMENT_TOTALTIME]),
            add(){
              //发布添加的动作
                this[types.ADD_PLAN]({
                  date:this.date,
                  time:this.time,
                  comment:this.comment
                });
              //发布增加总时间的动作
                this[types.INCREMENT_TOTALTIME](this.time);
            },
            cancel(){
                this.$router.go(-1); //回到上一级
            }
        }
    }
</script>
<style scoped>

</style>
