<script context="module">
    // the (optional) preload function takes a
    // `{ path, params, query }` object and turns it into
    // the data we need to render the page
    export async function preload(page, session) {
        const res = await this.fetch(`api/competition`);
        const competitions = await res.json();

        return { competitions };
    }
</script>

<script>
    export let competitions = [];
    console.log(competitions);
    const openAddCompetition = () => {
        Metro.dialog.open("#addCompetitionModal");
    };
    const triggerFileUpload = () => {
        console.log("triggered");
        // const fileUpload = document.getElementById("image");
        // fileUpload.click();
    };
    const upload =() =>{

    }
</script>

<div class="h-100 container-fluid">
    <div class="row mt-2">
        <div class="cell-2">
            <span class="mif-arrow-left mif-3x" />
        </div>

        <div class="cell-8" />
        <div class="cell-2">
            <span class="mif-home mif-3x float-right" />
        </div>
    </div>
    <h1>Manage Competition</h1>
    <div class="container">
        <div class="row cell-12 mb-5 pr-5">
            <button
                on:click={openAddCompetition}
                class="button primary float-right">Add Competition</button
            >
        </div>
        <div class="row">
            <div class="cell-1" />
            <div class="cell-11">
                <table class="table  cell-hover">
                    <thead>
                        <tr style="color: white">
                            <th style="color:white">#</th>
                            <th style="color:white">competition Name</th>
                            <th class="" style="color:white">created Date</th>
                            <th style="color:white">Image</th>
                            <th style="color:white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each competitions as competition, i}
                            <tr>
                                <td>{i + 1}</td>
                                <td>{competition.competitionName}</td>
                                <td>{competition.createdAt}</td>
                                <td
                                    ><img
                                        class="img"
                                        src={competition.image ||
                                            "images/kata.jpg"}
                                        alt=""
                                    /></td
                                >
                                <td
                                    ><button class="button primary square ">
                                        <span class="mif-pencil" />
                                    </button>
                                    <button class="button alert square ">
                                        <span class="mif-bin" />
                                    </button>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<div  class="dialog" data-role="dialog" id="addCompetitionModal">
    <div class="dialog-title">Add Competition</div>
    <div class="dialog-content">
        <div>
            <div class="form-group">
                <label for="name">Competition name</label>
                <input id="name" type="text" data-role="taginput" />
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="upload mt-4 text-center">
                <input type="file" name="" id="image" />
                <button class="button mt-3" on:click={triggerFileUpload} ><span class="mif-file-upload"></span></button>  
                <p class="text-center">{"click to upload image"}</p>
            </div>
        </div>
    </div>
    <div class="dialog-actions">
        <button type="reset" class="button js-dialog-close">Close</button>
        <button type="submit" class="button primary js-dialog-close">Add</button>
    </div>
</div>

<style>
    .img {
        height: 40px;
        width: 40px;
    }
    .upload {
        border: 1px dashed black;
    }
    #image {
        width: 0px;
        height: 0px;
    }
</style>
