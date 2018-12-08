<template lang="html">
  <div class="about">
    <nav-header></nav-header>
    <div class="headpic">
      <div class="container headtitle full">
        <div class="title">
          <h1 href="/blog">AiHxym</h1>
        </div>
      </div>
    </div>
    <div class="container full">
      <div class="list">
        <div>
          <div class="full-content">
            <div class="messages-text post-content">
              <div style="height: 600px;">
                <h2 style="margin-bottom: 20px;">About</h2>
                <strong>心血来潮做的一个个人博客</strong>
                <br>
                <p style="margin-bottom: 20px;padding-top: 20px;">
                  github地址 : <a href="https://github.com/AiHxym/my-blog">https://github.com/AiHxym/my-blog</a>
                </p>
                <p style="margin-bottom: 20px;">
                  server部分地址: <a href="https://github.com/JhonXY/vue-blog-server">https://github.com/JhonXY/vue-blog-server</a>
                </p>
                <img id="py" src="/static/images/py.jpg" alt="交易♂交易">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from '@/components/Header.vue'
  import NavFooter from '@/components/Footer.vue'
  export default {
    components: {
      NavHeader,
      NavFooter,
    }
  }
</script>

<style lang="css">
  #py{
    width: 300px;
  }
  .about {
    background-color: #fff;
  }
  @media (max-width: 800px) {
    .about img {
      width: 100%;
    }
  }
</style>
