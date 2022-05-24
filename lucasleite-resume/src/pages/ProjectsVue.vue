<template>
  <div class="container main-container">
    <div id="project-content" class="animate__animated animate__fadeInUp ">
      <div class="section-project text-center">
        <h6 class="subtitle">/NO QUE TENHO TRABALHADO</h6>
        <div class="project-padding">
          <h1 class="title">
            Meus Projetos Recentes
          </h1>
          <p>Aqui guardei alguns projetos no qual tenho trabalhado, que desenvolvi para aplicar e aprimorar os conhecimentos que tenho em relação as boas práticas de desenvolvimento e as tecnologias que domíno e pretendo aperfeiçoar. </p>
        </div>
      </div>
      <div class="card-container">
        <div v-for="project in projectItems" :key="project.id" class="card-project" >
          <div class="card-project-img">
            <img :src="project.url"  alt="">
          </div>
          <h6 class="subtitle-sm">/{{project.tool}}</h6>
          <h4 class="title-sm">{{project.title}}</h4>
          <span>{{project.text}}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
computed:{
  projectItems: function (){
    return [
      {id: 1, tool: 'Tool', url: 'http://alearslan.com/this-one-one-page-responsive-website-template/01-This-One/assets/imgs/blog/1.jpg', title:'Not Found', text:'Not found...'},
      {id: 1, tool: 'Tool', url: 'http://alearslan.com/this-one-one-page-responsive-website-template/01-This-One/assets/imgs/blog/2.jpg', title:'Not Found', text:'Not found...'},
      {id: 1, tool: 'Tool', url: 'http://alearslan.com/this-one-one-page-responsive-website-template/01-This-One/assets/imgs/blog/3.jpg', title:'Not Found', text:'Not found...'}
    ]
  }
}
}
</script>

<style scoped>
#project-content{

}
.section-project p{
  font-size:20px;
  margin-top:20px;
 
}

.subtitle{
  font-weight: 900;
  font-size:1.4rem;
  letter-spacing: 1px;
  color: var(--decoration-color);
}
.subtitle-sm{
  font-weight: 900;
  font-size:1.0rem;
  letter-spacing: 1px;
  color: var(--decoration-color);
  text-transform: uppercase;
}
.title{
  font-weight: 600;
  font-size: 2.2rem
}
.title-sm{
  font-weight: 600;
  font-size: 1.7rem
}
.project-padding{
  padding: 0 60px;
}
.card-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card-project{
  height: 300px;
  width: 340px;
  padding: 50px;
  background-color: transparent;
  transition: all 0.3s;
}
.card-project-img{
  width: 300px;
  height: auto;
  border: 5px solid transparent;
  overflow: hidden;
}
.card-project-img img{
  transform: scale(1.0);
  width: 100%;
  transition: 0.3s;
}
.card-project-img img:hover{
  filter: blur(0.7px);
  transform: scale(1.1);
  position:relative
}
.card-project-title{
  font-size: 2rem;
}

@media only screen and (max-width: 1020px){
  #about-content{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  .project-padding{
  padding: 0 0px;
}
}
</style>