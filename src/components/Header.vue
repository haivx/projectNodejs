<template>
  <header>
    <div class="container-fluid">
      <div class="row fixed-top">
        <div class="top ">
          <div class="searchForm-popup ">
            <div class="search-toggle"></div>
            <div class="searchForm">
              <div id="inputSearch">
                <input type="text" placeholder="Search" name="search" id="sform" class="sform">
                <span></span>
              </div>
              <label for="sform">
                <i class="fa fa-search iconsearch" aria-hidden="true" v-on:click="searchengine"></i>
              </label>
            </div>
          </div> <!-- Het phan khung search-->
          <div class="contactTop">
            <p>Hotline: 04.7307.6699</p>
          </div> <!--Het Phan contact top -->
        </div> <!-- Het Phan top-->
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    methods: {
      searchengine: function () {
        window.$('#sform').toggleClass('xsForm')
        window.$('#inputSearch').toggleClass('displayBlock')
      }
    }
}

</script>

<style scoped>
  .top {
		background-color: #FF6500;
		width: 100%;
		height: 37px;
		position: relative;
	}

	.top .contactTop p {
		padding-right: 10px;
		color: white;
		position: absolute;
		top:7px;
		right: 15px;
		font-size: 14px;
	}

	.top .searchForm-popup .searchForm {
		position: absolute;
		top: 5px;
		left:25px
	}

	.top .searchForm-popup .searchForm input {
		padding-left: 10px;
		font-size: 14px;
		border: 1px solid gray;
		outline: none;
		border-radius: 10px;
	}

	.top .searchForm-popup .searchForm .fa {
		color: white;
		cursor: pointer;
	}

	.top .searchForm-popup .searchForm .fa:hover {
		transform:scale(1.1);
	}
    #inputSearch {
    display: inline-block;
  }
      /******
      MEDIA QUERY
      ******/
  @media screen and (max-width: 575px) {

    .sform {
      display: none;
    }

    .top {
      text-align: center;
    }

    .xsForm {
      z-index: 1000;
      display: block;
      position: absolute;
      font-size: 20px !important;
      background: white;
      top: 140px;
      width: 300px;
      height: 40px;   
      z-index: 1011;
    }

    #inputSearch {
      position: relative;
      display: none;
    }

    #inputSearch span {
      position: absolute;
      top: 35px;
      width: 0;
      left: 9px;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid gray;
    }

    .displayBlock {
      display: block !important;

    }
	.menuCollapse {
			background-color: #1e85bd;
		}
     .mainMenu .menuCollapse{
        background-color: #1e85bd;
     }
  }
  /** Man hinh MD**/
    @media screen and (min-width: 768px) and (max-width: 991px) {
      .menuCollapse {
        background-color: #1e85bd ;
      }
    }

</style>
