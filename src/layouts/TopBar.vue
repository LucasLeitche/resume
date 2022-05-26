<script>
import '../css/global.css'
import 'animate.css'
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Autoplay,FreeMode } from "swiper";
import { ref } from 'vue';

import 'swiper/css';

import "swiper/css/free-mode"
import "swiper/css/pagination";


export default {
  components:{
    Swiper,
    SwiperSlide
  },
  setup(){
    const modules = [Autoplay, FreeMode]
    const showElement = ref(true);

    if(showElement.value == true){
      window.addEventListener('scroll', function (){
        let header = document.getElementById('header-container');
        let buttonTop = document.getElementById('button-top')
  
        let sticky = header.offsetTop;

        if(this.window.pageYOffset > (sticky)){
          header.classList.add('fixed-top');
          buttonTop.classList.remove('d-none');

        }
        else if(this.window.pageYOffset == (sticky)){
          header.classList.add('d-none');
          header.classList.remove('fixed-top');
          buttonTop.classList.remove('fadeIn')
          buttonTop.classList.add('fadeOut')
        this.setTimeout(()=>{
          header.classList.remove('d-none');
          buttonTop.classList.add('d-none');
        },100)
   
        }
      })

    }

    //Menu mobile
    const menuClick = (params) =>{
      const slashone = document.getElementById('slashone');
      const slashtwo = document.getElementById('slashtwo');
      const header = document.getElementById('header-container')
      
      const list = document.getElementById('list');

      const app = document.getElementById('application');
      
      if(list.classList == 'list-style-none'){
        showElement.value = params != 'hideMenu' ? false : true
        list.classList.remove('list-style-none');
        list.classList.add('list-style-flex');
          slashone.classList.add('first-line');
          slashtwo.classList.add('second-line');
        
        if(app.classList == 'theme-dark' && params != 'hideMenu'){
          app.classList.remove('theme-dark');
          app.classList.add('theme-light');
          
        }
        else{
          app.classList.remove('theme-light');
          app.classList.add('theme-dark');

        }
      } else{
        header.classList.remove('fixed-top')
        showElement.value = true
        slashone.classList.remove('first-line');
        slashtwo.classList.remove('second-line');

        list.classList.remove('list-style-flex')
        list.classList.add('list-style-none')

        if(app.classList == 'theme-dark' && params != 'hideMenu'){
          app.classList.remove('theme-dark');
          app.classList.add('theme-light');
        }
        else{
          app.classList.remove('theme-light');
          app.classList.add('theme-dark')
        } 
       
      }
    }
    const hideMenu = () =>{
      menuClick('hideMenu')
    }
    return{
      menuClick,
      modules,
      showElement,
      hideMenu
      // teste,
      // data
    }
  }
}
</script>

