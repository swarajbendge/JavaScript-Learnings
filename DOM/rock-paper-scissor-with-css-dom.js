let score = JSON.parse(localStorage.getItem('score'))
        || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScore();


        function playGame(playerMove) {
            const randomNum = Math.random();
            let compMove = '';
            if(randomNum >= 0 && randomNum < 1 / 3){
                compMove = 'Rock';
            }
            else if(randomNum >= 1 / 3 && randomNum < 2 / 3){
                compMove = 'Paper';
            }
            else if(randomNum >= 2 / 3 && randomNum < 1){
                compMove = 'scissors';
            }

            let result = '';

            if(playerMove === compMove){
                result = 'Tie';
            }
            else if(playerMove === 'Rock' && compMove === 'scissors' ||
                    playerMove === 'Paper' && compMove === 'Rock' ||
                    playerMove === 'scissors' && compMove === 'Paper'){
                    result = 'You Win';
            }
            else{
                result = 'You Lose';
            }
            
            if(result === 'You Win'){
                score.wins += 1;
            } else if(result === 'You Lose'){
                score.losses += 1;
            } else if(result === 'Tie'){
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScore();

            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector('.js-moves')
            .innerHTML = `You
        <img src="icons/${playerMove}-emoji.png" class="move-icon">
        <img src="icons/${compMove}-emoji.png" class="move-icon">
        Computer`;
        }

        function updateScore(){
            document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }
