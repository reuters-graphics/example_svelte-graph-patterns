<script>
  import { onMount } from 'svelte';  

  const observerOptions = {
    threshold: 0.5,
  };
  let inView = false; // track if element is in view
  // Callback for the observer to change the inView prop
  const observerCallback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting && !inView) {
        inView = true;
      } else if (!entry.isIntersecting && inView) {
        inView = false;
      }
    }
  };

  // Instantiate the IntersectionObserver and start observing the desired element from onMount
  onMount(() => {
    // Select the element that we want to observe for coming into view w/ intersectionObserver
    const elementToObserve = document.getElementById('observed-element');
    // Instantiate a new IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    // Start observing the element
    observer.observe(elementToObserve);
  });

  // Don't need an afterUpdate

</script>

<section>
  <h3>
    When 50% of the element below is into the viewport, it will change colour.
    Scroll up and down the page to see. 
  </h3>
  <div id='observed-element' class='content-to-scroll-over' class:active={inView}></div>
</section>


<style lang='scss' >
  @import '../../../styles/global.scss';
  section {
    margin: 0 auto;
    width: 95%;
    max-width: 1000px;
  }
  .content-to-scroll-over {
    height: 700px;
    background-color: $mid-color;
    transition: all 0.5s ease;
  }
  .content-to-scroll-over.active {
    background-color: $accent-color;
  } 
</style>