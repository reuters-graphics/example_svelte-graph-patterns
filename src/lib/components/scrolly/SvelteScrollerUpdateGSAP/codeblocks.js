const codeblock = `
	//////////////////////////////////////////////////////////////////
	//////////////////////////// Scroller ////////////////////////////
	//////////////////////////////////////////////////////////////////
	<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:offset bind:progress bind:count>	
		<div slot="background">
			<section class='background-container chart' bind:clientWidth={w} bind:clientHeight={h}>
				<Graph index={index} offset={offset} progress={progress} width={w} height={h} />
			</section>
		</div>
		<div slot="foreground">
			<section class='section-zero' id='step-0'></section>
			<section >
				<div id='step-1'>
				This is the first foreground section. Bars will grow to their final position.
				</div>
			</section>
		...
		</div>
	</Scroller>

	//////////////////////////////////////////////////////////////////
	/////////////////////// Svelte Graph Logic ///////////////////////
	//////////////////////////////////////////////////////////////////
	<script>
		// Props passed in from the scroller
		export let width 
		export let height
		
		// Initialise the chart and the bound container into which it is injected
		let chartContainer;
		const chart = new Graph()

		// Option 1: Graph code from a reactive statement 
		// Need to use this option if we have reactively-defined props, which is do in this case 
		// (with and height, passed down from the parent Scrolly component)
		$: props = {
			width: width,
			height: height,
			fillDark: '#3d405b',
			fillBright: '#fff'
		}
		// Since the props are reactive, the chart update logic - which depends on props - 
		// should also happen from a reactive statement. *not* from afterUpdate which will over-fire
		// Any logic that goes here either doesn't depend on the chartContainer already existing or 
		// is wrapped in a conditional making sure that it does like below 
		let chartLoaded = false
		$: {
			// Set up the chart only once - make sure all the props are loaded and the container is loaded
			if (chartContainer) {
				if (!chartLoaded) {
					chart
						.selection(chartContainer)
						.data(data)
						.props(props)
						.setChart()
						.gsapAnimate()
					//chartLoaded = true
				}	
				// Then update the chart only using GSAP
			}		
		}

		// Option 2: Graph code from an onMount + resize event for responsiveness 
		// With this option we can't use reactive props like the width and heihgt so these 
		// need to be constants, and we need to define a resize event to listen for width/height changes 
		// Don't use afterUpdate for that - it will over-fire! 
		// onMount(() => {
		// 	if (width && height) {
		// 		chart
		// 			.selection(chartContainer)
		// 			.data(data)
		// 			.props(props)
		// 			.setChart()
		// 			.gsapAnimate()
		// 	}
		// })
	</script>

	<div class='chart-container' bind:this="{chartContainer}"></div>

	///////////////////////////////////////////////////////////////////////
	/////// Graph Class with D3 for graph and GSAP for ScrollTrigger //////
	///////////////////////////////////////////////////////////////////////
	// Define what the graph is supposed to look like initially
	setChart() {
	  const data = this.data();
	  const { width, height, fillBright } = this.props();
	  //... define scales, axes, svg container, etc.
	  // Inital plot - this will get drawn on step 0 
	  this.plotInitial = this.plot.selectAll('.bar')
		  .data(data, d => d.id)
		  .join(
			  enter => {
				  return enter.append('rect')
					  .attr('width', 10)
			  },
			  update => {
				  return update
					  .interrupt()
					  .transition().duration(300)
						  .attr('width', 10)
			  },
			  exit => exit
			  )
			  .classed('bar', true)
			  .attr('x', 0)
			  .attr('y', d => this.yScale(d.id))
			  .attr('height', this.yScale.bandwidth())
			  .style('fill', fillBright)
		  
		  return this;
	  }

	// GSAP all goes here - one ScrollTrigger for each step
	gsapAnimate() {
		ScrollTrigger.create({
			trigger: '#step-0',
			start: 'top top',
			onToggle: ( {isActive} ) => { 
				if (isActive) {
					this.stepZeroLogic() 
				} 
			}
		})
		ScrollTrigger.create({
			trigger: '#step-1',
			start: 'top center', //'top center',
			onToggle: ( {isActive} ) => { 
				if (isActive) {
					this.stepOneLogic() 
				} 
			},
		})
		// Etc. for all the steps
	}

	// Define the logic for the steps using D3; One method for each step, e.g.:
	// Logic for update on step 1 - make the bars expand 
	stepOneLogic() {
		const { fillBright } = this.props();
		this.plotInitial
			.transition().duration(500)
			.attr('width', d => this.xScale(d.number))
			.style('fill', fillBright)
		return this
	}
`

export default codeblock;