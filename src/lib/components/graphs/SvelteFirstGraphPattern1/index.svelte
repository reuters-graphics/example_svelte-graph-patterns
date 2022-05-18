<script>
	import Prism from 'svelte-prism'
  import '$lib/styles/global.scss';
	import '$lib/styles/codeblocks.scss';
  import { browser } from '$app/env';

  import Section from '$lib/components/general/Section.svelte'
  import NotesBox from '../../general/NotesBox.svelte'

	import Notes from './Notes.svelte'
  import Graph from './Graph.svelte';
  import codeblock from './codeblocks'

  export let id
  export let sectionTitle
  export let internalLink 
  export let externalLink
  export let externalLinkTitle
  export let date
</script>


<Section id={id}>
  <NotesBox {internalLink} {date}>
    <h2 slot='title'>{sectionTitle}</h2>
    <div slot='external-link' class='external-link'>
      <a href={externalLink}>{externalLinkTitle}</a>
    </div>
    <Notes />
    <div class='codeblock'>
      {#if browser}
        <Prism language="javascript">{codeblock}</Prism>
      {:else}
        <div></div>
      {/if}
    </div>
  </NotesBox>
  <br>
  <Graph />
</Section>


<style lang="scss">
  @import '../../../styles/global.scss';
  div.codeblock {
    max-width: 700px;
    margin: auto;
  }
</style>