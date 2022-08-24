let lastUpdate = "8/23/2022"
const data = [
    {
        name: "1v1.lol",
        id: "1v1.lol",
        genre: "Building Simulator",
        description: "1v1.lol is an online building simulator & third person shooting game. Battle royale, build fight, zone wars and more game modes to enjoy!",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-1v1-lol",
        img: "Images/1v1-lol.png",
        file_based: false,
        publisher: "JustPlay.LOL",
        controls: [
            "Slide Left Click - Aim",
        ]
    },
    {
        name: "2 Player Games",
        id: "2_player_games",
        genre: "2 Player",
        description: "2 Player Games is a 2 player shooter game that you and your friend can play. You earn coins from playing which can then be used to buy other charaters with different guns and rarities.",
        link: "Game Files/2 Player Games/index.html",
        img: "Images/2_player_games.png",
        file_based: true,
        publisher: "Scratch - Llxma909",
        controls: [
            "Player 1: WAD - Movement, S - Shoot",
            "Player 2: Up/Left/Right Arrow - Movement, Down Arrow - Shoot",
            "R - Menu"
        ]
    },
    {
        name: "99 Balls",
        id: "99balls",
        genre: "Arcade",
        description: "In this game, you're trying to destroy all the balls before they reach the bottom. It may sound simple but it gets harder and harder as you reach higher levels.",
        link: "https://files.acticdn.com/278374/22226/index.html",
        img: "Images/99_balls.png",
        file_based: false,
        publisher: "GameSnacks",
        controls: [
            "Slide Left Click - Aim",
        ]
    },
    {
        name: "2048",
        id: "2048",
        genre: "Puzzle",
        description: "In this game, you're trying to slide the number tiles on the grid to combine them to create a tile with the number 2048. Can you go beyond 2048?",
        link: "Game Files/2048/index.html",
        img: "Images/2048.png",
        file_based: true,
        publisher: "Solebon LLC",
        controls: [
            "Arrow Keys/WASD - Move tiles",
        ]
    },
    // {
    //     name: "Adventure Capitalist",
    //     id: "adventure_capitalist",
    //     genre: "Incremental",
    //     description: "Adventure Capitalist is a game where you can form your own multi-national conglomerate to create a world-wide, monopolistic economy.",
    //     link: "https://than1089.github.io/adventure-capitalist/",
    //     // link: "Game Files/Adventure Capitalist/public/index.html",
    //     img: "Images/adventure_capitalist.png",
    //     file_based: false,
    //     publisher: "Hyper Hippo Productions",
    //     controls: [
    //         "Right Click - Buy Items",
    //     ]
    // },
    {
        name: "Airman Challenge",
        id: "airman_challenge",
        genre: "Adventure",
        description: "See if you can complete the type of missions Airmen carry out everyday with this interactive game that puts you in the muddle of action around the world.",
        link: "https://www.airforce.com/airmanchallenge/",
        img: "Images/airman_challenge.png",
        file_based: false,
        publisher: "U.S. Air Force",
        controls: [
            "idk the controls to this game",
        ]
    },
    {
        name: "Among Us",
        id: "among_us",
        genre: "Mystery",
        description: "sus",
        link: "Game Files/Among Us/index.html",
        img: "Images/among_us.png",
        file_based: true,
        publisher: "kevin.games",
        controls: [
            "WASD/Arrow Keys - Movement",
            "Q - Kill",
            "E - Vent",
            "F - Sabotage",
        ]
    },
    {
        name: "Appel",
        id: "appel",
        genre: "Platformer",
        description: "It's your job to help Appel navigate through each level, avoiding danger, and collecting as many golden apples as you can before finally facing Micro Manager and restoring peace to the world.",
        link: "Game Files/Appel/index.html",
        img: "Images/appel.png",
        file_based: true,
        publisher: "Scratch - griffpatch",
        controls: [
            "Arrow Keys/WASD/Spacebar - Movement",
        ]
    },
    {
        name: "Bacon May Die",
        id: "bacon_may_die",
        genre: "Action",
        description: "In this game you are a pig fighting your way through hordes of bacon-hungry enemies.",
        link: "https://tybsi.com/games/bacon-may-die/index.html",
        img: "Images/bacon_may_die.png",
        file_based: false,
        publisher: "tybsi.com",
        controls: [
            "Arrow Keys - Movement",
            "Left/Right Arrow Keys - Attack",
            "Hold Left/Right Arrow Key - Long Range Attack",
        ]
    },
    {
        name: "Ball Blast",
        id: "ball_blast",
        genre: "Arcade",
        description: "In this game you must destroy all the balls without one hitting you. You can then upgrade and unlock new guns with coins that you get.",
        link: "Game Files/Ball Blast/index.html",
        img: "Images/ball_blast.png",
        file_based: true,
        publisher: "Scratch - AnimationsScratch",
        controls: [
            "Hold Right Click - Swipe & Shoot",
        ]
    },
    {
        name: "Basketball Stars",
        id: "basketball_stars",
        genre: "2 Player / Sports",
        description: "In this game you can play solo or with a friend as a varity of legendary basketball players.",
        link: "Game Files/Basketball Stars/index.html",
        img: "Images/basketball_stars.png",
        file_based: true,
        publisher: "Madpuffers",
        controls: [
            "Player 1: WASD - Movement, A (Jump) - Shoot",
            "V - Special Item, B - Steal",
            "Player 2: Arrow Keys - Movement, Up Arrow (Jump) - Shoot",
            "K - Special Item, L - Steal",
        ]
    },
    {
        name: "Betrayal.io",
        id: "betrayal.io",
        genre: "Mystery",
        description: "Betrayal.io is a multiplayer social deduction game like Among Us. sussy game 2.0",
        link: "https://betrayal.io/",
        img: "Images/betrayal-io.png",
        file_based: false,
        publisher: "End Game Interactive, Inc.",
        controls: [
            "WASD/Arrow Keys - Movement",
            "Spacebar/E - Interact",
            "M - Map",
        ]
    },
    {
        name: "Binding of Isaac",
        id: "binding_of_isaac",
        genre: "Rouge-like",
        description: "The Binding of Isaac is a randomly generated action RPG shooter with heavy Rouge-like elements.",
        link: "https://advanced-channeler.02.gz-associates.com/?s=%3furl%3D%252Fflash%252Fbinding-of-isaac.swf&t=tam-flash-ruffle",
        img: "Images/binding_of_isaac.png",
        file_based: false,
        publisher: "Headup Games",
        controls: [
            "WASD - Movement",
            "Arrow Keys/Mouse - Shoot",
            "Space - Use Current Item",
            "Q - Use Single Item",
            "Shift/E - Place Bomb",
            "R - Restart",
            "Left CTRL - Drop Equiped Trinket"
        ]
    },
    {
        name: "Bloxorz",
        id: "bloxorz",
        genre: "Puzzle",
        description: "Bloxorz is a puzzle game that tests your logic and patience. The goal of the game is to put the bloxorz to the destination by rolling it.",
        link: "Game Files/Bloxorz/index.html",
        img: "Images/bloxorz.png",
        file_based: true,
        publisher: "addictinggames.com",
        controls: [
            "Arrow Keys - Movement",
        ]
    },
    {
        name: "Bowmasters",
        id: "bowmasters",
        genre: "Archery",
        description: "Bowmasters is one of the top archery arcade games in the world. Play multiplayer or solo with bowmen.",
        link: "https://html5.iclouds.io/archery-master/?ref",
        img: "Images/bowmasters.png",
        file_based: false,
        publisher: "iclouds.io",
        controls: [
            "Hold Right Click - Aim & Control Power",
            "Release Right Click - Shoot",
        ]
    },
    {
        name: "BoxBob",
        id: "boxbob",
        genre: "Puzzle",
        description: "This is a challenging puzzle game with 16 levels where you play as Bob moving boxes to the correct spot.",
        link: "https://games.engineering.com/boxbob/index.html",
        img: "Images/boxbob.png",
        file_based: false,
        publisher: "engineering.com",
        controls: [
            "WASD/Arrow Keys - Movement",
            "U - Undo",
            "R - Restart",
        ]
    },
    {
        name: "Burrito Bison",
        id: "burrito_bison",
        genre: "Adventure",
        description: "In this game you must launch Burrito Bison as far as you can, bouncing, flying, and soaring through the skies to fend off the invasion of gummies.",
        link: "https://tybsi.com/games/burrito-bison-launcha-libre/index.html",
        img: "Images/burrito_bison.png",
        file_based: false,
        publisher: "tynsi.com",
        controls: [
            "Hold Right Click - Aim & Power",
            "Release Right Click - Release"
        ]
    },
    {
        name: "Cannon Basketball 4",
        id: "cannon_basketball_4",
        genre: "Sports",
        description: "Cannon Basketball 4 is a sports game where you launch basketballs as you try to solve puzzles, collect stars, and make baskets.",
        link: "Game Files/Cannon Basketball 4/index.html",
        img: "Images/cannon_basketball_4.png",
        file_based: true,
        publisher: "Armor Games",
        controls: [
            "Drag Mouse - Aim & Power",
            "Right Click - Shoot"
        ]
    },
    {
        name: "Chess",
        id: "chess",
        genre: "Classic",
        description: "Chess is one of the oldest and most popular board games. It is played by two opponents, this game also includes an AI, where the objective of the game is to capture the opponent's king.",
        link: "Game Files/Chess/index.html",
        img: "Images/chess.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "1st Right Click - Select Piece",
            "2nd Right Click - Move Piece"
        ]
    },
    {
        name: "Chrome Dinosaur",
        id: "chrome_dinosaur",
        genre: "Classic",
        description: "In this game you need to guide a pixelated Tyrannosaurus rex across a side-scrolling landscape, avoiding obstacles to achieve a higher score.",
        link: "Game Files/Chrome Dinosaur/index.html",
        img: "Images/chrome_dinosaur.png",
        file_based: true,
        publisher: "Google",
        controls: [
            "Spacebar/Up Arrow - Jump",
            "Down Arrow - Duck"
        ]
    },
    {
        name: "Connect 4",
        id: "connect_4",
        genre: "Classic",
        description: "Connect 4 is a tic-tac-toe-like two-player game in which players alternately place pieces on a board to acheive 4 in-a-row.",
        link: "Game Files/Connect 4/index.html",
        img: "Images/connect_4.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Right Click - Place Piece in Row",
            "Right Click - Play Again"
        ]
    },
    {
        name: "Cookie Clicker",
        id: "cookie_clicker",
        genre: "Incremental",
        description: "Cookie Clicker is an incremental web-broswer game where the goal is to produce as many cookies as you can by clicking on the big cookie and buying items.",
        link: "Game Files/Cookie Clicker/index.html",
        img: "Images/cookie_clicker.png",
        file_based: true,
        publisher: "Orteil",
        controls: [
            "Right Click - Click Cookie/Buy Items",
            "Hold CTRL - Show Bulk of 10",
            "Hold Shift - Show Bulk of 100",
        ]
    },
    {
        name: "CraftMine",
        id: "craftmine",
        genre: "Adventure / Survival",
        description: "CraftMine is a cool 2D Minecraft game, this game is all about surviving for as long as you can with surronding materials.",
        link: "Game Files/CraftMine/index.html",
        img: "Images/craftmine.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "WAD - Movement",
            "Right Click - Interact",
        ]
    },
    {
        name: "Crossy Road",
        id: "crossy_road",
        genre: "Arcade",
        description: "The objective of this game is to move a charater through an endless path of static and moving obstacles as far as possible without dying.",
        link: "https://yell0wsuit.page/html5-games/games/crossy-road/",
        img: "Images/crossy_road.png",
        file_based: false,
        publisher: "Poki",
        controls: [
            "WASD/Arrow Keys/Right Click - Movement",
        ]
    },
    {
        name: "Cube Surfer",
        id: "cube_surfer",
        genre: "Arcade",
        description: "You need to try to stack as many cubes to make a tower run and surf on the road to reach the finish line.",
        link: "https://html5.iclouds.io/box-surfing-v1/",
        img: "Images/cube_surfer.png",
        file_based: false,
        publisher: "iclouds.io",
        controls: [
            "Hover Mouse - Slide Left/Right (might need to click first)",
        ]
    },
    {
        name: "Cut the Rope",
        id: "cut_the_rope",
        genre: "Puzzle",
        description: "In this game you must feed a creature named Om Nom with candy by cutting ropes in a certain manner, while using other tools such as bubbles and air cushions to avoid hazards and collect stars.",
        link: "Game Files/Cut the Rope/index.html",
        img: "Images/cut_the_rope.png",
        file_based: true,
        publisher: "ZeptoLab",
        controls: [
            "Click & Drag - Cut Rope",
            "Click Bubble - Pop It"
        ]
    },
    {
        name: "CTR Holiday",
        id: "ctr_holiday",
        genre: "Arcade",
        description: "In this game you must feed a creature named Om Nom with candy by cutting ropes in a certain manner, while using other tools such as bubbles and air cushions to avoid hazards and collect stars.",
        link: "Game Files/CTR Holiday/index.html",
        img: "Images/ctr_holiday.png",
        file_based: true,
        publisher: "Zeptolab",
        controls: [
            "Click & Drag - Cut Rope",
            "Click Bubble - Pop It"
        ]
    },
    {
        name: "CTR Time Travel",
        id: "ctr_time_travel",
        genre: "Arcade",
        description: "In this game you must feed a creature named Om Nom with candy by cutting ropes in a certain manner, while using other tools such as bubbles and air cushions to avoid hazards and collect stars.",
        link: "Game Files/CTR Time Travel/index.html",
        img: "Images/ctr_time_travel.png",
        file_based: true,
        publisher: "ZeptoLab",
        controls: [
            "Click & Drag - Cut Rope",
            "Click Bubble - Pop It"
        ]
    },
    {
        name: "Diep 2.io",
        id: "diep_2-io",
        genre: "Arcade",
        description: "The more points you have the better. It's the main thing to pay attention in Diep 2.io 2. You can exchange XP points for upgrading your charater's skills. However that won't help you in case you meet week, but experienced player. And YES this game contains ads, thats because this is the original game, all revenue is going to the developers.",
        link: "https://diepio-2.com/",
        img: "Images/diep_2-io.png",
        file_based: false,
        publisher: "diep.io-2",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Dragon Ball Z",
        id: "dragon_ball_z",
        genre: "Adventure",
        description: "The epic episodic adventure of Goku and the Z Warriors as they defend the Earth and the Universe from super-powered fighters and monsters.",
        link: "GBA-Emulator/launcher.html#dbz_supersonic",
        img: "Images/dragon_ball_z.png",
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Draw The Hill",
        id: "draw_the_hill",
        genre: "Arcade / Endless",
        description: "In this cool driving game, use your skills to draw a path for the car to drive through the level. Make sure you draw a steady path or else you'll end the level.",
        link: "Game Files/Draw The Hill/index.html",
        img: "Images/draw_the_hill.png",
        file_based: true,
        publisher: "Math Playground",
        controls: [
            "Drag Right Click - Draw",
        ]
    },
    {
        name: "Dreader",
        id: "dreader",
        genre: "Horror",
        description: "Dreader is a short mouse maze game with horror elements. Warning: This game contains flashing lights and stripes and may be unsuitable for people with photosensitive epilepsy.",
        link: "https://b0bzgx3mzz-dr3ad3r.netlify.app/",
        img: "Images/dreader.png",
        file_based: false,
        publisher: "donitz.itch.io",
        controls: [
            "Move Mouse - Go through maze",
        ]
    },
    {
        name: "Drift Hunters",
        id: "drift_hunters",
        genre: "Drifting",
        description: "Drift Hunters is an awesome 3D car driving game in which you score points by drifting various cars. These points earn you money, that you can spend to upgrade your current car or buy a new one.",
        link: "Game Files/Drift Hunters/index.html",
        img: "Images/drift_hunters.png",
        file_based: true,
        publisher: "drift-hunters.co",
        controls: [
            "Unknown",
        ]
    },

    {
        name: "Duck Life 2",
        id: "duck_life_2",
        genre: "Adventure",
        description: "Duck Life is a game series where you train your duck for races and/or battles.",
        link: "Game Files/Duck Life 2/index.html",
        img: "Images/duck_life_2.png",
        file_based: true,
        publisher: "Poki",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Duck Life 3",
        id: "duck_life_3",
        genre: "Adventure",
        description: "Duck Life is a game series where you train your duck for races and/or battles.",
        link: "Game Files/Duck Life 3/index.html",
        img: "Images/duck_life_3.png",
        file_based: true,
        publisher: "Kongregate",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Duck Life 4",
        id: "duck_life_4",
        genre: "Adventure",
        description: "Duck Life is a game series where you train your duck for races and/or battles.",
        link: "Game Files/Duck Life 4/index.html",
        img: "Images/duck_life_4.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Edge Not Found",
        id: "edge_not_found",
        genre: "Puzzle",
        description: "Edge Not Found is a Sokoban-style puzzle game set on an infinitely repeating grid. There are 20+ puzzles and they get can pretty tricky.",
        link: "Game Files/Edge Not Found",
        img: "Images/edge_not_found.png",
        file_based: true,
        publisher: "js13kgames.com",
        controls: [
            "WASD/Arrow Keys - Movement",
            "Space/Enter - Select",
            "Z/Backspace - Undo",
            "R - Restart",
            "Esc - Toggle Menu"
        ]
    },
    {
        name: "Fireboy & Watergirl",
        id: "fireboy_and_watergirl",
        genre: "2 Player / Puzzle",
        description: "Help Fireboy and Watergirl find the exit through the Forest Temple. Fireboy must avoid the water and Watergirl must avoid the fire, and be careful, the green mud kills them both!",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-fireboy-and-watergirl-4-crystal-temple",
        img: "Images/fireboy_and_watergirl.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Fishington.io",
        id: "fishington-io",
        genre: "Arcade",
        description: "Fishington.io is a multiplayer fishing game featuring characters from the game Betrayal.io. Cast your line and catch fish to sell on the market!",
        link: "https://fishington.io",
        img: "Images/fishington-io.png",
        file_based: false,
        publisher: "End Game Interactive, Inc.",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "FNAF Final Purgatory",
        id: "five_nights_at_freddys",
        genre: "Horror",
        description: "In this game, you get a job as a night guard at Freddy Fazbir's pizzeria. A few hours of work will replenish your budget decently. It can't help but please, but a little worm of doubt still began to gnaw at you and your suspicions began to creep in. And then midnight came. At exactly twelve o'clock the worst nightmare of your life will begin!",
        link: "https://redlionsq.com/uploads/5/5/6/7/5567194/custom_themes/602302113323144959/fnaf-final-purgatory.html",
        img: "Images/five_nights_at_freddys.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Friday Night Funkin'",
        id: "friday_night_funkin",
        genre: "Rhythm",
        description: "Friday Night Funkin' is a rhythm game where you must control a character called Boyfriend, who must defeat a series of opponents in order to continue dating his significant other, Girlfriend.",
        link: "https://INSP3CT1NG-1SNT-N1C3-RJ.github.io/projects/fnf/index.html",
        img: "Images/friday_night_funkin.png",
        file_based: false,
        publisher: "The Funkin' Crew Inc.",
        controls: [
            "Arrow Keys - Play Notes",
        ]
    },
    {
        name: "Geometry Dash",
        id: "geometry_dash",
        genre: "Arcade",
        description: "In this game you must control the movement of an icon and navigate along music-based levels, while avoiding obstacles such as spikes that instantly destroy the icon on impact.",
        link: "Game Files/GeometryDash/index.html",
        img: "Images/geometry_dash.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Getaway Shootout",
        id: "getaway_shootout",
        genre: "2 Player / Shooter",
        description: "Getaway Shootout is a chaotic race to reach the getaway objective in each map. Race against the computer or grab a friend to prove who is best. Collect power-ups and weapons along the way, and navigate through tough maps.",
        link: "Game Files/Getaway Shootout/index.html",
        img: "Images/getaway_shootout.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Getting Over It",
        id: "getting_over_it",
        genre: "Adventure",
        description: "Getting Over It is a climbing game. You move the hammer with the mouse, and that's all there is. With practice, you'll be able to jump, swing, climb and fly.",
        link: "https://html5.iclouds.io/climb-over-it/",
        img: "Images/getting_over_it.png",
        file_based: false,
        publisher: "iclouds.io",
        controls: [
            "Drag & Left Click - Swing Hammer",
        ]
    },
    {
        name: "Horde Killer",
        id: "horde_killer",
        genre: "Shooter",
        description: "You vs 100 is a chaotic survival game where you face a vast horde of zombies determined to kill. Shoot them, blow them to pieces - do whatever it takes to avoid being mauled. Buy a range of new weapons and outfits for an explosively stylish apocalypse scenario.",
        link: "https://heartfelt-salmiakki-9e8ee9.netlify.app/",
        img: "Images/horde_killer.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Idle Breakout",
        id: "idle_breakout",
        genre: "Idle",
        description: "Click on a brick to break it and score points. Use points to purchase new balls with different abilities and upgrade them. Balls will automatically bounce and break bricks to score more points.",
        link: "Game Files/Idle Breakout/index.html",
        img: "Images/idle_breakout.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Incredibox",
        id: "incredibox",
        genre: "Rhythm",
        description: "Incredibox is a music app that lets you create your own music with the help of a merry crew of beatboxers.Choose your musical style among 8 impressive atmospheres and start to lay down, record and share your mix.",
        link: "https://secretshxcksource00.github.io/tst2/",
        img: "Images/incredibox.png",
        file_based: false,
        publisher: "incredibox.com",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Knots",
        id: "knots",
        genre: "Puzzle",
        description: "The goal is to untangle the ropes with a limited number of moves. Sounds easy, but one mistake can mess up the whole knot.",
        link: "https://html5.iclouds.io/knots-master/index.html",
        img: "Images/knots.png",
        file_based: false,
        publisher: "iclouds.io",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Little Alchemy",
        id: "little_alchemy",
        genre: "Misc",
        description: "In this game, you start with 4 basic elements and mix them to start creating more things. It's all about mixing elements to create intresting, fun and surprising items.",
        link: "https://littlealchemy2.com/",
        img: "Images/little_alchemy.png",
        file_based: false,
        publisher: "littlealchemy2.com",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Mad Burger 3",
        id: "mad_burger_3",
        genre: "Managing / Launcher",
        description: "Mad Burger 3 is a launcher game where you have to cook your and launch it as far as you can. Get good recipes, buy ingredients, and upgrade your skill.",
        link: "https://dddavit.github.io/madburger/",
        img: "Images/mad_burger_3.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Mage Clash.io",
        id: "mage_clash-io",
        genre: "Arcade",
        description: "Mageclash.io is a multiplayer fantasy game where you battle monsters and other players in order to become the most powerful player on the server. And YES this game contains ads, thats because this is the original game, all revenue is going to the developers.",
        link: "https://www.mageclash.io/",
        img: "Images/mage_clash-io.png",
        file_based: false,
        publisher: "mageclash.io",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Mario Kart",
        id: "mario_kart",
        genre: "Adventure / Driving",
        description: "Players compete in go-kart races while using various power up items.",
        link: "./GBA-Emulator/launcher.html#mariokart",
        img: "Images/mario_kart.png",
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Minesweeper",
        id: "minesweeper",
        genre: "Classic / Puzzle",
        description: "Minesweeper is a single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed mines in the shortest possible time by clicking on safe squares while avoiding the squares with mines.",
        link: "https://www-ig-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/playminesweepergame/minesweeper.xml",
        img: "Images/minesweeper.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Moto X3M",
        id: "moto_x3m",
        genre: "Driving",
        description: "The goal of this game is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score.",
        link: "Game Files/Moto X3M/index.html",
        img: "Images/moto_x3m.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Moto X3M Pool Party",
        id: "moto_x3m_pool_party",
        genre: "Driving",
        description: "The goal of this game is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score.",
        link: "Game Files/Moto X3M Pool Party/index.html",
        img: "Images/moto_x3m_pool_party.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Moto X3M Spooky",
        id: "moto_x3m_spooky",
        genre: "Driving",
        description: "The goal of this game is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score.",
        link: "Game Files/Moto X3M Spooky/index.html",
        img: "Images/moto_x3m_spooky.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Moto X3M Winter",
        id: "moto_x3m_winter",
        genre: "Driving",
        description: "The goal of this game is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score.",
        link: "Game Files/Moto X3M Winter",
        img: "Images/moto_x3m_winter.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "My Friend Pedro",
        id: "my_friend_pedro",
        genre: "Shooter",
        description: "My Friend Pedro is a violent ballet about friendship, imagination, and one man's struggle to obliterate anyone in his path at the behest of a sentient banana.",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-flash-ruffle&s=%3Furl%3D%252Fflash-armorgames%252Fmy-friend-pedro-1598012ef.swf",
        img: "Images/my_friend_pedro.png",
        file_based: false,
        publisher: "Armor Games",
        controls: [
            "Unknown",
        ]
    },
    // {
    //     name: "My Friend Pedro Arena",
    //     id: "my_friend_pedro_arena",
    //     genre: "Shooter",
    //     description: "",
    //     link: "https://rudolph-the-red-nosed-reindeer.ga/tam-flash-ruffle/?url=%2Fflash-armorgames%2Fmy-friend-pedro-aren-16138b620.swf",
    //     img: "Images/my_friend_pedro_arena.png",
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
    {
        name: "Paper Minecraft",
        id: "paper_minecraft",
        genre: "Adventure / Survivial",
        description: "Paper Minecraft is a 2D version of the legendary building game Minecraft. Before starting a game you can choose a variety of different character skins and game modes. You must surivive for as long as possible before dying.",
        link: "Game Files/Paper Minecraft/index.html",
        img: "Images/paper_minecraft.png",
        file_based: true,
        publisher: "Scratch - griffpatch",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pocket League 3D",
        id: "pocket_league_3d",
        genre: "Arcade / Sports",
        description: "Pocket League 3D is a fan football game played with cars that you can play with either 1 or 2 players.",
        link: "https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/805200638580542612/pocket-league.html",
        img: "Images/pocket_league_3d.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Emerald",
        id: "pokemon_emerald",
        genre: "Adventure",
        description: "Emerald does more with double battles, as gym leaders can be re-challenged after the story to participate in double battles. You can also encounter more double battles by having at least two conscious Pokemon on their team and being seen by two other trainers simultaneously.",
        link: "https://theclashman2.github.io/GBA-Emulator/launcher.html#pokemonemerald",
        img: "Images/pokemon_emerald.png",
        file_based: false,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Fire Red",
        id: "pokemon_fire_red",
        genre: "Adventure",
        description: "Pokémon FireRed and LeafGreen are the upgraded versions of the original Pokémon Red and Blue games, with more fun and more adventure. There are about 20 exclusive Pokémon in each version with different abilities.",
        link: "./GBA-Emulator/launcher.html#pokemonred",
        img: "Images/pokemon_fire_red.png",
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Leaf Green",
        id: "pokemon_leaf_green",
        genre: "Adventure",
        description: "Pokémon FireRed and LeafGreen are the upgraded versions of the original Pokémon Red and Blue games, with more fun and more adventure. There are about 20 exclusive Pokémon in each version with different abilities.",
        link: "./GBA-Emulator/launcher.html#pokemongreen",
        img: "Images/pokemon_leaf_green.png",
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Myst. Dungeon",
        id: "pokemon_mystery_dungeon_red",
        genre: "Adventure",
        description: "Gameplay is based on a classic roguelike game, with the player navigating the randomly generated dungeon with their Pokémon team.",
        link: "./GBA-Emulator/launcher.html#mysteryred",
        img: "Images/pokemon_mystery_dungeon_red.png",
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Ruby",
        id: "pokemon_ruby",
        genre: "Adventure",
        description: "Pokémon Ruby Version and Pokémon Sapphire Version take great leaps in gameplay, particularly during combat. For the first time in a Pokémon game, Trainers can send two Pokémon into battle at the same time.",
        link: "./GBA-Emulator/launcher.html#pokemonruby",
        img: "Images/pokemon_ruby.png",
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokemon Sapphire",
        id: "pokemon_sapphire",
        genre: "Adventure",
        description: "Pokémon Ruby Version and Pokémon Sapphire Version take great leaps in gameplay, particularly during combat. For the first time in a Pokémon game, Trainers can send two Pokémon into battle at the same time.",
        link: "./GBA-Emulator/index.html#pokemonsapphire",
        img: "Images/pokemon_sapphire.png",
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    // {
    //     name: "Raze 1",
    //     id: "raze_1",
    //     genre: "Shooter",
    //     description: "",
    //     link: "https://cdn.icestonesoft.com/online_games/raze/",
    //     img: "Images/raze_1.png",
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
    {
        name: "RoadBlocks",
        id: "roadblocks",
        genre: "Puzzle",
        description: "RoadBlocks is a puzzle game where you must complete the road with the pieces the game gives you.",
        link: "Game Files/RoadBlocks/index.html",
        img: "Images/roadblocks.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Rooftop Snipers",
        id: "rooftop_snipers",
        genre: "2 Player / Shooter",
        description: "Rooftop Snipers is a chaotic two-button two-player sniper game. Find a friend to play with, or practice by playing against the computer in this rage-inducing action game that is similar in style and gameplay to smash hits such as Soccer Physics and Wrestle Jump.",
        link: "Game Files/Rooftop Snipers/index.html",
        img: "Images/rooftop_snipers.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Run 3",
        id: "run_3",
        genre: "Runner",
        description: "Run 3 is an endless runner game where you need to navigate your little alien through space.",
        link: "https://b0bzshxck27.netlify.app/",
        img: "Images/run_3.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Slope 1",
        id: "slope_1",
        genre: "Arcade / Speed Run",
        description: "Roll down the slope for as long as possible without falling off the edge or hitting any obstacles along the way. Get ready for serious speed boost as you fall downhill the never-ending surface.",
        link: "Game Files/Slope 1/index.html",
        img: "Images/slope_1.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Sort the Court",
        id: "sort_the_court",
        genre: "Simulation",
        description: "Sort the Court is a game where you are a king and the goal is to raise your population, happiness, and gold. You do this by answering Yes or No to people that come up to you with offers.",
        link: "https://INSP3CT1NG-1SNT-N1C3-RJ.github.io/projects/sort-the-court/index.html",
        img: "Images/sort_the_court.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Space Paper.io",
        id: "space_paper-io",
        genre: "Arcade",
        description: "Space Paper.io is a game where you fly around the map and claim you territory. And YES this game contains ads, thats because this is the original game, all revenue is going to the developers.",
        link: "https://spacepaper.io/",
        img: "Images/space_paper-io.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Stack",
        id: "stack",
        genre: "Stacking",
        description: "You have to stack tiles on top of each other and create a tower from the tiles as high as possible before. The game trims the size of the blocks when they are not perfectly stacked on top of each other.",
        link: "Game Files/Stack/index.html",
        img: "Images/stack.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Starve.io",
        id: "starve-io",
        genre: "Multiplayer / Survival",
        description: "Starve.io is a browser-based online multiplayer survival game. In this game, you must control a human-like avatar, aiming to survive and get stronger equipment. And YES this game contains ads, thats because this is the original game, all revenue is going to the developers.",
        link: "https://starve.io.theadvancedmethod.abl.cl/",
        img: "Images/starve-io.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Stickman Hook",
        id: "stickman_hook",
        genre: "Arcade",
        description: "Avoid every obstacle that stands in your way. Can you execute all these acrobatic tricks in a row like a boss? In this game, embody the spider stickman. Finish all the levels with the same agility as a spider.",
        link: "Game Files/Stickman Hook/index.html",
        img: "Images/stickman_hook.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Subway Surfers",
        id: "subwaysurfers",
        genre: "Endless / Runner",
        description: "It's you're goal to run a away from a cop chasing you while you complete missions, etc. How far can you go before getting caught?",
        link: "https://yell0wsuit.page/html5-games/games/subway-surfers-unity/",
        img: "Images/subway_surfers.png",
        file_based: false,
        publisher: "Poki",
        controls: [
            "Arrow Keys/WASD - Movement",
            "Spacebar - Hoverboard"
        ]
    },
    {
        name: "Super Buddy Kick",
        id: "super_buddy_kick",
        genre: "Action",
        description: "Super Buddy Kick is a brutal game in which you mutilate the ragdoll in many ways. Hit the buddy with hammers and blades, shoot him with pistols and rifles, let him explode with grenades and even drop flames on him!",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-super-buddy-kick-online",
        img: "Images/super_buddy_kick.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Super Mario Bros",
        id: "super_mario_bros",
        genre: "Arcade / Platformer",
        description: "Mario must race through the Mushroom Kingdom and save Princess Toadstool from Bowser. Mario jumps, runs, and walks across each level. The worlds are full of enemies and platforms, and open holes.",
        link: "Game Files/Super Mario Bros/index.html",
        img: "Images/super_mario_bros.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "TankTrouble",
        id: "tank_trouble",
        genre: "Maze / Shooter",
        description: "Drive through a maze to find your enemies, and shoot from a save point before they aim their cannon at you.",
        link: "https://bmarinacampground.net/uploads/5/5/6/7/5567194/custom_themes/851609344627074058/files/index.html",
        img: "Images/tank_trouble.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Player 1: Arrow Keys - Movement, Space - Shoot",
            "Player 2: WASD - Movement, Q - Shoot",
            "Player 3: Move Mouse - Movement, Left Click - Shoot",
        ]
    },
    // {
    //     name: "TankTrouble 2",
    //     id: "tank_trouble",
    //     genre: "?",
    //     description: "",
    //     link: "Game Files/Tank Trouble 2/index.html",
    //     img: "Images/tank_trouble.png",
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
    {
        name: "Tanuki Sunset",
        id: "tanuki_sunset",
        genre: "Drifting",
        description: "Master the longboard as you drift through stunning mountain ranges, swerve through bustling city streets, and along the sandy beaches of Sunset Island.",
        link: "Game Files/Tanuki Sunset/index.html",
        img: "Images/tanuki_sunset.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Temple Run 2",
        id: "temple_run_2",
        genre: "Arcade",
        description: "Temple Run 2 is an endless running video game. The goal of the game is simple, run the longest you can dodging obstacles and jumping without messing up.",
        link: "Game Files/Temple Run 2/index.html",
        img: "Images/temple_run_2.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Tetris",
        id: "tetris",
        genre: "Puzzle",
        description: "Tetris is a tile-matching puzzle game with a simple goal of destroying line of blocks before it reaches the top.",
        link: "Game Files/Tetris/index.html",
        img: "Images/tetris.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "The Impossible Quiz 2",
        id: "the_impossible_quiz_2",
        genre: "Puzzle",
        description: "The Impossible Quiz is an online trivia quiz that features only very hard questions. Many of the questions have double meanings, tricks and puns and requires you to think outside the box. Out of the four answers, only one answer is right. There are in total 110 questions.",
        link: "https://advanced-channeler.02.gz-associates.com/?s=%3Furl%3D%252Fflash%252Fimpossiblequiz2.swf&t=tam-flash-ruffle",
        img: "Images/the_impossible_quiz_2.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Time Shooter 2",
        id: "time_shooter_2",
        genre: "FPS",
        description: "This is a first person shooter game where time sands still until you move. Plan your shots and moves carefully as you must dodge enemy fire in epic slo-mo combat.",
        link: "https://ldaiodgdl1b4supcg3mhrvjqsf9a60v3-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/x001n5b6/ts2.xml&container=enterprise&view=default&lang=en&country=ALL&sanitize=0&v=e3b97d41d9b668d3&libs=core&mid=113&parent=https://sites.google.com/site/unblockedgameswtf/time-shooter-2#st=e%3DAIHE3cAneeedHBGirlp53gyNdeuN1scZziBGoatQMYmGLaH57IlgJFEspsSZ4zgwTbYkmrtTtO1AKsipyi1n%252FPcHBSnSj0eGa3vvp3oz0kDqfwWk%252FVtD3BA%253D%26c%3Denterprise&rpctoken=-6926225573722568764",
        img: "Images/time_shooter_2.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Time Shooter 3",
        id: "time_shooter_3",
        genre: "FPS",
        description: "This is a first person shooter game where time sands still until you move. Plan your shots and moves carefully as you must dodge enemy fire in epic slo-mo combat.",
        link: "https://c948ebn9d7mt7708ltutkt0ncbqleedo-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/x002d4f5/ts3.xml&container=enterprise&view=default&lang=en&country=ALL&sanitize=0&v=d46b9372ddb3ad67&libs=core&mid=88&parent=https://sites.google.com/site/unblockedgame76/time-shooter-3#st=e%3DAIHE3cCt9LNDXREyRib3u9ooN1xoByJtCuB5SPKhZxbPeS%252F%252BkIqQqbSDyOx3R4axlHBipKjAHPexKtGN6dqN%252Ft6sbR8efDVHs00C7%252F44XPgtROhEPMpHerc%253D%26c%3Denterprise&rpctoken=-3457677117462969399",
        img: "Images/time_shooter_3.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Townscaper",
        id: "townscaper",
        genre: "Building",
        description: "This game is all about designing, pick colors from the pat let te, plop down colored blocks of house on the irregular grid and watch the game turn it into cute little houses.",
        link: "Game Files/Townscaper/index.html",
        img: "Images/townscaper.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Tube Jumpers",
        id: "tube_jumpers",
        genre: "2 Player / Action",
        description: "The objective of this game is to be the last one to stay on the tube, but watch out for miscellaneous objects while watching your back from other players.",
        link: "Game Files/Tube Jumpers",
        img: "Images/tube_jumpers.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Tunnel Rush",
        id: "tunnel_rush",
        genre: "Runner",
        description: "Tunnel Rush is an adrenaline-inducing running game in which you traverse through tunnels and caves at speed shilst dodging obstacles along thw way.",
        link: "Game Files/Tunnel Rush/index.html",
        img: "Images/tunnel_rush.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Arrow Keys - Movement",
        ]
    },
    {
        name: "Turbo Moto Racer",
        id: "turbo_moto_racer",
        genre: "Driving",
        description: "Turbo Moto Racer 3D is a racing game set in a city. Demonstrate your motorcycle riding talents in congested areas. Pass difficult levels to unlock new motorcycles. Feel the rush of excitement coursing through your veins.",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-turbo-moto-racer",
        img: "Images/turbo_moto_racer.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "UNO",
        id: "uno",
        genre: "Classic / Multiplayer",
        description: "UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand.",
        link: "https://uno-online-multiplayer.herokuapp.com",
        img: "Images/uno.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Vex 3",
        id: "vex_3",
        genre: "Platformer",
        description: "This is a game where you must parkour a stickman through acts, jumping and sliding through deadly devices and traps, to get to the final state where you will complete the Vexation.",
        link: "Game Files/Vex 3/index.html",
        img: "Images/vex_3.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Vex 4",
        id: "vex_4",
        genre: "Platformer",
        description: "This is a game where you must parkour a stickman through acts, jumping and sliding through deadly devices and traps, to get to the final state where you will complete the Vexation.",
        link: "Game Files/Vex 4/index.html",
        img: "Images/vex_4.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Vex 5",
        id: "vex_5",
        genre: "Platformer",
        description: "This is a game where you must parkour a stickman through acts, jumping and sliding through deadly devices and traps, to get to the final state where you will complete the Vexation.",
        link: "Game Files/Vex 5/index.html",
        img: "Images/vex_5.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Vex 6",
        id: "vex_6",
        genre: "Platformer",
        description: "This is a game where you must parkour a stickman through acts, jumping and sliding through deadly devices and traps, to get to the final state where you will complete the Vexation.",
        link: "Game Files/Vex 6/index.html",
        img: "Images/vex_6.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Wordle Unlimited",
        id: "wordle_unlimited",
        genre: "Puzzle",
        description: "This is a popular word guessing game where you must correctly select a random five-letter word. You only get six tries to guess the word, but the game will give you hints along the way.",
        link: "Game Files/Wordle Unlimited/index.html",
        img: "Images/wordle_unlimited.png",
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Worlds Hardest Game",
        id: "worlds_hardest_game",
        genre: "Puzzle",
        description: "This game is a very difficult game as it requires you to go through very difficult level that seem very unpossible.",
        link: "https://vinmannie.github.io/WorldsHardestGame/",
        img: "Images/worlds_hardest_game.png",
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Arrow Keys - Movement",
        ]
    },
    // {
    //     name: "Zombs Royale",
    //     id: "zombs_royale",
    //     genre: "Shooter",
    //     description: "",
    //     link: "https://rudolph-the-red-nosed-reindeer.ga/tmm-zombsroyale",
    //     img: "Images/zombs_royale.png",
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
    // {
    //     name: "",
    //     id: "",
    //     genre: "",
    //     description: "",
    //     link: "",
    //     img: "Images/.png",
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
]

