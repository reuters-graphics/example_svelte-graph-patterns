const codeblock = `
	//////////////////// Scroller logic ////////////////////
	//Graph in the background and steps in the foreground
	<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:offset bind:progress bind:count>
		// Has a height of 100vh. Width and height of the enclosing container (section DOM element)
		// are passed into the chart as props
		<div slot="background">
			<section class='background-container chart' bind:clientWidth={w} bind:clientHeight={h}>
			<Chart index={index} offset={offset} progress={progress} width={w} height={h} />
			</section>
		</div>
		<div slot="foreground">
			// Just section zero has a smaller height and all the rest have a height ('duration') of 100vh
			<section class='section-zero'></section>
			<section>
			<div>
				This is the first foreground section. Bars will grow to their final position.
			</div>
			</section>
			...
		</div>
	</Scroller>

	//////////////////// Graph logic ////////////////////
	<script>
		// Approach: Setup the chart from an onMount and then pass it any dynamic props from a reactive declaration

		// Initialise the chart and the bound container into which it is injected
		let chartContainer;
		const chart = new Graph()

		// The chart props are reactive as they depend on let-declared variables 
		$: props = {
			index: index,
			width: width,
			height: height,
			stuff: 5
		}

		// Since the props are reactive, the chart update logic - which depends on props - 
		// should also happen from a reactive statement. *not* from afterUpdate which will over-fire
		// Wrap in conditional for chartContainer existing to make sure it only fires after dom mounting
		$: {
			  if (chartContainer) {
				// Initially draw the chart with initial logic
				chart.props(props).setChart()
				// Then update the chart based on the index
				switch(index) {
					case 0:
						chart.props(props).setChart()
						break;
					case 1:
						chart.stepOneLogic()
						break;
					case 2:
						chart.stepTwoLogic()
						break;
					case 3:
						chart.props(props).setChart()
						break;
					default:
						chart.props(props).setChart()
				}
			  }		
			}
		// Set up the graph for the first time from an onMount; any constant props 
		// will be correctly passed at this point
		onMount(() => {
			chart
				.selection(chartContainer)
				.data(data)
				.props(props)
				.setChart()
		})
	</script>
	<div class='chart-container' bind:this="{chartContainer}"></div>

	//////////////////// D3 logic ////////////////////
	// All the logic for what the initial chart is goes here; 
	setChart() {
		const data = this.data();
		const { width, height, index } = this.props();
	}

	// Anything we need access to later on such as scales, axes, plot element etc. 
	// is set as prop with the 'this' keyword e.g.
	this.yScale = d3.scaleBand()
		.domain(data.map(d => d.id))
		.range([0, this.boundedHeight])
		.paddingInner(0.3)		
	this.svg = this.selection()
		.appendSelect('svg')
		.attr('width', width)
		.attr('height', height)
		.classed('svg', true)
	// Then create separate methods for each of the steps, e.g.
	stepOneLogic() {
		this.plotInitial
			.interrupt()
			.transition().duration(500)
			.attr('width', d => this.xScale(d.number))
		return this
	}
`

export default codeblock;