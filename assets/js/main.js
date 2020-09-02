	var audios = [document.getElementById('audio1'), document.getElementById('audio2'), document.getElementById('audio3'), document.getElementById('audio4'), document.getElementById('audio5'), document.getElementById('audio6')];
	var botones = [document.getElementById('boton1'), document.getElementById('boton2'), document.getElementById('boton3'), document.getElementById('boton4'), document.getElementById('boton5'), document.getElementById('boton6')];
	var hee = [document.getElementById('hee1'), document.getElementById('hee2'), document.getElementById('hee3'), document.getElementById('hee4'), document.getElementById('hee5'), document.getElementById('hee6')];
	var loop = false;

	function ploop () {
		if (!loop) {

			audios[0].loop = true;
			audios[1].loop = true;
			audios[2].loop = true;
			audios[3].loop = true;
			audios[4].loop = true;
			audios[5].loop = true;
			loop = true;
			document.getElementById('loop-btn').classList.add("active");
		} else {
			
			audios[0].loop = false;
			audios[1].loop = false;
			audios[2].loop = false;
			audios[3].loop = false;
			audios[4].loop = false;
			audios[5].loop = false;
			loop = false;
			document.getElementById('loop-btn').classList.remove("active");
		}
	}


	document.getElementById('loop-btn').addEventListener('click', ploop);
		
	function reproducir(n) {
		if (n == 5) {
			nRandom = ((Math.random() * 5)).toFixed(0);
			console.log(nRandom);
			// document.getElementById('sourceHee').src = "assets/aud/hee" + nRandom;
			hee[nRandom].play();
			botones[n].classList.add('activo');
		}else {

			botones[n].classList.add('activo');
			audios[n].play();
		};
	}

	function desactivar(n) {
		if (!loop) {
			
			botones[n].classList.remove("activo");
		};
	}
	botones[0].addEventListener('click', function(){reproducir(0);});
	botones[1].addEventListener('click', function(){reproducir(1)});
	botones[2].addEventListener('click', function(){reproducir(2)});
	botones[3].addEventListener('click', function(){reproducir(3)});
	botones[4].addEventListener('click', function(){reproducir(4)});
	botones[5].addEventListener('click', function(){reproducir(5)});

	audios[0].addEventListener('ended', function(){desactivar(0)});
	audios[1].addEventListener('ended', function(){desactivar(1)});
	audios[2].addEventListener('ended', function(){desactivar(2)});
	audios[3].addEventListener('ended', function(){desactivar(3)});
	audios[4].addEventListener('ended', function(){desactivar(4)});
	audios[5].addEventListener('ended', function(){desactivar(5)});