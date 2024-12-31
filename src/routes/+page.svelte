<script>
    
    let {data} = $props();
    let technologies = data.props;

    let selectedTechnologies = $state([]);

    function onclear() {
        selectedTechnologies = [];
    }


    function onclick(event) {
        const { target } = event;
        const { id } = target;

        if (target.checked) {
            selectedTechnologies = [...selectedTechnologies, id];
        } else {
            selectedTechnologies = selectedTechnologies.filter((tech) => tech !== id);
        }
    }

    function ischeked(id) {
        return selectedTechnologies.includes(id);
    }

    function getSelectedTechnologies() {
        if (selectedTechnologies.length === 0) {
            return technologies;
        }
        return technologies.filter(tech => selectedTechnologies.includes(tech.id));
    }
    import { onMount } from 'svelte';

        let overlayVisible = $state(false);
        let overlayImage = $state('');

        function showOverlay(image) {
            overlayImage = image;
            overlayVisible = true;
        }

        function hideOverlay() {
            overlayVisible = false;
            overlayImage = '';
        }

        onMount(() => {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    hideOverlay();
                }
            });
        });
</script>

<hero class="flex flex-col items-center justify-center md:h-screen w-full">
    <h1 class="md:text-8xl sm:text-5xl text-4xl text-gray-900 dark:text-white my-5 font-bold">Elanngo Tex</h1>
    <h1 class="md:text-6xl text-xl font-semibold text-gray-900 dark:text-white my-5">Welcomes You</h1>
    <a href="tel:+919840930511" class="sm:text-2xl text-lg font-semibold text-center text-gray-600 dark:text-gray-300 my-5"><i class="ph-fill ph-phone mx-5"></i>9840930511</a>
    <a href="https://maps.app.goo.gl/JCSeurhNWWVXzti8A" target="_blank" class="sm:text-2xl text-lg font-semibold text-center text-gray-600 dark:text-gray-300 my-5"><i class="ph-fill ph-map-pin-line mx-5"></i>Behind Eashwaran Kovil , Erode - 638001</a>
</hero>
<section class="w-full flex justify-center">
    <div class="xl:w-3/4">
        <h3 class="m-5 text-4xl font-medium text-gray-900 dark:text-white">Choose Products:</h3>
        <ul class="flex flex-wrap justify-center gap-6 items-center">
            {#each technologies as tech}
                <li class="mx-2">
                    <input type="checkbox" id={tech.id} onclick={onclick} checked={ischeked(tech.id)} class="hidden peer" required="">
                    <label for={tech.id} class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 peer-checked:bg-green-500 peer-checked:text-white hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                        <div class="block">
                             <div class="w-full text-lg font-semibold">{tech.name}</div>
                        </div>
                    </label>
                </li>
            {/each}
        </ul>
        <button id="clear-option" onclick={onclear} class="border-red-800 border-2 rounded-lg w-20 h-10 m-5 bg-red-700 text-white text-xl font-medium">Clear</button>
        
        <div class="mt-5 flex w-full flex-wrap justify-center items-center">
            
            {#if overlayVisible}
                <button type="button" class="overlay" onclick={hideOverlay} onkeydown={(event) => event.key === 'Enter' && hideOverlay()} aria-label="Close overlay">
                    <img src={overlayImage} alt="" class="scale-150"/>
                </button>
            {/if}
        
            {#each getSelectedTechnologies() as tech}
                <div class="m-2">
                    <h3 class="text-center text-5xl text-slate-800 font-medium">{tech.name}</h3>
                    <div class="flex flex-wrap justify-center items-center">
                        {#each tech.images as image}
                            <button type="button" class="m-5 cursor-pointer" onclick={() => showOverlay(image)} onkeydown={(event) => event.key === 'Enter' && showOverlay(image)}>
                                <img src={image} alt={tech.name} />
                            </button>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>


<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .overlay img {
        max-width: 90%;
        max-height: 90%;
    }
</style>