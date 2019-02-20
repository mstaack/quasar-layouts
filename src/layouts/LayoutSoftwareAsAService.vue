<template>
  <q-layout view="hHr lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-white">
        <q-btn dense flat round icon="menu" @click="navDrawer = !navDrawer" color="secondary" />

        <q-toolbar-title class="q-py-sm">
          <img src="https://cdn.quasar-framework.org/img/quasar-logo.png" height="50px" />
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="rightDrawer = !rightDrawer" color="secondary" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="navDrawer"
      :mini="miniNavDrawerState"
      overlay
      @mouseover="miniNavDrawerState = false"
      @mouseout="miniNavDrawerState = true"
      :width="200"
      :breakpoint="500"
      show-if-above
      bordered
      content-class="bg-white"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="menuItem in menu"
            :key="'drawer_menu_' + menuItem.title"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" color="primary"/>
            </q-item-section>

            <q-item-section>
              {{menuItem.title}}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-model="rightDrawer"
      side="right"
      behavior="mobile"
      overlay
      bordered
    >
      <q-list>
        <q-item class="bg-grey-3">
          <q-item-section avatar top>
            <q-avatar>
              <img src="https://cdn.quasar-framework.org/img/quasar-logo.png" height="50px" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">John Doe</q-item-label>
            <q-item-label caption>jd@test.com</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="#">
          <q-item-section avatar top>
            <q-avatar icon="person"></q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Edit Profile</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar top>
            <q-avatar icon="power_settings_new"></q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar color="primary">
        <q-toolbar-title class="row justify-between items-center gt-xs text-subtitle2">
          <span>&copy; <a href="#" target="_blank" class="text-white">Your Awesome App</a> - v{{version}}</span>
          <span class="on-right">
            <a href="https://discordapp.com/channels/415874313728688138" target="_blank" style="color:white;" class="on-left">Support Chat</a>
            <q-btn color="white" text-color="black" size="sm">Support</q-btn>
          </span>
        </q-toolbar-title>
        <q-toolbar-title class="row justify-center items-center lt-sm text-subtitle2">
          <span>v{{version}}</span>
          <span class="on-right">
            <a href="https://discordapp.com/channels/415874313728688138" target="_blank" style="color:white;" class="on-left">Support Forum</a>
            <q-btn color="white" text-color="black" icon="far fa-question-circle" size="sm"/>
          </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      navDrawer: true,
      miniNavDrawerState: true,
      rightDrawer: true,
      version: '0.0.1-beta-1',
      menu: [
        {
          icon: 'home',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'calendar_today',
          title: 'Calendar',
          to: '/calendar'
        },
        {
          icon: 'picture_in_picture',
          title: 'Pages',
          to: '/pages'
        },
        {
          icon: 'build',
          title: 'Jobs',
          to: '/jobs'
        },
        {
          icon: 'people',
          title: 'Customers',
          to: '/customers'
        },
        {
          icon: 'account_balance',
          title: 'Accounts',
          to: '/accounts'
        },
        {
          icon: 'list',
          title: 'Lists',
          to: '/lists'
        },
        {
          icon: 'settings',
          title: 'System',
          to: '/system'
        }
      ]
    }
  }
}
</script>
