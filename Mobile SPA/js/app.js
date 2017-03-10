"use strict";

class App{
	constructor(){
		this.courses = [
			{
				"year":1,
				"sem": 1,
				"code":"ENGL101",
				"des": "Communication Skills 1"
			},
			{
				"year":1,
				"sem": 1,
				"code":"MATH101",
				"des": "College Algebra"
			},
			{
				"year":1,
				"sem": 1,
				"code":"MATH110",
				"des": "College Trigonometry"
			},
			{
				"year":1,
				"sem": 1,
				"code":"CS101",
				"des": "Intro to Computing"
			},
			{
				"year":1,
				"sem": 1,
				"code":"COMP101",
				"des": "Knowledge Work Software & Pres.."
			},
			{
				"year":1,
				"sem": 1,
				"code":"ETHNS101",
				"des": "Euthenics101"
			},
			{
				"year":1,
				"sem": 1,
				"code":"COMP101",
				"des": "College Algebra"
			},


			{
				"year":1,
				"sem": 2,
				"code":"ENGL102",
				"des": "Communication Skills 2"
			},
			{
				"year":1,
				"sem": 2,
				"code":"PYSC101",
				"des": "General Psychology"
			},
			{
				"year":1,
				"sem": 2,
				"code":"FIL101",
				"des": "Komunikasyon sa Akademikong.."
			},

			{
				"year":1,
				"sem": 2,
				"code":"MATH114",
				"des": "Analytic and Solid Geometry"
			},
			{
				"year":1,
				"sem": 2,
				"code":"CS201",
				"des": "Computer Programming 1"
			},
			{
				"year":1,
				"sem": 2,
				"code":"COMP111",
				"des": "Intro to Information Systems"
			}

		];

	}


	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

}

class Component extends App{
	constructor(){
		super();
	}

	loadPage(){

	let html = `
		<div class="row">
			<div class="col s12 headload">

			<h2>SPS</h2>

			School Personal Scheduler</div>
			<img class="col s12" style="padding:0;" src="img/cat-edited.gif">
		</div>
		`;
		this.reRender(html,$('#app')[0]);
		setTimeout(function(){
				component.studentDashboard();
		},4400);

	}

	studentDashboard(){
		let html = `			
		<div class="row header">
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

			<ul class="collapsible" data-collapsible="accordion">
				<li>
					<div class="collapsible-header home-accordion"><i class="fa fa-book lg" aria-hidden="true"></i>CSS 302 Mobile Programming</div>
					<div class="collapsible-body row" >
						<div class="col s2 days">M</div>
						<div class="col s2 days">T</div>
						<div class="col s2 days">W</div>
						<div class="col s2 days">TH</div>
						<div class="col s2 days">F</div>
						<div class="col s2 days">S</div>
					</div>
				</li>
				<li>
					<div class="collapsible-header home-accordion"><i class="fa fa-book lg" aria-hidden="true"></i>CS377 Application Life Cycle</div>
					<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
				</li>
				<li>
					<div class="collapsible-header home-accordion"><i class="fa fa-book lg" aria-hidden="true"></i>MATH232 Discrete Structures 2</div>
					<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
				</li>
				<li>
					<div class="collapsible-header home-accordion"><i class="fa fa-book lg" aria-hidden="true"></i>NSCI101 College Physics</div>
					<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
				</li>
				<li>
					<div class="collapsible-header home-accordion"><i class="fa fa-book lg" aria-hidden="true"></i>HUMA101 Philosophies of Man</div>
					<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
				</li>
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

                <div class="col s12"><center><img class="profi" src="images/disgusted cat.jpg"</h2></center></div>

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
    <div class="col s6"><a href="add.html"><center><h4 class="program"><br>CS</h4></center></a></div>
    <div class="col s6"><a href="add.html"><center><h4 class="program"><br>IT</h4></center></a></div>
    <div class="col s6"><a href="add.html"><center><h4 class="program"><br>HRM</h4></center></a></div>
    <div class="col s6"><a href="add.html"><center><h4 class="program"><br>TM</h4></center></a></div>
  </div>

  </div>

		`;
		this.reRender(html,$('#app')[0]);
	}




}
let component = new Component();
component.loadPage();


