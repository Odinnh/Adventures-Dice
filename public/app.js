document.addEventListener('DOMContentLoaded', () => {
    let game = {}
    
    const diceFaces=  {
        w: `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="wizard">
                <path d="M496 464h-35.5l-81.32-200.17c-7.21-17.73-7.99-37.64-2.21-55.94L442.67 0 223.83 131.92c-27.61 16.64-49.46 42.15-62.37 72.8L52.22 464H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-256 0l10.67-21.33L304 416l-53.33-26.67L224 336l-26.67 53.33L144 416l53.33 26.67L208 464H104.31l101.38-240.64c.99-2.36 2.34-4.5 3.49-6.77L224 224l16 32 16-32 32-16-32-16-8.93-17.86c.53-.34 1-.79 1.54-1.11l110-66.31-27.4 86.71c-9.15 28.96-7.91 60.38 3.51 88.47l6.86 16.89L320 288l-16-32-16 32-32 16 32 16 16 32 16-32 25.09-12.55L408.69 464H240z" class=""></path>
            </svg>`,
        v: `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="viking">
                <path d="M512 176.38c-3.73-68.04-31.19-128.82-73.55-171.67-3.19-3.23-7.04-4.7-10.83-4.7-7.08 0-13.96 5.14-16.01 13.66-4.69 19.52-30.54 106.3-131.61 106.3V80c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v39.96c-100.01 0-126.17-86.81-130.85-106.3C99.1 5.15 92.21 0 85.13 0c-3.79 0-7.64 1.48-10.83 4.7C28.71 50.83 0 117.62 0 192c0 74.38 28.71 141.17 74.31 187.3 3.19 3.22 7.04 4.7 10.83 4.7 7.08 0 13.96-5.14 16.01-13.66 4.69-19.5 30.84-106.3 130.85-106.3V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V264.03c101.07 0 126.91 86.78 131.61 106.3 2.05 8.52 8.93 13.66 16.01 13.66 3.79 0 7.64-1.48 10.83-4.7 42.36-42.85 69.82-103.63 73.55-171.67L496.73 192 512 176.38zM76.88 303.53C58.27 270.65 48.07 231.96 48.07 192c0-39.97 10.2-78.65 28.81-111.53 31.76 53.46 84.2 87.5 155.12 87.5v48.07c-70.69-.01-123.23 33.82-155.12 87.49zm385.16-78.3c-3.96 28.21-12.87 54.77-26.17 78.31-31.48-53.01-83.46-87.51-155.87-87.51v-48.07c71.15 0 123.69-33.33 155.87-87.5 13.29 23.54 22.21 50.1 26.17 78.31L429.56 192l32.48 33.23z"></path>
            </svg>`,
        p: `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="paladin">
                <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" class=""></path>
            </svg>`,
        r: `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="rogue">
                <path d="M344 96H216V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80H40c-22.09 0-40 17.91-40 40s17.91 40 40 40c19.25 0 34.57-13.88 38.38-32H112v264.05l63.36 95.04c3.96 5.94 10.3 8.91 16.64 8.91s12.68-2.97 16.64-8.91L272 408.05V144h33.62c3.81 18.12 19.13 32 38.38 32 22.09 0 40-17.91 40-40s-17.91-40-40-40zM224 393.52l-32 48-32-48V144h64v249.52z"></path>
            </svg>`,
        h: `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hunter">
                <path d="M145.78 286.65l33.94-33.9-99.54-99.42c33.83-24.46 74.26-37.85 116.85-37.85 34.01 0 66.7 8.5 95.73 24.37l34.96-34.91c-38.88-24.21-83.72-37.4-130.69-37.4-55.44 0-107.96 18.26-151.12 51.56l-7.28-7.27c-6.25-6.24-16.38-6.24-22.63 0l-11.31 11.3c-6.25 6.24-6.25 16.36 0 22.6l141.09 140.92zM493.2.3L364.62 25.98c-12.29 2.45-16.88 17.6-8.02 26.45l34.47 34.42-250.63 250.33-49.7-16.55c-1.93-.64-12.39-3.68-21.03 4.96l-63.68 63.6c-10.8 10.79-6.46 29.17 8.04 33.99l55.65 18.53 18.55 55.58c2.99 8.97 11.19 14.05 19.57 14.05 5.14 0 10.36-1.92 14.47-6.02l63.67-63.59a20.51 20.51 0 0 0 4.97-21.01l-16.57-49.64L425 120.75l34.46 34.42c8.92 8.91 24.04 4.2 26.48-8.01l25.72-128.43C514.02 7 503.46-1.74 493.2.3zM116.27 454.85l-14.93-44.72-44.78-14.91 32.92-32.88 44.78 14.91 14.93 44.72-32.92 32.88zM455.64 94.86L417 56.26l48.3-9.65-9.66 48.25zm-48.57 89l-34.96 34.91c16.19 29.21 24.9 62.14 24.9 96.45 0 42.53-13.42 82.9-37.91 116.69L258.9 331.83l-33.94 33.9 141.75 141.58c6.25 6.24 16.38 6.24 22.62 0l11.31-11.3c6.25-6.24 6.25-16.36 0-22.6l-7.28-7.27c33.35-43.1 51.64-95.55 51.64-150.92.01-47.23-13.36-92.33-37.93-131.36z"></path>
            </svg>`,
        k: `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="knight">
                <path d="M304 176c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm196.98 18.97l-56.5-17.91c-12.21-55.61-56.4-99.15-112.42-110.23L313.05 10.8c-4.92-14.5-17.46-14.37-22.08.22l-17.91 56.5c-55.61 12.21-99.15 56.4-110.23 112.42l-56.03 19.01c-14.5 4.92-14.37 17.46.22 22.08l56.5 17.91c4.21 19.18 12.29 36.81 23.31 52.29L3.51 474.54c-4.69 4.69-4.69 12.29 0 16.97l16.97 16.97c4.69 4.69 12.29 4.69 16.97 0l183.32-183.32c16.26 11.57 34.87 19.99 55.16 24l19.01 56.03c4.92 14.5 17.46 14.37 22.08-.22l17.91-56.5c55.61-12.21 99.15-56.4 110.23-112.42l56.03-19.01c14.51-4.91 14.38-17.45-.21-22.07zM304 304c-52.94 0-96-43.07-96-96 0-52.94 43.06-96 96-96s96 43.06 96 96c0 52.93-43.06 96-96 96z"></path>
            </svg>`,
    }

    const socket = io()
    const rollBtn = document.querySelector('#diceThrow')
    const dice = document.querySelectorAll('.dice')

    socket.on('connection', setup())

    function setup(){
        socket.emit('get-state')
    }
    
    socket.on('set-state', newState => {
        game = newState
        render()
    })
    socket.on('anim-roll', ()=>{rollDice(game.state.heldDice, 'get-state')})

    rollBtn.addEventListener('click', () => { 
        socket.emit('anim-roll')
        rollDice(game.state.heldDice, 'set-state') 
    })

    dice.forEach(die => {
        die.addEventListener('click', () => {
            if (die.getAttribute('data-selected') == 'true') {
                die.setAttribute('data-selected', '')
                game.state.heldDice.splice(game.state.heldDice.indexOf(die.id), 1)
            } else {
                die.setAttribute('data-selected', 'true');
                game.state.heldDice.push(die.id)

            }
            // console.log(game.state.heldDice)
        })

    })

    function rollDice(excluded, request) {
        startRolling(excluded, request)
        render();
    }
    
    function startRolling(excluded, request){
        let times = 0;
        let rolling = setInterval(() => {
            diceAnim(excluded)
            times++
            if (times == 10) {
                clearInterval(rolling)
                socket.emit(request, game)
            }
            render();
        }, 1000 / 10)
    }
    function diceAnim(excluded) {
        Object.keys(game.state.dice).forEach(entry => {
            if (excluded.includes(entry)) return
            let die = ''
            switch (Math.floor(Math.random() * 6)) {
                case 0:
                    die = 'v'
                    game.state.dice[entry] = die
                    return
                case 1:
                    die = 'w'
                    game.state.dice[entry] = die
                    return
                case 2:
                    die = 'p'
                    game.state.dice[entry] = die
                    return
                case 3:
                    die = 'r'
                    game.state.dice[entry] = die
                    return
                case 4:
                    die = 'h'
                    game.state.dice[entry] = die
                    return
                case 5:
                    die = 'k'
                    game.state.dice[entry] = die
                    return
            }
            socket.emit('get-state');

        })
    }
    
    function render() {
        Object.keys(game.state.dice).forEach((entry, index) => {
            dice[index].innerHTML = diceFaces[game.state.dice[entry]]
        })
    }
    
})
