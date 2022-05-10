<template>
  <footer class="footer-bar container">
      <i class="fab fa-linkedin-in"></i>
      <i class="fab fa-github"></i>
      <i class="fab fa-whatsapp"></i>
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
  background: black!important;
  color: var(--primary-color);
  display: flex;
  justify-content: start ;
  font-size: 25px;
  z-index: 99;
}
.footer-bar i:first-child {
  margin-right: 30px;
}
.footer-bar i:nth-child(2), .footer-bar i:nth-child(3) {
  margin: 0 30px;
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