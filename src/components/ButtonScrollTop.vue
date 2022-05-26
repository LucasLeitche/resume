<template>
  <a href="#" id="button-top" class="d-none animate__animated animate__bounce animate__fadeIn">
      <i class="fas fa-angle-up"></i>
  </a>
</template>

<script>
export default {

}
</script>

<style scoped>
    a{
        border: 1px solid var(--bg-secondary);
        border-radius: 50%;
        background-color: var(--bg-color) ;
        height: 50px;
        width: 50px;
        position: fixed;
        bottom: 50px;
        right:60px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 1px 10px 1px  var(--bg-secondary);
        transition: all 0.3s;
        z-index: 10000;
    }
    a i {
        font-size:20px;
        color: var(--primary-color);
    }
    a:hover{
        background: var(--decoration-color);
        color: var(--primary-color);
    }
    a:hover i{
        color: var(--primary-color);
    }
    @media only screen and (max-width: 1020px) {
        a{
            right:30px;
        }
    }
</style>