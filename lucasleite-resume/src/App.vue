<template>
  <div id="application" class="theme-dark">
    <div>
      <TopBar id="home"/>
    </div>
    <div class="section-vue">
      <AboutVue id="about"/>
      <SkillsVue id="skills"/>
      <ProjectsVue id="projects" />
      <ContactVue id="contact" />
    </div>
    <div>
      <FooterBar/>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import TopBar from './layouts/TopBar'
import FooterBar from './layouts/FooterBar'
import AboutVue from './pages/AboutVue'
import ProjectsVue from './pages/ProjectsVue'
import ContactVue from './pages/ContactVue'
import SkillsVue from './pages/SkilsVue'
export default {
  name: 'App',
  components: {
    TopBar,
    FooterBar,
    AboutVue,
    ProjectsVue,
    ContactVue,
    SkillsVue
  }
}
    
</script>

<style>
.main-container{
  background: var(--bg-color);
  color: var(--primary-color);
  height: 1000px;
}
.main-container p {
  text-align: justify;
 
}
.section{
  width: 100vw;
  left: 0;
}

@media only screen and (max-width: 1020px){
  .main-container{
    height: auto;
    padding-top: 0;
  }
  .section-vue{
    margin-top:-50px;
  }
}
@media only screen and (max-width: 760px){
  .main-container{
    height: auto;
    padding-top: 75px;
  }

}
</style>
