<template>
  <div class="container main-container">
    <div id="skills-content" class="animate__animated animate__fadeInUp d-none">
      <div>
        <h1>Skills</h1>
      </div>
      <p>
        Comecei minha jornada no desenvolvimento aos 16 anos iniciando meu ensino tecnico em Informatica. Desde muito jovem já tinha muita curiosidade em saber como se formavam as softwares e tecnologias e conforme fui descobrindo me veio o desejo de criar minhas proprias soluções e softwares.
          
      </p>
    </div>
  </div>
</template>

<script>

export default {
  setup(){
    window.addEventListener('scroll', function(){
      let element = document.getElementById('skills-content');
      console.log('work')
      if((this.window.pageYOffset) > 700){
        element.classList.remove('d-none')
      }
    })
  }
}
</script>

<style scoped>
.main-container{
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}
#skills-content{
  width: 50%!important;
}
@media only screen and (max-width:768px){
  .main-container{
    display: flex!important;
    flex-direction: column;
    justify-content: center;
  }
  #skills-content{
  width: 100%!important;  
  }
}
</style>