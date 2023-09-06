<script lang="ts">
    import { onMount } from 'svelte';
    import lottie from 'lottie-web';

    export let src; 
    
    onMount(() => {
        const container = document.getElementById('lottie-animation-1');
        if (container) {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: src,
            });
        }
    });

 </script>

<div id="lottie-animation-1"></div>
