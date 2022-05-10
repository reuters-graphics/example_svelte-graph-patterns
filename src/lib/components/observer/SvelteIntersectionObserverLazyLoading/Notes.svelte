<p class='summary'>
	Using IntersectionObserver via the 
	<a href='https://github.com/metonym/svelte-intersection-observer' target='_blank'>svlete-intersection-observer library</a>
	to lazy-load content once <strong>and</strong> trigger changes to content blocks when it comes into view 
	(intersects), while also passing interesting element as prop to a sticky element on the page 
	via a Svelte store.
</p>

<h3>Main points</h3>
<ul>
	<li><span class='accent'>Use two separate intersection observers</span></li>
	<li>
		We need two intersection observers if we want to do lazy loading and change 
		the element somehow after is has been lazy loaded. 
		If the elements don't need to lazy-load or if they don't need to 
		change in any way after they have first loaded, then we only need one 
		IntersectionObserver.
	</li>
	<li>
		<span class='accent'>The first (outer) intersection observer is for lazy loading. </span>
		It observers each element and if the element enters the viewport (<code>threshold="{0}"</code>), 
		we load the element. This happens only once (<code>once="{true}"</code>), 
		which makes sense because we don't need to lazy-load more than once. 
		The lazy loading bit is achieved by adding the condition <code>if intersecting</code>  
		as then we will only display the DOM element if it intersects the viewport. 
	</li>
	<li>
		In this particular example there is no need to use lazy loading, but if we were 
		loading really heavy chuncks of content, e.g. HTML5 canvas elements with thousands of 
		shapes drawn in each of them, it would help performance to lazy-load each canvas as it comes into view,
		rather than trying to load all of them at once on page load/component mount. 
	</li>
	<li>
		<span class='accent'>The second (inner) one is there to affect a change 
		to the already lazy-loaded element based on some different intersecting condition.</span>
		In this case, if the element becomes 70% visible (<code>threshold="{0.7}"</code>), 
		it will change colour. 
		(See <code>.style('background', d => intersecting ? '#ee3e3e' : '#6b6065')</code> in ContentElement.)
		<br>
		Sidenote: The <code>threshold</code> prop of the IntersectionObserver for this library is 
		not the viewport threshold, but the the proportion (0 to 1) of the intersecting element that 
		has to be visible in the viewport to trigger the intersecting prop to become true.
	</li>
	<li>
		To <span class='accent'>update the content of the sticky element:</span>
		<ul>
			<li> - Initialise a <code>currentElNum</code> variable as a svelte store.</li>
			<li>
				- Set the value of <code>currentElNum</code> to the id corresponding 
				to the data entry bound to that element each time the second IntersectionObserver's 
				intersection condition is satisfied. 
				In other words, when an element is 70% visible in the viewport, 
				<code>currentElNum</code> gets updated with the id for the data entry bound to that element.
			</li>
			<li>
				- Then the StickyElement imports <code>currentElNum</code> and its content gets dynamically updated with it.
			</li>
		</ul>
	</li>
	<li>
		Beware that this is buggy if the height of the intersecting elements is small enought that multiple of them fit into the viewport.
	</li>
</ul>

<h3>Code highlights</h3>

<style lang='scss'>
	@import  '../../../styles/global.scss'; 
	a {
		color: $dark-color;
	}
</style>