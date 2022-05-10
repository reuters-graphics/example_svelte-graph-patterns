<script>
  import '$lib/styles/global.scss';
  
  import SectionTitle from '$lib/components/general/SectionTitle.svelte';
  import Menu from '$lib/components/general/Menu.svelte';

  import SvelteIntersectionObserverLazyLoading from '$lib/components/observer/SvelteIntersectionObserverLazyLoading/index.svelte';
  import VanillaIntersectionObserver from '$lib/components/observer/VanillaIntersectionObserver/index.svelte';

  import observerIcon from '$lib/assets/noun-presentation-1320578.svg';
  import menuItems from './menuItems'

</script>

<SectionTitle icon={observerIcon}>
  <h1 slot='title'>Intersection Observer</h1>
</SectionTitle>

<Menu menuItems={menuItems} />

<SvelteIntersectionObserverLazyLoading 
  id='svelte-intersection-observer-lazy-loading' 
  sectionTitle='Svelte Intersection Observer lazy loading'
  externalLink='https://svelte.dev/repl/310510e6e6c3464f9518c55b6ad50f25?version=3.48.0'
  externalLinkTitle='Svelte repl' 
  internalLink='/'
  date='April 2022'
/>

<VanillaIntersectionObserver 
  id='vanilla-intersection-observer' 
  sectionTitle='Vanilla Intersection Observer'
  externalLink='https://svelte.dev/repl/d9bc0f84d467495991518091456fa01f?version=3.48.0'
  externalLinkTitle='Svelte repl' 
  internalLink='/'
  date='April 2022'
/>


<style lang='scss'>
</style>