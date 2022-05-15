const codeblock = `
<script>
  ...
  // 1. Define variables for the dimensions, which are bound to the container
  let w;
  let h;
  const margin = { top: 50, right: 20, bottom: 30, left: 60 }
  $: boundedWidth = w - margin.left - margin.right // derive based on width and margin
  $: boundedHeight = h - margin.top - margin.bottom // derive based on height and margin

  // 2. Define the graph props in a reactive declaration
  $: props = {
    width: w,
    height: h,
    margin: margin,
    boundedWidth: boundedWidth,
    boundedHeight: boundedHeight,
    fill: w >= 500 ? '#6b6065' : '#8a4b97' // responsive as well
  }

  // 3. Initialise the graph and the bound container into which it is inserted
  let graphContainer; // will become non-null when DOM mounts
  const graph = new Graph()

  // 4. Wrap the graph-drawing logic inside a reactive statement
  // making sure to check that the DOM element for graphContainer exists
  // We don't need to use onMount or afterUpdate that way
  $: if (graphContainer) {
      graph
        .selection(graphContainer)
        .data(data)
        .props(props)
        .draw()
  }
  ...
<script>

<div
    class="graph-container"
    bind:clientWidth={w}
    bind:clientHeight={h}
    bind:this={graphContainer}
  >
</div>
`

export default codeblock;