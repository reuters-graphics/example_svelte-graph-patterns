const codeblock = `
	//////////////////// Scroller logic ////////////////////
	//Graph in the background and steps in the foreground
	<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:offset bind:progress bind:count>
		// Has a height of 100vh. Width and height of the enclosing container (section DOM element)
		// are passed into the graph as props
		<div slot="background">
			<section class='background-container graph' bind:clientWidth={w} bind:clientHeight={h}>
			<Graph index={index} offset={offset} progress={progress} width={w} height={h} />
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
		// Approach: Setup the graph from an onMount and then pass it any dynamic props from a reactive declaration

		// Initialise the graph and the bound container into which it is injected
		let graphContainer;
		const graph = new Graph()

		// The graph props are reactive as they depend on let-declared variables 
		$: props = {
			index: index,
			width: width,
			height: height,
			stuff: 5
		}

		// Since the props are reactive, the graph update logic - which depends on props - 
		// should also happen from a reactive statement. *not* from afterUpdate which will over-fire
		// Wrap in conditional for graph existing to make sure it only fires after dom mounting
		$: if (graphContainer) {
				// Initially draw the graph with initial logic
				graph.props(props).setGraph()
				// Then update the graph based on the index
				switch(index) {
					case 0:
						graph.props(props).setGraph()
						break;
					case 1:
						graph.stepOneLogic()
						break;
					case 2:
						graph.stepTwoLogic()
						break;
					case 3:
						graph.props(props).setGraph()
						break;
					default:
						graph.props(props).setGraph()
				}	
		}
		// Set up the graph for the first time from an onMount; any constant props 
		// will be correctly passed at this point
		onMount(() => {
			graph
				.selection(graphContainer)
				.data(data)
				.props(props)
		})
	</script>
	<div class='setGraph-container' bind:this="{graphContainer}"></div>

	//////////////////// D3 logic ////////////////////
	// All the logic for what the initial graph is goes here; 
	setGraph() {
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