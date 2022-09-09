<p class='summary'>
  Minimal example of how to use class-based D3 - rather than Svelte - for DOM manipulation. 
  Similar to above, but instead of using reactive statements and declarations from Svelte, we use <code>onMount</code>,
  together with a resize event. 
</p>
	
<h3>Main points</h3>
<ul>
	<li>
		Instead of binding the <code>clientWidth</code> and <code>clientHeight</code> of the container div of 
    the graph to variables which are then passed as props to the graph, we use don't pass any width and height related props, 
    but instead get them from inside the graph-drawing logic with 
    <br>
    <code>const width = container
        .getBoundingClientRect()
        .width 
    </code>
	</li>
	<li>
		Thus, instead of having reactive props, the props passed to the graph only contain constants. 
	</li>
	<li>
		The <span class='accent'>graph is initialised from <code>onMount</code></span>, and because the responsive
    width and height are no longer passed in as props, we need a 
    <span class='accent'>separate resize event listener</span> to be able to update the graph based on the dimensions of the container, if we want it to be responsive.
	</li>
</ul>

<h3>Disadvantages to reactive declaration approach</h3>
<ul>
	<li>
		  If anything needed to update 
      in the graph because of updating data or props, 
      we would <span class='accent'>need to put the graph-drawing logic in an <code>afterUpdate</code> as well</span>. 
      This might be ok if the changing variables only change very rarely, but not ok when they update continously, 
      as is the case for example with a scroller. 
      The reason for that is that the <code>afterUpdate</code> logic might fire more often that intended. 
	</li>
	<li>
		We need to write an extra event listener for resize and some not very Svelt-y code inside 
    the graph logic, e.g. getting width of the container with
    <br>
    <code>getBoundingClientRect()</code>, when we 
    could instead just bind the container's dimensions to variables which are then passed as props to the graph, 
    making it both cleaner and eliminating the need to use a resize event. 
	</li>
</ul>

<h3>Code highlights</h3>

	


