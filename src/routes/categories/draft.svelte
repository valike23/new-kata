<script context="module">
    // the (optional) preload function takes a
    // `{ path, params, query }` object and turns it into
    // the data we need to render the page
    export async function preload(page, session) {
        const  {seeding, id, name} = page.query;
      const res = await this.fetch(`api/entries/category?id=${id}`);
      const entries = await res.json();
      
  
      return { entries, seeding, id, name };
    }
  </script>


  <script>
  import TopBar from "../../components/TopBar.svelte";


export let entries, seeding, id, name;
console.log(entries);
let seed;

const fixSeed = ()=>{
  console.log(seed);
}


  </script>
<svelte:head>
    <title>Draft Pools</title>
  </svelte:head>


<div class="h-100 container-fluid">
<TopBar/>
<h2>Pool Draft</h2>
<p>category: {name}</p>

<div class="row">
    <div class="cell-3">
      <div  class="text-center">
        <button class="button primary">4</button>

        <button class="button primary">8</button>
      </div>
     <div class="row">
      <div class="cell-10">
        <select  bind:value={seed} data-role="select">
          <option disabled selected data-template="<span class='mif-amazon icon'></span> $1">Pick Seeds</option>
          {#each entries as entry, i}
            
          <option value="{i}" data-template="<img style='width:20px; margin-right:5px' src='{entry.flag}'/> $1">  { "  " + entry.name}</option>
          {/each}
      </select>
      </div>
      <div class="cell-2">
        <button on:click={fixSeed} class="button primary">Add Seed</button>
      </div>
     </div>

     <!-- show the list of seeds here -->


    </div>
    <div class="cell-9">
        
    </div>
</div>

</div>

<style>
 
</style>