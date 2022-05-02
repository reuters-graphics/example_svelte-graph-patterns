<p class='summary'>
  Minimal example of how to use class-based D3 - rather than Svelte - for DOM manipulation. 
  Similar to above, but instead of using reactive statements and declarations from Svelte, we use <code>onMount</code>,
  together with resize event. <code>afterUpdate</code> might also be necessary with this approach.
</p>
	
<h3>Main points</h3>
<ul>
	<li>
		Instead of binding the <code>clientWidth</code> and <code>clientHeight</code> of the container div of 
    the chart to variables which are then passed as props to the chart, we use don't pass any width and height related props, 
    but instead get them from inside the chart-drawing logic with <code>const [ width, height ] = container.getBoundingClientRect(); </code>
	</li>
	<li>
		Istead of having reactive props, the props passed to the chart only contain constants. 
	</li>
	<li>
		The <span class='accent'>chart is initialised from <code>onMount</code></span>, and because the 
    width and height are no longer passed in as props, we need a 
    <span class='accent'>separate resize event listener</span> to be able to update the chart based on the dimensions of the container.
	</li>
</ul>

<h3>Disadvantages to reactive declration approach</h3>
<ul>
	<li>
		  It is not obvious in this case as the chart is not updating, if anything needed to update 
      in the chart because of updating data or props, 
      we would <span class='accent'>need to put the graph-drawing logic in an <code>afterUpdate</code> as well</span>. 
      This might be ok if the changing variables only change very rarely, but not ok when they update continousy, 
      as is the case for example with a scroller. 
      The reason for that is that the <code>afterUpdate</code> logic will fire more often that needed. 
      When all the graph-drawing logic is places in a reactive statement, this will only fire when one of the variables that the statement includes has updated. 
	</li>
	<li>
		We need to write an extra event listener for resize and do not very Svelty code inside 
    the graph logic like <code>const [ width, height ] = container.getBoundingClientRect(); </code> when we 
    could instead just bind the container's dimensions to variables which are then passed as props to the chart, 
    making it both cleaner and eliminating the need to use a resize event. 
	</li>
</ul>

<h3>Code highlights</h3>

	


