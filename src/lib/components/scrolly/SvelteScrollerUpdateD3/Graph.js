import * as d3 from 'd3';
import { appendSelect } from 'd3-appendselect';
import _ from 'lodash-es';
d3.selection.prototype.appendSelect = appendSelect;

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
	
	// This is also supposed to be responsive
	setChart() {
		const data = this.data();
		const { width, height, index } = this.props();
			
		// Dimentions - make sure you export anything needed later with a this.
		this.margin = { top: 10, right: 10, bottom: 10, left: 10 }
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
			//.style('background-color', 'pink')

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
			.style('fill', '#fff')
			
			return this;
	}
	
	// Logic for update on step 1 - make the bars expand 
	stepOneLogic() {
		this.plotInitial
			.interrupt()
			.transition().duration(500)
			.attr('width', d => this.xScale(d.number))
		return this
	}
	
	// Logic for update on step 2 - change the colour of the bars
	stepTwoLogic() {
		this.plotInitial
			.interrupt()	
			.attr('width', d => this.xScale(d.number))
			.transition().duration(500)
			.style('fill', '#3d405b')
	}
	
}

export default Chart