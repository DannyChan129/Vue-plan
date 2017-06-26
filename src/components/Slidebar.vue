<template>
    <div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2>计划的总时间</h2>
        </div>
        <div class="panel-body">
          <div class="h3">
            {{time | number}}时间
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        filters:{
          number(t){ //根据t的值 来转化他的显示形式
            return t.toFixed(2)+'h';
          }
        },
        data(){
            return {}
        },
        computed:{
          ...mapState({time:'totalTime'})
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>
