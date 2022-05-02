const codeblock = `
  <script>
    ...
    
    let xAxisContainer 
    let yAxisContainer
    
    // Width and heigh which come from graph container 
    // and are passed in as the width and height of the svg
    let w;
    let h;
    const margin = { top: 50, right: 20, bottom: 30, left: 60 }
    $: boundedWidth = w - margin.left - margin.right
    $: boundedHeight = h - margin.top - margin.bottom
    $: fill = w >= 500 ? '#6b6065' : '#ee3e3e'

    // Scales 
    // These need to be $ reactive declarations because they depend on w and h 
    // If they didn't, we could have defined them as const 
    $: xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.number)])
      .range([0, boundedWidth])
    
    $: yScale = d3.scaleBand()
      .domain(data.map(d => d.id))
      .range([0, boundedHeight])
      .paddingInner(0.3)
    
    // Axes 
    // Same reason as for scales, these need to be reactive decralations
    $: xAxis = d3.axisBottom(xScale)
    $: yAxis = d3.axisLeft(yScale)

    // Call the axes either as reactive statements 
    // If calling from onMount, would also need to include resize event listener or
    // call from afterUpdate as well as otherwise graph won't be responsive when w and h change
    $: d3.select(xAxisContainer).call(xAxis)
    $: d3.select(yAxisContainer).call(yAxis).call(g => g.select('.domain').remove())

  </script>

  <div
    class="graph-container"
    bind:clientWidth={w}
    bind:clientHeight={h}
  >
    <div class='graph-note'>resize window to see responsiveness</div>
    <svg width={w} height={h}>
      <g transform='translate({margin.left}, {margin.top})'>
        {#each data as d, i}
          <rect 
              x={0}
              width={xScale(d.number)} 
              y={yScale(d.id)}
              height={yScale.bandwidth()} 
              fill={fill}
          ></rect>
        {/each}
        <g transform='translate({0}, {boundedHeight})' id='x-axis-container' bind:this={xAxisContainer}></g>
        <g transform='translate({0}, {0})' id='y-axis-container' bind:this={yAxisContainer}></g>
      </g>
    </svg>
  </div>
`

export default codeblock;