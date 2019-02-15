<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section class="text-center">
        <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle1 text-center">Quasar layout examples</div>
        <div class="text-subtitle2 text-grey text-center">Right-click for Context Menu</div>
      </q-card-section>

    </q-card>
    <q-menu
      touch-position
      context-menu
    >
      <q-list bordered>
        <q-item clickable v-close-menu to="/">
          <q-item-section>
            <q-item-label>Quasar layout</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-menu to="/youtube">
          <q-item-section>
            <q-item-label>Youtube layout</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-menu to="/googleplay">
          <q-item-section>
            <q-item-label>Google Play layout</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-menu to="/googlephotos">
          <q-item-section>
            <q-item-label>Google Photos layout</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-menu>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