document.getElementById("gamecount").innerText = `Game count: ${data.length}\nUpdated: ${lastUpdate}`

var count = 0
var container = document.getElementsByClassName(`container`)
var img = document.getElementsByClassName(`game_img`)
var title = document.getElementsByClassName(`game_title`)
var genre = document.getElementsByClassName(`game_genre`)
var click = document.getElementsByClassName(`game_click`)
data.forEach(game => {
    container[count].style.display = "inline-table"
    if(localStorage.getItem("gameIcon") !== "false") img[count].src = game.img
    title[count].innerText = game.name
    genre[count].innerText = game.genre
    click[count].onclick = function(){ viewGame(game.id) }

    if(localStorage.getItem("gameIcon") === "false") container[count].style.paddingTop = "7px";
    count++;
})

let selectOptions = []
for(let i = 0; i < data.length; i++){
    if(data[i].genre.includes(" / ")){
        for(let o = 0; o < data[i].genre.split(" / ").length; o++){
            selectOptions.push(data[i].genre.split(" / ")[o])
        }
    } else {
        selectOptions.push(data[i].genre)
    }
}
let selectOptionsList = []
selectOptions.forEach((o) => {
    if(!selectOptionsList.includes(o)){
        selectOptionsList.push(o)
    }
})
selectOptionsList.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})
for(let i = 0; i < selectOptionsList.length; i++){
    var x = document.getElementById("filterSelect");
    var option = document.createElement("option")
    option.text = selectOptionsList[i];
    x.add(option);
}
var select = document.getElementById("filterSelect")
select.onchange = async (event) => {
    var inputText = event.target.value;

    if(inputText === "None"){
        for(let i = 0; i < container.length; i++){ container[i].style.display = "inline-table"}
        return;
    }

    for(let i = 0; i < container.length; i++){ container[i].style.display = "none"}

    for(let i = 0; i < selectOptionsList.length; i++){
        if(inputText === selectOptionsList[i]){
            for(let o = 0; o < data.length; o++){
                if(data[o].genre.includes(" / ")){
                    for(let u = 0; u < data[o].genre.split(" / ").length; u++){
                        if(data[o].genre.split(" / ")[u] === inputText) container[o].style.display = "inline-table"
                    }
                } else {
                    if(data[o].genre === inputText) container[o].style.display = "inline-table"
                }
            }
            break;
        }
    }
}

