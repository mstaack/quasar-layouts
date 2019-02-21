<template>
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
</template>

<script>

export default {
  data () {
    return {}
  },
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  computed: {
    routeNames () {
      return this.routes
        .map(x => x.children)
        .map(children => children && children.map(child => child.name))
        .flat()
        .filter(x => x)
    }
  }
}
</script>
