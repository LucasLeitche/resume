<template>
  <div class="container main-container">
    <div id="about-content" class="animate__animated animate__fadeInUp d-none">
      <div class="section-about">
        <h6 class="subtitle">/WHO WE ARE</h6>
        <div class="">
          <h1 class="title">Desenvolvedor de Software. </h1>
          <p>Estudo e trabalho com desenvolvimento voltado a Web a mais de 2 anos. Aplicando soluções práticas e modernas focadas no melhor desempenho e experiência do usuário</p>
        </div>
        <div class="container-about">
        <div>
          <div class="row-about">
            <i class="fa-solid fa-graduation-cap"></i>
            <div class="list-items">
            <h4>Formações</h4>
            <h5>3º Semestre ADS <strong>UAM</strong></h5>
            <h5>Desenvolvimento de Software <strong>ETEC</strong></h5>
          </div>
          </div>
        </div>
        <div>
          <div class="row-about">
             <i class="fas fa-medal"></i>
             <div class="list-items">
              <h4>Certificações</h4>
              <h5>Web Moderno <strong> UDEMY </strong></h5>
              <h5>Vue.js - O guia completo <strong> UDEMY </strong></h5>
              <h5>Oracle PL/SQL <strong> UDEMY </strong></h5>
             </div>
          </div>
        </div>
          
        </div> 
      </div>
      <div class="section-about-img">
        <img :src="require('@/assets/work-home.jpg')" alt="">
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
  display: flex;
  gap: 100px;
  
}
.section-about p{
  font-size:20px;
  margin-top:20px;
}
.container-about{
  margin-top: 30px;
  display: flex;
  gap:70px
}
.subtitle{
  font-weight: 500;
  font-size:1.4rem;
  letter-spacing: 1px;
  color: var(--decoration-color);
}
.title{
  font-weight: 600;
  font-size: 2.2rem
}
.container-about .title {
  font-weight: 600;
  font-size: 1.3rem;
}
.container-about p {
  font-size: 1.0rem;
}
.section-about-img{
  width: 820px;
}
.section-about-img img{
  width: 100%;
  height: 100%;
}
.row-about{
  display: flex;
  align-items: center;
  gap: 30px;
}
.row-about i{
  font-size: 3.0rem;
  color: var(--decoration-color)
}
.list-items h4{
  font-size: 1.8em;
  font-weight: 900;
}

@media only screen and (max-width: 1020px){
  #about-content{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  .section-about-img{
    width: 100%;
    text-align: center;
  }
  .section-about-img img{
    width: 100%;
    height: 452px;
  }
  .container-about{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:50px
  }
}
</style>