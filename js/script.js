'use strict';

// DIV rozwijany
// ================================================================================

(function () {
	function load() {
		var tytul = document.getElementsByClassName('tytul');

		for (var i = 0; i < tytul.length; i++) {
			var podtytul = tytul[i].nextElementSibling;
			podtytul.style.display = 'none';

			tytul[i].onclick = function (e) {
				var stan = this.nextElementSibling.style.display == 'none' ? true : false;
				if (stan) {
					this.nextElementSibling.style.display = 'block';
					this.children[0].innerHTML = '&#9650;';
				} else {
					this.nextElementSibling.style.display = 'none';
					this.children[0].innerHTML = '&#9660;';
				}
			};
		}
	}
	window.onload = load;
})();




// Trasa: Moja pozycja -> adres
// Trasa: adres -> adres
// Trasa: Moja pozycja -> koordynaty
// ================================================================================

// (function () {
// 	console.info('Trasa na adres');

// 	function wyznaczTrase(curr, adres) {
// 		console.log(curr);
// 		if (navigator.platform.indexOf('iPhone') != -1 || navigator.platform.indexOf('iPad') != -1 || navigator.platform.indexOf('iPod') != -1) {
// 			if (decodeURIComponent(curr) == 'My Location') curr = "";

// 			// if we're on iOS 
// 			// Mapy w iphone
// 			// window.open('http://maps.apple.com/?saddr='+ curr +'&daddr=' + adres);

// 			// Google Maps w iphone
// 			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
// 		} else if (navigator.userAgent.match(/Android/i)) {
// 			if (decodeURIComponent(curr) == 'My Location') curr = "";

// 			// if Android
// 			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
// 		} else {

// 			// if browser 
// 			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
// 		}
// 	}

// 	// Trasa: aktualna pozycja -> adres
// 	var but1 = document.querySelector("#but1");
// 	but1.onclick = function () {
// 		var current = "My Location"; // for browser w komputerze
// 		console.log(current);
// 		current = encodeURIComponent(current);

// 		var cel1 = document.querySelector("#cel1");
// 		var address = cel1.value;
// 		console.log(address);
// 		address = encodeURIComponent(address);

// 		if (address != "") {
// 			cel1.classList.remove("error");
// 			wyznaczTrase(current, address);
// 		} else cel1.classList.add("error");
// 	};

// 	// Trasa: adres -> adres
// 	var but2 = document.querySelector("#but2");
// 	but2.onclick = function () {
// 		var skad = document.querySelector("#skad");
// 		var skadVal = skad.value;
// 		console.log(skadVal);
// 		skadVal = encodeURIComponent(skadVal);

// 		var cel2 = document.querySelector("#cel2");
// 		var adresValue = cel2.value;
// 		console.log(adresValue);
// 		adresValue = encodeURIComponent(adresValue);

// 		skad.classList.remove("error");
// 		cel2.classList.remove("error");
// 		// wyznaczTrase(skad, address);

// 		if (skadVal != "" && adresValue != "") {
// 			skad.classList.remove("error");
// 			wyznaczTrase(skadVal, adresValue);
// 		} else {
// 			if (skadVal == "" && adresValue == "") {
// 				skad.classList.add("error");
// 				cel2.classList.add("error");
// 			}
// 			if (skadVal == "") skad.classList.add("error");
// 			if (adresValue == "") cel2.classList.add("error");
// 		}
// 	};

// 	// Trasa: aktualna pozycja -> koordynaty
// 	var but3 = document.querySelector("#but3");
// 	but3.onclick = function () {
// 		var current = "My Location"; // for browser w komputerze
// 		console.log(current);
// 		current = encodeURIComponent(current);

// 		var coords = document.querySelector("#coords");
// 		var address = coords.value;
// 		console.log(address);
// 		address = encodeURIComponent(address);

// 		if (address != "") {
// 			coords.classList.remove("error");
// 			wyznaczTrase(current, address);
// 		} else coords.classList.add("error");
// 	};
// })();




// Trasa do przystanku - SELECT
// ================================================================================

// ================================================================================

