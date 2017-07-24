<template>
    <div v-if="$route.path != '/'">
        <div class="container breadcrumb-list" itemscope itemtype="http://schema.org/BreadcrumbList">
            <router-link to="/" class="breadcrumb" itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
                <span itemprop="name"> Trang chủ</span>
                <meta itemprop="position" content="1" />
            </router-link>

            <a href="javascript:void(0)" class="breadcrumb" itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
                <span itemprop="name">{{ $route.meta.breadcrumb }}</span>
                <meta itemprop="position" content="2" />
            </a>
        </div>
    </div>
</template>

<style scoped>
  .breadcrumb-list {
    margin-top: 25px;
  }
.breadcrumb {
    padding: 0
}
.breadcrumb span {
    background: white;
}
  .breadcrumb-list > .breadcrumb {
   color: red;
    font-size: 1rem;
    vertical-align: middle;
     text-decoration: none
  }
.breadcrumb-list > .breadcrumb:hover{
    text-decoration: none
}
  .breadcrumb-list > .breadcrumb:last-child {
    cursor: default;
  }

  .breadcrumb:before {
      background: white;
    content: '\f105';
    font-size: 18px;
    font-family: 'FontAwesome';
  }

  .breadcrumb:first-child {
    color: red;
  }

</style>

<script>
export default {
  name: 'breadcrumb'
}

</script>
