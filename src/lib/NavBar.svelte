<script>
    import LottieComponent from './LottieComponent.svelte';
</script>

<style>
    @import '../style/NavBar.css';
</style>

<nav class="navbar">
    <ul class="navbar-list">
        <li><a href="/">Accueil</a></li>
        <li><a href="/competences">Compétences</a></li>
        <li><a href="/languagesframeworks">Langages et Framework</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li class="lottie-container">
            <LottieComponent />
        </li>
    </ul>
</nav>
