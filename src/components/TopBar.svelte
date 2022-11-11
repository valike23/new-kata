<script>
  import {goto} from "@sapper/app";


    const gohome = ()=>{
        location.href ="/";
    }
    const goback =()=>{
        history.back();
    }
</script>

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="row mt-2" on:click={goback}>
    <div class="cell-2">
        <span class="mif-arrow-left mif-3x" />
    </div>

    <div class="cell-8" />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="cell-2" on:click={gohome}>
        <span class="mif-home mif-3x float-right" />
    </div>
</div>