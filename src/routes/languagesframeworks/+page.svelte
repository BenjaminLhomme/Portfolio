<script>
    let images = [
      {src: 'src/asset/ajax.png', alt: 'ajax', title: 'Titre 1'},
      {src: 'src/asset/github.png', alt: 'github', title: 'Titre 2'},
      {src: 'src/asset/boostrap.png', alt: 'boostrap', title: 'Titre 3'},
      {src: 'src/asset/aspnet.png', alt: 'aspnet', title: 'Titre 3'},
      {src: 'src/asset/c-.png', alt: 'c-', title: 'C++'},
      {src: 'src/asset/c.png', alt: 'c', title: 'C'},
      {src: 'src/asset/css.png', alt: 'css', title: 'Titre 1'},
      {src: 'src/asset/html5.png', alt: 'html5', title: 'Titre 2'},
      {src: 'src/asset/javascript.png', alt: 'javascript', title: 'Titre 3'},
      {src: 'src/asset/mysql.png', alt: 'mysql', title: 'Titre 3'},
      {src: 'src/asset/php.png', alt: 'php', title: 'php'},
      {src: 'src/asset/vb.png', alt: 'vb', title: 'vb'},
    ];
  
    function shuffle(array) {
      // Dupliquer les images
      images = [...images, ...images];
  
      // Mélanger les images
      images = shuffle(images);
      let currentIndex = array.length, temporaryValue, randomIndex;
  
      // Tant qu'il reste des éléments à mélanger...
      while (0 !== currentIndex) {
  
        // Choisissez un élément restant...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    }
  </script>

<style>
  @import '../../style/languagesframeworks.css';
</style>
  
  <h1>Galerie d'images</h1>
  
  {#each images as image (image.src)}
    <div class="image">
      <img src={image.src} alt={image.alt}>
      <p>{image.title}</p>
    </div>
  {/each}
  