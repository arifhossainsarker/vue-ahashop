<template>
  <Slider></Slider>
  <Arrivals></Arrivals>
  <Subscrive></Subscrive>
  <BestSeller></BestSeller>
  <Patners></Patners>
</template>

<script>
import Slider from './home/Slider.vue'
import Arrivals from './home/Arrivals.vue'
import Subscrive from './home/Subscrive.vue'
import BestSeller from './home/BestSeller.vue'
import Patners from './home/Patners.vue'
export default {
    name: 'Home',
    components: {
        Slider,
        Arrivals,
        Subscrive,
        BestSeller,
        Patners
    }
}
</script>

<style>

</style>