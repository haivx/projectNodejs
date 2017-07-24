<template>
	<div class="plan">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-9 col-lg-9">
					<div class="row">
						<!--Title Lich khai giang-->
						<div class="col-xs-12 col-md-12 col-lg-12">
							<div class="titleBg">
								<img src="../assets/images/lichkhaigiang/titleBg.png" class="img-fluid" alt="">
								<h2>Lịch khai giảng</h2>
							</div>
						
						</div>
					</div>
					<!-- Het Title Lich khai giang-->
					<div class="row">
						<div class="col-xs-12 col-md-12 col-lg-12">
							<div class="btnRegister">
								<div class="btn btn-danger" @click="Register">Đăng ký học thử ngay</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-md-12 col-lg-12">
							<!-- Lịch khai giảng lớp tiếng Anh-->
							<div class="planEng">
								<h3>Lớp tiếng Anh</h3>
	
								<table class="table table-hover table-bordered table-striped table-responsive ">
									<thead>
										<tr>
											<th>#</th>
											<th>Trình độ</th>
											<th>Lớp</th>
											<th>Lịch học</th>
											<th>Ngày nhập học</th>
											<th>Đăng ký</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Mới bắt đầu</td>
											<td>Ngữ âm nền tảng 601</td>
											<td>Thứ 4 - CN: 19h15 - 21h15</td>
											<td>21/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Mới bắt đầu</td>
											<td>Ngữ âm nền tảng 602</td>
											<td>Thứ 2 - Thứ 5: 19h15 - 21h15</td>
											<td>23/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Mới bắt đầu</td>
											<td>Ngữ âm nền tảng 603</td>
											<td>Thứ 3 - Thứ 6: 19h15 - 21h15</td>
											<td>22/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Cơ bản</td>
											<td>Giao tiếp Basic 48</td>
											<td>Thứ 2 - Thứ 5: 17h15 - 19h15</td>
											<td>18/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Cơ bản</td>
											<td>Giao tiếp Basic 48</td>
											<td>Thứ 2 - Thứ 5: 17h15 - 19h15</td>
											<td>18/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">6</th>
											<td>Cơ bản</td>
											<td>Giao tiếp Basic 49</td>
											<td>Thứ 3 - Thứ 6: 17h15 - 19h15</td>
											<td>18/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">7</th>
											<td>Cơ bản</td>
											<td>Giao tiếp Basic 50</td>
											<td>Thứ 4 - Chủ nhật: 17h15 - 19h15</td>
											<td>18/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">8</th>
											<td>Nâng cao</td>
											<td>Giao tiếp Advanced 44</td>
											<td>Thứ 5 - Chủ nhật: 9h15 - 11h15</td>
											<td>30/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">9</th>
											<td>Nâng cao</td>
											<td>Giao tiếp Advanced 45</td>
											<td>Thứ 2 - Thứ 5: 9h15 - 11h15</td>
											<td>30/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">10</th>
											<td>Nâng cao</td>
											<td>Giao tiếp Advanced 47</td>
											<td>Thứ 3 - Thứ 6: 9h15 - 11h15</td>
											<td>30/6/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalEnglish">Đăng ký</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!-- Hết Lịch khai giảng lớp tiếng Anh-->
						</div>
						<div class="col-xs-12 col-md-12 col-lg-12">
							<!-- Lịch khai giảng lớp tiếng Trung-->
							<div class="planChina">
								<h3>Lớp tiếng Trung</h3>
	
								<table class="table table-hover table-bordered table-striped table-responsive ">
									<thead>
										<tr>
											<th>#</th>
											<th>Trình độ</th>
											<th>Lớp</th>
											<th>Lịch học</th>
											<th>Ngày nhập học</th>
											<th>Đăng ký</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>A1-Mới bắt đầu</td>
											<td>Tiếng Trung CNA1 11</td>
											<td>Thứ 4 + CN: 19h15 - 21h16</td>
											<td>10/06/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalChinese">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>A1-Mới bắt đầu</td>
											<td>Tiếng Trung CNA1 12</td>
											<td>Thứ 3 + Thứ 6: 19h15 - 21h15 </td>
											<td>01/07/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalChinese">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>A1-Mới bắt đầu</td>
											<td>Tiếng Trung CNA1 13</td>
											<td>Thứ 4 + CN: 19h15 - 21h16</td>
											<td>10/06/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalChinese">Đăng ký</button>
											</td>
										</tr>
	
									</tbody>
								</table>
							</div>
							<!-- Hết Lịch khai giảng lớp tiếng Trung-->
	
						</div>
						<div class="col-xs-12 col-md-12 col-lg-12">
							<!-- Lịch khai giảng lớp tiếng Nhật-->
							<div class="planJapan">
								<h3>Lớp tiếng Nhật</h3>
	
								<table class="table table-hover table-bordered table-striped table-responsive ">
									<thead>
										<tr>
											<th>#</th>
											<th>Trình độ</th>
											<th>Lớp</th>
											<th>Lịch học</th>
											<th>Ngày nhập học</th>
											<th>Đăng ký</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>A1 - Mới bắt đầu</td>
											<td>Tiếng Nhật JNA1 11</td>
											<td>Thứ 4 + CN: 19h15 - 21h16</td>
											<td>10/06/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalJapanese">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>A1 - Mới bắt đầu</td>
											<td>Tiếng Nhật JNA1 12</td>
											<td>Thứ 3 + Thứ 6: 19h15 - 21h15 </td>
											<td>01/07/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalJapanese">Đăng ký</button>
											</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>A1 - Mới bắt đầu</td>
											<td>Tiếng Nhật JNA1 13</td>
											<td>Thứ 4 + CN: 19h15 - 21h16</td>
											<td>10/06/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModalJapanese">Đăng ký</button>
											</td>
										</tr>
	
									</tbody>
								</table>
							</div>
							<!-- Hết Lịch khai giảng lớp tiếng Nhật-->
	
						</div>
						<div class="col-xs-12 col-md-12 col-lg-12">
							<!-- Lịch khai giảng lớp tiếng Nhật-->
							<div class="planKorea">
								<h3>Lớp tiếng Hàn</h3>
	
								<table class="table table-hover table-bordered table-striped table-responsive ">
									<thead>
										<tr>
											<th>#</th>
											<th>Trình độ</th>
											<th>Lớp</th>
											<th>Lịch học</th>
											<th>Ngày nhập học</th>
											<th>Đăng ký</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>A1 - Mới bắt đầu</td>
											<td>Tiếng Hàn KNA1 11</td>
											<td>Thứ 4 + CN : 19h15 - 21h16</td>
											<td>10/06/2017</td>
											<td>
												<button class="btn-danger" data-toggle="modal" data-target="#myModal">Đăng ký</button>
											</td>
										</tr>
	
									</tbody>
								</table>
							</div>
							<!-- Hết Lịch khai giảng lớp tiếng Hàn-->
	
						</div>
	
					</div>
					<div class="row">
						<!--Title Ưu đãi-->
						<div class="col-xs-12 col-md-12 col-lg-12">
							<div class="titleBg">
								<img src="../assets/images/lichkhaigiang/titleBg.png" class="img-fluid" alt="">
								<h2>Lưu ý</h2>
							</div>
							<p>
								<span style="color:#ff5600; font-weight:bold">
									<i class="fa fa-free-code-camp" aria-hidden="true"></i> HỌC PHÍ</span> : Chưa bao gồm giáo trình. Giáo viên: % giáo viên nước ngoài theo khóa học (kèm 2-3 trợ giảng người Việt).</p>
							<p>
								<span style="color:#ff5600; font-weight:bold">
									<i class="fa fa-free-code-camp" aria-hidden="true"></i> ƯU ĐÃI KHỦNG</span> : Tặng ngay vé sinh hoạt CLB trị giá 600.000 đ cho các bạn đăng ký lớp tiếng Anh 0 đồng</b>
							</p>
						</div>
					</div>
	
					<!-- Het Title Ưu đãi-->
				</div>
				<div class="col-xs-12 col-md-3 col-lg-3">
					<div class="sidebar">
						<div class="row">
							<div class="col-xs-12 col-md-12 col-lg-12">
								<div class="hotLine">
									<i class="fa fa-phone-square" aria-hidden="true"></i>
									<h4>Hotline
										<span style="font-weight: bold">TƯ VẤN</span>
									</h4>
									<p>04.7307.6699
										<br>0979.357.866</p>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-md-12 col-lg-12">
								<div id="Contentsidebar">
									<div class="titleSidebar">
										<h4>Sự kiện mới nhất</h4>
									</div>
									<div class="contentSidebar">
	
										<div class="contentsidebarImg">
											<img src="../assets/images/homepage/events/speaker4.jpg" class="img-fluid" alt="">
										</div>
										<div class="contentsidebarNews">
											<h5>Mrs Hoàng Anh</h5>
											<span style="background: #ff6500;color:white;padding: 5px;display:block;">14/6/2017</span>
											<a href="">
												<p> Chia sẻ kinh nghiệm du học Anh</p>
											</a>
										</div>
	
										<div class="contentsidebarImg">
											<img src="../assets/images/homepage/events/speaker1.jpg" class="img-fluid" alt="">
										</div>
										<div class="contentsidebarNews">
											<h5>Mrs Quang Anh</h5>
											<span style="background: #ff6500;color:white;padding: 5px;display:block;">24/6/2017</span>
											<a href="">
												<p> Chia sẻ Chiến lược luyện thi IELTS</p>
											</a>
											<p>Muốn đạt điểm cao ở một chương trình thi quốc tế như IELTS bạn cần một cái đầu lạnh và chiến thuật hợp lý...</p>
										</div>
	
										<div class="contentsidebarImg">
											<img src="../assets/images/homepage/events/speaker2.jpg" class="img-fluid" alt="">
										</div>
										<div class="contentsidebarNews">
											<h5>Mr Đào Tuyên</h5>
											<span style="background: #ff6500;color:white;padding: 5px;display:block;">24/6/2017</span>
											<a href="">
												<p> Sinh trắc vân tay và hướng nghiệp</p>
											</a>
											<p> Ông hiện là giám đốc học viện đào tạo kỹ năng NLP, cùng Mr Tuyên khám phá sinh trắc vân tay...</p>
										</div>
	
										<div class="contentsidebarImg">
											<img src="../assets/images/homepage/events/speaker3.jpg" class="img-fluid" alt="">
										</div>
										<div class="contentsidebarNews">
											<h5>Mr Bảo</h5>
											<span style="background: #ff6500;color:white;padding: 5px;display:block;">24/6/2017</span>
	
											<a href="">
												<p> Chia sẻ kinh nghiệm viết CV và nộp hồ sơ xin việc</p>
											</a>
											<p>Anh bảo hiện đang là trưởng phòng nhân sự của Vingroup,vậy tiêu chí nào...</p>
										</div>
	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
	
			</div>
	
		</div>
		<registerform></registerform>
	
