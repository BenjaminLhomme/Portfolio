<script>
    import { onMount } from 'svelte';
    import {Particles, LottieComponent} from '$components';

    let widthContact = "30px";
    let heightContact = "30px";
    let heightRobot = "300px";
    let widthRobot = "300px";
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
                <LottieComponent src="https://assets5.lottiefiles.com/packages/lf20_6e0qqtpa.json" />
        </div>
    </div>
</div>

<div class="lottie-container-contact">
    <div class="lottie-phone">
        <LottieComponent  src="src/asset/lottieFilesJson/phone.json" />
        <p class="lottie-text">Texte à côté de la première animation</p>
    </div>

    <div class="lottie-mail">
        <LottieComponent src="src/asset/lottieFilesJson/mail.json" />
        <p class="lottie-text">Texte à côté de la seconde animation</p>
    </div>

    <div class="lottie-linkedin">
        <LottieComponent nameForContact="linkedin" src="src/asset/lottieFilesJson/linkedin.json"/>
        <p class="lottie-text">Texte à côté de la troisième animation</p>
    </div>
</div>