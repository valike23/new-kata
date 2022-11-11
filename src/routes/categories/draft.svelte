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

    </div>
    <div class="cell-9">
        
    </div>
</div>

</div>