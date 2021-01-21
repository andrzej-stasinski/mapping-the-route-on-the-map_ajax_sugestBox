<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<title>Wyznaczanie trasy</title>

	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/style.css">
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVsukIEEdS3EdLCe92-e7TbHKfXyggnsI"></script>
</head>
<body>
	<div class="container">

		<div id="wrapper" class="">

		<header>
			<h2>Wyznaczanie trasy</h2>
		</header>
		
		<hr/>

		<section id="main">

			<!-- Trasa do wybranego przystanku - SELECT -->
			<a class="tytul" href="#">Aktualna lokalizacja -> Przystank wybrany <span>&#9660;</span></a>
			<div class="podtytul">
				<div id="contentSelect">
				<form id="form" onsubmit="return false;"></form><br/>	
				
				<div id="div"></div>
				<div id="mobile"></div><br/>
				<div class="maps-link" id="maps-link_for_select">
					<img id="map" src="img/trasa/google_maps.png" />
				</div>
				</div>
				<hr>
			</div>


			<!-- Trasa do wybranego przystanku - suggestBox -->

			<a class="tytul" href="#">Aktualna lokalizacja -> Przystank dowolny <span>&#9660;</span></a>
			<div class="podtytul">		
				<div id="contentSuggest">
					<form id="form2" onsubmit="return false;">
						<div>
							Wpisz przystanek
							<input id="stopBus" type="text" autocomplete="off" />
							<div id="suggestBoxField">podpowiedź</div>
						</div>	
					</form><br/>

					<div id="load"></div>
				</div>	
								
				<div id="kliknij"></div><br/>
				<div class="maps-link" id="maps-link_for_suggest">
					<img id="icon" src="img/trasa/google2.png" title='Kliknij aby zobaczyć na mapie'/>
				</div>
				<div id="error"></div>	

				<br/><br/>
				<hr>
				<br/><br/>			
			</div>

		</section>

		</div>
		
		<!--
		FOOTER
		-->
		<footer class="main-footer">
			<div id="footer" class="container">
				<div>
					<p>Copyright 2018 by Andrzej Stasiński</p>
				</div>
			</div>
		</footer>
	</div>

	<script src="./js/script.js"></script>	

</body>
</html>
