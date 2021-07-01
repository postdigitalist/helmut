<template>
  <footer class="footer">
    © {{ thisYear }}
    <i
      v-if="author"
      class="icon-user"
    />
    {{ author }}
    <br>
    <a href="http://jillang.substack.com">Newsletter</a> <i
      v-if="author"
      class="icon-user"
    /><a href="http://nadarespetable.com">Alma Mater</a>  <i
      v-if="author"
      class="icon-user"
    /><a href="http://twitter.com/hhelmutsander">Twitter</a>
  </footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
    author() {
      return this.$themeConfig.author || '';
    },
  }
}
</script>
