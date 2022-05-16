const codeblock = `
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

</script>

<section>
  <h3>
    When element below is 50% into the viewport, it will change colour.
    Scroll up and down the page to see. 
  </h3>
  <div id='observed-element' class='content-to-scroll-over' class:active={inView}></div>
</section>
`

export default codeblock;