(function () {
	console.info('trasa do przystanku');
	// Efekt mouse - over na icon
	function efektMouse(map) {
		map.onmouseover = function () {
			map.style.width = '110px';
		};
		map.onmouseout = function () {
			map.style.width = '100px';
		};
	}

	// Generowanie mapy z trasą
	function wyznaczTrase(curr, adres) {
		console.log(curr);

		if (navigator.platform.indexOf('iPhone') != -1 || navigator.platform.indexOf('iPad') != -1 || navigator.platform.indexOf('iPod') != -1) {
			if (decodeURIComponent(curr) == 'My Location') curr = "";
			// Google Maps w iphone
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		} else if (navigator.userAgent.match(/Android/i)) {
			if (decodeURIComponent(curr) == 'My Location') curr = "";
			// if Android
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		} else {
			// if browser 
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		}
	}

	// Obsługa zdarzenia SELECT 
	function obslugaSelect() {
		var map = document.querySelector("#map");
		map.style.display = 'none';

		efektMouse(map);

		// Obsługa SELECT
		var sel = document.getElementById('select2');
		//console.log(sel);
		sel.onchange = function () {

			if (this.value != "") {
				// skąd
				var current = "My Location"; // for browser w komputerze
				console.log(current);
				current = encodeURIComponent(current);

				// dokąd - pobrane coords
				var coord = this.value;
				coord = encodeURIComponent(coord);

				// Text - kliknij
				var mobile = document.querySelector('#mobile');
				mobile.textContent = 'Kliknij ikonę mapy, aby pokazać trasę...';

				// ikona google maps - click
				map.style.display = 'block';
				map.style.width = '100px';

				// obj w którym jest icon
				var mapslink_select = document.querySelector('#maps-link_for_select');
				mapslink_select.style.height = '120px';				

				var div = document.getElementById("div");
				div.innerHTML = "LOADING...<br/><img src='./img/trasa/loading.gif'/><br/>";

				setTimeout(function () {
					map.style.width = '100px';
					div.innerHTML = "";
				}, 1000);

				map.onclick = function () {
					wyznaczTrase(current, coord);
				};
			} else {
				document.querySelector("#mobile").style.display = "none";
				map.style.display = 'none';
			}
		};
	}

	// Odbiór danych z AJAX
	function addAfterAjax(data) {
		var json = JSON.parse(data);
		//console.dir(json);

		var select = document.createElement('select');
		select.id = "select2";
		var option = document.createElement('option');
		option.value = '';
		var optionText = document.createTextNode('------ ------ wybierz ------ ------');
		option.appendChild(optionText);
		select.appendChild(option);

		for(var key in json) {
			console.log(key);
			var option = document.createElement('option');
			option.value = json[key];
			var optionText = document.createTextNode(key);
			option.appendChild(optionText);
			select.appendChild(option);
		}
		form.appendChild(select);
	}

	// AJAX i Promise
	function ajax() {
		return new Promise(function (resolve, reject) {
			console.log('ajax');
			var XHR = new XMLHttpRequest();
			XHR.onload = function () {
				if (this.status == 200) {
					var json = this.responseText;
					resolve(json);
				} else {
					reject('NO');
				}
			};
			XHR.addEventListener('error', function () {
				return reject(xhr.statusText);
			});
			var url = './server/trasa_przystanki.php';
			XHR.open('GET', url, true);
			XHR.send();
		});
	}

	function startSelect() {
		// generuj DOM form
		var form = document.querySelector('#form');
		var p = document.createElement('p');
		form.appendChild(p.appendChild(document.createTextNode("Wybierz przystanek")));

		var div = document.getElementById("div");

		// wywołanie AJAX
		// fn odbierającej dane - addAfterAjax
		// fn obsługa SELECT - obslugaSelect
		ajax().then(function (res) {
			addAfterAjax(res);
			obslugaSelect();
			// console.log(res);
		}).catch(function (error) {
			console.error(error);
		});
	}
	startSelect();
})();




// Trasa na przystanek - SUGGEST
// ================================================================================

// ================================================================================