<!--FORM ĐĂNG KÝ TIẾNG ANH-->
		<!-- Modal -->
		<div class="modal fade" id="myModalEnglish" tabindex="-1" role="dialog" aria-labelledby="EnglishModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="EnglishModalLabel">Đăng ký lớp tiếng Anh</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="container">
							<div class="row">
								<form id="register_tienganh" name="formDangky" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSeYgqjHl3hmvjZqbbvdwtdbWzLzfPm3DMwhIqzu5Z4fTyoOYg/formResponse">
									<p>Vui lòng hoàn thành form đăng ký dưới đây và chọn lớp học đăng ký để chúng tôi tiện sắp xếp và liên lạc lại với bạn nhé</p>
									<div class="table_list">
										<div class="row formlist">
											<div class="col-xs-12 col-md-12 col-lg-12">
										

													<input type="text" name="entry.350283165" id="name" placeholder="Họ và tên*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
												
												<input type="text" name="entry.496056650" id="tel" placeholder="Điện thoại*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
										
												<input type="text" name="entry.653822262" id="email" placeholder="Email*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
												<select class="form-control" name="entry.2027763509">
													<option value="starter">Bạn muốn đăng ký lớp học</option>
													<option value="Ngữ âm nền tảng 601 - Thứ 4 - CN: 19h15 - 21h15	">Ngữ âm nền tảng 601 - Thứ 4 - CN: 19h15 - 21h15	</option>
													<option value="Ngữ âm nền tảng 602 - Thứ 2 - Thứ 5: 19h15 - 21h15">Ngữ âm nền tảng 602	 - Thứ 2 - Thứ 5: 19h15 - 21h15</option>
													<option value="Ngữ âm nền tảng 603 - Thứ 3 - Thứ 6: 19h15 - 21h15">Ngữ âm nền tảng 603 - Thứ 3 - Thứ 6: 19h15 - 21h15</option>
													<option value="Giao tiếp Basic 48 - Thứ 2 - Thứ 5: 17h15 - 19h15">Giao tiếp Basic 48 - Thứ 2 - Thứ 5: 17h15 - 19h15</option>
													<option value="Giao tiếp Basic 49 - Thứ 3 - Thứ 6: 17h15 - 19h15">Giao tiếp Basic 49 - Thứ 3 - Thứ 6: 17h15 - 19h15</option>
													<option value="Giao tiếp Basic 50 - Thứ 4 - Chủ nhật: 17h15 - 19h15">Giao tiếp Basic 50 - Thứ 4 - Chủ nhật: 17h15 - 19h15</option>
													<option value="Giao tiếp Advanced 44 -Thứ 5 - Chủ nhật: 9h15 - 11h15">Giao tiếp Advanced 44 -Thứ 5 - Chủ nhật: 9h15 - 11h15</option>
													<option value="Giao tiếp Advanced 45 -Thứ 2 - Thứ 5: 9h15 - 11h15">Giao tiếp Advanced 45 -Thứ 2 - Thứ 5: 9h15 - 11h15</option>
													<option value="Giao tiếp Advanced 47-Thứ 3 - Thứ 6: 9h15 - 11h15">Giao tiếp Advanced 47-Thứ 3 - Thứ 6: 9h15 - 11h15</option>
													<option value="Lịch khác">Tôi muốn đăng ký lịch khác</option>
												</select>
											</div>
										</div>
									</div><hr style="background:white;">
										<div id="modalSubmit">
											<button class="btn btn-primary modalSubmit" type="submit" name="Đăng ký" value="Đăng ký" id="submit">Đăng ký</button>
											</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	<!--HẾT FORM ĐĂNG KÝ TIẾNG ANH-->
	<!--FORM ĐĂNG KÝ TIẾNG HÀN-->
		<!-- Modal -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="KoreanModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="KoreanModalLabel">Đăng ký lớp tiếng Hàn</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="container">
							<div class="row">
								<form id="register_tienganh" name="formDangky" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSeYgqjHl3hmvjZqbbvdwtdbWzLzfPm3DMwhIqzu5Z4fTyoOYg/formResponse">
									<p>Vui lòng hoàn thành form đăng ký dưới đây và chọn lớp học đăng ký để chúng tôi tiện sắp xếp và liên lạc lại với bạn nhé</p>
									<div class="table_list">
										<div class="row formlist">
											<div class="col-xs-12 col-md-12 col-lg-12">
									

													<input type="text" name="entry.350283165" id="name" placeholder="Họ và tên*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
									
												<input type="text" name="entry.496056650" id="tel" placeholder="Điện thoại*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
											
												<input type="text" name="entry.653822262" id="email" placeholder="Email*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
												<select class="form-control" name="entry.2027763509">
													<option value="starter">Bạn muốn đăng ký lớp học</option>
													<option value="KNA1 - Thứ 4 + CN :19h15 - 21h16">KNA1 - Thứ 4 + CN :19h15 - 21h16</option>
													<option value="Lịch khác">Tôi muốn đăng ký lịch khác</option>

												</select>
											</div>
										</div>
									</div><hr style="background:white;">
										<div id="modalSubmit">
											<button class="btn btn-primary modalSubmit" type="submit" name="Đăng ký" value="Đăng ký" id="submit">Đăng ký</button>
											</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	<!--HẾT FORM ĐĂNG KÝ TIẾNG HÀN-->
	<!--FORM ĐĂNG KÝ TIẾNG TRUNG-->
		<!-- Modal -->
		<div class="modal fade" id="myModalChinese" tabindex="-1" role="dialog" aria-labelledby="ChineseModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="ChineseModalLabel">Đăng ký lớp tiếng Trung</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="container">
							<div class="row">
								<form id="register_tienganh" name="formDangky" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSeYgqjHl3hmvjZqbbvdwtdbWzLzfPm3DMwhIqzu5Z4fTyoOYg/formResponse">
									<p>Vui lòng hoàn thành form đăng ký dưới đây và chọn lớp học đăng ký để chúng tôi tiện sắp xếp và liên lạc lại với bạn nhé</p>
									<div class="table_list">
										<div class="row formlist">
											<div class="col-xs-12 col-md-12 col-lg-12">
												<span Class="error"></span>

													<input type="text" name="entry.350283165" id="name" placeholder="Họ và tên*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
												<span Class="error"></span>
												<input type="text" name="entry.496056650" id="tel" placeholder="Điện thoại*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
												<span Class="error"></span>
												<input type="text" name="entry.653822262" id="email" placeholder="Email*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
												<select class="form-control" name="entry.2027763509">
													<option value="starter">Bạn muốn đăng ký lớp học</option>
													<option value="Tiếng Trung CNA1 11 - Thứ 4 + CN: 19h15 - 21h16">Tiếng Trung CNA1 11 - Thứ 4 + CN: 19h15 - 21h16</option>
													<option value="Tiếng Trung CNA1 12	 - Thứ 3 + Thứ 6: 19h15 - 21h15">Tiếng Trung CNA1 12	 - Thứ 3 + Thứ 6: 19h15 - 21h15</option>
													<option value="Tiếng Trung CNA1 13 - Thứ 4 + CN: 19h15 - 21h16">Tiếng Trung CNA1 13 - Thứ 4 + CN: 19h15 - 21h16</option>
													<option value="Lịch khác">Tôi muốn đăng ký lịch khác</option>

												</select>
											</div>
										</div>
									</div><hr style="background:white;">
										<div id="modalSubmit">
											<button class="btn btn-primary modalSubmit" type="submit" name="Đăng ký" value="Đăng ký" id="submit">Đăng ký</button>
											</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	<!--HẾT FORM ĐĂNG KÝ TIẾNG TRUNG-->
			<!--FORM ĐĂNG KÝ TIẾNG NHẬT-->
		<!-- Modal -->
		<div class="modal fade" id="myModalJapanese" tabindex="-1" role="dialog" aria-labelledby="JapaneseModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="JapaneseModalLabel">Đăng ký lớp tiếng Nhật</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="container">
							<div class="row">
								<form id="register_tienganh" name="formDangky" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSeYgqjHl3hmvjZqbbvdwtdbWzLzfPm3DMwhIqzu5Z4fTyoOYg/formResponse">
									<p>Vui lòng hoàn thành form đăng ký dưới đây và chọn lớp học đăng ký để chúng tôi tiện sắp xếp và liên lạc lại với bạn nhé</p>
									<div class="table_list">
										<div class="row formlist">
											<div class="col-xs-12 col-md-12 col-lg-12">
											

													<input type="text" name="entry.350283165" id="name" placeholder="Họ và tên*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
									
												<input type="text" name="entry.496056650" id="tel" placeholder="Điện thoại*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
											
												<input type="text" name="entry.653822262" id="email" placeholder="Email*" class="form-control">
											</div>
											<div class="col-xs-12 col-md-12 col-lg-12">
											
												<select class="form-control" name="entry.2027763509">
													<option value="starter">Bạn muốn đăng ký lớp học</option>
													<option value="Tiếng Nhật JNA1 11 - Thứ 4 + CN: 19h15 - 21h16">Tiếng Nhật JNA1 11 - Thứ 4 + CN: 19h15 - 21h16</option>
													<option value="Tiếng Nhật JNA1 12 - Thứ 3 + Thứ 6: 19h15 - 21h15">Tiếng Nhật JNA1 12 - Thứ 3 + Thứ 6: 19h15 - 21h15</option>
													<option value="Tiếng Nhật JNA1 13 -  Thứ 4 + CN: 19h15 - 21h16">Tiếng Nhật JNA1 13 -  Thứ 4 + CN: 19h15 - 21h16</option>
													<option value="Lịch khác">Tôi muốn đăng ký lịch khác</option>

												</select>
											</div>
										</div>
									</div><hr style="background:white;">
										<div id="modalSubmit">
											<button class="btn btn-primary modalSubmit" type="submit" name="Đăng ký" value="Đăng ký" id="submit">Đăng ký</button>
											</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	<!--HẾT FORM ĐĂNG KÝ TIẾNG NHẬT-->
	</div><!--ĐÓNG THẺ VUE- DON'T REMOVE-->
