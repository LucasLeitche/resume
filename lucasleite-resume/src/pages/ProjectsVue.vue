<template>
  <div class="container main-container">
    <div id="projects-content" class="animate__animated animate__fadeInUp d-none">
      <div>
        <h1>Projects</h1>
      </div>
      <p>
        Comecei minha jornada no desenvolvimento aos 16 anos iniciando meu ensino tecnico em Informatica. Desde muito jovem já tinha muita curiosidade em saber como se formavam as softwares e tecnologias e conforme fui descobrindo me veio o desejo de criar minhas proprias soluções e softwares.
          Após finalizar o ensino médio sempre trabalhei para conhecer e ingressar no mercado de trabalho. Com 19 anos iniciei no meu primeiro emprego na área da tecnologia na empresa Stout Software, onde era responsavel por auxiliar nas implantações do produto ERP e responsavel pelo suporte de todos os nossos clientes. Com 20 anos me foi oferecido uma oportunidade para entrar no time de desenvolvimento o qual estou até o momento.
          "Prezo pelo trabalho honesto, correto e manter um bom ambiente de trabalho, mesmo que a distância. Todos precisamos ter prazer no que fazemos para exercer um bom trabalho"
      </p>
    </div>
  </div>
</template>

<script>

export default {
  setup(){
    window.addEventListener('scroll', function(){
      let element = document.getElementById('projects-content');
      // let sticky = element.offsetTop;
  
      if((this.window.pageYOffset) > 260){
        element.classList.remove('d-none')
      }
    })
  }
}
</script>

<style scoped>
#projects-content{
  left:0;
  width: 50%!important;
}
@media only screen and (max-width:768px){
  #projects-content{
  left:0;
  width: 100%!important;
  }
}
</style>