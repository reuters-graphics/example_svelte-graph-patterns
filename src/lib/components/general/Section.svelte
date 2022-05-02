<script>
  export let id
</script>

<section class='section' id={id}>
  <slot></slot>
</section>

<style lang='scss'>
  section.section {
    margin: 50px auto 100px;
  }
</style>