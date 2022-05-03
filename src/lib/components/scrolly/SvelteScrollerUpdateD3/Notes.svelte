<p class='summary'>
	Svelte Scroller with a D3 chart where the chart updates happen from D3 based on index of steps. 
</p>

<h3>Outline of the problem</h3>
<ul>
	<li>
		In the Chart Svelte component, we pass props from the Scroller, 
		namely index, progress and offset. Here we only use index, which 
		tells us the index of the step we're currently on. 
	</li>
	<li>
		The <span class='accent'>goal</span> is to use this index to pass as a prop to D3 
		chart so that the chart will update based on the index, i.e. the step. 
	</li>
	<li>
		The problem is that if it's done the wrong way, 
		the index will be passed in too many times/too often to the chart 
		and it will get confused about when to update. 
		This can interfere with update logic inside of D3, such as transitions. 
		It can also impact performance.
	</li>
	<li>
		First note that any reference to any of the props width, height, index etc. 
		passed in from the scroller needs to happen inside a reactive statement. 
		You can test this with <code>console.log(index)</code> which will produce <code>undefined</code>, 
		as opposed to <code>$: console.log(index)</code> which will console-log the index exactly once each time it updates.

		By the same logic, any chart props that use any of these values need to be defined reactively, 
		e.g. <code>$: props = [ index: index ] </code> etc. If you want to test this, 
		add a <code>console.log(index)</code> in the Chart code logic, in <code>onMount</code> 
		and in <code>afterUpdate</code>. You will see that <code>onMount</code> 
		will return <code>undefined</code>, while <code>afterUpate</code> will return many many console logs, 
		rather than only when the index value actually changes. 
		Only the reactive statement, <code>$: console.log(index)</code>,
		will log the index as expected - exactly once each time it changes, 
		which in this case is each time the next or previous step enters the correct place in the viewport.
		<br>
	</li>
	<li>
		Suppose you're updating the props correctly with a reactive declaration 
		<code>$: props = ...</code> but then either only calling all your chart-creation, 
		update and drawing logic from <code>onMount</code> or from <code>afterUpdate</code> or from both. 
		This is no good because using <code>onMount</code> alone and then nothing else will give the chart no
		chance to update its props, so it can't take in the index as a parameter and draw different things depending 
		on the index. Using <code>afterUpdate</code> is also no good because that will keep firing every time anything 
		updates and so it will overfire and pass in the index prop or other props to the chart way too often. This is exactly what we want to avoid. 
		So, in conclusion, <code>onMount</code> will not allow for updates based on props, while <code>afterUpdate</code> 
		will unintentionally create too many updates.
	</li>
</ul>

<h3>Summary of solution</h3>
<ul>
	<li>
		The takeaway is: <span class='accent'>use reactive statements or declarations if refering to Scrolly variables to ensure enclosed logic updates correctly</span>.
More specifically: 
	</li>
	<li>
		Define chart props (which depend on the Scrolly variables) reactively with <code>$: props = ...</code>
	</li>
	<li>
		Set up the Chart from <code>onMount</code>, passing it the container, props, data and calling any function that will draw the graph in the initial form that we want it to be when the page or component is loaded
	</li>
	<li>
		Write another reactive declaration that passes in the 
		props to the chart and calls any functions that depend on these props which are relevant 
		to the given step, e.g. <code>$: chart.props(props).draw()</code>
	</li>
	<li>
		Inside of that logic, use conditions based on the index to call different 
		functions that will draw different things. 
		These will now only be called once because the reactive declaration only updates once each time that index updates. 
	</li>
</ul>

<h3>
	Scroller Logic
</h3>
<ul>
	<li>
		Each step has a height of 100vh (semi-transparent) but the actual conent is less 
	</li>
	<li>
		The background container has height of 100vh (red lines) but the content can have less, in which case you can position it in the middle of the background container by making the background container have <code>display: flex</code>
	</li>
	<li>
		The scrolly becomes sticky when the top of the background container hits the top of the viewport. That corresponds to <code>top=0</code>. It becomes unstuck when the bottom of the background container hits the top of the viewport. This corresponds to <code>bottom=1</code>
	</li>
	<li>
		The scroller threshold is 0.5, meaning that for each step, it becomes active when the top of the step's container hits the middle of the viewport. Be careful if you position the content of the steps anywhere other than the start of the step, because then the trigger point will be the same but will look visually different, as the position of the actual content for the step has shifted downwards.
	</li>
	<li>
		If you don't like having the 0th step at the top of the scroller container, the easiest thing to do would be rather than shuffle all the steps and re-position them with something like a flex position of center, just start with a step that has no content and adjust its height. Here we have step 0 with <code>height: 50vh</code> which makes the start of step 1 align with the center of the screen. 
	</li>
</ul>

<h3>Code highlights</h3>

<style>
</style>