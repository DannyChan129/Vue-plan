<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-3">
            <Slidebar/>
          </div>
          <div class="col-md-9">
            <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar';
  import Slidebar from '@/components/Slidebar';
  export default {
    components: {
      Navbar,
      Slidebar
    }
  }
</script>

<style>
  .position {
    position: absolute;
    width: 100%;
  }
</style>
