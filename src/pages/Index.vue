<template>
  <q-page class="flex flex-center">
    <div>
      <div>Right-click for Context Menu.</div>
      <div>
        <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
      </div>
    </div>
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

        <q-item clickable v-close-menu to="/photos">
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
