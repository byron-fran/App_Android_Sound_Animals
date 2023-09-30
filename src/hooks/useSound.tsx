/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import Sound from 'react-native-sound';
const useSound = () => {

    const soundAguila = new Sound('agila.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundArdilla = new Sound('ardilla.wav', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + soundArdilla.getDuration() + 'number of channels: ' + soundArdilla.getNumberOfChannels());
        // Play the sound with an onEnd callback
    });
    const soundBurro = new Sound('burro.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
      //Fin del sonido del animal
    const soundCaballo = new Sound('caballo.wav', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundCabrito = new Sound('cabra.wav', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundChivo = new Sound('chivo.wav', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundCoche = new Sound('chancho.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundCuye = new Sound('cuye.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundElefante = new Sound('elefante.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundGallo = new Sound('gallo.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundJuguar = new Sound('juaguar.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundJirafa = new Sound('jirafa.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundLeon = new Sound('leon.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundLobo = new Sound('lobo.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundOso = new Sound('oso.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundPaloma = new Sound('paloma.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundPantera = new Sound('pantera.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundPavo = new Sound('pavo.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundPerro = new Sound('perro.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundPinguino = new Sound('pinguino.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundPollo = new Sound('pollito.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundSerpiente = new Sound('serpiente.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundTigre = new Sound('tigre.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    // //Fin del sonido del animal
    const soundToro = new Sound('toro.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundVaca = new Sound('vaca.wav', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    const soundMono = new Sound('mono.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundFoca = new Sound('foca.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundGato = new Sound('gato.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });
    //Fin del sonido del animal
    const soundPajaro = new Sound('pajaro.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            console.log('no se pudo cargar el audio');
            return;
        }
    });


    const handleArdilla = () => {
        soundArdilla.play();
    };
    const handleAguila = () => {
        soundAguila.play();
    };
    const handleCaballo = () => {
        soundCaballo.play();
    };
    const handleCabrito = () => {
        soundCabrito.play();
    };

    const handleChivo = () => {
        soundChivo.play();
    };
    const handleCochito = () => {
        soundCoche.play();
    };
    const handleCuye = () => {
        soundCuye.play();
    };

    const handleElefante = () => {
        soundElefante.play();
    };
    const handleBurro = () => {
        soundBurro.play();
    };
    const handleGallo = () => {
        soundGallo.play();
    };
    const handleJaguar = () => {
        soundJuguar.play();
    };
    const handleJirafa = () => {
        soundJirafa.play();
    };
    const handleLeon = () => {
        soundLeon.play();
    };
    const handleLobo = () => {
        soundLobo.play();
    };
    const handleOso = () => {
        soundOso.play();
    };

    const handlePaloma = () => {
        soundPaloma.play();
    };
    const handlePantera = () => {
        soundPantera.play();
    };
    const handlePavo = () => {
        soundPavo.play();
    };
    const handlePerro = () => {
        soundPerro.play();
    };
    const handlePinguino = () => {
        soundPinguino.play();
    };
    const handlePollo = () => {
        soundPollo.play();
    };
    const handleSerpiente = () => {
        soundSerpiente.play();
    };
    const handleTigre = () => {
        soundTigre.play();
    };
    const handleToro = () => {
        soundToro.play();
    };
    const handleVaca = () => {
        soundVaca.play();
    };

    const handlerMono = () => {

        soundMono.play();
    };
    const handlerFoca = () => {

        soundFoca.play();
    };
    const handlerGato = () => {

        soundGato.play();
    };
    const handlerPajaro = () => {

        soundPajaro.play();
    };

  return {
    handleAguila,
    handleArdilla,
    handleBurro,
    handleCaballo,
    handleCabrito,
    handleChivo,
    handleCochito,
    handleCuye,
    handleElefante,
    handleGallo,
    handleJaguar,
    handleJirafa,
    handleLeon,
    handleLobo,
    handleOso,
    handlePaloma,
    handlePantera,
    handlePavo,
    handlePerro,
    handlePollo,
    handlePinguino,
    handleSerpiente,
    handleTigre,
    handleToro,
    handlerMono,
    handleVaca,
    handlerFoca,
    handlerGato,
    handlerPajaro,
  };
};

export default useSound;
