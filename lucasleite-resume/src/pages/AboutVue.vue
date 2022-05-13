<template>
  <div class="container main-container">
    <div id="about-content" class="animate__animated animate__fadeInUp d-none">
      <div>
        <h1>About</h1>
      </div>
      <div>
        <p>
          Desde criança sempre tive curiosidade em descobrir como se formavam os softwares e tecnologias e conforme fui descobrindo me veio o desejo de criar minhas proprias soluções e softwares. <br> Com 16 ingressei no Ensino Tecnico em Informatica. <br> Com 19 anos iniciei no meu primeiro emprego na área da tecnologia na Stout Software ldta., auxiliando nas implantações do produto ERP e responsavel pelo suporte de todos os clientes. <br> Aos 20 anos surgiu uma oportunidade para entrar no time de desenvolvimento web o qual me encontro atualmente
            <br>
            "Prezo pelo trabalho honesto, correto e manter um bom ambiente de trabalho, mesmo que a distância. Todos precisamos ter prazer no que fazemos para exercer um bom trabalho"
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  setup(){
    window.addEventListener('scroll', function(){
      let element = document.getElementById('about-content');
      // let sticky = element.offsetTop;
      console.log('work')
      if((this.window.pageYOffset) > 260){
        element.classList.remove('d-none')
      }
    })
  }
}
</script>

<style scoped>
#about-content{
  left:0;
  width: 50%!important;
}
@media only screen and (max-width:768px){
  #about-content{
  left:0;
  width: 100%!important;
  }
}
</style>