<template>
  <header>
    <div class="header-main">
      <div id="header-container" class="header-container container">
        <div class="logo">
          <a href="#home">
            <h1>LUCAS</h1><h1>LEITE</h1>
          </a>
        </div>
        <div class="">
          <a href="#home" class="logo-mobile">
            <h1>LL</h1>
          </a>
        </div>
        <nav>
          <div class="menu-toggle">
            <a href="#/?" @click="menuClick" >
             
              <!-- <span class="vertical-line"></span>
              <span class="vertical-line" style="margin-top:10px"></span> -->
              <i class="fas fa-slash" id="slashone"></i>
              <i class="fas fa-slash" id="slashtwo"></i>
              
            </a>
          </div>
          <ul class="list-style-none" id="list">
            <li><a href="#home" @click="hideMenu">Home</a></li>
            <li><a href="#about" @click="hideMenu">About</a></li>
            <li><a href="#skills" @click="hideMenu">Skills</a></li>
            <li><a href="#projects" @click="hideMenu">Projects</a></li>
            <li><a href="#contact" @click="hideMenu">Contact</a></li>
          </ul>
        </nav>
      </div>
      <Swiper class="mySwiper"
        :modules="modules"
        :thumbs="{swiper: thumbsSwiper}"
        :pagination="pagination"
        :loop="false"
        :autoplay="{
          delay:6000,
          disableOnInteraction:false
        }"
        
      >
        <SwiperSlide class="slide-item animate__animated animate__fadeInDown container" v-if="showElement">
          <div class="text-content" >
            <h1 style="font-size: 60px">Ola, me chamo <strong class="decoration-text">Lucas</strong></h1>
            <span>Desenvolvedor de Software e estudante do 3º Semetre de Analise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi.</span>
          </div>
          <div class="container-item-img ">
            <img :src="require('@/assets/Picture.jpeg')"  >
          </div>
        </SwiperSlide>
        <SwiperSlide class="slide-item animate__animated animate__fadeInDown container" id="silde-0" v-if="showElement">
          <div class="text-content-order-0" >
            <h1>Soluções modernas para o seu <strong class="decoration-text">Produto </strong>ou <strong class="decoration-text"> Serviço</strong></h1>
            
          </div>
          <div class="container-item-img-order-1">
            <div class="row" style="text-align:center">
              <div class="content-item">
                <!-- <i class="fa-solid fa-laptop"></i> -->
                <img :src="require('@/assets/Icons/navegador-da-web.png')" alt="">
                <strong>APLICAÇÃO WEB MODERNA</strong>
              </div>
              <div class="content-item" style="margin-top:50px">
                <!-- <i class="fas fa-users"></i> -->
                <img :src="require('@/assets/Icons/UI.png')" alt="">
                <strong>EXPERIÊNCIA DO USUÁRIO</strong>
              </div>
              <div class="content-item">
                <!-- <i class="fa-solid fa-mobile-screen-button"></i> -->
                <img :src="require('@/assets/Icons/mobile.png')" alt="">
                <strong>DESIGN RESPONSIVEL</strong>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <!-- <SwiperSlide class="slide-item">
          <div class="text-content" >
           <h1>Soluções para o seu <strong class="decoration-text">Produto </strong>ou <strong class="decoration-text"> Serviço</strong></h1>
          </div>
          <div class="container-item-img">
            <img :src="require('@/assets/Picture.jpeg')" >
          </div>
        </SwiperSlide> -->
      </Swiper>

    </div>
  </header>
</template>

<style scoped>
.animate__fadeInDown{
 animation-delay: 0.2s;
  animation-duration: 0.8s;
}
.header-container{
  animation-duration: 0.1s!important;
  animation-delay: 0.1s!important;
}
.header-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: var(--bg-color);
  z-index: 80;
  
}

.logo a{
    font-size:10px;
    font-family: "Akkurat-Light"!;
    border: 1px solid var(--primary-color);
    width: 150px;
    height:36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    transition: 0.3s;
}

.logo a:hover{
  border: 1px solid var(--decoration-color);
  box-shadow: 0 0 5px 1px var(--decoration-color);
  color: var(--decoration-color);
  cursor: pointer;
   
}

.logo-mobile{
  display: none;
}

.logo h1:first-child {
  margin-right: 5px;
}

nav{
  width: 50%
}
nav ul{
  display: flex;
  justify-content: space-between;
  color: var(--primary-color);
}
nav ul li {
  text-transform: uppercase;
  transition: all 0.5s;
}

li a{
  text-decoration: none;
  color: var(--primary-color);
  cursor: pointer;
  transition: 0.3s;
}
nav ul li a:hover{
  color: var(--decoration-color);
  text-shadow: 0.1px 0.1px 2px var(--decoration-color);
  cursor: pointer;
  
}

.header-main{
  background: var(--bg-color);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 95px;

}
.slide-item{
  display: flex;
  transition: all 5s;
  display: flex;
  justify-content: center;
}

.slide-item .text-content{
  color: var(--primary-color);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right:  10px;
}
.slide-item .text-content-order-0{
  color: var(--primary-color);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right:  10px;
  font-size:20px;
  order:1;
  margin-left: 15px;
}

