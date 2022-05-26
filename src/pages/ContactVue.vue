<template>
  <div class="container main-container">
    <div id="contact-content" class="" data-anime>
      <div>
        <h6 class="subtitle">ENTRAR EM CONTATO</h6>
        <h1 class="title" style="word-break:break-all">Ligue ou me mande um email.</h1>
        <div class="content-container">
          <div>
            <i class="fas fa-phone-alt"></i>
          </div>
          <div class="text-container">
            <span class="title-light">Ligue-me por</span>
            <span class="text-lg">+5511 94866-0920</span>
          </div>
        </div>
        <div class="content-container">
          <div>
            <i class="fas fa-envelope-open"></i>
          </div>
          <div class="text-container">
            <span class="title-light">Ligue-me por</span>
            <span class="text-lg">+5511 94866-0920</span>
          </div>
        </div>
      </div>
      <div class="container-mail">
        <h6 class="subtitle">ME CONTE SUA NECESSIDADE</h6>
        <h1 class="title">Contate-me por aqui.</h1>
        <form action="https://api.staticforms.xyz/submit" method="POST" class="contact-form">
          <input type="hidden" name="accessKey" value="abc6dd19-c6a6-4dd0-9be3-c1f28526381f">
          <input type="text" placeholder="Entre com seu nome *" name="name" id="">
          <input type="mail" placeholder="Entre com seu email *" name="email" id="">
          <textarea  placeholder="Entre com sua mensagem *" name="message" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="Submit" class="submit">
          <input type="hidden" name="redirectTo" value="http://192.168.15.51:8080/#contact">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/global.css'
export default {

}
</script>

<style scoped>
.submit{
  background-color: var(--decoration-color) ;
  border: transparent;
  color: white;
  font-weight: 600;
}
.main-container{
  background: var(--bg-secondary);
  height: 800px;
  padding-bottom: 90px;
  padding-top: 130px;
}
#contact-content{
  display: flex;
  gap: 50px;
}
.content-container{
  display: flex;
  align-items: center;
  height: 100px;
  gap:40px;
  margin-top: 30px;
}
.content-container div .fa-phone-alt{
  transform: rotate(90deg);
}
.content-container div i{
  font-size: 60px;
}
.content-container div{
  padding: 10px 0;
}
.text-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;

}
.text-container .title-light{
  font-weight: 100;
  font-size:1.2rem;
  letter-spacing: 1px;
  color: var(--decoration-color);

}
.text-container .text-lg{
  font-size: 1.5rem;

}

.subtitle{
  font-weight: 900;
  font-size:1.2rem;
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
  font-weight: 900;
  font-size: 2.3rem
}

.contact-padding{
  padding: 0 60px;
}
.card-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card-contact{
  height: 300px;
  width: 340px;
  padding: 50px;
  background-color: transparent;
  transition: all 0.3s;
}
.card-contact-img{
  width: 300px;
  height: auto;
  border: 5px solid transparent;
  overflow: hidden;
}
.card-contact-img img{
  transform: scale(1.0);
  width: 100%;
  transition: 0.3s;
}
.card-container:hover{
  cursor: pointer;
}
.card-contact-img img:hover{
  filter: blur(0.7px);
  transform: scale(1.1);
  position:relative;
}
.card-contact-title{
  font-size: 2rem;
}
.container-mail{
  width: 700px;
}

.contact-form{
  display: flex;
  flex-direction: column;
}

.contact-form input{
  max-width: 500px;
  width: 100%;
  font-size: 20px;
  padding: 10px;
  margin-top: 30px;
  border-radius: 5px
}

.contact-form textarea{
  max-width: 500px;
  width: 100%;
  font-size: 20px;
  height: 250px;
  margin-top:30px;
  padding: 10px;
  border-radius: 5px
}
.contact-form [name="name"]{
  margin-top: 50px!important;
}

@media only screen and (max-width: 1020px){
  .main-container{
    background: var(--bg-secondary);
    height: auto
  }
  #contact-content{
  display: flex;
  flex-direction: column;
  }
  .contact-padding{
    padding: 0 0px;
  }
  .container-mail{
  width: auto;
  }




}
</style>