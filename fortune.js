//Array of fortunes
const fortunes = [
    "Your socks will never go missing in the dryer again, but beware, they may start a rebellion against your other clothes.",
    "You will find true love, or a really good pizza, whichever comes first.",
    "A traffic jam will prevent you from being late to an appointment, but you will arrive with your pants inside out.",
    "You will receive a promotion at work, but your new office will have a ghost that likes to move things around.",
    "You will win the lottery, but only enough to buy a lifetime supply of bubble gum.",
    "Your pet will learn how to talk, but will only communicate in memes.",
    "You will discover the meaning of life, but no one will believe you.",
    "You will find a genie in a lamp, but he will only grant you one wish: for more wishes.",
    "Your hair will always look perfect, but you will always have a piece of spinach stuck in your teeth.",
    "You will be the life of the party, but the party will turn out to be a wake.",
    "You will discover a treasure map, but the treasure will turn out to be a box of old socks.",
    "You will find a four-leaf clover, but it will be in a field of poison ivy.",
    "You will be invited to a fancy dinner party, but you will spill your drink on the host.",
    "You will become a superhero, but your arch-nemesis will be a squirrel.",
    "You will become a famous author, but only for writing children's books about unicorns.",
    "You will find a pot of gold at the end of the rainbow, but it will be guarded by a grumpy leprechaun.",
    "You will become a famous singer, but only for singing karaoke in your shower.",
    "You will find a lost puppy, but it will be a Chihuahua that barks constantly.",
    "You will become a millionaire, but only in Monopoly money.",
    "You will win a cooking competition, but the judges will be allergic to your dish.",
    "You will become a master of martial arts, but only in your dreams.",
    "You will invent a time machine, but it will only take you back to the last time you ate a sandwich.",
    "You will become a world-renowned scientist, but only for discovering that cats can't taste sweet things.",
    "You will find a genie lamp, but the genie will be on vacation.",
    "You will be granted the power of flight, but only when you're asleep.",
    "You will be able to talk to animals, but they will all be gossips.",
    "You will win a lifetime supply of ice cream, but you will develop lactose intolerance.",
    "You will become a famous actor, but only for playing the same character in every movie.",
    "You will be able to teleport, but only to places you've already been to.",
    "You will win a Nobel Prize, but it will be for inventing a machine that turns water into mayonnaise.",
    "You will become a famous artist, but only for painting portraits of potatoes.",
    "You will find a magical lamp, but it will only grant you wishes for other people.",
    "You will become a famous athlete, but only for playing a sport that doesn't exist yet.",
    "You will be able to speak any language, but only if you're speaking to a tree.",
    "You will win a million dollars, but you will have to spend it all in one day.",
    "You will become a famous comedian, but only for telling dad jokes.",
    "Your car will never break down again, but you will have to make room for a family of friendly raccoons who will decide to move in with you.",
    "Your jokes will always be hilarious, but you will have to explain them to people every time.",
    "You will become a master chef, but only for cooking foods that no one else likes.",
    "You will win a game show, but the prize will be a lifetime supply of toenail clippings.",
    "You will become a famous actor, but only for playing extras in every movie.",
    "Your dance moves will be envied by all, but they will be forever known as \"The Awkward Shuffle.\"",
    "You will become a master of disguise, but only when no one is looking.",
    "You will win a marathon, but only because everyone else gets lost on the way.",
    "Your jokes will always be perfectly timed, but only in your own head.",
    "You will become a famous inventor, but only for creating a machine that turns vegetables into candy (that tastes like vegetables).",
    "You will discover a hidden talent for playing the kazoo, but it will be the only instrument you can play.",
    "You will become a fashion icon, but only for wearing clothes that no one else understands.",
    "You will win the lottery, but only in a dream.",
    "Your singing voice will be angelic, but only when you're in the shower.",
    "You will find a secret treasure, but it will be a treasure chest filled with old socks.",
    "You will become a world-class athlete, but only for playing hopscotch.",
    "You will invent a new language, but no one will be interested in learning it.",
    "You will become a famous writer, but only for writing terrible poetry.",
    "You will find a magic wand, but it will only work on vegetables.",
    "You will be able to speak every language in the world, but no one will be able to understand you.",
    "You will become a famous musician, but only for playing the triangle.",
    "You will discover a new planet, but it will be inhabited by alien cats who will only communicate in meows.",
    "You will become a famous chef, but only for cooking foods that are so spicy, they are inedible.",
    "You will win a Nobel Prize, but it will be for discovering the cure for boredom.",
    "You will become a famous comedian, but only in a parallel universe where people have no sense of humor.",
    "You will discover a new species of dinosaur, but it will be so tiny that it can fit in your pocket.",
    "You will be able to time travel, but only to the moments when you forgot to turn off the stove.",
    "You will become a famous artist, but only for painting portraits of potatoes.",
    "You will become a famous politician, but only for advocating for the rights of robots.",
    "You will invent a new dance craze, but it will be called \"The Wormy Shuffle.\"",
    "You will become a famous athlete, but only for playing a sport that doesn't exist yet.",
    "You will find a genie lamp, but the genie will only grant wishes for socks.",
    "You will be able to read minds, but only when people are thinking about cheese.",
    "You will become a famous actor, but only for playing characters who wear paper bags over their heads.",
    "You will invent a machine that can predict the future, but it will always be wrong.",
    "You will be able to fly, but only two inches off the ground.",
    "You will become a famous singer, but only for singing songs about dental hygiene.",
    "You will win a lifetime supply of bubble wrap, but it will all be popped.",
    "You will become a famous scientist, but only for discovering that the earth is actually flat.",
    "You will become a famous chef, but only for cooking meals that are so healthy, they taste terrible.",
    "You will discover a hidden talent for juggling, but only with one hand.",
    "You will be able to talk to animals, but they will all be too busy to listen.",
    "You will become a famous writer, but only for writing books about the history of paper clips.",
    "You will win a trip to outer space, but only to clean the windows of the space shuttle.",
    "You will invent a machine that can make people instantly happy, but it will run on broccoli.",
    "You will become a famous magician, but only for pulling live chickens out of your hat.",
    "You will be able to teleport, but only to places you've never heard of.",
    "You will win a lifetime supply of chocolate, but it will all be sugar-free.",
    "You will become a famous athlete, but only for playing a sport that requires wearing a tutu.",
    "You will become a famous fashion designer, but only for creating clothes made entirely out of cheese.",
    "You will be able to talk to ghosts, but they will all have terrible jokes.",
    "You will invent a new type of vehicle, but it will only work on waterlogged land.",
    "You will become a famous musician, but only for playing the cowbell.",
    "You will win a lifetime supply of pizza, but it will all be topped with anchovies.",
    "You will become a famous filmmaker, but only for making documentaries about the history of lint.",
    "You will become a famous photographer, but only for taking pictures of inanimate objects.",
    "You will win a trip to a tropical paradise, but only during monsoon season.",
    "You will become a famous chef, but only for cooking meals that are impossible to pronounce.",
    "You will be able to talk to plants, but they will only want to gossip about other plants.",
    "You will discover a hidden talent for extreme ironing, but only on Mondays.",
    "You will become a famous author, but only for writing books about the benefits of flossing.",
    "You will win a lottery jackpot, but the prize will be paid out in pennies.",
    "You will invent a time machine, but it will only take you back to the moment before you sneezed.",
    "You will become a famous painter, but only for painting portraits of your pet rock.",
    "You will be able to speak to ghosts, but they will all be angry at you for disturbing their peace.",
    "You will become a famous actor, but only for playing the role of a talking sandwich.",
    "You will win a lifetime supply of candy, but it will all be sugar-free.",
    "You will discover a new planet, but it will be inhabited by aliens who only communicate through interpretive dance.",
    "You will become a famous athlete, but only for playing a sport that involves wearing a giant inflatable suit.",
    "You will invent a machine that can create anything out of thin air, but it will only produce stale bread.",
    "You will become a famous musician, but only for playing the kazoo in public restrooms.",
    "You will win a trip around the world, but you will have to travel on a unicycle.",
    "You will become a famous scientist, but only for discovering that dogs can speak perfect English (but they don't want to).",
    "You will be able to talk to trees, but they will only want to talk about the weather.",
];

//Select random fortune function
function randomFortune() {
    return fortunes[Math.floor(Math.random()*fortunes.length)];
}


//Like button
function likeClick() {
    const element = document.getElementById("like");
    element.innerHTML = "Liked!";
}

function likeReset() {
    const element = document.getElementById("like");
    element.innerHTML = "Like";
}

//Open Another button
function refreshFortune() {
    likeReset();
    const element = document.getElementById("refresh");

}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery user';
}


window.onload = function constructor() {
    const playerNameEl = document.querySelector('.nameLocation');
    playerNameEl.textContent = this.getPlayerName();
}


/*async reset() {
    this.updateScore('--');
}*/


/*saveScore(score) {
    const userName = this.getPlayerName();
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
    scores = JSON.parse(scoresText);
    }
    scores = this.updateScores(userName, score, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
}*/

/*updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
    if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
    }
    }

    if (!found) {
    scores.push(newScore);
    }

    if (scores.length > 10) {
    scores.length = 10;
    }

    return scores;
}*/






