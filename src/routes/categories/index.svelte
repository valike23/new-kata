<script context="module">
    // the (optional) preload function takes a
    // `{ path, params, query }` object and turns it into
    // the data we need to render the page
    export async function preload(page, session) {
        const res = await this.fetch(`api/category`);
        const resp = await res.json();

        return { resp };
    }
</script>

<script>
  import axios from "axios";
  import TopBar from "../../components/TopBar.svelte";
  import { EnotificationType, handleNotification } from "../../functions/browserFunctions";
    export let resp ;
    let categories = resp.categories;
    let loading = false;  
    let category = {};
    let activeCompetition = resp.activeComp;
    console.log(categories);
 

    const activateCompetition =async (competition, i)=>{
        try {
          const axiosResp = await  (await axios.put('api/competition?id='+ competition.id)).data;
          if(axiosResp){
            handleNotification(window, `${competition.competitionName} has been made active`,
             EnotificationType.SUCCESS);
             competitions.forEach((competition, i)=>{
                competitions[i].active = false;
             });
             competitions[i].active = true;
             competitions = competitions;

          }
        } catch (error) {
            
        }
    }

    const submit =async ()=>{
        try {
            loading = true;
            category.competitionId = activeCompetition.id;
            handleNotification(window, "uploading category",EnotificationType.INFO);
            const form = new FormData();
            form.append('body',JSON.stringify(category));
            const respData = await (await axios.post(`api/category`, form)).data;
            console.log(respData);
            if(respData ){
                loading = false;
                category = {};
                handleNotification(window, "upload is successful",EnotificationType.SUCCESS);
                console.log(respData);
                categories.push(respData);
                categories = categories;
            }
        } catch (error) {
            loading = false;
            handleNotification(window,"something went wrong", EnotificationType.ERROR);
        }
    }
 
    
</script>
<svelte:head>
    <title>Manage Categories</title>
</svelte:head>

<div class="h-100 container-fluid">
 <TopBar/>
    <h1>Categories</h1>
    <div class="container">
     <div class="row cell-12 mb-5">
        <h4>Add Category</h4>
        <p><small>fill the below form to add a category</small></p>
        <form on:submit|preventDefault={submit} class="row">
          <div class="cell-6">
            <div class="form-group">
                <label for="category">Category Name</label>
                <input bind:value={category.categoryName} required type="text" placeholder="category name" class="metro-input"/>
            </div>
          </div>
          <div class="cell-6">
            <div class="form-group">
                <label for="category">Category Gender</label>
                <select bind:value={category.gender} required name="" class="metro-input">
                    <option selected disabled>Pick a gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">None</option>
                </select>
            </div>
          </div>

          <div class="cell-12 mt-3">
            {#if loading}
                
            <button disabled type="submit" class="button primary float-right">submiting...</button>
            {:else}
                
            <button type="submit" class="button primary float-right">submit</button>
            {/if}
          </div>
        </form>
     </div>



        <div class="row">
          <h4>Manage Categories</h4>
            <div class="cell-12">
                <table class="table  cell-hover">
                    <thead>
                        <tr style="color: white">
                            <th style="color:white">#</th>
                            <th style="color:white">category Name</th>
                            <th class="" style="color:white">created Date</th>
                            <th style="color:white">gender</th>
                            <th style="color:white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each categories as category, i}
                            <tr>
                                <td>{i + 1}</td>
                                <td>{category.categoryName}</td>
                                <td>{category.createdAt}</td>
                               <td>{category.gender}</td>
                              
                                <td
                                    ><button on:click={()=>{activateCompetition(category, i)}} class="button primary square " title="make this competition active">
                                        <span class="mif-checkmark" />
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

