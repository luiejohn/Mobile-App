	"use strict";

	class App{
		constructor(){
			this.courses = [
				{
					"year":1,
					"sem": 1,
					"idc":"ENGL101",
					"des": "Communication Skills 1"
				},
				{
					"year":1,
					"sem": 1,
					"idc":"MATH101",
					"des": "College Algebra"
				},
				{
					"year":1,
					"sem": 1,
					"idc":"MATH110",
					"des": "College Trigonometry"
				},
				{
					"year":1,
					"sem": 1,
					"idc":"CS101",
					"des": "Intro to Computing"
				},
				{
					"year":1,
					"sem": 1,
					"idc":"COMP101",
					"des": "Knowledge Work Software & Pres.."
				},
				{
					"year":1,
					"sem": 1,
					"idc":"ETHNS101",
					"des": "Euthenics101"
				},
				{
					"year":1,
					"sem": 1,
					"idc":"COMP101",
					"des": "College Algebra"
				},


				{
					"year":1,
					"sem": 2,
					"idc":"ENGL102",
					"des": "Communication Skills 2"
				},
				{
					"year":1,
					"sem": 2,
					"idc":"PYSC101",
					"des": "General Psychology"
				},
				{
					"year":1,
					"sem": 2,
					"idc":"FIL101",
					"des": "Komunikasyon sa Akademikong.."
				},

				{
					"year":1,
					"sem": 2,
					"idc":"MATH114",
					"des": "Analytic and Solid Geometry"
				},
				{
					"year":1,
					"sem": 2,
					"idc":"CS201",
					"des": "Computer Programming 1"
				},
				{
					"year":1,
					"sem": 2,
					"idc":"COMP111",
					"des": "Intro to Information Systems"
				},


				{
					"year":1,
					"sem": 3,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},

				{
					"year":1,
					"sem": 3,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},
				{
					"year":1,
					"sem": 3,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},


				{
					"year":2,
					"sem": 1,
					"idc":"CS201",
					"des": "Computer Programming 1"
				},
				{
					"year":2,
					"sem": 1,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},

				{
					"year":2,
					"sem": 1,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},


				{
					"year":2,
					"sem": 2,
					"idc":"COMP111",
					"des": "Intro to Information Systems"
				},

				{
					"year":2,
					"sem": 2,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},

				{
					"year":2,
					"sem": 2,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},

				{
					"year":2,
					"sem": 3,
					"idc":"COMP111",
					"des": "Intro to Information Systems"
				},
				{
					"year":2,
					"sem": 3,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},
				{
					"year":2,
					"sem": 3,
					"idc":"COMP111",
					"des": "TEEEEEEEEEEEEESSSSSSSST!"
				},

				{
					"year":3,
					"sem": 1,
					"idc":"CS201",
					"des": "asdsadsadsadasdsa"
				},
				{
					"year":3,
					"sem": 2,
					"idc":"COMP111",
					"des": "asdsadsadsadsadsa"
				},

				{
					"year":3,
					"sem": 3,
					"idc":"COMP111",
					"des": "asdsadsadsadsadsa"
				},
				{
					"year":3,
					"sem": 1,
					"idc":"COMP111",
					"des": "asdsadsadsadsadsa"
				},
				{
					"year":3,
					"sem": 3,
					"idc":"COMP111",
					"des": "asdsadsadsadsadsa"
				},


			];

			this.myAddedCourses = [];
			this.completedCourses = [];

		}


		render(html, component){

			component.innerHTML += html;
			this.init();
		}

		reRender(html, component){

			component.innerHTML = html;

			//inside jquery functions
			this.init();
		}

		//new Jquery command
		reRender2(html, component){
			$(component).html(html);
			this.init();
		}


		init(){
			$('.collapsible').collapsible();
			$('.button-collapse').sideNav();
		    $('.parallax').parallax();
		    $(".dropdown-button").dropdown();
		    $(".button-collapse").sideNav();
		}

		viewFirstCourses(){
		let html = ` 
		
			`;
				document.getElementById("ProgYear").innerHTML = "1st Year Courses";
				let year=1;

				for (let semNum=1;semNum<=3;semNum++){
					if (semNum>1){
						if (semNum==2){
						html+= ` 
						</ul>

						<div class="col s12 midhead">
						         2nd Trimester
						 </div>
						 <br><br>
	  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">

						`;
						}

						else if (semNum==3){
						html+= ` 
						</ul>
						<div class="col s12 midhead">
						         3rd Trimester
						 </div>
						 <br><br>
	  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">
						`;
						}

					}

			 	for (let i=0;i<this.courses.length;i++){
			 		
			 		if(this.courses[i].year==year && this.courses[i].sem==semNum){
			 
			 		html+=`
			 		<li>
			        <div class="collapsible-header home-accordion"><i class="fa fa-tag" aria-hidden="true"></i>${this.courses[i].idc} ${this.courses[i].des}</div>
			          <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;" >
							         
										   <form action="#" class="row">
											    <div class="check col s2">
											      <input type="checkbox" id="test5" />
											      <label for="test5">M</label>
											    </div>
											    <div class="check col s2">
											      <input type="checkbox" id="test5" />
											      <label for="test5">T</label>
											    </div>
											    <div class="check col s2">
											      <input type="checkbox" id="test5" />
											      <label for="test5">W</label>
											    </div>
											    <div class="check col s2">
											      <input type="checkbox" id="test5" />
											      <label for="test5">TH</label>
											    </div>
											    <div class="check col s2">
											      <input type="checkbox" id="test5" />
											      <label for="test5">F</label>
											    </div>
											    <div class="check col s2">
											      <input type="checkbox" id="test5" />
											      <label for="test5">S</label>
											    </div>
											</form>
			              <div id="addButton" class="col s6 select-button"><center><a class="waves-effect waves-light btn" onclick="component.addList('${this.courses[i].year}','${this.courses[i].sem}','${this.courses[i].idc}','${this.courses[i].des}'); Materialize.toast('Course Added.', 700); component.deactivateButton();">Add</a></center>
			              </div>

			              <div class="col s6 select-button"><center><a class="waves-effect waves-light btn" onclick="component.addComplete('${this.courses[i].year}','${this.courses[i].sem}','${this.courses[i].idc}','${this.courses[i].des}')">Done</a></center>
			              </div>
			          </div>

			      </li>
			      `;
			      }
			      
			      else {
			      	continue;
			      }

			 	} //inner loop close bracket
			 } // loop close bracket
			 this.init();
			 this.reRender(html,$('#listOfCourses')[0]);

		} 

		viewSecondCourses(){
		let html = ` 
		
			`;
				document.getElementById("ProgYear").innerHTML = "2nd Year Courses";
				let year=2;

				for (let semNum=1;semNum<=3;semNum++){
					if (semNum>1){
						if (semNum==2){
						html+= ` 
						</ul>

						<div class="col s12 midhead">
						         2nd Trimester
						 </div>
						 <br><br>

	  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">

						`;
						}

						else if (semNum==3){

						html+= ` 
						</ul>

						<div class="col s12 midhead">
						         3rd Trimester
						 </div>
						 <br><br>

	  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">

						`;
						}

					}

			 	for (let i=0;i<this.courses.length;i++){
			 		
			 		if(this.courses[i].year==year && this.courses[i].sem==semNum){
			 
			 		html+=`
			 		<li>
			        <div class="collapsible-header home-accordion"><i class="fa fa-tag" aria-hidden="true"></i>${this.courses[i].idc} ${this.courses[i].des}</div>
			          <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;" >
							         <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>M
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>T
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>W
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>TH
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>F
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>S
								     </div>
			              <div class="col s6 select-button"><center><a class="waves-effect waves-light btn" onclick="component.addList('${this.courses[i].year}','${this.courses[i].sem}','${this.courses[i].idc}','${this.courses[i].des}')">Add</a></center>
			              </div>

			              <div class="col s6 select-button"><center><a class="waves-effect waves-light btn" onclick="component.addComplete('${this.courses[i].year}','${this.courses[i].sem}','${this.courses[i].idc}','${this.courses[i].des}')">Completed</a></center>
			              </div>
			          </div>

			      </li>
			      `;
			      }
			      
			      else {
			      	continue;
			      }

			 	} //inner loop close bracket
			 } // loop close bracket
			 this.init();
			 this.reRender(html,$('#listOfCourses')[0]);

		} 

		viewThirdCourses(){
		let html = ` 
		
			`;
				document.getElementById("ProgYear").innerHTML = "3rd Year Courses";
				let year=3;

				for (let semNum=1;semNum<=3;semNum++){
					if (semNum>1){
						if (semNum==2){
						html+= ` 
						</ul>

						<div class="col s12 midhead">
						         2nd Trimester
						 </div>
						 <br><br>

	  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">

						`;
						}

						else if (semNum==3){

						html+= ` 
						</ul>

						<div class="col s12 midhead">
						         3rd Trimester
						 </div>
						 <br><br>

	  	 					<ul class="collapsible excessAccordion" data-collapsible="accordion">

						`;
						}

					}

			 	for (let i=0;i<this.courses.length;i++){
			 		
			 		if(this.courses[i].year==year && this.courses[i].sem==semNum){
			 
			 		html+=`
			 		<li>
			        <div class="collapsible-header home-accordion"><i class="fa fa-tag" aria-hidden="true"></i>${this.courses[i].idc} ${this.courses[i].des}</div>
			          <div class="collapsible-body row" style="background-color:#ef9a9a;margin-bottom:0;" >
							         <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>M
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>T
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>W
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>TH
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>F
								     </div>
					                <div class="col s2 days"><input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
								      <label for="filled-in-box"></label>S
								     </div>
			              <div class="col s6 select-button"><center><a class="waves-effect waves-light btn" onclick="component.addList('${this.courses[i].year}','${this.courses[i].sem}','${this.courses[i].idc}','${this.courses[i].des}')">Add</a></center>
			              </div>

			              <div class="col s6 select-button"><center><a class="waves-effect waves-light btn" onclick="component.addComplete('${this.courses[i].year}','${this.courses[i].sem}','${this.courses[i].idc}','${this.courses[i].des}')">Completed</a></center>
			              </div>
			          </div>

			      </li>
			      `;
			      }
			      
			      else {
			      	continue;
			      }

			 	} //inner loop close bracket
			 } // loop close bracket
			 this.init();
			 this.reRender(html,$('#listOfCourses')[0]);

		} 

		addList(year,sem,idc,des){
		let mySelectedCourse = {"year":year,"sem":sem,"idc":idc, "des":des};
		this.myAddedCourses.push(mySelectedCourse);
		component.listHomeSched();
		}

		addComplete(year,sem,idc,des){
		let myCompletedCourse = {"year":year,"sem":sem,"idc":idc, "des":des};
		this.completedCourses.push(myCompletedCourse);
		}


		deactivateButton(){
			let html = `<center><a class="btn disabled">Added</a></center> `;

			this.reRender2(html, '#addButton');

		}

		listHomeSched(){
		let html=` `;

		for(let i=0;i<this.myAddedCourses.length;i++){
		html +=`
			<li>
	            <div class="collapsible-header home-accordion"><i class="fa fa-book lg" aria-hidden="true"></i>${this.myAddedCourses[i].idc} ${this.myAddedCourses[i].des}</div>
	            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
	         </li>
	        `;
		}
		this.reRender2(html, '#homeSchedule');
		Materialize.showStaggeredList('#homeSchedule')
		console.log("click");
	} //viewHomesched end



/*
	listComplete(){

		let html=` `;

		for(let i=0;i<this.completedCourses.length;i++){
		html +=`
			<li>
	            <div class="collapsible-header home-accordion"><i class="fa fa-book lg" aria-hidden="true"></i>${this.myAddedCourses[i].idc} ${this.myAddedCourses[i].des}</div>
	            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
	         </li>
	        `;
		}

		this.reRender2(html, '#homeSchedule');
		console.log("click");
	} /

*/


	}

	class Component extends App{
		constructor(){
			super();
		}

		loadPage(){

		let html = `
			<div class="row">
				<div class="col s12 headload">

				<div class="text-align:center;"><img class="logo" src="img/logo.png"/></div>

				School Personal Scheduler</div>
				<img class="col s12" style="padding:0;" src="img/cat-edited.gif">
			</div>
			`;
			this.reRender(html,$('#app')[0]);
			setTimeout(function(){
					component.studentDashboard();
					Materialize.showStaggeredList('#homeSchedule');
			},6200);

		}

		studentDashboard(){

			let html = `			
			<div class="row header">
				<nav>
					<div class="nav-wrapper">
						<a href="#!" class="brand-logo"><img class="logo-small" src="img/sps1.png"/></a>
						<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></a>
						<a onclick="component.studentDashboard, Materialize.showStaggeredList('#homeSchedule')" class="right" style="margin:5px 20px 0 0;"><i class="fa fa-home fa-2x" aria-hidden="true"></i></a>

						<ul class="right hide-on-med-and-down">
							<li><a href="sass.html" class="btn-flat disabled">Sass</a></li>
							<li><a href="badges.html">Components</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="mobile.html">Mobile</a></li>
						</ul>

						<ul class="side-nav" id="mobile-demo">
							<div class="side-header row">
								<div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>
							</div>

							<li><a onclick="component.setup()"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Setup</a></li>
							<li><a href="saved.html"><i class="fa fa-calendar-o lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Profile</a></li>
							<li><a href="mobile.html"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Notification</a></li>
							<li><a href="mobile.html"><i class="fa fa-bullseye lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Another List</a></li>
							<li><a href="mobile.html"><i class="fa fa-exclamation-triangle lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reset</a></li>
						</ul>
					</div>
				</nav>

				<div class="row">
					<div class="col s12 todays">
						Today's Schedule
					</div>
				</div>

				<div class="row homebuttons">
					<div class="col s4"><center><a href=""><i class="fa fa-cog fa-lg" aria-hidden="true"></i></a></center></div>

					<div class="col s4"><center><a href="add.html"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></a></center></div>

					<div class="col s4"><center><a href=""><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></a></center></div>

				</div>


			</div>

			<div class="row header-content">

				<ul id="homeSchedule" class="collapsible" data-collapsible="accordion">
					<div class="col s12" style="opacity:.7;">
					<center><h5 style="color:white;margin-top:60px;">No Schedules for Today</h5><center>
					<img style="width:150px;height:150px;" src="img/checkSchedule.png">
					</div>

				</ul>

			</div>


			`;
			this.reRender(html,$('#app')[0]);
		}


		setup(){
		let html= `

		<div class="row">
				    <nav>
				    <div class="nav-wrapper">
				      <a href="#!" class="brand-logo">SPS</a>
				      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></a>
				      <a href="index.html" class="right" style="margin:5px 20px 0 0;"><i class="fa fa-home fa-2x" aria-hidden="true"></i></a>


				      <ul class="right hide-on-med-and-down">
				        <li><a href="sass.html" class="btn-flat disabled">Sass</a></li>
				        <li><a href="badges.html">Components</a></li>
				        <li><a href="collapsible.html">Javascript</a></li>
				        <li><a href="mobile.html">Mobile</a></li>
				      </ul>

				      <ul class="side-nav" id="mobile-demo">
				            <div class="side-header row">

				                <div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>

				            </div>
				        <li><a href="setup.html"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Setup</a></li>
				        <li><a href="saved.html"><i class="fa fa-calendar-o lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Profile</a></li>
				        <li><a href="mobile.html"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Notification</a></li>
				        <li><a href="mobile.html"><i class="fa fa-bullseye lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Another List</a></li>
				        <li><a href="mobile.html"><i class="fa fa-exclamation-triangle lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reset</a></li>
				      </ul>
				    </div>
				  </nav>

	    <div class="row">
	        <div class="col s12 todays">
	          Choose your Program
	        </div>
	    </div>
	</div>
	  <div class="row">
	    <div class="col s6"><a onclick="component.addCourse(), component.viewFirstCourses(), Materialize.showStaggeredList('#listOfCourses')"><center><h4 class="program"><br>CS</h4></center></a></div>
	    <div class="col s6"><a href="add.html"><center><h4 class="program"><br>IT</h4></center></a></div>
	    <div class="col s6"><a href="add.html"><center><h4 class="program"><br>HRM</h4></center></a></div>
	    <div class="col s6"><a href="add.html"><center><h4 class="program"><br>TM</h4></center></a></div>
	  </div>

			`;
			this.reRender2(html, '#app');
		}


	addCourse(){

		let html= `

<div class="row">

	    <nav>
	    <div class="nav-wrapper ">
	      <a href="#!" class="brand-logo">SPS</a>
	      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></a>
	      <a onclick="component.studentDashboard(); component.listHomeSched()" class="right" style="margin:5px 20px 0 0;"><i class="fa fa-home fa-2x" aria-hidden="true"></i></a>


	      <ul class="right hide-on-med-and-down">
	        <li><a href="sass.html" class="btn-flat disabled">Sass</a></li>
	        <li><a href="badges.html">Components</a></li>
	        <li><a href="collapsible.html">Javascript</a></li>
	        <li><a href="mobile.html">Mobile</a></li>
	      </ul>

	      <ul class="side-nav" id="mobile-demo">
	            <div class="side-header row">

	                <div class="col s12"><center><img class="profi" src="img/disgusted cat.jpg"</h2></center></div>

	            </div>
	        <li><a href="setup.html"><i class="fa fa-book lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>School Setup</a></li>
	        <li><a href="saved.html"><i class="fa fa-calendar-o lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>My Profile</a></li>
	        <li><a href="mobile.html"><i class="fa fa-bell lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Notification</a></li>
	        <li><a href="mobile.html"><i class="fa fa-bullseye lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Another List</a></li>
	        <li><a href="mobile.html"><i class="fa fa-exclamation-triangle lg" style="margin:0 8px 0 15px;" aria-hidden="true"></i>Reset</a></li>
	      </ul>
	    </div>
	  </nav>


	    <div class="row">
	        <div class="col s12 tophead">
	          Select Courses by Year:
	        </div>
	        <br>
	        <br>
	        <br>
	        <center><a class='dropdown-button btn' href='#' data-activates='dropdown1'>View Courses by Year</a>
	        </center>

	        <ul id='dropdown1' class='dropdown-content teal lighten-2' style="margin:0;">
	          <li><a onclick="component.viewFirstCourses(), Materialize.showStaggeredList('#listOfCourses')">1st Year</a></li>
	          <li><a onclick="component.viewSecondCourses(), Materialize.showStaggeredList('#listOfCourses')">2nd Year</a></li>
	          <li><a onclick="component.viewThirdCourses(), Materialize.showStaggeredList('#listOfCourses')">3rd Year</a></li>
	        </ul>
	    </div>

</div>

	  <div class="divider grey lighten-1"></div>
	  <div class="col s12 tophead" id="ProgYear">
	          1st Year Courses
	  </div>



	   <div class="col s12 midhead">
	          1st Trimester
	  </div>

	  <div class="row" style="margin-bottom:0;">

	  	 <ul id="listOfCourses" class="collapsible" data-collapsible="accordion">
	      	

	  	 </ul>

	   	</div>
	</div>
			`;

			this.reRender(html,$('#app')[0]);
		}


	}
	let component = new Component();
	component.loadPage();


