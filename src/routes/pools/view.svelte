<script context="module">
    // the (optional) preload function takes a
    // `{ path, params, query }` object and turns it into
    // the data we need to render the page
    export async function preload(page, session) {
        console.log(page);
        const res = await this.fetch(`api/pools/details?id=${page.query.id}`);
        const pool = await res.json();

        return { pool };
    }
</script>
<script>
    import TopBar from "../../components/TopBar.svelte";
    import { poolEntries } from "../../Controllers/pools";
    export let pool;
</script>


<svelte:head>
    <title>View Pool</title>
</svelte:head>


<div class="h-100 container-fluid">
<TopBar/>

<h2>Pool Name: {pool.name}</h2>
<div class="row">
    <div class="cell-12"></div>
</div>

<h3>pool entries</h3>
<table class="table  cell-hover" >
    <thead>
        <tr style="color: white">
            <th style="color:white">#</th>
            <th style="color:white">Athlete Name</th>
            <th class="" style="color:white">created Date</th>
            <th style="color:white">Image</th>
            <th style="color:white">Active</th>
            <th style="color:white">Actions</th>
        </tr>
    </thead>
</table>
</div>