</template>
<script>
import registerform from '../components/registerform.vue'
export default {
  name: 'lichkhaigiang',
  components: {
    registerform
  },
  methods: {
    Register: function () {
      window.$('html, body').animate({
        scrollTop: window.$('#register_hocthumienphi').offset().top - 250
      }, 1000)
    }
  }
}
</script>

<style>
.plan {
	margin-top: 150px;
}

.titleBg {
	position: relative;
	margin-bottom: 10px;
}

.titleBg h2 {
	position: absolute;
	top: 7px;
	left: 100px;
	color: white;
	font-size: 25px;
	text-transform: uppercase
}

.btnRegister {
	text-align: center;
	margin-bottom: 10px;
}

.btnRegister .btn {
	background: #ff6500;
	cursor: pointer;
	border: 2px solid #ff6500;
}

.btnRegister .btn:hover {
	background: white;
	border: 2px solid #ff6500;
	color: #ff6500;
}

table thead {
	background: #ff6500;
	color: white;
	font-size: 19px;
}

table tbody>tr>td .btn-danger {
	background: #ff6500;
	cursor: pointer;
	border: 1px solid #ff6500;
	padding: 5px;
}

table tbody>tr>td .btn-danger:hover {
	color: #ff6500;
	background: white;
	border: 1px solid #ff6500;
}

