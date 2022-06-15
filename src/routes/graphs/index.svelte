<script>
  import '$lib/styles/global.scss';
  
  import SectionTitle from '$lib/components/general/SectionTitle.svelte';
  import Menu from '$lib/components/general/Menu.svelte';

  import D3FirstGraphPattern1 from '$lib/components/graphs/D3FirstGraphPattern1/index.svelte';
  import D3FirstGraphPattern2 from '$lib/components/graphs/D3FirstGraphPattern2/index.svelte';
  import SvelteFirstGraphPattern1 from '$lib/components/graphs/SvelteFirstGraphPattern1/index.svelte';
  import SvelteGraphWithTransitions from '$lib/components/graphs/SvelteGraphWithTransitions/index.svelte';

  import graphIcon from '$lib/assets/noun-monitoring-1320561.svg';
  import menuItems from './menuItems'

</script>

<SectionTitle icon={graphIcon}>
  <h1 slot='title'>Graphs</h1>
</SectionTitle>

<Menu menuItems={menuItems} />

<D3FirstGraphPattern1 
  id='d3-first-graph-pattern1' 
  sectionTitle='D3 in Svelte, the D3 way - Pattern 1'
  externalLink='https://svelte.dev/repl/3840b929acb1406dbb86e88ed85801ab?version=3.48.0'
  externalLinkTitle='Svelte repl' 
  internalLink='https://github.com/reuters-graphics/example_svelte-graph-patterns/tree/main/src/lib/components/graphs/D3FirstGraphPattern1'
  date='April 2022'
/>
<D3FirstGraphPattern2 
  id='d3-first-graph-pattern2' 
  sectionTitle='D3 in Svelte, the D3 way - Pattern 2'
  externalLink='https://svelte.dev/repl/924317731dab41e6ac808bbce7c1fab3?version=3.48.0'
  externalLinkTitle='Svelte repl' 
  internalLink='https://github.com/reuters-graphics/example_svelte-graph-patterns/tree/main/src/lib/components/graphs/D3FirstGraphPattern2'
  date='April 2022'
/>
<SvelteFirstGraphPattern1 
  id='svelte-first-graph-pattern1' 
  sectionTitle='D3 in Svelte, the Svelte way - Pattern 1'
  externalLink='https://svelte.dev/repl/d2fed3e55b0846c79d13cdb82a88510a?version=3.48.0'
  externalLinkTitle='Svelte repl' 
  internalLink='https://github.com/reuters-graphics/example_svelte-graph-patterns/tree/main/src/lib/components/graphs/SvelteFirstGraphPattern1'
  date='April 2022'
/>
<SvelteGraphWithTransitions 
  id='svelte-graph-with-transitions' 
  sectionTitle='Svlete with D3 and Svelte Transitions'
  externalLink=''
  externalLinkTitle='' 
  internalLink='https://github.com/reuters-graphics/example_svelte-graph-patterns/tree/main/src/lib/components/graphs/SvelteGraphWithTransitions'
  date='June 2022'
/>

<style lang='scss'>
</style>