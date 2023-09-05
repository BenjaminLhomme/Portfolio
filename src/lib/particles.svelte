<script>
    import { onMount } from 'svelte';
    import { initParticles } from '../ts/particles';

    onMount(() => {
        initParticles();
    });
</script>

<div id="particles-js"></div>
<div class="count-particles">
    <span class="js-count-particles">--</span> particles
</div>
