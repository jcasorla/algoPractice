// War has broken out in California between the humans and the zombies. Each side has an army. If a human kills a zombie, the zombie stays dead. If a zombie kills a human, the human returns to life as a zombie (and becomes a member of the zombie army). There is no friendly fire. 

// The battle takes place over many rounds and continues until one army is completely annihilated. 

// Each army has a “kill ratio” : the number of enemies that each member of this army kills per round. So if a 1000-member human army has a kill ratio of 0.1, they will kill 100 zombies in that round. Assume that all deaths/conversions take place at the end of the round. 

// 1. Given the army sizes and kill ratios for each army, write a function to return which team wins and how many rounds it takes for them to win. 

// 2. We’re now capacity planning team for the human army. If we know the size of the zombie army and the kill ratios of each army, then let's win this battle efficiently. What is the minimum number of humans required to defeat the zombies? No pure mathematical solution required (or desired!).

// 100 zombies kr .1
// 1000 humans kr.1 

// f = humans * hkill =(hkill  )


//+++++++++++++++++++++++++++++++++++

// 1000 * 0.1 = 100
// no fixed number for armies

// function (zombies,humans,hkill,zkill)
// rounds =2
// revivedH=0 -> 10->0->10
// 100,.01 = 10
// 100,.01 = 10
// humans =100 ->90 ->80
// zombies = 100 ->90->100

// while(zombies  >=0|| humans >=0)	
// 	revivedH = zombies * zkill;
	

// 	zombies = humans * hkill;
// 	zombie += revivedH;
// humans -= revivedH;
// revivedH = 0

function zombieWars(zombies,humans,hkill,zkill){
	let rounds = 1;
	let revivedH = 0;
	let res = [];
	
	while(zombies >0 && humans >0){
		revivedH = zombies * zkill;
		zombies -= humans * hkill;
		zombies += revivedH;
		humans -= revivedH;
		rounds++;
		
	}
	let winner = zombies > humans ? 'zombies' : 'humans';
	res.push(winner);
	res.push(rounds);
	return res;
}

console.log(zombieWars(100,1000,0.1,0.1));
// letsWin(100,0.1,0.1);
// function letsWin(zombies,hkill,zkill){
// 	let humans = zombies;
// 	let win=zombieWars(zombies,humans,hkill,zkill)[0];
// 	while(win==='zombies');{
		
// 		win=zombieWars(zombies,humans,hkill,zkill)[0];
// 		console.log(win);
// 		console.log(humans);
// 		humans++;
		

// 	}

// 	console.log(win + ' ' + humans);
// }