.planEng h3 {
	color: #ff6500;
	font-size: 30px;
	font-weight: bold
}


.planChina h3 {
	color: #ff6500;
	font-size: 30px;
	font-weight: bold
}

.planJapan h3 {
	color: #ff6500;
	font-size: 30px;
	font-weight: bold
}

.planKorea h3 {
	color: #ff6500;
	font-size: 30px;
	font-weight: bold
}


.sidebar .hotLine {
	padding-top: 5px;
	position: relative;
	background: #ff6500;
	text-align: center
}

.sidebar .hotLine h4 {
	color: white;
	padding-top: 3px
}

.sidebar .hotLine p {
	color: white;
	padding-bottom: 2px;
	padding-left: 10px;
	font-size: 20px;
	font-weight: bold
}

.sidebar .hotLine .fa {
	position: absolute;
	top: 40px;
	left: 20px;
	color: white;
	font-size: 40px;
}

#Contentsidebar {
	border: 2px solid #ff6500;
	margin-bottom: 5px;
}

.titleSidebar {
	text-align: center;
	margin-bottom: 5px;
}

.titleSidebar h4 {
	color: white;
	background: #ff6500;
	padding: 5px;
}

.contentsidebarImg {
	text-align: center;
	width: 100%;
	margin-top: 5px;
}

