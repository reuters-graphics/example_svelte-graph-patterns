<script>
  import '$lib/styles/global.scss';
  import '$lib/styles/codeblocks.scss';
  import icon from '$lib/assets/noun-puzzle-1320602.svg';
  import graphIcon from '$lib/assets/noun-monitoring-1320561.svg';
  import scrollyIcon from '$lib/assets/noun-blackboard-1320572.svg';
  import observerIcon from '$lib/assets/noun-presentation-1320578.svg'
  import Logo from '$lib/components/general/Logo.svelte';
  import { base } from '$app/paths';
  import SEO from '$lib/components/general/SEO.svelte';
  
</script>


<SEO />


<Logo monocolourLogo={true}  backgroundColour='#ee3e3e' />
<section class='homepage-container'>
  <div class='title-container'>
    <div class='title-text'>
      <h1>Svelte Patterns</h1>
      <p>
        Collection of patterns for using Svelte for graphs, scrollytelling and 
        other useful things*.
        <br><br>
        Each pattern contains code, explanations and examples.
      </p>
    </div>
    <img class='icon' alt="icon" src={icon} />
  </div>

  <div class='menu-container'>
    <div class='menu-item'>
      <a href='{base}/graphs'>
        <div class='link-section'>
          <h3>Graphs</h3>
          <img class='menu-icon' alt="icon" src={graphIcon} />
        </div>
        <ul>
          <li>D3 in Svelte, the D3 way - Pattern 1</li>
          <li>D3 in Svelte, the D3 way - Pattern 2</li>
          <li>D3 in Svelte, the Svelte way - Pattern 1</li>
          <li>Svelte with D3 and Svelte Transitions</li>
        </ul>
      </a>
    </div>
    <div class='menu-item'>
      <a href='{base}/scrolly'>
        <div class='link-section'>
          <h3>Scrolly</h3>
          <img class='menu-icon' alt="icon" src={scrollyIcon} />
        </div>
        <ul>
          <li>Svelte Scroller functionality</li>
          <li>Svelte Scroller with D3 charts</li>
          <li>Svelte Scroller with GSAP for transitions</li>
        </ul>
      </a>
    </div>
    <div class='menu-item'>
      <a href='{base}/observer'>
        <div class='link-section'>
          <h3>Intersection Observer</h3>
          <img class='menu-icon' alt="icon" src={observerIcon} />
        </div>
        <ul>
          <li>Svelte Intersection Observer + lazy loading</li>
          <li>Vanilla Intersection Observer</li>
        </ul>
      </a>
    </div>
  </div>

  <div class='footer'>
    <p>Icons by Saeful Muslim from NounProject.com</p>
    <p>
      *These are not intended as best practices, but simply as working solutions found through trial and error ✨!</p>
  </div>
</section>


<style lang='scss'>
  @import '../lib/styles/global.scss';

  section.homepage-container {
    margin: 0 auto;
    width: 100%;


    .title-container {
      display: flex;
      padding: 80px;
      background-color: $accent-color;
      align-items: center;
      justify-content: center;
      @media (max-width: 700px) {
        flex-direction: column-reverse;
        padding: 0px;
      }
    }
    .title-text {
      padding: 50px;
      h1 {
        font-family: 'Amatic SC', cursive;
        letter-spacing: 0.5rem;
        color: $light-color;
        font-size: 4rem;
        font-weight: 200;
        margin: 0 auto;
        text-align: left;
        line-height: 1.1;
        @media (max-width: 700px) {
          text-align: center;
          font-size: 3rem;
        }
      }
      p {
        color: $light-color;
        font-size: 1.15rem;
        letter-spacing: 0.05rem;
        margin-top: 50px;
        max-width: 400px;
      }
    }
    img.icon {
      width: 350px;
      opacity: 0.8;
      filter: invert(100%);
      margin-left: 10px;
      @media (max-width: 900px) {
        width: 300px;
      }
      @media (max-width: 700px) {
        width: 150px;
      }
    }
  }

  /////////////////////////////////
  ////////// Menu cards ///////////
  /////////////////////////////////
  .menu-container {
    //background-color: $mid-light-color;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1400px;
    flex-wrap: wrap;
    
    .menu-item {
      width: 350px;
      background-color: $light-color;
      border: 3px solid $accent-color;
      margin: 20px;
      padding: 30px;
      transition: all 0.7s ease;
      box-shadow: 5px 5px 1px 1px rgba($accent-color, 0.5);

      a {
        text-decoration: none;
      }

      &:hover {
        background-color: rgba($mid-color, 0.8);
        border: 3px solid $light-color;
        box-shadow: none;
        .link-section {
          h3 {
            color: $light-color;
          }
          img.menu-icon {
            filter: invert(100%);
          }
        }
        ul {
          color: $light-color;
        }
      }

      .link-section {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        h3 {
          color: $accent-color;
          font-size: 2rem;
        }
        img.menu-icon {
          width: 100px;
          opacity: 0.8;
          margin-left: 20px;
        }
      }

      ul {
        @include reset-list;
        color: $dark-color;
      }
    }
  }

  .footer {
    margin: 100px 0 0 0;
    padding: 10px;
    background-color: $light-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 0.8rem;
      color: $mid-color;
      margin: 0;
      text-align: center;
    }
  }
</style>
