<script>
  import '$lib/styles/global.scss';
  export let icon
  import homeIcon from '$lib/assets/noun-global-1320596.svg'
</script>

<div class='section-title-container'>
  <slot name='title'><h1>Title</h1></slot>
  <img class='icon' alt="section icon" src={icon} />
  <a class='home' href='/'>
    <img class='home-icon' alt="home icon" src={homeIcon} />
    <span>home</span>
  </a>
</div>


<style lang='scss'>
  @import '../../../lib/styles/global.scss';
  .section-title-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $accent-color;
    padding: 80px;
    margin: 0 auto 40px;

    & :global(h1) {
        font-family: 'Amatic SC', cursive;
        letter-spacing: 0.5rem;
        color: $light-color;
        font-size: 4rem;
        font-weight: 200;
        margin-right: 10px;
    }

    & :global(img.icon) {
      width: 200px;
      opacity: 0.8;
      filter: invert(100%);
      margin-left: 10px;
    }

    & :global(a.home) {
      text-decoration: none;
      color: $light-color;
      font-size: 0.8rem;
    }

    & :global(a.home span) {
      position: absolute;
      top: 18px;
      left: 50px;
    }

    & :global(img.home-icon) {
      position: absolute;
      top: 10px;
      left: 5px;
      width: 30px;
      opacity: 1;
      filter: invert(100%);
      margin-left: 10px;
    }
  }


</style>