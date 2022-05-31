<script>
  import '$lib/styles/global.scss';
  import { base } from '$app/paths';

  export let menuItems = []
</script>

<div class=link-menu>
  {#each menuItems as item}
    <a href={item.anchor} sveltekit:noscroll>
      {item.title}
    </a>
  {/each}
</div>

<style lang='scss'>
  @import '../../styles/global.scss';
  .link-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 900px;
    margin: auto;

    a {
      margin: 10px;
      @include link;
    }
  }
</style>