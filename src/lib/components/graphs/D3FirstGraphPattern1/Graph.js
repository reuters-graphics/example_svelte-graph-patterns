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
	draw() {
    const data = this.data();
    const { width, height, margin, boundedWidth, boundedHeight, fill } = this.props();
	console.log('logging from draw function', width, height)
		
		// Scales 
		const xScale = d3.scaleLinear()
			.domain([0, d3.max(data, d => d.number)])
			.range([0, boundedWidth])
		
		const yScale = d3.scaleBand()
			.domain(data.map(d => d.id))
			.range([0, boundedHeight])
			.paddingInner(0.3)
				
		// Container 
		const svg = this.selection()
      .appendSelect('svg')
      .attr('width', width)
      .attr('height', height)
      .classed('svg', true)
			//.style('background-color', 'pink')
		const plot = svg
      .appendSelect('g.plot')
			.attr('transform', `translate(${margin.top}, ${margin.left})`)
		
		// Bar Chart
		const barChart = plot.selectAll('.bar')
			.data(data, d => d.id)
			.join('rect')
			.classed('bar', true)
			.attr('x', 0)
			.attr('y', d => yScale(d.id))
			.attr('width', d => xScale(d.number))
			.attr('height', yScale.bandwidth())
			.style('fill', fill)
			
		return this;
	}
	
}

export default Chart
