<script>
  import linkIcon from '$lib/assets/noun-link-1320609.svg'
  export let internalLink
  export let date 
</script>

<section class='notes'>
  <div class='title-slot'>
    <slot name='title'>
      <h2>Title Goes Here</h2>
    </slot>
    <a href={internalLink}>
      <img class='icon' alt="link icon" src={linkIcon} />
    </a>
    <slot name='external-link'></slot>
  </div>
  <aside class='date'>{date}</aside>
  <slot></slot>
</section>

<style lang='scss'>
  @import '../../styles/global.scss';
  section.notes {
    //@include graph-border;
    margin: auto;
    max-width: 700px;
    padding: 20px;

    div.title-slot {
      display: flex;
      align-items: center;
      img.icon {
        margin-left: 10px;
        width: 50px;
      }
    }

    & :global {
      h1 {
        color: $dark-color; 
        text-align: center;
        font-size: 2.5rem;
      }

      h2 {
        color: $dark-color; 
        text-align: left;
        font-size: 1.8rem;
        padding-left: 10px;
        border-left: 5px solid $accent-color;
      }

      h3 {
        padding: 10px;
        margin: 50px auto 30px auto;
        text-align: center;
        color: $dark-color; 
        font-size: 1.4rem;
      }

      p {
        font-size: 1.15rem;
        letter-spacing: 0.05rem;
        color: $mid-color; 

        &.summary {
          background-color: $mid-light-color;
          color: $dark-color;
          padding: 20px;
        }
      }

      div.external-link a {
        @include link;
      }

      ul {
        font-size: 1.15rem;
        letter-spacing: 0.05rem;
        color: $mid-color; 

        li {
          @include reset-list;
          margin-bottom: 1.8rem;
        }
      }

      span.accent {
        color: $accent-color; 
        font-weight: bold;
      }

      aside.date {
        color: $mid-color;
        font-size: 0.9rem;
        font-weight: bold;
      }

    }
  }

</style>