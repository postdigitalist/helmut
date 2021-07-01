<template>
  <div class="theme-container vuepress-theme-simple">
    <header class="header">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Mono&display=swap" rel="stylesheet">

      <router-link
        to="/"
        :title="$description"
        class="site-name"
      >
        {{ $site.title }}
      </router-link>
      <div style="clear: both" />
      <nav-bar />
    </header>
    <home-page v-if="isHome" />
    <post-page v-else />
    <footer-bar />
  </div>
</template>

<script>
import HomePage from "../components/Home";
import PostPage from "../components/Post";
import FooterBar from '../components/FooterBar';
import NavBar from '../components/NavBar';

export default {
  components: {
    HomePage,
    PostPage,
    FooterBar,
    NavBar,
  },
  computed: {
    isHome() {
      return this.$page.path === '/';
    }
  }
};
</script>