.container-item-img-order-1{
  height:350px; width: 750px;
  font-size: 20px;
  padding-top: 0;
  order: 0;
}
 .swiper{
    margin-top: 5%;
    width: 100%;
  }
.row{
  display: flex;
  align-items: center;
  margin-top: 80px;
}

.content-item i{
  display: flex;
  flex-direction: column;
  color: #232323;
  font-size: 50px;
  
}

.content-item img{
  width: 100px;
}

.content-item strong{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}

.slide-item img {
  max-width: 20em;
  border: 1px solid transparent;
  border-radius: 50%;
}

.menu-toggle{
  display: none;
}

h1 span, h1 strong, span{
  font-family: "Akkurat-Regular", "Akkurat-Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.container-item-img{
  border-radius:49% 100% 46% 51% / 77% 82% 60% 66%; height:350px; width: 300px; 
  background: var(--decoration-color);
  padding: 90px 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}


/* MEDIA */
@media only screen and (max-width: 1020px){
  .logo a{
    display: flex;
    flex-direction: column;
    width: 100px;
    height:50px;
    padding: 30px 20px!important;
    align-items: start;
  }
  .logo h1:first-child{
    margin: 0;
    padding: 0;
  }
   .swiper{
    height: 100vh;
    margin-top: 10%;
  }
  .slide-item{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slide-item .text-content{
    order: 1;
    text-align: center;
  }
  .slide-item img {
    max-width: 10em;
    border: 1px solid transparent;
    border-radius: 50%;
    order: 0;
  }
  .container-item-img{
  border-radius:49% 100% 46% 51% / 77% 82% 60% 66%; height:120px; width: 100px; 
  padding: 100px 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .slide-item .text-content-order-0{
  color: var(--primary-color);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right:  10px;
  order:0;
  }
  .container-item-img-order-1{
  border-radius:49% 100% 46% 51% / 77% 82% 60% 66%; height:120px; width: 100px; 
  background: var(--decoration-color);
  padding: 100px 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;
  }
  .row{
    margin: 0;
  }
  .content-item{
    margin: 0 10px !important;
    
  }
  .content-item strong{
  display: none;
  }
  .content-item img{
    width: 70px;
}

  
}
@media only screen and (max-width: 760px){
  .swiper{
    height: 100vh;
  
  }
  .header-main{
  background: var(--bg-color);
  height: 100%;
  width: 100vw;
  overflow: hidden;
  }
  .logo{
    display: none;
  }
  .logo-mobile{
    font-size:10px;
    font-family: "Akkurat-Light"!;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    width: 70px;
    height:36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }

  .header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    position: relative;
    width: 100vw;
    background: var(--bg-color);
    z-index: 80;
    
  }

  .list-style-none{
    display: none;
  }
  .list-style-flex{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 45px;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0; 
    background: var(--bg-color);
    color: var(--primary-color);
  }

  .list-style-flex li{
    margin: 30px 0;
    position: relative;
  }
  .menu-toggle{
  width:100%; 
  height:36px; 
  display: flex; 
  flex-direction: column;
  display: flex;
  align-items: end;
  justify-content: center;
  cursor: pointer;
  }
  .menu-toggle a{
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .menu-toggle a i{
    color: var(--primary-color);
    font-size: 25px;
    line-height: 15px;
    transform: rotate(-38deg);
    transition: all 0.3s;
  }
  .first-line{
    transform: rotate(15deg)!important;
     line-height: 0px!important;
  }
  .second-line{
    transform: rotate(-90deg)!important;
    line-height: 0px!important;
  }
  .slide-item{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slide-item .text-content{
    order: 1;
  }
  .slide-item img {
    max-width: 10em;
    border: 1px solid transparent;
    border-radius: 50%;
    order: 0;
  }
  .container-item-img{
  border-radius:49% 100% 46% 51% / 77% 82% 60% 66%; height:120px; width: 100px; 
  padding: 100px 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

}
</style>