.contentsidebarImg img {
	max-width: 100px;
}

.contentsidebarNews {
	margin-top: 5px;
	text-align: center;
	width: 100%;
	border-bottom: 1px solid #ff6500;
}

.contentsidebarNews a:hover {
	text-decoration: none
}

.contentsidebarNews p {
	margin-top: 10px;
}

@media screen and (max-width:576px) {
	.titleBg img {
		min-height: 35px;
	}
	.titleBg h2 {
		left: 50px
	}
	.hotLine .fa-phone-square {
		margin-left: 35px
	}
	.sidebar .hotLine .fa {
		top: 50px;
	}
}

@media screen and (min-width:576px) and (max-width: 767px) {
	.titleBg img {
		min-height: 35px;
	}
	.hotLine .fa-phone-square {
		margin-left: 100px
	}
}

@media only screen and (min-width:768px) and (max-width: 991px) {
	.titleBg img {
		min-height: 35px;
	}
	.sidebar .hotLine p {
		color: white;
		padding-bottom: 20px;
		padding-left: 35px;
		font-size: 0.6rem;
		font-weight: bold;
	}
	.sidebar .hotLine h4 {
		font-size: 1.1rem
	}
	.sidebar .hotLine .fa {
		top: 30px;
	}
}

@media only screen and (min-width:992px) {
	.titleBg img {
		min-height: 35px;
	}
	.sidebar .hotLine p {
		padding-left: 30px;
	}
}



/**CSS CHO MODAL FORM**/

.modal-content .modal-header h5 {
	color: white;
	font-size: 30px;
}

#register_tienganh .form-control {
	margin: 15px auto;
	border: 1px solid #2c5ba2;
	border-radius: 10px;
	font-size: 16px;
}
#register_tienganh p{
	color: white;
}
#register_tienganh .formlist {
	margin-left: 0;
	margin-right: 0;
}

.modal-content {
	background:#2c5ba2
}
#modalSubmit{
	text-align: center
}
.modalSubmit {
	background: #ff6500;
	cursor: pointer;
	border: 2px solid #ff6500;
	padding: 10px 30px;
}
.modalSubmit:hover {
	border: 2px solid #ff6500;
	background:white;
	color: #ff6500;
}
</style>
