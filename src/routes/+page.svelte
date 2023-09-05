<script>
    import { onMount } from 'svelte';
    import lottie from 'lottie-web';
    import {Particles} from '$components';

    onMount(() => {
        // Chargement de l'animation Lottie
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

<style>
    @import '../style/home.css';
</style>

<Particles />
<div class="partie-gauche">
    <div class="centre">
        <h1>Lhomme Benjamin</h1>
        <h2>Développeur</h2>
        <ul class="liste-centree">
            <li><a href="/competences">Compétences</a></li>
            <li><a href="/languagesframeworks">Langages et Framework</a></li>
            <li><a href="/portfolio">Projets</a></li>
        </ul>        
    </div>
</div>
<hr class="separation" />
<div class="partie-droite">
    <div class="columns is-centered">
        <div class="column is-narrow">
            <div class="notification is-primary bulle-dialogue">
                <p class="has-text-centered">Bienvenue sur ce site web, je serais ici pour vous expliquer 
                son fonctionnement ci besoin, vous aurez juste à me cliquer dessus. 
                Bonne Visite.</p>
            </div>
            <div id="lottie-animation-1" class="lottie-container"></div>
        </div>
    </div>
</div>
