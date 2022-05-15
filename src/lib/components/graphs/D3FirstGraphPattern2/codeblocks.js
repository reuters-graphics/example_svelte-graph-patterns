const codeblock = `
  // From the Graph.svelte file
  <script>
    ...
    
    // 1. Define any graph props - not reactive in this case, just constants
    const props = {
      margin: { top: 50, right: 20, bottom: 30, left: 60 },
    }
    
    // 2. Initialise the graph and the bound container into which it is injected
    let graphContainer;
    const graph = new Graph()

    // 3. Define resize event; Note that the logic for changing the graph 
    // based on width is inside the draw method of the graph class itself
    const resize = () => graph.draw();

    // 4. Draw the graph on mount and add event listener for resize
    onMount(() => {
      graph.selection(graphContainer).data(data).props(props).draw();
      if (window) window.addEventListener('resize', resize);
      return () => {
        window.removeEventListener('resize', resize);
      };
    });
    
    // 4. If any of the props passed to the graph change 
    // we'd also need an afterUpdate or a reactive declaration 

    ...
  </script>

  <div class="graph-container" bind:this={graphContainer}></div>

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