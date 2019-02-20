<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-subtitle1 text-center">Quasar layout examples</div>
        <div class="text-subtitle2 text-grey text-center">Click to change layout</div>
      </q-card-section>

      <q-card-section class="text-center">
        <!--<img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
        <q-list
          bordered
        >
          <q-item
            v-for="(name, index) in routeNames"
            :key="`route_${index}`"
            clickable
            :to="name"
          >
            <q-item-section>
              <q-item-label>
                {{ name }} layout
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle1 text-center">To Participate, go to:</div>
          <div class="bg-black q-pa-xs">
            <center>
              <q-btn round dense flat icon="fab fa-github" size="19px" color="white" class="icon" no-caps type="a" href="https://github.com/hawkeye64/quasar-layouts" />
            </center>
          </div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  computed: {
    routeNames () {
      return this.$router.options.routes
        .map(x => x.children)
        .map(children => children && children.map(child => child.name))
        .flat()
        .filter(x => x)
    }
  }
}
</script>
