<template>
<div class="container-fluid">
		<div class="row">
			<nav class="navbar navbar-toggleable-md navbar-light mainMenu fixed-top">
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<a class="navbar-brand logo" href="#"><router-link to="/"><img src="../assets/images/homepage/logo-offical.png" alt=""></router-link></a>
				<div class="collapse navbar-collapse menuCollapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item mainMenu-item" @click="hideMenu">
							<a class="nav-link" href="#"><router-link to="/">Trang chủ</router-link></a>
						</li>
						<li class="nav-item mainMenu-item" @click="hideMenu">
							<a class="nav-link" href="#"><router-link to="gioi-thieu">Về chúng tôi</router-link></a>
						</li>
						<li class="nav-item mainMenu-item">
							<a class="nav-link" href="javascript:void(0)">Các khóa học</a>
							<ul class="submenu">
								<li v-on:click="hideMenu">
										<a href="#"><router-link to="lop-tieng-anh-0-dong">	Lớp tiếng Anh giao tiếp 0 đồng</router-link></a>
								</li>
								<li v-on:click="hideMenu"><a href="#"><router-link to="">Lớp tiếng Nhật 0 đồng</router-link></a></li>
									<li v-on:click="hideMenu"><a href="#"><router-link to="">Lớp tiếng Hàn 0 đồng (Dự kiến)</router-link></a></li>
									<li v-on:click="hideMenu"><a href="#"><router-link to="">Lớp tiếng Anh TOEIC 0 đồng ( Dự kiến )</router-link></a></li>
							</ul>
						</li>
						<li class="nav-item mainMenu-item" @click="hideMenu">
							<a class="nav-link" href="#"><router-link to="lich-khai-giang">Lịch khai giảng</router-link></a>
						</li>
						<li class="nav-item mainMenu-item" >
							<a class="nav-link" href="javascript:void(0)">Góc thành viên</a>
							<ul class="submenu">
								<li @click="hideMenu">
										<a href="https://www.facebook.com/groups/448360445287928">Community English Club</a>
								</li>
								<li @click="hideMenu"><a href="https://www.facebook.com/groups/241463872897599">Community Japanese Club</a></li>
									<li @click="hideMenu"><a href="#">Community Korean Club</a></li>
									<li @click="hideMenu"><a href="https://www.facebook.com/groups/291134534690476/">Community Chinese Club</a></li>
								
							</ul>
						</li>
						<li class="nav-item mainMenu-item" @click="hideMenu">
							<a class="nav-link" href="#"><router-link to="sukien">Tin tức - sự kiện</router-link></a>
						</li>
						<li class="nav-item mainMenu-item" @click="hideMenu">
							<a class="nav-link" href="#"> <router-link to="lien-he">Liên hệ</router-link></a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div> <!-- Het Menu -->
</template>

<script>

export default {
  methods: {
    hideMenu () {
      window.$('.navbar-collapse').collapse('hide')
    }
  }
}

</script>

<style >
/******
	CSS CHO MAIN MENU
	******/

	.logo img{
    display: block;
    max-width: 150px;
    height: auto;
    position: absolute;
		top: 3px
	}
	.mainMenu {
		display: block;
		background: white;
		width: 100%;
		padding-bottom:0;
		margin-top: 37px;
		border-bottom: 1px solid gray;
	}
	.navbar-light .navbar-nav .mainMenu-item:hover{
		background:#2c5ba2;
	}
	.navbar-light .navbar-nav .mainMenu-item a{
		color: #2c5ba2;
		font-weight: bold;
		font-size: 17px;
		padding: 8px 5px;
		text-decoration: none
	}

	.navbar-light .navbar-nav .mainMenu-item a:hover{
		color:white;

	}

		.navbar-light .navbar-nav .mainMenu-item ul li:hover {
			color:#2c5ba2;
		}

						
	.menuCollapse {
		width: 100%;
		text-align: center;
	}
	.menuCollapse  {
		justify-content: center;
		align-items: center;
	}
	#navbarNav .submenu {
		display: none;
		position: absolute;
		z-index: 1000;

	}
	#navbarNav .mainMenu-item:hover .submenu {
		display: block;
		position: absolute;
		z-index: 1000;
		background: white;
		list-style-type: none;
		text-align: left;
		color:black;
		border: 1px solid gray
	}
	#navbarNav .submenu {
		padding-left: 0
	}
	#navbarNav .submenu  li{
		padding:10px;
	}
	#navbarNav .submenu  li:hover{
		background:#2c5ba2;
	}
	#navbarNav .submenu  li:hover  #navbarNav .navbar-nav .mainMenu-item{
		color:white;
	}
  /******
      MEDIA QUERY
      ******/
  /** Man hinh XS**/

  @media screen and (max-width: 575px) {
		#navbarNav .mainMenu-item:hover .submenu a{
			color: black
		}
    .logo img {
			max-width: 100px;
      left: 50%;
			margin-left: -20px;
      position: relative;
    }
		 .navbar-light .navbar-nav .mainMenu-item a{
			 color:white
		 }
    .navbar-light .navbar-nav .mainMenu-item > a {
      text-align: left;
			color: white;
      border-top: 1px solid white;
			text-decoration: none 	
    }
    .menuCollapse {
      background-color: #FF6500;
    }
    }
  /** Man hinh SM**/
    @media screen and (min-width: 576px) and (max-width: 767px) {

      .logo img {
        left: 50%;
        position: relative;
        margin-left: -36px;
      }

      .navbar-light .navbar-nav .mainMenu-item a {
        text-align: left;
        color: white;
        border-bottom: 0.5px solid white;
      }

      .menuCollapse {
        background-color: #FF6500;
      }

    }
    /** Man hinh MD**/
    @media screen and (min-width: 768px) and (max-width: 991px) {
      .logo img {
        left: 50%;
        position: relative;
        margin-left: 0;
				max-width: 80px
      }

     		 .navbar-light .navbar-nav .mainMenu-item a{
			 color:white
		 }
    .navbar-light .navbar-nav .mainMenu-item > a {
      text-align: left;
			color: white;
      border-top: 1px solid white;
			text-decoration: none 	
    }
      .menuCollapse {
        background-color: #FF6500;
      }

    }
    /** Man hinh LG**/
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      .logo img {
        margin-left: 0;
				max-width: 85px;
      }
      .navbar-light .navbar-nav .mainMenu-item a {
        color: black;
        font-size: 16px;
      }
			.human-duty {
				min-height: 243px
			}
			.footerPage input{
				margin-bottom: 10px;
			}
			.footerPage  {
				text-align: center
			}
			.footerPage h5{
				line-height: 1.6rem;
			}
			
    }
    @media screen and (min-width: 1200px) {
			   .logo img {
        margin-left: 50px;
				margin-bottom: 2px;
      }
		}

</style>
