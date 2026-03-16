/* ═══════════════════════════════════════
   CHALLENGE DATA  (real BO7 challenge data)
═══════════════════════════════════════ */
const DEFAULT_SEASONS = [
{
  name:"Season 1",
  s5Name:"Feedin' Time",
  s8Name:"Coral Streaks",
  masteryReq:9,
  weeks:9,
  weekRewards:[
    {name:"Ballistic Knife",type:"Melee Weapon"},
    {name:"Akita Scorchlink Akimbo",type:"Shotgun Attachment"},
    {name:"Deadeye Drone & GobbleGums",type:"Scorestreak + 3x GobbleGum"},
    {name:"Shade-X Suppressor",type:"Weapon Attachment"},
    {name:"AK-27 Battle Scar Conversion",type:"Conversion Kit"},
    {name:"Coda 9 Adaptive Discharge Mod",type:"Weapon Attachment"},
    {name:"M8A1 Full Auto Conversion",type:"Conversion Kit"},
    {name:"MPC-25 Contrabloom Laser",type:"Weapon Attachment"},
    {name:"Illusory Chaos",type:"SMG Blueprint"}
  ],
  challenges:{
    0:{
      COOP:[
        {text:"Jailbreak your weapon [3] times",xp:5000},
        {text:"Eliminate [250] Human Enemies",xp:5000},
        {text:"Kill [25] enemies with or affected by your Abilities",xp:3500},
        {text:"Get [10] Scorestreak Kills",xp:3500},
        {text:"Get [10] Kills with Equipment",xp:2500},
        {text:"Eliminate [3] Guild Raiders",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [300] Eliminations",xp:5000},
        {text:"Win [7] Matches",xp:5000},
        {text:"Get [12] Kills with Lethal Equipment",xp:3500},
        {text:"Get [10] Kills while your Active Camo or Mute Field Upgrade is active",xp:3500},
        {text:"Kill [5] Enemies detected by Pinpoint Grenade Tactical Equipment",xp:2500},
        {text:"Kill your Nemesis [5] times",xp:2500}
      ],
      ZOMBIES:[
        {text:"Eliminate [2500] Zombies",xp:5000},
        {text:"Survive [60] total rounds on Astra Malorum",xp:5000},
        {text:"Kill 10 or more Zombies with a single Scorestreak [50] times",xp:3500},
        {text:"With the Wisp Tea Perk active, get [50] Wisp Companion Kills",xp:3500},
        {text:"Kill [50] Zombies that are affected by your Tactical Equipment",xp:2500},
        {text:"Eliminate an Elite Zombie",xp:2500}
      ],
      WARZONE:[
        {text:"Get [40] Eliminations",xp:5000},
        {text:"Earn [5] Top 10 Placements",xp:5000},
        {text:"Open [40] Loot Crates",xp:3500},
        {text:"Get [5] Eliminations with Melee Weapons",xp:3500},
        {text:"Complete [3] Contracts",xp:2500},
        {text:"Get [2] Kills with Lethals",xp:2500}
      ]
    },
    1:{
      COOP:[
        {text:"Eliminate [50] Guild Tech Enemies",xp:5000},
        {text:"Get [250] Eliminations with Assault Rifles",xp:5000},
        {text:"Get a kill while Driving a Vehicle [25] times",xp:3500},
        {text:"Destroy [3] Guild D.A.W.G.s",xp:3500},
        {text:"Eliminate [10] Guild G-R5",xp:2500},
        {text:"Get [50] Critical Kills",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Earn [40000] Total Score",xp:5000},
        {text:"Get [250] Eliminations with Assault Rifles",xp:5000},
        {text:"Earn [10] Double Kill Medals or better",xp:3500},
        {text:"Get [10] Kills with the Skewer or RC-XD Scorestreak",xp:3500},
        {text:"Get [10] Kills with Melee Weapons",xp:2500},
        {text:"Get [10] Headshots",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [1000] Zombie Eliminations with a Pack-A-Punched Assault Rifle",xp:5000},
        {text:"Survive a Round beyond Round 15 [20] times",xp:5000},
        {text:"Earn [25] Slaughter Medals (5 rapid kills)",xp:3500},
        {text:"Get [300] Critical Kills",xp:3500},
        {text:"Earn [5] Jackrabbit Medals (15 Kills without taking damage)",xp:2500},
        {text:"Earn a Monkey Business Medal (10+ Kills with a single Monkey Bomb)",xp:2500}
      ],
      WARZONE:[
        {text:"Get [40] Eliminations with Assault Rifles",xp:5000},
        {text:"Complete [10] Scavenger Contracts",xp:5000},
        {text:"Get 2 Eliminations without dying [5] times",xp:3500},
        {text:"Open 15 Loot Caches in a single match [3] times",xp:3500},
        {text:"Get [5] Headshots",xp:2500},
        {text:"Get [2] Kills with Launchers",xp:2500}
      ]
    },
    2:{
      COOP:[
        {text:"Eliminate [300] Fear Enemies",xp:5000},
        {text:"Get [250] Eliminations with SMGs",xp:5000},
        {text:"Kill an Enemy shortly after using the Grappling Hook Ability [10] times",xp:3500},
        {text:"In Endgame: Complete [5] Activities in a single match",xp:3500},
        {text:"In Endgame: Complete the Cargo Intercept or Mystery Cargo Assignment",xp:2500},
        {text:"Use a Shotgun to Eliminate a Special Enemy [3] times",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [250] Eliminations with SMGs",xp:5000},
        {text:"Finish a match with more Eliminations than Deaths [7] times",xp:5000},
        {text:"Get [10] Kills with or assisted by your Field Upgrades",xp:3500},
        {text:"Call in or Activate [25] Scorestreaks",xp:3500},
        {text:"Get 3 Kills without dying [5] times",xp:2500},
        {text:"Get [10] Point Blank Kills with Shotguns",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [500] Eliminations in a single match",xp:5000},
        {text:"Get [500] Critical Kills with SMGs",xp:5000},
        {text:"Get [50] Kills with Field Upgrades or while your Field Upgrade is active",xp:3500},
        {text:"Get [150] Zombie Eliminations using Wonder Weapons from the Mystery Box",xp:3500},
        {text:"Buy [10] Doors",xp:2500},
        {text:"Earn [3] Slaughter Medals (5 Rapid Kills)",xp:2500}
      ],
      WARZONE:[
        {text:"Get [40] Eliminations with SMGs",xp:5000},
        {text:"Complete [5] Bounty Contracts",xp:5000},
        {text:"Access your Loadout from a Loadout Drop [5] times",xp:3500},
        {text:"Deploy [5] Armor, Munitions, or Utility Boxes",xp:3500},
        {text:"Get a Kill using a Killstreak",xp:2500},
        {text:"Get [2] Headshots in a single match",xp:2500}
      ]
    },
    3:{
      COOP:[
        {text:"Get [500] Eliminations with a Weapon at Rare Rarity or higher",xp:5000},
        {text:"Get [25] Eliminations with Launchers or Special Weapons",xp:5000},
        {text:"Kill a Special or Elite enemy using a piece of Equipment [5] times",xp:3500},
        {text:"Eliminate [10] Guild Deadeyes or Demolishers",xp:3500},
        {text:"Kill [10] enemies stunned by your Crash Cart Ability",xp:2500},
        {text:"Eliminate [5] Guild Guardians",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Win [5] Matches of Hardpoint or Domination",xp:5000},
        {text:"Get [50] Kills while Aiming Down Sights",xp:5000},
        {text:"Get [30] Objective Kills in Objective Modes",xp:3500},
        {text:"Get [10] Eliminations with Launchers or Special Weapons",xp:3500},
        {text:"Get [5] Kills with the Deadeye Drone or Gravemaker Scorestreaks",xp:2500},
        {text:"Get at least 1 Kill with a Scorestreak from a Care Package [3] times",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [2000] Eliminations using Rare or Higher Rarity Weapons",xp:5000},
        {text:"Get [100] Zombie Eliminations with Launchers or Special Weapons",xp:5000},
        {text:"Earn [5] Popcorn Medals (5+ kills with a single Lethal Explosion)",xp:3500},
        {text:"Survive a Round without getting hit by a zombie [10] times",xp:3500},
        {text:"Kill [25] Zombies who are on fire",xp:2500},
        {text:"Get [50] Zombie Kills with the Mangler Cannon Scorestreak",xp:2500}
      ],
      WARZONE:[
        {text:"Get [40] Eliminations using Ground Loot Weapons",xp:5000},
        {text:"Get [20] Eliminations without taking damage",xp:5000},
        {text:"Buy [10] Killstreaks at Buy Stations",xp:3500},
        {text:"Get [10] Eliminations not using LMGs",xp:3500},
        {text:"Complete [2] Supply Run Contracts",xp:2500},
        {text:"Live Ping [5] Enemies",xp:2500}
      ]
    },
    4:{
      COOP:[
        {text:"In Endgame: Complete a Deployment without being downed or killed [2] times",xp:5000},
        {text:"Use the Black Hat Ability to hack [10] enemies, Guild Equipment, or vehicles",xp:5000},
        {text:"In Endgame: Clear [5] Guild Checkpoints",xp:3500},
        {text:"Eliminate [20] Scourge or Infester",xp:3500},
        {text:"Get [20] Eliminations while inside your Ballistic Shell",xp:2500},
        {text:"Use a Scorestreak to Eliminate a Special or Elite Enemy",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [25] Headshots with Marksman Rifles",xp:5000},
        {text:"Get [25] Kills with Scorestreaks",xp:5000},
        {text:"Earn [10] Revenge Medals (Killed the enemy that killed you last)",xp:3500},
        {text:"Get [10] Kills with Explosives",xp:3500},
        {text:"Kill [5] Enemies damaged by your Point Turret Lethal",xp:2500},
        {text:"Get [10] Hipfire Kills",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [1000] Critical Kills",xp:5000},
        {text:"Spend [100000] Essence",xp:5000},
        {text:"Get [20] Zombie Kills with Brain-Rotted Zombies",xp:3500},
        {text:"Get 10+ Zombie Kills with a LMG without reloading [5] times",xp:3500},
        {text:"Kill [50] Zombies while Insta-Kill Power-Ups are active",xp:2500},
        {text:"Earn an Untouchable Medal (Kill an Elite without it damaging anyone)",xp:2500}
      ],
      WARZONE:[
        {text:"Get [20] Eliminations on pinged enemies",xp:5000},
        {text:"Complete [5] Recon Contracts",xp:5000},
        {text:"Get [20] Eliminations with Marksman Rifles",xp:3500},
        {text:"Make Purchases at 2 different Buy Stations in a single match [2] times",xp:3500},
        {text:"Get 2 Eliminations without dying [2] times",xp:2500},
        {text:"Open [5] Legendary Supply Crates",xp:2500}
      ]
    },
    5:{
      COOP:[
        {text:"In Endgame: earn [50000] Power",xp:5000},
        {text:"In Endgame: Escape Successfully [3] times",xp:5000},
        {text:"Kill [20] enemies stunned by the Shadow Break Ability",xp:3500},
        {text:"In Endgame: eliminate [200] Zone II or higher enemies",xp:3500},
        {text:"Eliminate [5] Special Enemies",xp:2500},
        {text:"Kill [5] enemies with Zombies spawned from your Portal Grenade Ability",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Kill an enemy detected by your UAV, Counter UAV, or HARP Scorestreak [25] times",xp:5000},
        {text:"Finish a match with the highest Score of all players",xp:5000},
        {text:"Get [10] Kills with the Needle Drone or Combat Axe Lethals",xp:3500},
        {text:"Use your EMP Tactical to EMP [10] enemy players or Pieces of Gear",xp:3500},
        {text:"Get a Double Kill or Better with your Lethal or Field Upgrade",xp:2500},
        {text:"Deceive [5] enemies with your Echo Unit Field Upgrade",xp:2500}
      ],
      ZOMBIES:[
        {text:"Survive [50] total Rounds in Survival",xp:5000},
        {text:"Kill [100] Zombies with Trap activations",xp:5000},
        {text:"Eliminate [50] Ravagers",xp:3500},
        {text:"Eliminate [25] Armored Zombies",xp:3500},
        {text:"Eliminate [10] Zursas on Exit 115 Survival",xp:2500},
        {text:"Earn a Dead Eye Medal (5 consecutive Rapid Critical Kills)",xp:2500}
      ],
      WARZONE:[
        {text:"Get [15] Eliminations with Sniper Rifles",xp:5000},
        {text:"Complete [3] Big Game Bounty Contracts",xp:5000},
        {text:"Access your Loadout 2 times in a single match [4] times",xp:3500},
        {text:"Get [10] Kills with Hipfire",xp:3500},
        {text:"Open 15 Loot Caches without dying [2] times",xp:2500},
        {text:"Complete 2 Bounty Contracts in a single match [2] times",xp:2500}
      ]
    },
    6:{
      COOP:[
        {text:"In Endgame: get [300] Eliminations using an Operator who is Combat Rating 30 or higher",xp:5000},
        {text:"Destroy [10] Guild D.A.W.G.s, Sentry Turrets, or Drones",xp:5000},
        {text:"In Endgame: get [20] Kills shortly after Wingsuiting",xp:3500},
        {text:"In Endgame: clear [5] Command Centers",xp:3500},
        {text:"Kill [15] Enemies while or shortly after using the Kinetic Jump Ability",xp:2500},
        {text:"Kill an enemy revealed by your Vision Pulse Ability [10] times",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Win a match of an Objective game mode with the most Objective Score",xp:5000},
        {text:"Earn [30] One Shot, One Kill Medals with Sniper Rifles",xp:5000},
        {text:"Earn [500] or more Score in a single life [5] times",xp:3500},
        {text:"With the Overkill Wildcard equipped: get Eliminations with a Primary Weapon in your Secondary Slot",xp:3500},
        {text:"Kill [5] enemies affected by your Tactical",xp:2500},
        {text:"Earn [5] Long Shot Medals",xp:2500}
      ],
      ZOMBIES:[
        {text:"Spend [200000] Essence",xp:5000},
        {text:"Get [1000] Zombie Eliminations with Wall Buy Weapons",xp:5000},
        {text:"Reach T.E.D.D. Tasks Mastery Targets [3] times",xp:3500},
        {text:"Get [200] Zombie Kills as a result of Ammo Mod activations",xp:3500},
        {text:"Kill [2]+ Zombies with a single Sniper Rifle shot [3] times",xp:2500},
        {text:"Earn a Beamed Medal (10 Rapid Kills with the Dark Flare Field Upgrade)",xp:2500}
      ],
      WARZONE:[
        {text:"Get [25] Eliminations using Enemy Weapons",xp:5000},
        {text:"Complete 2 Contracts in a single match [5] times",xp:5000},
        {text:"Activate 2 Killstreaks in a single match [2] times",xp:3500},
        {text:"Open 2 Legendary Loot Caches in a single match [4] times",xp:3500},
        {text:"Get [10] Eliminations with Pistols",xp:2500},
        {text:"Get [2] Eliminations while riding in Vehicles",xp:2500}
      ]
    },
    7:{
      COOP:[
        {text:"In Endgame: complete [15] Assignments",xp:5000},
        {text:"In Endgame: Acquire [10] Skills",xp:5000},
        {text:"In Endgame: destroy [3] Guild VTOLs",xp:3500},
        {text:"In Endgame: clear [5] Quarantine Zones",xp:3500},
        {text:"Kill an enemy while cloaked by your Active Camo Ability [5] times",xp:2500},
        {text:"Eliminate a Rhino",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"With a Hybrid Combat Specialty equipped, get [250] Eliminations",xp:5000},
        {text:"With the Gunfighter Wildcard equipped: get [250] Eliminations using a Weapon with 8 Attachments",xp:5000},
        {text:"Get [5] Objective Kills with Lethals or Field Upgrades",xp:3500},
        {text:"Get a Kill with both your Primary & Secondary Weapons in the same life [10] times",xp:3500},
        {text:"Get [2] consecutive Kills with your Primary Weapon without reloading [5] times",xp:2500},
        {text:"Kill [5] Enemies disoriented by your Psych Grenade or Fear Trap Field Upgrade",xp:2500}
      ],
      ZOMBIES:[
        {text:"Spend [20000] Salvage at the Arsenal",xp:5000},
        {text:"Earn an Elusive Medal (50 Kills without taking damage)",xp:5000},
        {text:"Eliminate [250] Zombies with a single Weapon from the Mystery Box",xp:3500},
        {text:"Have [5] Perks active at the same time",xp:3500},
        {text:"Earn a Deathtrap Medal (10 Kills with an Energy Mine)",xp:2500},
        {text:"Eliminate a Zursa",xp:2500}
      ],
      WARZONE:[
        {text:"Get [20] Eliminations while under fire",xp:5000},
        {text:"Complete 2 Recon Contracts in a single match [5] times",xp:5000},
        {text:"Get [20] Kills while Aiming Down Sights",xp:3500},
        {text:"Make [10] purchases at Buy Stations",xp:3500},
        {text:"Get [2] Eliminations without reloading",xp:2500},
        {text:"Get [2] Eliminations with Special Weapons",xp:2500}
      ]
    },
    8:{
      COOP:[
        {text:"In Endgame: Get [300] Eliminations with Exotic Weapons",xp:5000},
        {text:"In Endgame: Complete [3] or more Assignments and then successfully Escape [3] times",xp:5000},
        {text:"Open [20] Supply Caches",xp:3500},
        {text:"Get [5] or more Kills with a single use of the Hand Cannon Ability [3] times",xp:3500},
        {text:"Get a Kill shortly after using the Flicker Ability [5] times",xp:2500},
        {text:"In Endgame: Crack a Strongbox",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [250] Eliminations with LMGs",xp:5000},
        {text:"Earn [5000] total Objective Score in Objective Modes",xp:5000},
        {text:"Earn [3] Triple Kill Medals (3 rapid Kills)",xp:3500},
        {text:"Earn [3] Bloodthirsty Medals (5 Kills without dying)",xp:3500},
        {text:"Get [25] Eliminations with Secondary Weapons",xp:2500},
        {text:"Earn [3] Stuck Medals (Stick an enemy with a Semtex)",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [1000] Zombie Eliminations with Pack-A-Punch Tier II Weapons or higher",xp:5000},
        {text:"Get [50] Zombie Kills as a result of Ammo Mod activations",xp:5000},
        {text:"Earn [5] Main Tank Medals (10 Kills with Frenzied Guard active)",xp:3500},
        {text:"Kill [15] Zombies while Instant-Kill Power-Ups are active",xp:3500},
        {text:"Survive [5] consecutive Rounds while the Rampage Inducer is active",xp:2500},
        {text:"Kill [25] Zombies who are slowed or frozen",xp:2500}
      ],
      WARZONE:[
        {text:"Get [15] Eliminations with Shotguns",xp:5000},
        {text:"Activate [15] UAV Killstreaks",xp:5000},
        {text:"Get 2 Hipfire Kills in a single match [5] times",xp:3500},
        {text:"Get 2 Kills with Launchers in a single match [3] times",xp:3500},
        {text:"Complete 2 Supply Run Contracts in a single match",xp:2500},
        {text:"Complete a Most Wanted Contract",xp:2500}
      ]
    }
  }
},
{
  name:"Season 2",
  s5Name:"Sword of Swords",
  s8Name:"Canine Havoc",
  masteryReq:8,
  weeks:8,
  weekRewards:[
    {name:"GDL Havoc",type:"New Weapon"},
    {name:"XM325 Titan Wield",type:"Weapon Attachment"},
    {name:"FANG Hoverpoint Elo",type:"Weapon Attachment"},
    {name:"A.R.C. M1 Assault Frame",type:"Weapon Attachment"},
    {name:"Razor 9mm Wildfire Conversion",type:"Conversion Kit"},
    {name:"Lockshot Scorestreak",type:"Scorestreak"},
    {name:"Week 7 Reward — TBD",type:""},
    {name:"Week 8 Reward — TBD",type:""}
  ],
  challenges:{
    0:{
      COOP:[
        {text:"In Endgame: Complete a World Event",xp:5000},
        {text:"Get [500] Eliminations",xp:5000},
        {text:"In Endgame: Complete the Supply Disruption Assignment or any [3] Grid Takedown Activities",xp:3500},
        {text:"Destroy [5] Guild VTOLs with a Launcher",xp:3500},
        {text:"Get [25] Kills with the Ballistic Knife Melee Weapon or Combat Axe Equipment",xp:2500},
        {text:"Get [3] Kills with the Gravemaker Scorestreak",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [300] Eliminations",xp:5000},
        {text:"Win a match & appear in the Winner's Circle [5] times",xp:5000},
        {text:"Call in or activate [25] Scorestreaks",xp:3500},
        {text:"Get [10] Kills with the Ballistic Knife Melee Weapon or Combat Axe Lethal",xp:3500},
        {text:"Kill [5] enemies scrambled by your Scrambler Field Upgrade or Counter UAV Scorestreaks",xp:2500},
        {text:"Get [5] Objective Kills in Objective Modes with Lethals",xp:2500}
      ],
      ZOMBIES:[
        {text:"Earn [25] Massacre Medals (10 Zombies killed rapidly with a weapon)",xp:5000},
        {text:"Rapidly Kill [15] Zombies while using the Ballistic Knife [10] times",xp:5000},
        {text:"Reach Round 10 on Zarya Cosmodrome without opening any doors",xp:3500},
        {text:"Reach Round [25] in Cursed in Astra Malorum",xp:3500},
        {text:"Complete [3] T.E.D.D. Tasks",xp:2500},
        {text:"Revive a Teammate [3] times",xp:2500}
      ],
      WARZONE:[
        {text:"Complete 2 Contracts in a single match [5] times",xp:5000},
        {text:"Get [20] Eliminations with Assault Rifles",xp:5000},
        {text:"Open 15 Loot Caches in a single match [5] times",xp:3500},
        {text:"Get 2 Hipfire Kills in a single match [10] times",xp:3500},
        {text:"Complete [3] Bounty Contracts",xp:2500},
        {text:"Get a Kill using a Killstreak",xp:2500}
      ]
    },
    1:{
      COOP:[
        {text:"Eliminate [200] Guild Tech enemies",xp:5000},
        {text:"Kill [100] Enemies with or affected by your Abilities",xp:5000},
        {text:"In Endgame: complete Toxin Chase or Roadside Salvage activity [3] times",xp:3500},
        {text:"In Endgame: complete the Cargo Intercept or Evidence Collection Assignment [2] times",xp:3500},
        {text:"Get [50] Kills with the Frag Grenade or Cluster Grenade Equipment",xp:2500},
        {text:"In Endgame: successfully Escape in Zone III or higher",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [250] Eliminations with SMGs",xp:5000},
        {text:"Earn [30000] Score in Hardpoint, Overload, or Search & Destroy",xp:5000},
        {text:"Get a Kill while holding your breath with a Compatible Weapon [25] times",xp:3500},
        {text:"Get [10] Kills with the Grim Reaper, Archangel Launcher, or War Machine Scorestreaks",xp:3500},
        {text:"Get [5] Kills with Frag Grenades or Cluster Grenade Lethal",xp:2500},
        {text:"With the Tactical Expert Wildcard equipped: Kill [3] enemies affected by your Tactical",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [1000] Eliminations using Wonder Weapons",xp:5000},
        {text:"Reach at least Round [25] in Survival & Successfully Exfil",xp:5000},
        {text:"Earn [75000] Essence in a Single match of Cursed mode",xp:3500},
        {text:"Get [75] Kills with the Shatter Blast Ammo Mod",xp:3500},
        {text:"Kill [10] Zombies without reloading [20] times",xp:2500},
        {text:"Get [65] Kills using the C4 Lethal",xp:2500}
      ],
      WARZONE:[
        {text:"Get [40] Eliminations",xp:5000},
        {text:"Open [10] Legendary Supply Crates",xp:5000},
        {text:"Destroy [5] Enemy Vehicles",xp:3500},
        {text:"Make Purchases at 2 different Buy Stations in a single match [10] times",xp:3500},
        {text:"Get [5] Kills while riding in Vehicles",xp:2500},
        {text:"Get [5] Kills with Precision Airstrikes",xp:2500}
      ]
    },
    2:{
      COOP:[
        {text:"Eliminate [300] Fear Enemies",xp:5000},
        {text:"In Endgame: Get [300] Eliminations with Exotic Weapons",xp:5000},
        {text:"In Endgame: complete the QuadCore Site Activity [5] times",xp:3500},
        {text:"Eliminate [3] Elite Enemies",xp:3500},
        {text:"In Endgame: Eliminate [25] enemies in Zone IV or higher",xp:2500},
        {text:"In Endgame: perform a Finishing Move on a Guild Demolisher in Zone II or higher",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [250] Eliminations with LMGs",xp:5000},
        {text:"Get [20] Kills with Lethals",xp:5000},
        {text:"Earn [5] Bloodthirsty Medals (5 Kills without Dying)",xp:3500},
        {text:"With an Akimbo Attachment equipped: get [10] Double Kills or better",xp:3500},
        {text:"Kill [3] Enemies affected by your Stun Grenade or Shock Stick Tactical",xp:2500},
        {text:"With the Gunfighter Wildcard equipped: get [50] Eliminations using a Weapon with 8 Attachments",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [500] Eliminations with Pack-a-Punch Weapons in Cursed",xp:5000},
        {text:"Get [250] Kills using Scorestreaks",xp:5000},
        {text:"Get [250] Kills using PHD Flopper explosions",xp:3500},
        {text:"Get [25] Carnage Medals (15 Zombies killed rapidly with the A.R.C. M1)",xp:3500},
        {text:"Get [10] Kills with a single use Dark Flare [5] times",xp:2500},
        {text:"Get [100] Kills using Cluster, Semtex, or Frag Grenades Lethals",xp:2500}
      ],
      WARZONE:[
        {text:"Get [30] Eliminations with Sniper Rifles",xp:5000},
        {text:"Open [30] Legendary Supply Crates",xp:5000},
        {text:"Earn [5] Top 10 Placements",xp:3500},
        {text:"Get 2 Eliminations without dying [5] times",xp:3500},
        {text:"Complete a Most Wanted Contract",xp:2500},
        {text:"Buy Back or Revive [5] Players",xp:2500}
      ]
    },
    3:{
      COOP:[
        {text:"Destroy [25] Guild Drones, Sentry Turrets, or VTOLs",xp:5000},
        {text:"In Endgame: complete the Mystery Cargo Assignment [15] times",xp:5000},
        {text:"In Endgame: Clear a Toxin Field or Toxin Source [5] times",xp:3500},
        {text:"Eliminate [10] Special Enemies",xp:3500},
        {text:"In Endgame: loot Supply Caches or crack Strongboxes [10] times",xp:2500},
        {text:"Get [10] Kills with the D.A.W.G. Scorestreak",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [200] Kills while Aiming Down Sights",xp:5000},
        {text:"Get a Kill without taking damage with a Pistol, Launcher, or Special Weapon [25] times",xp:5000},
        {text:"Get [25] Kills with Scorestreaks",xp:3500},
        {text:"Kill [10] Enemies detected by your Pinpoint Grenade, Scout Pulse, UAV, or HARP Scorestreaks",xp:3500},
        {text:"Earn [10] Revenge Medals (Killed the enemy that killed you last)",xp:2500},
        {text:"Get [2] Kills with a Lethal in a single life",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [1500] Eliminations with Rare or higher Rarity Shotguns in Cursed",xp:5000},
        {text:"Successfully Exfil [10] times in Survival",xp:5000},
        {text:"Get [300] Eliminations while T.E.D.D. Tasks are active",xp:3500},
        {text:"Get [25] Kills with a single Scorestreak [3] times",xp:3500},
        {text:"With a Crossbar Underbarrel equipped: Get [25] Massacre Medals",xp:2500},
        {text:"Get [250] Eliminations while Death Perception is active",xp:2500}
      ],
      WARZONE:[
        {text:"Get [20] Eliminations with Pistols",xp:5000},
        {text:"Win [3] Matches",xp:5000},
        {text:"Get [15] Kills shortly after swapping weapons",xp:3500},
        {text:"Get [5] Kills with Lethals",xp:3500},
        {text:"Buy [5] Killstreaks at Buy Stations",xp:2500},
        {text:"Get a Kill without taking damage [5] times",xp:2500}
      ]
    },
    4:{
      COOP:[
        {text:"In Endgame: Clear [15] Command Centers or Guild Checkpoints",xp:5000},
        {text:"Get [200] Eliminations with a Weapon at Epic Rarity or Higher",xp:5000},
        {text:"Eliminate [15] Guild Guardians",xp:3500},
        {text:"Kill [50] Guild G-R5 or G-R6 disrupted by your EMP Grenade Equipment",xp:3500},
        {text:"Eliminate [10] Special or Elite enemies in a Single Match",xp:2500},
        {text:"Kill [25] Enemies stunned by your Mega Jump or Crash Cart Ability",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [50] Headshots",xp:5000},
        {text:"With the Enforcer, Recon, or Strategist Combat Specialty equipped: get [250] Eliminations",xp:5000},
        {text:"With a Crossbar Under-barrel equipped: get [100] Eliminations",xp:3500},
        {text:"Get [10] Kills with a Lethal that has an Overclock equipped",xp:3500},
        {text:"Kill [10] Enemies distracted by your Decoy Grenade Tactical or Echo Unit Field Upgrade",xp:2500},
        {text:"Get [3] Kills with a Weapon without reloading it",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [500] Kills using Field Upgrades",xp:5000},
        {text:"Get [2] Critical Kills with a single shot [150] times",xp:5000},
        {text:"Get [350] Hipfire Kills with SMGs",xp:3500},
        {text:"Kill [200] Zombies distracted by your Decoy Grenade Tactical",xp:3500},
        {text:"Get [150] Kills with Weapons from the Mystery Box",xp:2500},
        {text:"Complete [5] Rounds without going down [3] times",xp:2500}
      ],
      WARZONE:[
        {text:"Complete [15] Contracts",xp:5000},
        {text:"Get [5] Eliminations in a single match [5] times",xp:5000},
        {text:"Get [10] Eliminations with Shotguns",xp:3500},
        {text:"Get [10] Kills while your Killstreak is active",xp:3500},
        {text:"Complete 2 Supply Run Contracts in a single match",xp:2500},
        {text:"Open [2] Legendary Loot Crates in a single match [3] times",xp:2500}
      ]
    },
    5:{
      COOP:[
        {text:"In Endgame: Complete [25] Activities or Assignments in Zone III or higher",xp:5000},
        {text:"In Endgame: Eliminate [10] HVTs or Prime Targets in Zone II or higher",xp:5000},
        {text:"Prevent [3000] total damage with your Crash Cart or Ballistic Shell Ability",xp:3500},
        {text:"Get [25] Kills with a Melee Weapon or by performing a Finishing Move",xp:3500},
        {text:"In Endgame: Complete the Deep Cover Activity",xp:2500},
        {text:"Get [75] Kills with the Point Turret Equipment or Sentry Turret Scorestreak",xp:2500}
      ],
      MULTIPLAYER:[
        {text:"Get [100] Kills with Assault Rifles while moving",xp:5000},
        {text:"Earn [30000] total Score in Cliff Town, Torque, Grind, or Firing Range",xp:5000},
        {text:"With the Specialist Wildcard equipped: earn a Perk [10] times",xp:3500},
        {text:"Finish [5] Matches having more Kills against your Nemesis than they have against you",xp:3500},
        {text:"Get [3] Triple Kill Medals or better with an SMG",xp:2500},
        {text:"Capture [15] Objectives in Hardpoint, Domination, or Overload",xp:2500}
      ],
      ZOMBIES:[
        {text:"Get [750] Kills with Pistols in Cursed mode",xp:5000},
        {text:"Earn [25] Extermination Medals (25 rapid Kills) with the Ray Gun",xp:5000},
        {text:"Complete [50] Rounds on Paradox Junction",xp:3500},
        {text:"Reach Round 25 or greater and successfully Exfil",xp:3500},
        {text:"Have [8] Perks active at one time",xp:2500},
        {text:"Get [300] Kills with Scorestreaks",xp:2500}
      ],
      WARZONE:[
        {text:"Get [25] Eliminations with Marksman Rifles",xp:5000},
        {text:"Get [20] Kills while under fire",xp:5000},
        {text:"In Black Ops Royale: Earn [2] Top 10 Placements",xp:3500},
        {text:"In Black Ops Royale: Revive or Redeploy your squad [3] times",xp:3500},
        {text:"Get [10] Eliminations using Ground Looted Weapons",xp:2500},
        {text:"In Black Ops Royale: Travel [200] meters with the Grapple Hook",xp:2500}
      ]
    },
    6:{COOP:tbdWeek(7,"S2"),MULTIPLAYER:tbdWeek(7,"S2"),ZOMBIES:tbdWeek(7,"S2"),WARZONE:tbdWeek(7,"S2")},
    7:{COOP:tbdWeek(8,"S2"),MULTIPLAYER:tbdWeek(8,"S2"),ZOMBIES:tbdWeek(8,"S2"),WARZONE:tbdWeek(8,"S2")}
  }
}
];

function tbdWeek(n,s){
  return [
    {text:`Season 2 Week ${n} Challenge — Not Yet Released`,xp:5000},
    {text:`Season 2 Week ${n} Challenge — Not Yet Released`,xp:5000},
    {text:`Season 2 Week ${n} Challenge — Not Yet Released`,xp:3500},
    {text:`Season 2 Week ${n} Challenge — Not Yet Released`,xp:3500},
    {text:`Season 2 Week ${n} Challenge — Not Yet Released`,xp:2500},
    {text:`Season 2 Week ${n} Challenge — Not Yet Released`,xp:2500}
  ];
}

/* ═══════════════════════════════════════
   CONSTANTS & STATE
═══════════════════════════════════════ */
const MODES=['COOP','MULTIPLAYER','ZOMBIES','WARZONE'];
const ML={COOP:'CO-OP & ENDGAME',MULTIPLAYER:'MULTIPLAYER',ZOMBIES:'ZOMBIES',WARZONE:'WARZONE'};
const WRT=6, KEY='cod_v7';
let editMode=false, AW={}, AM={};

/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */
function buildFromDefaults(){
  const seasons = DEFAULT_SEASONS.map(ds=>{
    const s={
      name:ds.name, s5Name:ds.s5Name, s8Name:ds.s8Name,
      masteryReq:ds.masteryReq, weeks:ds.weeks,
      weekRewards:ds.weekRewards.map(r=>({...r})),
      challenges:{}, progress:{}, vp:{}
    };
    for(let w=0;w<ds.weeks;w++){
      s.challenges[w]={};s.progress[w]={};s.vp[w]={};
      for(const m of MODES){
        s.challenges[w][m]=ds.challenges[w][m].map(c=>({...c}));
        s.progress[w][m]=Array(6).fill(false);
        s.vp[w][m]=Array(6).fill(0);
      }
    }
    return s;
  });
  return {act:0, seasons};
}

function load(){
  try{
    const r=localStorage.getItem(KEY);
    if(r) return JSON.parse(r);
  }catch(e){}
  return buildFromDefaults();
}

let D=load();
// patch missing fields
D.seasons.forEach(s=>{
  if(!s.masteryReq) s.masteryReq=8;
  if(!s.weeks) s.weeks=8;
  if(!s.weekRewards) s.weekRewards=Array.from({length:s.weeks},(_,i)=>({name:`Week ${i+1} Reward`,type:''}));
  for(let w=0;w<s.weeks;w++){
    if(!s.challenges[w]) s.challenges[w]={};
    if(!s.progress[w]) s.progress[w]={};
    if(!s.vp[w]) s.vp[w]={};
    for(const m of MODES){
      if(!s.challenges[w][m]) s.challenges[w][m]=Array.from({length:6},(_,i)=>({text:`Week ${w+1} Challenge ${i+1}`,xp:2500}));
      if(!s.progress[w][m]) s.progress[w][m]=Array(6).fill(false);
      if(!s.vp[w][m]) s.vp[w][m]=Array(6).fill(0);
    }
  }
});

function persist(){localStorage.setItem(KEY,JSON.stringify(D));}

/* ═══════════════════════════════════════
   HELPERS
═══════════════════════════════════════ */
function pv(t){const m=t.match(/\[(\d+)\]/);return m?parseInt(m[1]):null;}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function fmt(t){return esc(t).replace(/\[(\d+)\]/g,'<span class="val-hi">$1</span>');}
function isTBD(t){return t.includes('TBD')||t.includes('Not Yet Released');}
function wkDone(si,w){let n=0;const s=D.seasons[si];for(const m of MODES)for(let c=0;c<6;c++)if(s.progress[w][m][c])n++;return n;}
function wkEarned(si,w){return wkDone(si,w)>=WRT;}
function weEarned(si){let n=0,s=D.seasons[si];for(let w=0;w<s.weeks;w++)if(wkEarned(si,w))n++;return n;}
function totDone(si){let n=0,s=D.seasons[si];for(let w=0;w<s.weeks;w++)for(const m of MODES)for(let c=0;c<6;c++)if(s.progress[w][m][c])n++;return n;}
function modeDone(si,w,m){return D.seasons[si].progress[w][m].filter(Boolean).length;}

/* ═══════════════════════════════════════
   RENDER
═══════════════════════════════════════ */
function render(){
  const si=D.act, s=D.seasons[si];
  if(AW[si]===undefined)AW[si]=0;
  const aw=AW[si];
  const amKey=`${si}-${aw}`;
  if(!AM[amKey])AM[amKey]='COOP';
  const am=AM[amKey];
  renderSeasonStrip(si);
  renderWeekTabs(si,aw);
  renderModeTabs(si,aw,am);
  renderScrollArea(si,aw,am);
  renderCompleteBar(si,aw);
  renderSidebar(si);
}

function renderSeasonStrip(si){
  const c=document.getElementById('seasonStrip');
  let h=`<span class="season-strip-lbl">Season</span>`;
  D.seasons.forEach((s,i)=>{
    const we=weEarned(i),td=totDone(i);
    const cls=we>=s.masteryReq?'sc':td>0||we>0?'sp':'';
    h+=`<div class="s-chip ${cls}${i===si?' active':''}" onclick="setSeason(${i})">
      <span class="s-dot"></span>
      ${editMode?`<input class="sname-inp" value="${esc(s.name)}" onchange="D.seasons[${i}].name=this.value" onclick="event.stopPropagation()">`:`${esc(s.name)}`}
      ${D.seasons.length>1?`<span class="del-s" onclick="delSeason(${i},event)">✕</span>`:''}
    </div>`;
  });
  h+=`<button class="btn-add-s" onclick="addSeason()">+</button>`;
  c.innerHTML=h;
}

function renderWeekTabs(si,aw){
  const c=document.getElementById('weekTabsChrome');
  const s=D.seasons[si];
  let h='';
  for(let w=0;w<s.weeks;w++){
    const dn=wkDone(si,w),e=wkEarned(si,w),p=dn>0&&!e;
    const rn=s.weekRewards[w]?s.weekRewards[w].name:'';
    const tbd=isTBD(rn);
    h+=`<div class="wk-tab${e?' wc':p?' wp':''}${w===aw?' active':''}" onclick="setWeek(${si},${w})">
      WEEK ${w+1}
      <span class="wk-tick">✓</span>
      <span class="wk-tab-sub">${e?'COMPLETE':tbd?'TBD':dn+'/'+WRT}</span>
    </div>`;
  }
  c.innerHTML=h;
}

function renderModeTabs(si,aw,am){
  const c=document.getElementById('modeBar');
  c.innerHTML=MODES.map(m=>{
    const md=modeDone(si,aw,m);
    return`<button class="m-tab${m===am?' active':''}" data-m="${m}" onclick="setMode(${si},${aw},'${m}')">${ML[m]}<span class="m-cnt">${md}/6</span></button>`;
  }).join('');
}

function renderScrollArea(si,aw,am){
  const c=document.getElementById('scrollArea');
  const s=D.seasons[si];
  const rw=s.weekRewards[aw]||{name:`Week ${aw+1} Reward`,type:''};
  const wkE=wkEarned(si,aw);
  const dn=wkDone(si,aw);
  const isTBDweek=isTBD(rw.name);

  c.innerHTML=`
    <div class="chl-grid">${Array.from({length:6},(_,i)=>renderCard(si,aw,am,i)).join('')}</div>
    <div class="wk-rewards-section">
      <div class="wk-rew-header">
        <div class="wk-rew-title">
          ${editMode
            ?`<input class="wk-rew-name-edit" value="${esc(rw.name)}" onchange="D.seasons[${si}].weekRewards[${aw}].name=this.value" placeholder="Reward name...">`
            :`WEEK ${aw+1} REWARDS`}
        </div>
        <div class="wk-rew-status${wkE?' earned':''}">
          <span class="rew-star">⭐</span>
          ${wkE?'REWARD EARNED':isTBDweek?'NOT YET AVAILABLE':'COMPLETE '+dn+'/'+WRT+' TO UNLOCK'}
        </div>
      </div>
      <div class="wk-rew-body">
        ${editMode?`
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <input class="wk-rew-name-edit" value="${esc(rw.name)}" onchange="D.seasons[${si}].weekRewards[${aw}].name=this.value" placeholder="Reward name...">
            <input class="wk-rew-name-edit" style="font-size:11px;color:var(--text2);" value="${esc(rw.type||'')}" onchange="D.seasons[${si}].weekRewards[${aw}].type=this.value" placeholder="Type (e.g. Weapon Attachment)">
          </div>`:`
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <div>
              <div class="wk-rew-name">${isTBDweek?`<span style="color:var(--text3);">TBD</span>`:esc(rw.name)}</div>
              ${rw.type?`<div class="wk-rew-type">${esc(rw.type)}</div>`:''}
            </div>
            ${!isTBDweek?`<div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:var(--text2);max-width:380px;">Complete any <span style="color:var(--cyan);font-weight:700;">${WRT}</span> challenges from this week in CO-OP, Multiplayer, Zombies, or Warzone</div>`:''}
          </div>`}
      </div>
    </div>`;
}

function renderCard(si,w,m,c){
  const s=D.seasons[si];
  const chlData=s.challenges[w][m][c];
  const txt=chlData.text, xp=chlData.xp||2500;
  const done=s.progress[w][m][c], max=pv(txt), cur=s.vp[w][m][c]||0;
  const tbd=isTBD(txt);

  if(editMode){
    return`<div class="chl edit-c" data-m="${m}">
      <textarea class="chl-inp" rows="2" id="i-${si}-${w}-${m}-${c}"
        oninput="this.style.height='auto';this.style.height=this.scrollHeight+'px'">${esc(txt)}</textarea>
      <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:10px;color:var(--text3);letter-spacing:1px;">XP:</span>
        <select id="xp-${si}-${w}-${m}-${c}" style="background:var(--bg2);border:1px solid var(--bdr2);color:var(--xp);font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;padding:2px 6px;border-radius:1px;outline:none;" onchange="D.seasons[${si}].challenges[${w}]['${m}'][${c}].xp=parseInt(this.value)">
          <option value="5000"${xp===5000?' selected':''}>5,000</option>
          <option value="3500"${xp===3500?' selected':''}>3,500</option>
          <option value="2500"${xp===2500?' selected':''}>2,500</option>
        </select>
        <span class="edit-hint-sm">Use <em>[number]</em> for tracked value</span>
      </div>
    </div>`;
  }

  const hv=max!==null&&!tbd, pct=hv?Math.min(100,Math.round(cur/max*100)):0;
  const barPct=hv?pct:(done?100:0);
  const xpFmt=xp>=1000?xp.toLocaleString():xp;

  return`<div class="chl${done?' done':''}${tbd?' tbd':''}" data-m="${m}" data-hv="${hv?1:0}"
    id="ch-${si}-${w}-${m}-${c}"
    ${!hv&&!tbd?`onclick="tog(${si},${w},'${m}',${c})"`:''}>
    <div class="chl-body">
      <div class="chl-left">
        <div class="chl-txt">${fmt(txt)}${tbd?'<span class="tbd-badge">TBD</span>':''}</div>
      </div>
      <div class="xp-badge">
        <div class="xp-hex"><span class="xp-ico">XP</span></div>
        <span class="xp-val">${xpFmt}</span>
      </div>
    </div>
    ${hv?`<div class="chl-val-prog">
      <div class="chl-val-info">
        <span class="chl-val-frac">${cur} / ${max}</span>
        <span class="chl-val-pct">${pct}%</span>
      </div>
      <div class="chl-val-ctrls">
        <button class="vbtn" onclick="adj(${si},${w},'${m}',${c},-1,event)">−</button>
        <input class="vnum" type="number" min="0" max="${max}" value="${cur}"
          onchange="setV(${si},${w},'${m}',${c},this.value,event)"
          onclick="event.stopPropagation()">
        <button class="vbtn" onclick="adj(${si},${w},'${m}',${c},1,event)">+</button>
      </div>
    </div>`:''}
    <div class="chl-bar"><div class="chl-bar-fill" style="width:${barPct}%"></div></div>
  </div>`;
}

function renderCompleteBar(si,aw){
  const dn=wkDone(si,aw),earned=wkEarned(si,aw);
  const c=document.getElementById('completeBar');
  const dots=Array.from({length:WRT},(_,i)=>`<div class="dot${i<dn?` filled${earned?' done':''}`:''}" ></div>`).join('');
  const s=D.seasons[si];
  const totalXP=MODES.reduce((acc,m)=>acc+s.challenges[aw][m].reduce((a,ch)=>a+ch.xp,0),0);
  c.innerHTML=`
    <div style="flex:1;display:flex;flex-direction:column;gap:5px;">
      <div class="complete-bar-txt">Complete any <em>${WRT}</em> Challenges from this week in CO-OP & Endgame, Multiplayer, Zombies, or Warzone</div>
      <div class="dots-bar">${dots}</div>
    </div>
    <span class="cb-frac${earned?' done':''}">${dn}/${WRT}</span>
    <div class="cb-xp">
      <div class="cb-xp-hex"><span class="cb-xp-ico">XP</span></div>
      <span class="cb-xp-val">10,000</span>
    </div>`;
}

function renderSidebar(si){
  const s=D.seasons[si];
  const we=weEarned(si),td=totDone(si);
  const mr=s.masteryReq||8;
  const chks8=Array.from({length:mr},(_,i)=>{
    const filled=i<we;
    return`<div class="rew-chk${filled?we>=mr?' golden':' filled':''}"><span class="ck-ico">${filled?'✓':''}</span></div>`;
  }).join('');
  const chks5=Array.from({length:5},(_,i)=>{
    const filled=i<Math.min(we,5);
    return`<div class="rew-chk${filled?we>=5?' golden':' filled':''}"><span class="ck-ico">${filled?'✓':''}</span></div>`;
  }).join('');
  const seasonNum=si+1;
  const totalChlCount=s.weeks*4*6;
  document.getElementById('sidebar').innerHTML=`
    <div class="sidebar-title">
      <h2>SEASON <span>${seasonNum}</span> REWARDS</h2>
      <div class="sidebar-sub">Earn Universal Camos by completing the required number of Weeks over the course of the Season.</div>
    </div>
    <div class="rew-tier">
      <div class="rew-tier-img"><div class="rew-img-placeholder">MASTERY CAMO</div></div>
      <div class="rew-tier-bottom">
        <div class="rew-tier-info">
          ${editMode
            ?`<input class="rew-name-inp" value="${esc(s.s8Name)}" onchange="D.seasons[${si}].s8Name=this.value">`
            :`<div class="rew-tier-name">👑 ${esc(s.s8Name)}</div>`}
          <div class="rew-tier-cond">Earn all <em>${mr}</em> Weekly Rewards</div>
          <div class="rew-checks">${chks8}<span class="rew-prog-txt">${we}/${mr}</span></div>
        </div>
        <div class="rew-xp"><div class="rew-xp-hex"><span class="rew-xp-ico">XP</span></div><span class="rew-xp-val">25,000</span></div>
      </div>
    </div>
    <div class="rew-tier">
      <div class="rew-tier-img"><div class="rew-img-placeholder">SEASONAL CAMO</div></div>
      <div class="rew-tier-bottom">
        <div class="rew-tier-info">
          ${editMode
            ?`<input class="rew-name-inp" value="${esc(s.s5Name)}" onchange="D.seasons[${si}].s5Name=this.value">`
            :`<div class="rew-tier-name">⭐ ${esc(s.s5Name)}</div>`}
          <div class="rew-tier-cond">Earn any <em>5</em> Weekly Rewards</div>
          <div class="rew-checks">${chks5}<span class="rew-prog-txt">${Math.min(we,5)}/5</span></div>
        </div>
        <div class="rew-xp"><div class="rew-xp-hex"><span class="rew-xp-ico">XP</span></div><span class="rew-xp-val">15,000</span></div>
      </div>
    </div>
    <div style="padding:14px 16px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--text3);margin-bottom:10px;">Season Progress</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:12px;color:var(--text2);">Challenges Completed</span>
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;color:var(--cyan);">${td} / ${totalChlCount}</span>
      </div>
      <div style="height:3px;background:var(--panel);border-radius:1px;overflow:hidden;margin-bottom:10px;">
        <div style="height:100%;width:${Math.round(td/totalChlCount*100)}%;background:linear-gradient(90deg,var(--cyan),var(--cyan2));transition:width .4s;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:12px;color:var(--text2);">Weekly Rewards Earned</span>
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;color:${we>=mr?'var(--gold)':we>=5?'var(--cyan)':'var(--text2)'};">${we} / ${mr}</span>
      </div>
      <div style="display:flex;gap:3px;flex-wrap:wrap;">
        ${Array.from({length:s.weeks},(_,w)=>{
          const e=wkEarned(si,w);
          return`<div style="flex:1;min-width:12px;height:4px;border-radius:1px;background:${e?'var(--green)':'var(--bdr2)'};transition:background .3s;" title="Week ${w+1}"></div>`;
        }).join('')}
      </div>
    </div>`;
}

/* ═══════════════════════════════════════
   INTERACTIONS
═══════════════════════════════════════ */
function tog(si,w,m,c){
  D.seasons[si].progress[w][m][c]=!D.seasons[si].progress[w][m][c];
  persist();
  const el=document.getElementById(`ch-${si}-${w}-${m}-${c}`);
  if(el){el.classList.add('popping');setTimeout(()=>el.classList.remove('popping'),300);}
  render();
}
function adj(si,w,m,c,d,e){
  e.stopPropagation();
  const s=D.seasons[si],max=pv(s.challenges[w][m][c].text);if(!max)return;
  let cur=Math.max(0,Math.min(max,(s.vp[w][m][c]||0)+d));
  s.vp[w][m][c]=cur;s.progress[w][m][c]=(cur>=max);
  persist();render();
}
function setV(si,w,m,c,val,e){
  e.stopPropagation();
  const s=D.seasons[si],max=pv(s.challenges[w][m][c].text);if(!max)return;
  let cur=Math.max(0,Math.min(max,parseInt(val)||0));
  s.vp[w][m][c]=cur;s.progress[w][m][c]=(cur>=max);
  persist();render();
}
function setSeason(si){D.act=si;render();}
function setWeek(si,w){AW[si]=w;render();}
function setMode(si,w,m){AM[`${si}-${w}`]=m;render();}
function addSeason(){
  const n=D.seasons.length+1;
  const ns=buildFromDefaults().seasons[0];
  ns.name=`Season ${n}`;
  D.seasons.push(ns);
  D.act=D.seasons.length-1;
  persist();render();
}
function delSeason(si,e){
  e.stopPropagation();
  if(D.seasons.length<=1)return;
  if(!confirm(`Delete "${D.seasons[si].name}"? All progress will be lost.`))return;
  D.seasons.splice(si,1);if(D.act>=D.seasons.length)D.act=D.seasons.length-1;
  persist();render();
}
function toggleEdit(){
  editMode=!editMode;
  const b=document.getElementById('editBtn'),sv=document.getElementById('saveBtn'),f=document.getElementById('editFloat');
  b.textContent=editMode?'✕ Cancel':'✏ Edit';
  b.className=editMode?'btn btn-edit on':'btn btn-edit';
  sv.style.display=editMode?'block':'none';
  f.className=editMode?'edit-float on':'edit-float';
  render();
}
function saveAll(){
  document.querySelectorAll('[id^="i-"]').forEach(el=>{
    const p=el.id.slice(2).split('-');
    const si=+p[0],w=+p[1],m=p[2],c=+p[3];
    const om=pv(D.seasons[si].challenges[w][m][c].text);
    D.seasons[si].challenges[w][m][c].text=el.value;
    const nm=pv(el.value);
    if(nm!==om){D.seasons[si].vp[w][m][c]=0;if(!nm)D.seasons[si].progress[w][m][c]=false;}
  });
  persist();editMode=false;
  document.getElementById('editBtn').textContent='✏ Edit';
  document.getElementById('editBtn').className='btn btn-edit';
  document.getElementById('saveBtn').style.display='none';
  document.getElementById('editFloat').className='edit-float';
  render();
}
function confirmReset(){
  if(!confirm('Reset all challenge data to defaults? This will clear all progress and custom edits.'))return;
  localStorage.removeItem(KEY);
  D=buildFromDefaults();
  AW={};AM={};
  render();
}

render();
