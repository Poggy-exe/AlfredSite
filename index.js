function clickGames() {
    var gamesTable = document.getElementById('gamestableid');
    var funTable = document.getElementById('funtableid')
    var gamesBtn = document.getElementById('gamesbtn')
    var funBtn = document.getElementById('funbtn')
    var animalsBtn = document.getElementById('animalsbtn')
    var animalsTable = document.getElementById('animalstableid')
    var economyBtn = document.getElementById('economybtn')
    var economyTable = document.getElementById('economytableid')
    


    gamesTable.style.display = 'block'  
    funTable.style.display = 'none'
    gamesTable.style.bottom = '640px'
    gamesBtn.style.backgroundColor = '#ff867f'
    funBtn.style.backgroundColor = '#181a1b'
    animalsBtn.style.backgroundColor = '#181a1b'
    animalsTable.style.display = 'none'
    economyTable.style.display = 'none'
    economyBtn.style.backgroundColor = '#181a1b'
}

function clickFun() {
    var gamesTable = document.getElementById('gamestableid');
    var funTable = document.getElementById('funtableid');
    var funBtn = document.getElementById('funbtn')
    var gamesBtn = document.getElementById('gamesbtn')
    var animalsBtn = document.getElementById('animalsbtn')
    var animalsTable = document.getElementById('animalstableid')
    var economyBtn = document.getElementById('economybtn')
    var economyTable = document.getElementById('economytableid')
    economyTable.style.display = 'none'
    economyBtn.style.backgroundColor = '#181a1b'

    funTable.style.display = 'block'
    gamesTable.style.display = 'none'
    gamesTable.style.bottom = '1105px'
    funBtn.style.backgroundColor = '#ff867f'
    gamesBtn.style.backgroundColor = '#181a1b'
    animalsBtn.style.backgroundColor = '#181a1b'
    animalsTable.style.display = 'none'

}

function clickAnimals() {
    var gamesTable = document.getElementById('gamestableid');
    var funTable = document.getElementById('funtableid');
    var funBtn = document.getElementById('funbtn')
    var gamesBtn = document.getElementById('gamesbtn')
    var animalsBtn = document.getElementById('animalsbtn')
    var animalsTable = document.getElementById('animalstableid')
    var economyBtn = document.getElementById('economybtn')
    var economyTable = document.getElementById('economytableid')

    funTable.style.display = 'none'
    gamesTable.style.display = 'none'
    funBtn.style.backgroundColor = '#181a1b'
    gamesBtn.style.backgroundColor = '#181a1b'
    animalsBtn.style.backgroundColor = '#ff867f'
    animalsTable.style.display = 'block'
    economyTable.style.display = 'none'
    economyBtn.style.backgroundColor = '#181a1b'
}

function clickEconomy() {
    var gamesTable = document.getElementById('gamestableid');
    var funTable = document.getElementById('funtableid');
    var funBtn = document.getElementById('funbtn')
    var gamesBtn = document.getElementById('gamesbtn')
    var animalsBtn = document.getElementById('animalsbtn')
    var animalsTable = document.getElementById('animalstableid')
    var economyBtn = document.getElementById('economybtn')
    var economyTable = document.getElementById('economytableid')

    funTable.style.display = 'none'
    gamesTable.style.display = 'none'
    funBtn.style.backgroundColor = '#181a1b'
    gamesBtn.style.backgroundColor = '#181a1b'
    animalsBtn.style.backgroundColor = '#181a1b'
    animalsTable.style.display = 'none'
    economyTable.style.display = 'block'
    economyBtn.style.backgroundColor = '#ff867f'
}