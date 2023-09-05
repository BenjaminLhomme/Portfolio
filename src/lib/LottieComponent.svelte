<script lang="ts">
    import { onMount } from 'svelte';
    import lottie from 'lottie-web';

    onMount(() => {
        const container = document.getElementById('lottie-animation-1');
        if (container) {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'https://assets5.lottiefiles.com/packages/lf20_6e0qqtpa.json'
            });
        }
    });
</script>
