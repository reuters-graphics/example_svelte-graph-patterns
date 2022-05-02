const codeblock = `
  // From the Graph.svelte file
  <script>
    ...
    
    // 1. Define any graph props - not reactive in this case, just constants
    const props = {
      margin: { top: 50, right: 20, bottom: 30, left: 60 },
    }
    
    // 2. Initialise the graph and the bound container into which it is injected
    let chartContainer;
    const chart = new Graph()

    // 3. Define resize event; Note that the logic for changing the graph 
    // based on width is inside the draw method of the graph class itself
    const resize = () => chart.draw();

    // 4. Draw the graph on mount and add event listener for resize
    onMount(() => {
      chart.selection(chartContainer).data(data).props(props).draw();
      if (window) window.addEventListener('resize', resize);
      return () => {
        window.removeEventListener('resize', resize);
      };
    });
    
    // 4. If any of the props passed to the chart change we'd also need an afterUpdate 

    ...
  </script>

  <div class="chart-container" bind:this={chartContainer}></div>

  // From the Graph.js file
  ...
  draw() {
    const data = this.data();
    let { margin, fill } = this.props();
    const container = this.selection().node();
    const { width, height } = container.getBoundingClientRect(); 
    const boundedWidth = width - margin.left - margin.right;
    const boundedHeight = height - margin.top - margin.bottom;
    fill = width >= 500 ? '#6b6065' : '#ee3e3e'
    ...
  }
  ...
`

export default codeblock;