function viewGame(gameID){
    for(let i = 0; i < data.length; i++){
        if(data[i].id === gameID){
            let fullscreen = document.getElementById("gameViewFullscreen")
            let title = document.getElementById("gameViewTitle")
            let img = document.getElementById("gameViewImg")
            let desc = document.getElementById("gameViewDescription")
            let genre = document.getElementById("gameViewGenre")
            let publisher = document.getElementById("gameViewPublisher")
            let playBtn = document.getElementById("playButton")

            fullscreen.style.display = "block"
            title.innerText = data[i].name
            img.src = data[i].img
            desc.innerText = data[i].description
            genre.innerText = data[i].genre
            publisher.innerText = data[i].publisher
            playBtn.onclick = function(){ playGame(data[i].id) }
        }
    }
}

let clickcount = 0
let clickedView = false
function clicked(){
    clickedView = true
}

document.addEventListener("click", () => {
    if(document.getElementById("gameViewFullscreen").style.display === "block"){
        if(clickedView === true){
            clickedView = false
        } else {
            if(clickcount === 0) return clickcount = 1
            clickedView = false
            clickcount = 0
            document.getElementById("gameViewFullscreen").style.display = "none"
        }
    }
})

function search(){
    let input = document.getElementById("searchbar").value
    input = input.toLowerCase()
    let x = document.getElementsByClassName("container")

    for(i = 0; i < x.length; i++){
        if(!data[i].name.toLowerCase().includes(input)){
            x[i].style.display = "none";
        } else {
            x[i].style.display = "inline-table"
        }
    }
}