(function () {
	console.info('trasa na koordynaty');
	// Dane;
	var JSON_resp;
	var stopsObj;
	var licznik = 0;
	var wybrana = 0;
	var tmpCode = null;

	// Efekt mouse - over na icon
	function efektMouse(icon) {
		icon.onmouseover = function () {
			icon.style.width = '110px';
		};
		icon.onmouseout = function () {
			icon.style.width = '100px';
		};
	}

	// Generowanie mapy z trasą
	function wyznaczTrase(curr, adres) {
		console.log(curr);

		if (navigator.platform.indexOf('iPhone') != -1 || navigator.platform.indexOf('iPad') != -1 || navigator.platform.indexOf('iPod') != -1) {
			if (decodeURIComponent(curr) == 'My Location') curr = "";
			// Google Maps w iphone
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		} else if (navigator.userAgent.match(/Android/i)) {
			if (decodeURIComponent(curr) == 'My Location') curr = "";
			// if Android
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		} else {
			// if browser 
			window.open('https://maps.google.com/maps?saddr=' + curr + '&daddr=' + adres);
		}
	}

	function checkKey(evt) {
		console.log(evt);
		evt.preventDefault();

		var suggestBoxField = document.getElementById("suggestBoxField");
		var liczbaPodpowiedzi = suggestBoxField.childNodes.length;

		if (evt.keyCode == 38) console.log('arrow UP');
		if (evt.keyCode == 40) console.log('arrow down');
		if (evt.keyCode == 13) console.log('enter');

		// down 
		if (evt.keyCode == 40) {
			console.log(licznik);
			if (tmpCode == 'up' && licznik == liczbaPodpowiedzi - 1) {
				licznik = 0;
			} else {
				if (tmpCode == 'up') licznik++;
			}
			wybrana = licznik;
			suggestBoxField.childNodes[wybrana].className = 'podpowiedzihover';
			licznik++;
			if (liczbaPodpowiedzi == licznik) {
				licznik = 0;
			}
			console.log(licznik);
			tmpCode = 'down';

			// up	
		} else if (evt.keyCode == 38) {
			console.log(licznik);
			if (tmpCode == 'down' && licznik == 0) {
				licznik = liczbaPodpowiedzi - 2;
			} else {
				if (tmpCode == 'down') licznik--;
				licznik--;
			}
			if (licznik < 0) {
				licznik = liczbaPodpowiedzi - 1;
			}

			wybrana = licznik;
			suggestBoxField.childNodes[wybrana].className = 'podpowiedzihover';
			console.log(licznik);
			tmpCode = 'up';
		}

		// ENTER
		if (evt.keyCode == 13) {
			var input = document.getElementById('przystanek');
			input.value = 'Enter';
			var wybranaOpcja = suggestBoxField.childNodes[wybrana].firstChild.nodeValue;
			// console.log(wybranaOpcja);
			input.value = wybranaOpcja;
			licznik = 0;
			wybraniePodpowiedzi(wybranaOpcja);
		}

		if (evt.keyCode == 8) {
			licznik = 0;
			tmpCode = 'backspace';
		}
	}

	function wybraniePodpowiedzi(wybranyRekord) {
		console.error('wybraniePodpowiedzi');

		// ukrycie Podpowiedzi DIV | usunięcie DIV z tabelą
		var suggestBoxField = document.getElementById("suggestBoxField");
		suggestBoxField.style.visibility = 'hidden';
		var dane = document.getElementById('dane');
		if (dane) dane.parentNode.removeChild(dane);

		// wybrany rekord
		console.log('Wybrano: ' + wybranyRekord);

		var stopIdFind_1 = wybranyRekord.indexOf('[');
		// console.log(wybranyRekord.substring(stopIdFind_1));
		var stopIdFind = wybranyRekord.substring(stopIdFind_1+1);
		var stopIdFind = stopIdFind.substring(0, stopIdFind.length-1);
		console.log('stopId: ' + stopIdFind);

		// efekt mouse
		var icon = document.getElementById('icon');
		efektMouse(icon);

		for(var i in stopsObj.stops) {
			if(stopIdFind == stopsObj.stops[i].stopId) {
				console.warn('Znaleziono: ' + wybranyRekord);

				// Generowanie danych do trasy
				// skąd
				var current = "My Location"; // for browser w komputerze
				console.log('From: ' + current);
				current = encodeURIComponent(current);

				// dokąd
				var lat = stopsObj.stops[i].stopLat;
				var lon = stopsObj.stops[i].stopLon;
				//console.info('lat,lon - ' + lat + ',' + lon);

				var coord2 = lat + ',' + lon;
				console.info('To: ' + coord2);
				var coord2_url = encodeURIComponent(coord2);

				// Text - kliknij
				var kliknij = document.querySelector('#kliknij');
				kliknij.textContent = 'Kliknij ikonę mapy, aby pokazać trasę...';

				// ikona google maps - click
				icon.style.display = 'block';
				icon.style.width = '100px';

				// obj w którym jest icon
				var mapslink = document.querySelector('#maps-link_for_suggest');
				mapslink.style.height = '120px';

				var load = document.getElementById("load");
				load.innerHTML = "LOADING...<br/><img src='./img/trasa/loading.gif'/><br/>";

				setTimeout(function () {
					icon.style.width = '100px';
					load.innerHTML = "";
				}, 1000);

				icon.onclick = function () {
					console.warn('From: '+current+' To: '+coord2);
					wyznaczTrase(current, coord2_url);
				};

				// generowanie tabeli
				var div = document.createElement('div');
				div.setAttribute("id", "dane");
				div.innerHTML = '<table class="danePrzystanku"><tbody><tr><td><b>Wybrano przystanek:</b></td><td></td></tr><tr><td colspan="2">' + wybranyRekord + '</td></tr><tr><td colspan="2"><b> Koordynaty: </b></td></tr><tr><td id="coor" colspan="2">' + coord2 + '</td></tr>';
				div.innerHTML += '</tbody></table>';
				var contentSuggest = document.querySelector("#contentSuggest");
				contentSuggest.appendChild(div);

			}
		}
	}

	function showBox(evt) {

		if (evt.keyCode != 13 && evt.keyCode != 38 && evt.keyCode != 40 && evt.keyCode != 8) {
			licznik = 0;
			tmpCode == '';
		}

		if (JSON_resp != null) {

			// ukrycie Podpowiedzi DIV
			var suggestBoxField = document.getElementById("suggestBoxField");
			suggestBoxField.style.visibility = 'hidden';
			suggestBoxField.textContent = "";

			stopsObj = JSON.parse(JSON_resp);
			console.log(stopsObj);

			// input
			var input = document.getElementById('stopBus');

			// Gdy INPUT przystanek nie jest puste
			if (input.value != "") {
				console.log(input.value);

				// JSON ztm - Przystanki - wszystkie
				// ------------------------------------------
				var zm = 0;
				console.groupCollapsed('Przystanki');
				for(var i in stopsObj.stops) {
					// var number = ++zm;
					// console.log('Nr ' + number);
					var stopId   = stopsObj.stops[i].stopId;
					var stopName = stopsObj.stops[i].stopName;
					var subName  = stopsObj.stops[i].subName;
					var stopNameLong = stopName +' '+ subName +' ['+stopId+']';
					// console.info('stopNameLong - ' + stopNameLong);
					var lat = stopsObj.stops[i].stopLat;
					var lon = stopsObj.stops[i].stopLon;
					// console.info('lat,lon - ' + lat + ',' + lon);

					// spr czy przystanek z JSON ma wartość (indexOf != -1) podaną w INPUT 
					var find = stopNameLong.toLowerCase().indexOf(input.value.toLowerCase());
					// console.log(find);

					// Gdy podano w INPUT jest w JSON przystanek
					if (find != -1) {
						suggestBoxField.style.visibility = 'visible';
						input.classList.remove('error');

						// create DIV w suggestBoxField
						var tmpDiv = document.createElement('div');
						tmpDiv.className = 'podpowiedzi';
						tmpDiv.innerHTML = stopNameLong;
						suggestBoxField.appendChild(tmpDiv);

						// akcje mouse/click
						tmpDiv.onmouseover = function () {
							this.className = 'podpowiedzihover';
						};
						tmpDiv.onmouseout = function () {
							this.className = 'podpowiedzi';
						};
						// click
						tmpDiv.onclick = function () {
							document.getElementById('stopBus').value = this.innerHTML;
							console.warn(this.innerHTML);
							wybraniePodpowiedzi(this.innerHTML);
						};
					}
					// console.log('------------------');
				}
				console.groupEnd();

			}

			// Gdy wprowadzając brak szukanej woj - error dla input 
			if (suggestBoxField.childNodes.length == 0) {
				input.className = 'error';
			}
			if (input.value == '') {
				input.classList.remove('error');
			}
		}
	}


	function suggestBox() {
		console.log('suggestBox');

		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'server/ztm_stops_gen.json', true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					// console.log(xhr.response);
					JSON_resp = xhr.response;
				} else {
					console.error(xhr.status);
					document.querySelector('#error').innerHTML = 'Błąd pobrania danych';
				}
			}
		}
		xhr.onerror = function() {
			console.error('Error');
		}
		xhr.send(null);
	}



	function startSuggest() {

		var suggest = document.getElementById("suggestBoxField");
		console.info(suggest);
		console.info(document.getElementById("stopBus").offsetLeft);

		suggest.style.left = document.getElementById("stopBus").offsetLeft + "px";
		suggest.style.top = document.getElementById("stopBus").offsetTop + document.getElementById("stopBus").offsetHeight + "px";

		document.getElementById('stopBus').onkeyup = function (evt) {
			suggest.style.left = document.getElementById("stopBus").offsetLeft + "px";
			suggest.style.top = document.getElementById("stopBus").offsetTop + document.getElementById("stopBus").offsetHeight + "px";
			showBox(evt);
			checkKey(evt);
		};
		suggestBox();
	}

	startSuggest();
})();









