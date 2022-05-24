<template>
  <footer class="footer-bar container" >
      <a href="http://www.linkedin.com/in/LucasLeitche" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/LucasLeitche" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://api.whatsapp.com/send?phone=5511948660920" target="_blank"><i class="fab fa-whatsapp"></i></a>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer-bar{
  width: 100vw;
  height: 2.0em;
  position: fixed;
  bottom: 0;
  left:0;
  background: var(--bg-color);
  color: var(--primary-color);
  display: flex;
  justify-content: start ;
  align-items: center;
  font-size: 2rem;
  z-index: 99;
  gap: 30px;
}

.footer-bar a{
  transition: all 0.3s;
}
.footer-bar a:hover{
   color: var(--decoration-color);
  text-shadow: 0.1px 0.1px 2px var(--decoration-color);
  cursor: pointer;
}
@media only screen and (max-width: 760px){
 .footer-bar{
   position:initial;
   display: flex;
   justify-content: space-around;
 }
 .footer-bar i{
   margin: 0!important;
 }
}
</style>