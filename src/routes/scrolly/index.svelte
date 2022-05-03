<script>
  import '$lib/styles/global.scss';
  
  import SectionTitle from '$lib/components/general/SectionTitle.svelte';
  import Menu from '$lib/components/general/Menu.svelte';

  import SvelteScrollerFunctionality from '$lib/components/scrolly/SvelteScrollerFunctionality/index.svelte';
  import SvelteScrollerUpdateD3 from '$lib/components/scrolly/SvelteScrollerUpdateD3/index.svelte';
  import Template from '$lib/components/template/index.svelte';

  import scrollyIcon from '$lib/assets/noun-blackboard-1320572.svg';
  import menuItems from './menuItems'

</script>

<SectionTitle icon={scrollyIcon}>
  <h1 slot='title'>Scrolly</h1>
</SectionTitle>

<Menu menuItems={menuItems} />

<!-- <Template 
  id='template' 
  sectionTitle='Template'
  externalLink='/'
  externalLinkTitle='Svelte repl' 
  internalLink='/'
  date='April 2022'
/> -->

<SvelteScrollerFunctionality 
  id='svelte-scroller-functionality' 
  sectionTitle='Svelte Scroller Functionality'
  externalLink='https://svelte.dev/repl/3056fbd8f24345a8b97c6a164ac0dba4?version=3.48.0'
  externalLinkTitle='Svelte repl' 
  internalLink='/'
  date='April 2022'
/>

<SvelteScrollerUpdateD3 
  id='svelte-scroller-update-d3' 
  sectionTitle='Svelte Scroller Update D3 Graphs'
  externalLink='https://svelte.dev/repl/7821b1448a27485bb7ef7221d1f5cd99?version=3.48.0'
  externalLinkTitle='Svelte repl' 
  internalLink='/'
  date='April 2022'
/>


<style lang='scss'>
</style>