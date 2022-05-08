import * as d3 from 'd3';
import { appendSelect } from 'd3-appendselect';
import _ from 'lodash-es';
d3.selection.prototype.appendSelect = appendSelect;
import {gsap}  from "gsap/dist/gsap";        
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);

class Chart {
  selection(selector) {
    if (!selector) return this._selection;
    this._selection = d3.select(selector);
    return this;
  }

  data(newData) {
    if (!newData) return this._data || this.defaultData;
    this._data = newData;
    return this;
  }

  props(newProps) {
    if (!newProps) return this._props || this.defaultProps;
    this._props = _.merge(this._props || this.defaultProps, newProps);
    return this;
  }

  defaultData = [];
  defaultProps = {}
	

  // Define what the graph is supposed to look like initially
  setChart() {
    const data = this.data();
    const { width, height, fillBright } = this.props();
		
	// Dimentions - make sure you export anything needed later with a this.
	this.margin = { top: 20, right: 10, bottom: 10, left: 10 }
	this.boundedWidth = width - this.margin.left - this.margin.right
	this.boundedHeight = height - this.margin.top - this.margin.bottom
		
	// Scales 
	this.xScale = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.number)])
		.range([0, this.boundedWidth])
		
	this.yScale = d3.scaleBand()
		.domain(data.map(d => d.id))
		.range([0, this.boundedHeight])
		.paddingInner(0.3)
				
	// Container 
	this.svg = this.selection()
      .appendSelect('svg')
      .attr('width', width)
      .attr('height', height)
      .classed('svg', true)
	this.plot = this.svg
      .appendSelect('g.plot')
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
		
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
					//console.log('step 1 is active')
					this.stepOneLogic() 
				  } 
			},
			// onEnter: ( {progress} ) => { this.stepOneLogic()  },
			// onEnterBack: ({ isActive, progress }) => {  this.stepOneLogic()  },
		})
		
		ScrollTrigger.create({
			trigger: '#step-2',
			start: 'top center',
			onToggle: ( {isActive} ) => { 
				if (isActive) {
					this.stepTwoLogic() 
				} 
			},
			// onEnter: ( {progress} ) => { this.stepTwoLogic()   },
			// onEnterBack: ({ isActive, progress }) => { this.stepTwoLogic() }
		})
		
		ScrollTrigger.create({
			trigger: '#step-3',
			start: 'top center',
			onToggle: ( {isActive} ) => { 
				if (isActive) {
					this.stepThreeLogic() 
				}  
			},
			// onEnter: ( {progress} ) => { this.stepThreeLogic()   },
			// onEnterBack: ({isActive, progress }) => {  this.stepThreeLogic() }
		})

		return this
	}
	
	// Logic for update on step 0 - make the bars contract 
	stepZeroLogic() {
		const { fillBright } = this.props();
		this.plotInitial
			.transition().duration(500)
			.attr('width', 10)
			.style('fill', fillBright)
		return this
	}
	
	// Logic for update on step 1 - make the bars expand 
	stepOneLogic() {
		const { fillBright } = this.props();
		this.plotInitial
			.transition().duration(500)
			.attr('width', d => this.xScale(d.number))
			.style('fill', fillBright)
		return this
	}
	
	// Logic for update on step 2 - change the colour of the bars
	stepTwoLogic() {
		const { fillDark } = this.props();
		this.plotInitial
			.transition().duration(500)
			.attr('width', d => this.xScale(d.number))
			.style('fill', fillDark)
		return this
	}
	
	// Logic for update on step 3 - make the bars smaller and same size
	stepThreeLogic() {
		const { fillDark } = this.props();
		this.plotInitial
			.transition().duration(500)
			.attr('width', d => 300 * Math.random())
			.style('fill', fillDark)
		return this
	}
	
}

export default Chart