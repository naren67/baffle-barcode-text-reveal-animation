let text = baffle('.code');

function run(){
          text.set({
                    speed: 100,
                    characters: '█▒▒ █░█░▒ ▒▓███ █░< ▒/▓█▒ ▓██▒ ██░ ░█░▒ ▒░█<'
                });
          
                text.start()
                text.reveal(6000)
}

run()