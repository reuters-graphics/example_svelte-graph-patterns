const codeblock = `
<script>
  ...
  // 1. Define variables for the dimensions
  let w;
  let h;
  const margin = { top: 50, right: 20, bottom: 30, left: 60 }
  $: boundedWidth = w - margin.left - margin.right
  $: boundedHeight = h - margin.top - margin.bottom

  // 2. Define the chart props reactively, as they depend on let-declared variables 
  $: props = {
    width: w,
    height: h,
    margin: margin,
    boundedWidth: boundedWidth,
    boundedHeight: boundedHeight,
    fill: w >= 500 ? '#6b6065' : '#8a4b97' // responsive as well
  }

  // 3. Initialise the chart and the bound container into which it is injected
  let chartContainer;
  const chart = new Chart()

  // 4. Wrap the chart-drawing logic inside a reactive statement
  // making sure to check that the DOM element for chartContainer exists
  // We don't need to use onMount or afterUpdate that way
  $: {
    if (chartContainer) {
      chart
        .selection(chartContainer)
        .data(data)
        .props(props)
        .draw()
    }		
  }
  ...
<script>

<div
    class="chart-container"
    bind:clientWidth={w}
    bind:clientHeight={h}
    bind:this={chartContainer}
  >
</div>
`

export default codeblock;