function playGame(gameID){
    for(let i = 0; i < data.length; i++){
        if(data[i].id === gameID){
            document.getElementById("gameViewFullscreen").style.display = "none"

            document.getElementById("gamepage").style.display = "block"
            document.getElementById("mainpage").style.display = "none"
            document.getElementById("gamePageTitle").innerText = data[i].name
            document.getElementById("gamePageDesc").innerText = data[i].description
            document.getElementById("gameIframe").src = data[i].link
            document.getElementById("controls").style.transform = `translateY(${-70 + (data[i].controls.length * -25)}px)`
            document.getElementById("controlsText").innerText = data[i].controls.join("\n")
            document.getElementById("gameIframe").style.height = `${document.querySelector("iframe").getBoundingClientRect().width / 1.778}px`

            if(body.querySelector('nav').classList.value === "sidebar") body.querySelector('nav').classList.toggle("close")
            intervalManager(true);
        }
    }
}

// let iFrameFocused = false
// function checkFocus(){
//     if(document.getElementById("gamepage").style.display === "block"){
//         if(document.activeElement === document.getElementById("gameIframe")){
//             document.body.style.overflow = "hidden"
//             document.getElementById("gameIframe").style.opacity = 1
//             intervalManager(false);
//         } else {
//             document.body.style.overflow = "visible"
//             document.getElementById("gameIframe").style.opacity = 0.5
//             intervalManager(true);
//         }
//     }
// }

// function intervalManager(flag){
//     if(flag === true){
//         let interval = setInterval(() => { checkFocus() }, 100)
//     } else {
//         clearInterval(interval);
//     }
// }
// document.body.onfocus = function(){ checkFocus() }

function checkFocus(){
    if(document.getElementById("gamepage").style.display === "block"){
        if(document.activeElement === document.getElementById("gameIframe")){
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }
}

document.body.onclick = function(){ checkFocus() }
const listener = window.addEventListener("blur", () => {
    if(document.activeElement === document.querySelector("iframe")){
        console.log("clicked iframe")
        checkFocus()
    }
    window.removeEventListener("blur", listener)
})

function controls(){
    if(document.getElementById("controls").style.display !== "block"){
        document.getElementById("controls").style.display = "block"
    } else {
        document.getElementById("controls").style.display = "none"
    }
}