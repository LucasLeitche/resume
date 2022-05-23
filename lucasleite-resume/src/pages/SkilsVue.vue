<template>
  <div class="container main-container">
    <div id="skill-content" class="animate__animated animate__fadeInUp ">
      <div class="section-skill text-center">
        <h6 class="subtitle">/WHAT WE DO</h6>
        <div class="skill-padding">
          <h1 class="title">
            We are a creative studio that combines
            creativity, technology & design 
          </h1>
          <p>Estudo e trabalho com desenvolvimento de software voltado a Web a mais de 2 anos. Aplicando soluções práticas e modernas, focando no melhor desempenho e experiência do usuário</p>
        </div>
      </div>
      <div class="card-container">
        <div class="card-skill">
         <i class="fab fa-js card-skill-icon"></i>
          <h4 class="card-skill-title">JavaScript</h4>
          <span class="card-text"></span>
        </div>
        <div class="card-skill">
         <i class="fab fa-html5 card-skill-icon"></i>
          <h4 class="card-skill-title">HTML 5</h4>
          <span class="card-text"></span>
        </div>
        <div class="card-skill">
         <i class="fab fa-css3-alt card-skill-icon"></i>
          <h4 class="card-skill-title">CSS 3</h4>
          <span class="card-text"></span>
        </div>
        <div class="card-skill mt">
         <i class="fab fa-vuejs card-skill-icon"></i>
          <h4 class="card-skill-title">CSS 3</h4>
          <span class="card-text"></span>
        </div>
        <div class="card-skill mt">
         <i class="fab fa-react card-skill-icon"></i>
          <h4 class="card-skill-title">CSS 3</h4>
          <span class="card-text"></span>
        </div>
        <div class="card-skill mt">
         <i class="fas fa-database card-skill-icon"></i>
          <h4 class="card-skill-title">PL/SQL</h4>
          <span class="card-text"></span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#skill-content{
}
.section-skill p{
  font-size:20px;
  margin-top:20px;
}

.subtitle{
  font-weight: 900;
  font-size:1.4rem;
  letter-spacing: 1px;
  color: var(--decoration-color);
}
.title{
  font-weight: 600;
  font-size: 2.2rem
}

.skill-padding{
  padding: 0 60px;
}
.card-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 80px;
}
.card-skill{
  height: 300px;
  width: 340px;
  padding: 50px;
  text-align: center;
  background-color: var(--bg-secondary);
  transition: all 0.3s;
}
.card-skill-icon{
  font-size:120px;
  color: var(--decoration-color);
  transition: all 0.3s;
  
}
.card-skill-title{
  font-size: 2rem;
}
.card-skill:hover{
  background-color: var(--decoration-color);
}
.card-skill:hover .card-skill-icon{
  color: white;
}

@media only screen and (max-width: 1020px){
  #about-content{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  .skill-padding{
  padding: 0 0px;
}
}
</style>