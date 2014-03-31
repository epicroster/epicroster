function getDE() {
	'use strict';
	var Raider = {
			id : "10",
			name : "Raider",
			enable : false,
			type : "machine",
			modelType : "Sk F OT",
			cost : "60",
			count : "1",
			minCount : "1",
			maxCount : "1",
			BS : "4",
			FA : "10",
			SA : "10",
			BA : "10",
			HP : "3",
			specialRules : [
				{name : "Night Vision"}
			],
			upgrades : [{
				id : "3",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Weapon",
				stuff : [{
					id : "1",
					quantity : "1",
					available : true,
					display : 'checkbox',
					name : "Dark Lance",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "2",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Disintegrator Cannon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}, {
				id : "1",
				counterManager : {
					type : "static",
					maxCount : "10",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Shock Prow",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "2",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Torment Grenade Launcher",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "3",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Enhanced Aethersails",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "4",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Retrofire Jets",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "5",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Chain-snares",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "6",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Grisly Trophies",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "7",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Envenomed Blades",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "8",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Splinter Racks",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "9",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Night Shield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "10",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Flickerfield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]
	    };
	var Venom = {
			id : "11",
			name : "Venom",
			enable : false,
			type : "machine",
			modelType : "Sk F OT",
			cost : "55",
			count : "1",
			minCount : "1",
			maxCount : "1",
			BS : "4",
			FA : "10",
			SA : "10",
			BA : "10",
			HP : "3",
			specialRules :  [
				{name : "Night Vision"}
			],
			upgrades :  [{
				id : "3",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Weapon",
				stuff : [{
					id : "1",
					quantity : "1",
					available : false,
					display : 'checkbox',
					name : "Splinter Cannon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "2",
					quantity : "1",
					available : true,
					display : 'checkbox',
					name : "Twin-linked Splinter Rifle",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}, {
					id : "3",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Splinter Cannon",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}, {
				id : "1",
				counterManager : {
					type : "static",
					maxCount : "6",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "3",
					quantity : "1",
					available : false,
					display : 'checkbox',
					name : "Flickerfield",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Retrofire Jets",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Chain-snares",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
					}
				},{
					id : "6",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Grisly Trophies",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Envenomed Blades",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Night Shield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]
	    }
		
return {armyName : "Dark Eldar",
		armyCode : "DE",
			 alliancesList:[{
				armyCode:'BA',
				relationCode:'Bro',
				relationName:'Battle Brothers'
			 },{
				armyCode:"CSM",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"DA",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"DE",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"Dem",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"Eld",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"GK",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"IG",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"Nec",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"Orc",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"SM",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"SoB",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"SW",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"Tau",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"Tyr",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			},{
				armyCode:"Inq",
				relationCode:'Bro',
				relationName:'Battle Brothers'
			}],
			countConditions : {
			hq : {
				min : "1",
				max : "2",
				minError : "you need at least one HQ unit",
				maxError : "you can't have more then two HQ units"
			},
			troops :  {
				min : "2",
				max : "6",
				minError : "you have to take at least two troops choise",
				maxError : "you can't have more then six troops units"
			},
			fast :  {
				min : "0",
				max : "3",
				minError : "same system Error",
				maxError : "you can't have more then three fast units"
			},
			elite :  {
				min : "0",
				max : "3",
				minError : "same system Error",
				maxError : "you can't have more then three elite units"
			},
			heavy :  {
				min : "0",
				max : "3",
				minError : "same system Error",
				maxError : "you can't have more then three heavy units"
			},
			fort :  {
				min : "0",
				max : "3",
				minError : "same system Error",
				maxError : "you can't have more then three heavy units"
			}
		},	
		 units : [{
		id : "1", /*Asdrubael Vect*/
		role : "hq",
		armyCode : "DE",
		name : "Asdrubael Vect",
		icon : 'images/Icons/DarkEldar/HQ/AsdrubaelVect.png',
		upgrades : [{
			id : "5",
			label : "Dais Of Destruction",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "2",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Dais Of Destruction",
				display : 'checkbox',
				modelId : "2",
				cost : "200",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			role : "hq",
			name : "Asdrubael Vect",
			enable : true,
			type : "infantry",
			cost : "240",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "8",
			BS : "8",
			S : "3",
			T : "3",
			W : "4",
			In : "8",
			At : "5",
			Ld : "10",
			save : "4",
			invSave : "2",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "Fearless"},
				{name : "Master Tactician"},
				{name : "Ancient Nemesis"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "7",
					minCount : "7",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shadow Field",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Ghostplate Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Haywire Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "6",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Obsidian Orbs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "7",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Sceptre Of Dark City",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		},{
			id : "2",
			name : "Dais Of Destruction",
			enable : false,
			type : "machine",
			modelType : "Sk F OT",
			cost : "200",
			count : "1",
			minCount : "1",
			maxCount : "1",
			BS : "4",
			FA : "12",
			SA : "12",
			BA : "10",
			specialRules :  [],
			upgrades :  [{
				id : "3",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				stuff : [{
					id : "1",
					quantity : "3",
					available : false,
					display : 'multi',
					name : "Dark Lance",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "3",
						minCount : "3",
					}
				}]
			}]
	    }]
	},{
		id : "2", /*Lady Malys*/
		role : "hq",
		armyCode : "DE",
		name : "Lady Malys",
		icon : 'images/Icons/DarkEldar/HQ/LadyMalys.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Lady Malys",
			enable : true,
			type : "infantry",
			cost : "130",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "7",
			BS : "7",
			S : "3",
			T : "3",
			W : "3",
			In : "7",
			At : "4",
			Ld : "10",
			save : "5",
			invSave : "4",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "Invulnerable Save 4+"},
				{name : "Precognisant"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "5",
					minCount : "5",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabalite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Steal Fan",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "The Crystal Heart",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "The Lady's Blade",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		}]
	},{
		id : "3", /*Drazhar, Master Of Blades*/
		role : "hq",
		armyCode : "DE",
		name : "Drazhar, Master Of Blades",
		icon : 'images/Icons/DarkEldar/HQ/DrazharMasterOfBlades.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Drazhar, Master Of Blades",
			enable : true,
			type : "infantry",
			cost : "230",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "7",
			BS : "7",
			S : "4",
			T : "4",
			W : "3",
			In : "7",
			At : "4",
			Ld : "10",
			save : "2",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "Eternal Warrior"},
				{name : "Fearless"},
				{name : "Darting Strike"},
				{name : "Master Of Blades"},
				{name : "Riposte"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Ancient Incubus Warsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Demiklaives",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		}]
	},{
		id : "4", /*Lelith Hesperax*/
		role : "hq",
		armyCode : "DE",
		name : "Lelith Hesperax",
		icon : 'images/Icons/DarkEldar/HQ/LelithHesperax.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Lelith Hesperax",
			enable : true,
			type : "infantry",
			cost : "175",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "9",
			BS : "9",
			S : "3",
			T : "3",
			W : "3",
			In : "9",
			At : "4",
			Ld : "9",
			save : "6",
			invSave : "4",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "Quicksilver Dodge"},
				{name : "The Penetration Blade"},
				{name : "A League Apart"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wicked Blades And Barbed Hair",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		}]
	},{
		id : "5", /*Urien Rakarth*/
		role : "hq",
		armyCode : "DE",
		name : "Urien Rakarth",
		icon : 'images/Icons/DarkEldar/HQ/UrienRakarth.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Urien Rakarth",
			enable : true,
			type : "infantry",
			cost : "190",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "5",
			BS : "5",
			S : "3",
			T : "5",
			W : "3",
			In : "5",
			At : "3",
			Ld : "9",
			save : "6",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Meld The Flesh"},
				{name : "Father OF Pain"},
				{name : "Master Haemonculus"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "5",
					minCount : "5",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Gnarlskin",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Carset Of Flensing",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Clone Field",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Inhor Gauntlet",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		}]
	},{
		id : "6", /*Duke Sliscus The Serpent*/
		role : "hq",
		armyCode : "DE",
		name : "Duke Sliscus The Serpent",
		icon : 'images/Icons/DarkEldar/HQ/DukeSliscusTheSerpant.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Duke Sliscus The Serpent",
			enable : true,
			type : "infantry",
			cost : "150",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "6",
			BS : "6",
			S : "3",
			T : "3",
			W : "2",
			In : "6",
			At : "3",
			Ld : "9",
			save : "4",
			invSave : "2",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "The Serpent's Venom"},
				{name : "Contraband"},
				{name : "Low Orbit Raid"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "6",
					minCount : "6",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Blast Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shadow Field",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Ghostplate Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "6",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "The Serpent's Bite",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		}]
	},{
		id : "7", /*Kheradruakh, The Decapitator*/
		role : "hq",
		armyCode : "DE",
		name : "Kheradruakh, The Decapitator",
		icon : 'images/Icons/DarkEldar/HQ/KheradruakhTheDecapitator.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Kheradruakh, The Decapitator",
			enable : true,
			type : "infantry",
			cost : "140",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "6",
			BS : "5",
			S : "5",
			T : "3",
			W : "3",
			In : "6",
			At : "4",
			Ld : "9",
			save : "-",
			invSave : "5",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "Move Through Cover"},
				{name : "Baleblast"},
				{name : "Stealth"},
				{name : "Shade Stalker"},
				{name : "Hunter Of Heads"},
				{name : "Altered Physique"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Decapitator",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		}]
	},{
		id : "8", /*Baron Sathonyx*/
		role : "hq",
		armyCode : "DE",
		name : "Baron Sathonyx",
		icon : 'images/Icons/DarkEldar/HQ/BaronSathonyx.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Baron Sathonyx",
			enable : true,
			type : "infantry",
			modelType : "JmpIn(Ch)",
			cost : "105",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "6",
			BS : "6",
			S : "3",
			T : "3",
			W : "2",
			In : "6",
			At : "3",
			Ld : "9",
			save : "5",
			invSave : "2",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "Hit And Run"},
				{name : "Master Of The Skies"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "8",
					minCount : "8",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shadow Field",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Hellglaive",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Phantasm Grenade Launcher",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "6",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Custom Skyboard",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "7",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Bones Of The Seer",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "8",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Twilight Shroud",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		}]
	},{
		id : "9", /*Archon*/
		role : "hq",
		armyCode : "DE",
		name : "Archon",
		icon : 'images/Icons/DarkEldar/HQ/Archon.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Archon",
			enable : true,
			type : "infantry",
			cost : "70",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "7",
			BS : "7",
			S : "3",
			T : "3",
			W : "3",
			In : "7",
			At : "4",
			Ld : "10",
			save : "5",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabalite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "3", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Blast Pistol",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Blaster",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "8",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Electrocorrsive Whip",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Huskblade",
					cost : "35",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "4", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "9",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Haywire Grenades",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Ghostplate Armour",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Combat Drugs",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Soul-trap",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Djin Blade",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Clone Field",
					cost : "20",
					conditions :  [{
						id : "1",
						modelId : "1",
						type : "dependOnUpgradeChecked",
						upgradeId : "4",
						stuffId : "8"
					}],						
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Phantasm Grenade Launcher",
					cost : "25",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "8",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Shadow Field",
					cost : "30",
					conditions :  [{
						id : "1",
						modelId : "1",
						type : "dependOnUpgradeChecked",
						upgradeId : "4",
						stuffId : "6"
					}],							
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Webway Portal",
					cost : "35",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		}]
	},{
		id : "10", /*The Court Of The Archon*/
		role : "hq",
		armyCode : "DE",
		name : "The Court Of The Archon",
		icon : 'images/Icons/DarkEldar/HQ/TheCourtOfTheArchon.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Medusae",
			enable : true,
			type : "infantry",
			cost : "15",
			count : "1",
			minCount : "1",
			maxCount : "2",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "1",
			Ld : "9",
			save : "5",
			specialRules :  [
				{name : "Eyeburst"},
				{name : "Power From Pain"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabalite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		},{
			id : "2",
			role : "hq",
			name : "Ur-Ghul",
			enable : true,
			type : "infantry",
			cost : "15",
			count : "1",
			minCount : "1",
			maxCount : "5",
			WS : "4",
			BS : "0",
			S : "4",
			T : "3",
			W : "1",
			In : "5",
			At : "3",
			Ld : "3",
			save : "-",
			specialRules :  [
				{name : "Furious Charge"},
				{name : "Power From Pain"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Claws And Needle-teeth",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		},{
			id : "3",
			role : "hq",
			name : "Lhamaean",
			enable : true,
			type : "infantry",
			cost : "10",
			count : "1",
			minCount : "1",
			maxCount : "2",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "1",
			Ld : "9",
			save : "5",
			specialRules :  [
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "Mistress Of Poisons"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabalite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Poisoned Weapon (2+)",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		},{
			id : "4",
			role : "hq",
			name : "Sslyth",
			enable : true,
			type : "infantry",
			cost : "35",
			count : "1",
			minCount : "1",
			maxCount : "3",
			WS : "4",
			BS : "4",
			S : "5",
			T : "5",
			W : "2",
			In : "5",
			At : "3",
			Ld : "3",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "4",
					minCount : "4",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabalite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shardcarbine",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		}]
	},{
		id : "11", /*Succubus*/
		role : "hq",
		armyCode : "DE",
		name : "Succubus",
		icon : 'images/Icons/DarkEldar/HQ/Succubus.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Succubus",
			enable : true,
			type : "infantry",
			cost : "65",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "8",
			BS : "6",
			S : "3",
			T : "3",
			W : "3",
			In : "8",
			At : "4",
			Ld : "9",
			save : "6",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Fleet"},
				{name : "Dodge 4+"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "3", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Blast Pistol",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "8",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Electrocorrsive Whip",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Hydra Gauntlets",
					cost : "5",
					value : "2",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "10",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Shardnet And Impaler",
					cost : "5",
					value : "2",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "11",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Razorflails",
					cost : "10",
					value : "2",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "5", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Grenades",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Haywire Grenades",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		}]
	},{
		id : "12", /*Haemonculus*/
		role : "hq",
		armyCode : "DE",
		name : "Haemonculus",
		icon : 'images/Icons/DarkEldar/HQ/Haemonculus.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Haemonculus",
			enable : true,
			type : "infantry",
			cost : "50",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "4",
			W : "2",
			In : "4",
			At : "2",
			Ld : "8",
			save : "6",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Altered Physique"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Gnarlskin",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "3", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Stinger Pistol",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Mindphase Gauntlet",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "8",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Electrocorrsive Whip",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Flesh Gauntlet",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "10",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Huskblade",
					cost : "35",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "5", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Animus Vitae",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Casket Of Flensing",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Liquifier Gun",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Soul-trap",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Vexator Mask",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Scissorhand",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Archangel Of Pain",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "8",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Hexrifle",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Shattershard",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "10",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Crucible Of Maledictus",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "11",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Orb Of Despair",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "12",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Dark Gate",
					cost : "25",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "13",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Webway Portal",
					cost : "35",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		}]
	},{
		id : "13", /*Haemonculus Ancient*/
		role : "hq",
		armyCode : "DE",
		name : "Haemonculus Ancient",
		icon : 'images/Icons/DarkEldar/HQ/HaemonculusAncient.png',
		upgrades : [],
		models : [{
			id : "1",
			role : "hq",
			name : "Haemonculus Ancient",
			enable : true,
			type : "infantry",
			cost : "80",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "5",
			BS : "5",
			S : "3",
			T : "4",
			W : "3",
			In : "5",
			At : "3",
			Ld : "9",
			save : "6",
			specialRules :  [
				{name : "Independent Character"},
				{name : "Night Vision"},
				{name : "Power From Pain"},
				{name : "Altered Physique"}
			],
			upgrades :  [{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Gnarlskin",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "3", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Stinger Pistol",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Mindphase Gauntlet",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "8",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Electrocorrsive Whip",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Flesh Gauntlet",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "10",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Huskblade",
					cost : "35",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "5", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Animus Vitae",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Casket Of Flensing",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Liquifier Gun",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Soul-trap",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Vexator Mask",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Scissorhand",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Archangel Of Pain",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "8",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Hexrifle",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Shattershard",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "10",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Crucible Of Maledictus",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "11",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Orb Of Despair",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "12",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Dark Gate",
					cost : "25",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "13",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Webway Portal",
					cost : "35",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		}]
	},{
		id : "14", /*Incubi*/
		role : "elite",
		armyCode : "DE",
		name : "Incubi",
		icon : 'images/Icons/DarkEldar/Elite/Incubi.png',
		upgrades : [{
			id : "5",
			label : "Klaivex",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Klaivex",
				display : 'checkbox',
				modelId : "2",
				cost : "15",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id : "6",
			label : "Transport",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Raider",
				display : 'checkbox',
				modelId : "10",
				cost : "60",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			},{
				id : "2",
				quantity : "0",
				available : true,
				name : "Venom",
				display : 'checkbox',
				modelId : "11",
				cost : "55",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Incubi",
			enable : true,
			type : "infantry",
			cost : "22",
			count : "3",
			minCount : "3",
			maxCount : "10",
			WS : "5",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "2",
			Ld : "9",
			save : "3",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Incubus Warsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Klaive",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		},{
			id : "2",
			role : "troops",
			name : "Klaivex",
			enable : false,
			type : "infantry",
			cost : "37",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "6",
			BS : "5",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "3",
			save : "3",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Incubus Warsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Klaive",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Demiklaives",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Powers",
				stuff : [{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Murderous Assault",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Onslaught",
					cost : "14",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Bloodstone",
				stuff : [{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Bloodstone",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},
		Raider,
		Venom]
	},{
		id : "15", /*Grotesques*/
		role : "elite",
		armyCode : "DE",
		name : "Grotesques",
		icon : 'images/Icons/DarkEldar/Elite/Grotesques.png',
		 upgrades : [{
			id : "5",
			label : "Aberration",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Aberration",
				display : 'checkbox',
				modelId : "2",
				cost : "10",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id : "6",
			label : "Transport",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Raider",
				display : 'checkbox',
				modelId : "10",
				cost : "60",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Grotesques",
			enable : true,
			type : "infantry",
			cost : "35",
			count : "3",
			minCount : "3",
			maxCount : "10",
			WS : "4",
			BS : "1",
			S : "5",
			T : "5",
			W : "3",
			In : "4",
			At : "3",
			Ld : "3",
			save : "6",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Altered Physique"},
				{name : "Berserk Rampage"},
				{name : "Bulky"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Gnarlskin",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "3", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Weapon",
				stuff : [{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Liquifier Gun",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		},{
			id : "2",
			name : "Aberration",
			enable : false,
			type : "infantry",
			cost : "45",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "1",
			S : "5",
			T : "5",
			W : "3",
			In : "4",
			At : "5",
			save : "6",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Altered Physique"},
				{name : "Berserk Rampage"},
				{name : "Bulky"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Gnarlskin",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Mindphase Gauntlet",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Scissorhand",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Flesh Gauntlet",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},
		Raider]
	},{
		id : "16", /*Wracks*/
		role : "elite",
		armyCode : "DE",
		name : "Wracks",
		icon : 'images/Icons/DarkEldar/Elite/Wracks.png',
		 upgrades : [{
			id : "5",
			label : "Acothyst",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Acothyst",
				display : 'checkbox',
				modelId : "2",
				cost : "10",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id : "6",
			label : "Transport",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Raider",
				display : 'checkbox',
				modelId : "10",
				cost : "60",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			},{
				id : "2",
				quantity : "0",
				available : true,
				name : "Venom",
				display : 'checkbox',
				modelId : "11",
				cost : "55",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id:"1",
			maxquantity:"1",
			label:"Troops Choice",
			available:true,
			counterManager:{
				type:"static",
				maxCount:"1",
				minCount:"0",
			},
			checked:false,
			type:"static",
			stuff:[{
				id:"1",
				quantity:"0",
				available:true,
				display:'checkbox',
				name:"Count as Troops",
				cost:"0",
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Wracks",
			enable : true,
			type : "infantry",
			cost : "10",
			count : "3",
			minCount : "3",
			maxCount : "10",
			WS : "4",
			BS : "4",
			S : "3",
			T : "4",
			W : "1",
			In : "4",
			At : "1",
			Ld : "8",
			save : "6",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Altered Physique"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Gnarlskin",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "2",
					display : 'multi',
					available : false,
					name : "Poison Weapon 4+",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "2",
						minCount : "2",
					}
				}]
			},{
				id : "2", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "4",
						minCount : "0",
						maxCount : "1"
					},{
						modelCount : "9",
						minCount : "0",
						maxCount : "2"
					}],
				},	
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : false,
					name : "Liquifier Gun",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "4",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "2"
						}],
					}
				}]
			}]	
		},{
			id : "2",
			name : "Acothyst",
			enable : false,
			type : "infantry",
			cost : "20",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "4",
			W : "1",
			In : "4",
			At : "2",
			save : "6",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Altered Physique"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Gnarlskin",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "2",
					display : 'multi',
					available : false,
					name : "Poison Weapon 4+",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "2",
						minCount : "2",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Stinger Pistol",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Mindphase Gauntlet",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Hexrifle",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Scissorhand",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Flesh Gauntlet",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "8",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Electrocorrosive Whip",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},
		Raider,
		Venom]
	},{
		id : "17", /*Mandrakes*/
		role : "elite",
		armyCode : "DE",
		name : "Mandrakes",
		icon : 'images/Icons/DarkEldar/Elite/Mandrakes.png',
		upgrades : [],
		models : [{
			id : "1",
			name : "Mandrakes",
			enable : true,
			type : "infantry",
			cost : "15",
			count : "3",
			minCount : "3",
			maxCount : "10",
			WS : "4",
			BS : "4",
			S : "4",
			T : "3",
			W : "1",
			In : "5",
			At : "2",
			Ld : "8",
			save : "-",
			invSave : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"},
				{name : "Infiltrate"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Evil-looking Blade",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		},{
			id : "2",
			name : "Nightfiend",
			enable : false,
			type : "infantry",
			cost : "25",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "4",
			T : "3",
			W : "1",
			In : "5",
			At : "3",
			save : "-",
			invSave : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"},
				{name : "Infiltrate"},
				{name : "Move Through Cover"},
				{name : "Stealth"},
				{name : "Baleblast"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Evil-looking Blade",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		}]
	},{
		id : "18", /*Harlequins*/
		role : "elite",
		armyCode : "DE",
		name : "Harlequins",
		icon : 'images/Icons/DarkEldar/Elite/Harlequins.png',
		 upgrades : [{
			id : "5",
			label : "Characters",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "3",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Death Jester",
				display : 'checkbox',
				modelId : "2",
				cost : "10",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			},{
				id : "2",
				quantity : "0",
				available : true,
				name : "Shadowseer",
				display : 'checkbox',
				modelId : "3",
				cost : "30",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			},{
				id : "3",
				quantity : "0",
				available : true,
				name : "Troupe Master",
				display : 'checkbox',
				modelId : "4",
				cost : "20",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			role : "hq",
			name : "Harlequins",
			enable : true,
			type : "infantry",
			cost : "18",
			count : "5",
			minCount : "5",
			maxCount : "10",
			WS : "5",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "2",
			Ld : "9",
			save : "-",
			invSave : "5",
			specialRules :  [
				{name : "Furious Charge"},
				{name : "Hit & Run"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shuriken Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Flip Belt",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Holo-suit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				label : "Special Pistols",
				type : "static",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : false,
					name : "Fusion Pistol",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "2",
						minCount : "0",
					}
				}]
			},{
				id : "3", /*wargear*/
				maxquantity : "1",
				counterManager : {
					modelId : "1",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "2",
						minCount : "2",
						maxCount : "2"
					},{
						modelCount : "3",
						minCount : "3",
						maxCount : "3"
					},{
						modelCount : "4",
						minCount : "4",
						maxCount : "4"
					},{
						modelCount : "5",
						minCount : "5",
						maxCount : "5"
					},{
						modelCount : "6",
						minCount : "6",
						maxCount : "6"
					},{
						modelCount : "7",
						minCount : "7",
						maxCount : "7"
					},{
						modelCount : "8",
						minCount : "8",
						maxCount : "8"
					},{
						modelCount : "9",
						minCount : "9",
						maxCount : "9"
					},{
						modelCount : "10",
						minCount : "10",
						maxCount : "10"
					}],
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "5",
					display : 'multi',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						modelId : "1",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "5"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "6"
						},{
							modelCount : "7",
							minCount : "0",
							maxCount : "7"
						},{
							modelCount : "8",
							minCount : "0",
							maxCount : "8"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "9"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "10"
						}],
					}
				},{
					id : "2",
					quantity : "5",
					display : 'multi',
					available : true,
					name : "Harlequin's Kiss",
					cost : "4",
					counterManager : {
						modelId : "1",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "5"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "6"
						},{
							modelCount : "7",
							minCount : "0",
							maxCount : "7"
						},{
							modelCount : "8",
							minCount : "0",
							maxCount : "8"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "9"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "10"
						}],
					}
				}]
			}]	
		},{
			id : "2",
			name : "Death Jester",
			enable : false,
			type : "infantry",
			cost : "28",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "5",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "2",
			save : "-",
			invSave : "5",
			specialRules :  [
				{name : "Furious Charge"},
				{name : "Hit & Run"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Holo-suit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Flip Belt",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shrieker Cannon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},{
			id : "3",
			name : "Shadowseer",
			enable : false,
			type : "infantry",
			cost : "48",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "5",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "2",
			save : "-",
			invSave : "5",
			specialRules :  [
				{name : "Furious Charge"},
				{name : "Hit & Run"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "5",
					minCount : "5",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Holo-suit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Flip Belt",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shuriken Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Hallucinogen grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},{
			id : "4",
			name : "Troupe Master",
			enable : false,
			type : "infantry",
			cost : "38",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "5",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "2",
			save : "-",
			invSave : "5",
			specialRules :  [
				{name : "Furious Charge"},
				{name : "Hit & Run"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "4",
					minCount : "4",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Holo-suit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Flip Belt",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shuriken Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Harlequin's Kiss",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Sword",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		}]
	},{
		id : "19", /*Kabalite Warrior*/
		role : "troops",
		armyCode : "DE",
		name : "Kabalite Warrior",
		icon : 'images/Icons/DarkEldar/Elite/KabaliteTrueborn.png',
		 upgrades : [{
			id : "5",
			label : "Sybarite",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Sybarite",
				display : 'checkbox',
				modelId : "2",
				cost : "5",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id : "6",
			label : "Transport",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Raider",
				display : 'checkbox',
				modelId : "10",
				cost : "60",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			},{
				id : "2",
				quantity : "0",
				available : true,
				name : "Venom",
				display : 'checkbox',
				modelId : "11",
				cost : "55",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Kabalite Warrior",
			enable : true,
			type : "infantry",
			cost : "9",
			count : "5",
			minCount : "5",
			maxCount : "20",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "1",
			Ld : "8",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabalite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Rifle",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1,2",
					countSet : [{
						modelCount : "9",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "19",
						minCount : "0",
						maxCount : "1"
					},{
						modelCount : "20",
						minCount : "0",
						maxCount : "2"
					}],
				},	
				available : true,
				type : "static",
				label : "Special Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Splinter Cannon",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1,2",
						countSet : [{
							modelCount : "9",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "19",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "20",
							minCount : "0",
							maxCount : "2"
						}],
					}
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Dark Lance",
					cost : "0",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1,2",
						countSet : [{
							modelCount : "9",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "19",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "20",
							minCount : "0",
							maxCount : "2"
						}],
					}
				}]
			},{
				id : "3", /*wargear*/
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},	
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Shredder",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Blaster",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		},{
			id : "2",
			name : "Sybarite",
			enable : false,
			type : "infantry",
			cost : "19",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "2",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Armour",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabolite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Splinter Rifle",
					value : "2",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Stinger Pistol",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Blast Pistol",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Ghostplate Armour",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Phantasm Grenade Launcher",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},
		Raider,
		Venom]
	},{
		id : "20", /*Hekatrix Bloodbrides*/
		role : "elite",
		armyCode : "DE",
		name : "Hekatrix Bloodbrides",
		icon : 'images/Icons/DarkEldar/Elite/HekatrixBloodbrides.png',
		 upgrades : [{
			id : "5",
			label : "Syren",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Syren",
				display : 'checkbox',
				modelId : "2",
				cost : "5",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id : "6",
			label : "Transport",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Raider",
				display : 'checkbox',
				modelId : "10",
				cost : "60",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			},{
				id : "2",
				quantity : "0",
				available : true,
				name : "Venom",
				display : 'checkbox',
				modelId : "11",
				cost : "55",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Hekatrix Bloodbride",
			enable : true,
			type : "infantry",
			cost : "13",
			count : "3",
			minCount : "3",
			maxCount : "10",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "2",
			Ld : "9",
			save : "6",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"},
				{name : "Dodge 4+"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "5",
					minCount : "5",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "3",
						minCount : "0",
						maxCount : "1"
					},{
						modelCount : "6",
						minCount : "0",
						maxCount : "2"
					},{
						modelCount : "9",
						minCount : "0",
						maxCount : "3"
					},{
						modelCount : "10",
						minCount : "0",
						maxCount : "3"
					}],
				},	
				available : true,
				type : "static",
				label : "Special Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Razorflails",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "3"
						}],
					}
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Hydra Gauntlets",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "3"
						}],
					}
				},{
					id : "3",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Shardnet And Impaler",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "3"
						}],
					}
				}]
			},{
				id : "7", /*Haywire Grenades*/
				type : "counter",
				label : "Grenades",
				available : true,
				setCounter : {
					type : "dependOnModelCount",
					modelId : "1,2",
					countSet : [{
						modelCount : "3",
						minCount : "3",
						maxCount : "3"
					},{
						modelCount : "4",
						minCount : "4",
						maxCount : "4"
					},{
						modelCount : "5",
						minCount : "5",
						maxCount : "5"
					},{
						modelCount : "6",
						minCount : "6",
						maxCount : "6"
					},{
						modelCount : "7",
						minCount : "7",
						maxCount : "7"
					},{
						modelCount : "8",
						minCount : "8",
						maxCount : "8"
					},{
						modelCount : "9",
						minCount : "9",
						maxCount : "9"
					},{
						modelCount : "10",
						minCount : "10",
						maxCount : "10"
					}]
				},
				counterManager : {
						type : "static",
						maxCount : "0",
						minCount : "0",
				},	
				stuff : [{
					id : "51",
					quantity : "0",
					available : true,
					display : 'checkbox',
					type : 'counter',
					name : "Haywire Grenades",
					cost : "2",
					counterManager : {
						type : "static",
						maxCount : "0",
						minCount : "0",
					}	
				}]
			}]	
		},{
			id : "2",
			name : "Syren",
			enable : false,
			type : "infantry",
			cost : "23",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "3",
			Ld : "9",
			save : "6",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"},
				{name : "Dodge 4+"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Special Pistol",
				stuff : [{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Blast Pistol",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "4", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Grenades",
				stuff : [{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Phantasm Grenade Launcher",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},
		Raider,
		Venom]
	},{
		id : "21", /*Kabalite Trueborn*/
		role : "elite",
		armyCode : "DE",
		name : "Kabalite Trueborn",
		icon : 'images/Icons/DarkEldar/Troops/KabaliteWarriors.png',
		upgrades : [{
			id : "5",
			label : "Dracon",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Dracon",
				display : 'checkbox',
				modelId : "2",
				cost : "10",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id : "6",
			label : "Transport",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Raider",
				display : 'checkbox',
				modelId : "10",
				cost : "60",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			},{
				id : "2",
				quantity : "0",
				available : true,
				name : "Venom",
				display : 'checkbox',
				modelId : "11",
				cost : "55",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Kabalite Trueborn",
			enable : true,
			type : "infantry",
			cost : "12",
			count : "3",
			minCount : "3",
			maxCount : "10",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "2",
			Ld : "9",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabalite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "2",
						minCount : "2",
						maxCount : "2"
					},{
						modelCount : "3",
						minCount : "3",
						maxCount : "3"
					},{
						modelCount : "4",
						minCount : "4",
						maxCount : "4"
					},{
						modelCount : "5",
						minCount : "5",
						maxCount : "5"
					},{
						modelCount : "6",
						minCount : "6",
						maxCount : "6"
					},{
						modelCount : "7",
						minCount : "7",
						maxCount : "7"
					},{
						modelCount : "8",
						minCount : "8",
						maxCount : "8"
					},{
						modelCount : "9",
						minCount : "9",
						maxCount : "9"
					},{
						modelCount : "10",
						minCount : "10",
						maxCount : "10"
					}],
				},	
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "3",
					display : 'multi',
					available : true,
					name : "Splinter Rifle",
					cost : "0",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "5"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "6"
						},{
							modelCount : "7",
							minCount : "0",
							maxCount : "7"
						},{
							modelCount : "8",
							minCount : "0",
							maxCount : "8"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "9"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "10"
						}],
					}
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Splinter Pistol And Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "5"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "6"
						},{
							modelCount : "7",
							minCount : "0",
							maxCount : "7"
						},{
							modelCount : "8",
							minCount : "0",
							maxCount : "8"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "9"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "10"
						}],
					}
				},{
					id : "3",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Shardcarabine",
					cost : "5",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "5"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "6"
						},{
							modelCount : "7",
							minCount : "0",
							maxCount : "7"
						},{
							modelCount : "8",
							minCount : "0",
							maxCount : "8"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "9"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "10"
						}],
					}
				}]
			},{
				id : "3", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "2",
						minCount : "0",
						maxCount : "2"
					},{
						modelCount : "3",
						minCount : "0",
						maxCount : "3"
					},{
						modelCount : "4",
						minCount : "0",
						maxCount : "4"
					},{
						modelCount : "5",
						minCount : "0",
						maxCount : "4"
					},{
						modelCount : "10",
						minCount : "0",
						maxCount : "4"
					}],
				},	
				available : true,
				type : "static",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Shredder",
					cost : "5",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "4"
						}],
					}
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Blaster",
					cost : "15",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "4"
						}],
					}
				}]
			},{
				id : "4", /*wargear*/
				counterManager : {
					type : "static",
					minCount : "0",
					maxCount : "2"
				},	
				available : true,
				type : "static",
				label : "Special Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Splinter Cannon",
					cost : "10",
					counterManager : {
						type : "static",
						minCount : "0",
						maxCount : "2"
					}
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Dark Lance",
					cost : "0",
					counterManager : {
						type : "static",
						minCount : "0",
						maxCount : "2"
					}
				}]
			},{
				id : "6", /*Plasma Grenades*/
				type : "counter",
				label : "Grenades",
				available : true,
				setCounter : {
					type : "dependOnModelCount",
					modelId : "1,2",
					countSet : [{
						modelCount : "2",
						minCount : "2",
						maxCount : "2"
					},{
						modelCount : "3",
						minCount : "3",
						maxCount : "3"
					},{
						modelCount : "4",
						minCount : "4",
						maxCount : "4"
					},{
						modelCount : "5",
						minCount : "5",
						maxCount : "5"
					},{
						modelCount : "6",
						minCount : "6",
						maxCount : "6"
					},{
						modelCount : "7",
						minCount : "7",
						maxCount : "7"
					},{
						modelCount : "8",
						minCount : "8",
						maxCount : "8"
					},{
						modelCount : "9",
						minCount : "9",
						maxCount : "9"
					},{
						modelCount : "10",
						minCount : "10",
						maxCount : "10"
					}]
				},
				counterManager : {
						type : "static",
						maxCount : "0",
						minCount : "0",
				},	
				stuff : [{
					id : "51",
					quantity : "0",
					available : true,
					display : 'checkbox',
					type : 'counter',
					name : "Plasma Grenades",
					cost : "1",
					counterManager : {
						type : "static",
						maxCount : "0",
						minCount : "0",
					}	
				}]
			},{
				id : "7", /*Haywire Grenades*/
				type : "counter",
				label : "Grenades",
				available : true,
				setCounter : {
					type : "dependOnModelCount",
					modelId : "1,2",
					countSet : [{
						modelCount : "2",
						minCount : "2",
						maxCount : "2"
					},{
						modelCount : "3",
						minCount : "3",
						maxCount : "3"
					},{
						modelCount : "4",
						minCount : "4",
						maxCount : "4"
					},{
						modelCount : "5",
						minCount : "5",
						maxCount : "5"
					},{
						modelCount : "6",
						minCount : "6",
						maxCount : "6"
					},{
						modelCount : "7",
						minCount : "7",
						maxCount : "7"
					},{
						modelCount : "8",
						minCount : "8",
						maxCount : "8"
					},{
						modelCount : "9",
						minCount : "9",
						maxCount : "9"
					},{
						modelCount : "10",
						minCount : "10",
						maxCount : "10"
					}]
				},
				counterManager : {
						type : "static",
						maxCount : "0",
						minCount : "0",
				},	
				stuff : [{
					id : "51",
					quantity : "0",
					available : true,
					display : 'checkbox',
					type : 'counter',
					name : "Haywire Grenades",
					cost : "2",
					counterManager : {
						type : "static",
						maxCount : "0",
						minCount : "0",
					}	
				}]
			}]	
		},{
			id : "2",
			name : "Dracon",
			enable : false,
			type : "infantry",
			cost : "17",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "3",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Kabolite Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Splinter Rifle",
					value : "2",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Stinger Pistol",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Blast Pistol",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Ghostplate Armour",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Phantasm Grenade Launcher",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},
		Raider,
		Venom]
	},{
		id : "22", /*Wyches*/
		role : "troops",
		armyCode : "DE",
		name : "Wyches",
		icon : 'images/Icons/DarkEldar/Troops/Wyches.png',
		 upgrades : [{
			id : "5",
			label : "Hekatrix",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Hekatrix",
				display : 'checkbox',
				modelId : "2",
				cost : "10",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id : "6",
			label : "Transport",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Raider",
				display : 'checkbox',
				modelId : "10",
				cost : "60",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			},{
				id : "2",
				quantity : "0",
				available : true,
				name : "Venom",
				display : 'checkbox',
				modelId : "11",
				cost : "55",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Wych",
			enable : true,
			type : "infantry",
			cost : "10",
			count : "5",
			minCount : "5",
			maxCount : "15",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "1",
			Ld : "8",
			save : "6",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"},
				{name : "Dodge 4+"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "5",
					minCount : "5",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "3",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "5",
						minCount : "0",
						maxCount : "1"
					},{
						modelCount : "10",
						minCount : "0",
						maxCount : "2"
					},{
						modelCount : "15",
						minCount : "0",
						maxCount : "3"
					}],
				},	
				available : true,
				type : "static",
				label : "Special Weapon",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Razorflails",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "15",
							minCount : "0",
							maxCount : "3"
						}],
					}	
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Hydra Gauntlets",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "15",
							minCount : "0",
							maxCount : "3"
						}],
					}
				},{
					id : "3",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Shardnet And Impaler",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "15",
							minCount : "0",
							maxCount : "3"
						}],
					}
				}]
			},{
				id : "7", /*Haywire Grenades*/
				type : "counter",
				label : "Grenades",
				available : true,
				setCounter : {
					type : "dependOnModelCount",
					modelId : "1,2",
					countSet : [{
						modelCount : "5",
						minCount : "5",
						maxCount : "5"
					},{
						modelCount : "6",
						minCount : "6",
						maxCount : "6"
					},{
						modelCount : "7",
						minCount : "7",
						maxCount : "7"
					},{
						modelCount : "8",
						minCount : "8",
						maxCount : "8"
					},{
						modelCount : "9",
						minCount : "9",
						maxCount : "9"
					},{
						modelCount : "10",
						minCount : "10",
						maxCount : "10"
					},{
						modelCount : "11",
						minCount : "11",
						maxCount : "11"
					},{
						modelCount : "12",
						minCount : "12",
						maxCount : "12"
					},{
						modelCount : "13",
						minCount : "13",
						maxCount : "13"
					},{
						modelCount : "14",
						minCount : "14",
						maxCount : "14"
					},{
						modelCount : "15",
						minCount : "15",
						maxCount : "15"
					}]
				},
				counterManager : {
						type : "static",
						maxCount : "0",
						minCount : "0",
				},	
				stuff : [{
					id : "51",
					quantity : "0",
					available : true,
					display : 'checkbox',
					type : 'counter',
					name : "Haywire Grenades",
					cost : "2",
					counterManager : {
						type : "static",
						maxCount : "0",
						minCount : "0",
					}	
				}]
			}]	
		},{
			id : "2",
			name : "Hekatrix",
			enable : false,
			type : "infantry",
			cost : "20",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "2",
			Ld : "9",
			save : "6",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"},
				{name : "Dodge 4+"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Special Pistol",
				stuff : [{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Blast Pistol",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "4", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Grenades",
				stuff : [{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Phantasm Grenade Launcher",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		},
		Raider,
		Venom]
	},{
		id : "23", /*Hellions*/
		role : "fast",
		armyCode : "DE",
		name : "Hellions",
		icon : 'images/Icons/DarkEldar/Fast/Hellions.png',
		 upgrades : [{
			id : "5",
			label : "Helliarch",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Helliarch",
				display : 'checkbox',
				modelId : "2",
				cost : "10",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		},{
			id:"1",
			maxquantity:"1",
			label:"Troops Choice",
			available:true,
			counterManager:{
				type:"static",
				maxCount:"1",
				minCount:"0",
			},
			checked:false,
			type:"static",
			stuff:[{
				id:"1",
				quantity:"0",
				available:true,
				display:'checkbox',
				name:"Count as Troops",
				cost:"0",
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Hellion",
			enable : true,
			type : "infantry",
			modelType : "JmpIn",
			cost : "16",
			count : "5",
			minCount : "5",
			maxCount : "20",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "1",
			Ld : "8",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"},
				{name : "Hit And Run"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "4",
					minCount : "4",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Skyboard",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Hellglaive",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			}]	
		},{
			id : "2",
			name : "Helliarch",
			enable : false,
			type : "infantry",
			modelType : "JmpIn(Ch)",
			cost : "26",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "6",
			At : "2",
			Ld : "9",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"},
				{name : "Hit And Run"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Skyboard",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Hellglaive",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Stunclaw",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Phantasm Grenade Launcher",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		}]
	},{
		id : "24", /*Scourges*/
		role : "fast",
		armyCode : "DE",
		name : "Scourges",
		icon : 'images/Icons/DarkEldar/Fast/Scourges.png',
		upgrades : [{
			id : "5",
			label : "Solarite",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Solarite",
				display : 'checkbox',
				modelId : "2",
				cost : "10",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Scourge",
			enable : true,
			type : "infantry",
			modelType : "JmpIn",
			cost : "22",
			count : "3",
			minCount : "3",
			maxCount : "10",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "1",
			Ld : "8",
			save : "4",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Shardcarbine",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Ghostplate Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "3",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "5",
						minCount : "0",
						maxCount : "1"
					},{
						modelCount : "10",
						minCount : "0",
						maxCount : "2"
					}],
				},	
				available : true,
				type : "static",
				label : "Special Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Shredder",
					cost : "5",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						}],
					}	
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Splinter Cannon",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						}],
					}
				},{
					id : "3",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Haywire Blaster",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						}],
					}
				},{
					id : "4",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Heat Lance",
					cost : "12",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						}],
					}
				},{
					id : "5",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Blaster",
					cost : "15",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						}],
					}
				},{
					id : "6",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Dark Lance",
					cost : "15",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "3",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "2"
						}],
					}
				}]
			}]	
		},{
			id : "2",
			name : "Solarite",
			enable : false,
			type : "infantry",
			modelType : "JmpIn(Ch)",
			cost : "32",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "2",
			Ld : "9",
			save : "3",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fleet"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Ghostplate Armour",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Plasma Grenades",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "2",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Shardcarbine",
					value : "2",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Stinger Pistol",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Blast Pistol",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		}]
	},{
		id : "25", /*Beastmasters*/
		role : "fast",
		armyCode : "DE",
		name : "Beastmasters",
		icon : 'images/Icons/DarkEldar/Fast/Beastmasters.png',
		upgrades : [],
		models : [{
			id : "1",
			name : "Beastmaster",
			enable : true,
			type : "infantry",
			modelType : "JmpIn",
			cost : "12",
			count : "1",
			minCount : "1",
			maxCount : "5",
			WS : "4",
			BS : "4",
			S : "3",
			T : "3",
			W : "1",
			In : "5",
			At : "1",
			Ld : "8",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Skyboard",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "1",
						minCount : "0",
						maxCount : "10"
					},{
						modelCount : "2",
						minCount : "0",
						maxCount : "20"
					},{
						modelCount : "3",
						minCount : "0",
						maxCount : "30"
					},{
						modelCount : "4",
						minCount : "0",
						maxCount : "40"
					},{
						modelCount : "5",
						minCount : "0",
						maxCount : "50"
					}],
				},	
				available : true,
				type : "static",
				label : "Pets",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Khymerae",
					cost : "12",
					value : "2",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "1",
							minCount : "0",
							maxCount : "5"
						},{
							modelCount : "2",
							minCount : "0",
							maxCount : "10"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "15"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "20"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "25"
						}],
					}	
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Clawed Fiend",
					cost : "40",
					value : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "1",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "2",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "5"
						}],
					}	
				},{
					id : "3",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Razorwing Flocks",
					cost : "10",
					value : "5",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "1",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "2",
							minCount : "0",
							maxCount : "4"
						},{
							modelCount : "3",
							minCount : "0",
							maxCount : "6"
						},{
							modelCount : "4",
							minCount : "0",
							maxCount : "8"
						},{
							modelCount : "5",
							minCount : "0",
							maxCount : "10"
						}],
					}	
				}]
			},{
				id : "3", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		}]
	},{
		id : "26", /*Reavers*/
		role : "fast",
		armyCode : "DE",
		name : "Reavers",
		icon : 'images/Icons/DarkEldar/Fast/Reavers.png',
		upgrades : [{
			id : "5",
			label : "Arena Champion",
			available : true,
			counterManager : {
				type : "static",
				maxCount : "1",
				minCount : "0",
			},
			checked : false,
			type : "model",
			stuff : [{
				id : "1",
				quantity : "0",
				available : true,
				name : "Arena Champion",
				display : 'checkbox',
				modelId : "2",
				cost : "10",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				}
			}]
		}],
		models : [{
			id : "1",
			name : "Reaver",
			enable : true,
			type : "infantry",
			modelType : "JBk",
			cost : "22",
			count : "3",
			minCount : "3",
			maxCount : "10",
			WS : "4",
			BS : "4",
			S : "3",
			T : "4",
			W : "1",
			In : "6",
			At : "1",
			Ld : "8",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Skilled Riders"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "6",
					minCount : "6",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Reaver Jetbike",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "6",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Bladevanes",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "2",
						minCount : "0",
						maxCount : "1"
					},{
						modelCount : "6",
						minCount : "0",
						maxCount : "2"
					},{
						modelCount : "9",
						minCount : "0",
						maxCount : "3"
					},{
						modelCount : "10",
						minCount : "0",
						maxCount : "3"
					}],
				},	
				available : true,
				type : "static",
				label : "Special Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Heat Lance",
					cost : "12",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "3"
						}],
					}
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Blaster",
					cost : "15",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "3"
						},{
						modelCount : "10",
						minCount : "0",
						maxCount : "3"
					}],
					}
				}]
			},{
				id : "3", /*wargear*/
				counterManager : {
					type : "dependOnModelCount",
					modelId : "1",
					countSet : [{
						modelCount : "2",
						minCount : "0",
						maxCount : "1"
					},{
						modelCount : "6",
						minCount : "0",
						maxCount : "2"
					},{
						modelCount : "9",
						minCount : "0",
						maxCount : "3"
					},{
						modelCount : "10",
						minCount : "0",
						maxCount : "3"
					}],
				},	
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Grav-talon",
					cost : "10",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "3"
						}],
					}
				},{
					id : "2",
					quantity : "0",
					display : 'multi',
					available : true,
					name : "Cluster Caltrops",
					cost : "20",
					counterManager : {
						type : "dependOnModelCount",
						modelId : "1",
						countSet : [{
							modelCount : "2",
							minCount : "0",
							maxCount : "1"
						},{
							modelCount : "6",
							minCount : "0",
							maxCount : "2"
						},{
							modelCount : "9",
							minCount : "0",
							maxCount : "3"
						},{
							modelCount : "10",
							minCount : "0",
							maxCount : "3"
						}],
					}
				}]
			}]	
		},{
			id : "2",
			name : "Arena Champion",
			enable : false,
			type : "infantry",
			modelType : "JBk(Ch)",
			cost : "32",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "4",
			BS : "4",
			S : "3",
			T : "4",
			W : "1",
			In : "6",
			At : "2",
			Ld : "9",
			save : "5",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Skilled Riders"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "5",
					minCount : "5",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Wychsuit",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Splinter Pistol",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "4",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Combat Drugs",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "5",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Reaver Jetbike",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "6",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Bladevanes",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*Exarch Power*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Venom Blade",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Power Weapon",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Agoniser",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "10",
				available : true,
				type : "modelCounter",
				modelId : "1",
				display : 'hidden',
				counterManager : {
					modelId : "2",
					type : "dependOnModelCount",
					countSet : [{
						modelCount : "0",
						minCount : "0",
						maxCount : "0"
					},{
						modelCount : "1",
						minCount : "1",
						maxCount : "1"
					}],
				},
				operator : "minus",
				value : "1",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					name : "counter",
					display : 'hidden',
					cost : "0",
					counterManager : {
						modelId : "2",
						type : "dependOnModelCount",
						countSet : [{
							modelCount : "0",
							minCount : "0",
							maxCount : "0"
						},{
							modelCount : "1",
							minCount : "1",
							maxCount : "1"
						}],
					}
				}]
			}]
		}]
	},{
		id : "27", /*Ravager*/
		role : "heavy",
		armyCode : "DE",
		name : "Ravager",
		icon : 'images/Icons/DarkEldar/Heavy/Ravager.png',
		upgrades : [],
		models : [{
			id : "10",
			name : "Ravager",
			enable : true,
			type : "machine",
			modelType : "Sk F OT",
			cost : "105",
			count : "1",
			minCount : "1",
			maxCount : "1",
			BS : "4",
			FA : "11",
			SA : "11",
			BA : "11",
			HP : "3",
			specialRules :  [
				{name : "Night Vision"},
				{name : "Aerial Assault"}
			],
			upgrades :  [{
				id : "3",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "3",
					available : true,
					display : 'multi',
					name : "Dark Lance",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "3",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					available : true,
					display : 'multi',
					name : "Disintegrator Cannon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "3",
						minCount : "0",
					}
				}]
			},{
				id : "1",
				counterManager : {
					type : "static",
					maxCount : "10",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Shock Prow",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Torment Grenade Launcher",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Enhanced Aethersails",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Retrofire Jets",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "5",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Chain-snares",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "6",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Grisly Trophies",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "7",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Envenomed Blades",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "9",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Night Shield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "10",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Flickerfield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]
	    }]
	},{
		id : "28", /*Talos Pain Engine*/
		role : "heavy",
		armyCode : "DE",
		name : "Talos Pain Engine",
		icon : 'images/Icons/DarkEldar/Heavy/TalosPainEngine.png',
		upgrades : [],
		models : [{
			id : "1",
			name : "Talos Pain Engine",
			enable : true,
			type : "infantry",
			cost : "100",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "5",
			BS : "3",
			S : "7",
			T : "7",
			W : "3",
			In : "4",
			At : "D6",
			Ld : "10",
			save : "3",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fearless"},
				{name : "Move Through Cover"},
				{name : "Random Attack"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Armoured Carapace",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Twin-linked Liquifier Gun",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Ichor Injector",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Chain-flails",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Special Weapons",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Twin-linked Splinter Cannon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Stinger Pod",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Twin-linked Haywire Blaster",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Twin-linked Heat Lance",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "4", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : true,
					name : "Close Combat Weapon",
					cost : "15",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		}]
	},{
		id : "29", /*Cronos Parasite Engine*/
		role : "heavy",
		armyCode : "DE",
		name : "Cronos Parasite Engine",
		icon : 'images/Icons/DarkEldar/Heavy/CronosParasiteEngine.png',
		upgrades : [],
		models : [{
			id : "1",
			name : "Cronos Parasite Engine",
			enable : true,
			type : "infantry",
			cost : "80",
			count : "1",
			minCount : "1",
			maxCount : "1",
			WS : "3",
			BS : "3",
			S : "5",
			T : "7",
			W : "3",
			In : "4",
			At : "2",
			Ld : "10",
			save : "3",
			specialRules :  [
				{name : "Power From Pain"},
				{name : "Night Vision"},
				{name : "Fearless"},
				{name : "Move Through Cover"}
			],
			upgrades :  [{
				id : "1", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Armoured Carapace",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "2",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Close Combat Weapon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				},{
					id : "3",
					quantity : "1",
					display : 'checkbox',
					available : false,
					name : "Spirit Syphon",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "1",
					}
				}]
			},{
				id : "2", /*wargear*/
				maxquantity : "1",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Weapons",
				stuff : [{
					id : "1",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Spirit Probe",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					display : 'checkbox',
					available : true,
					name : "Spirit Vortex",
					cost : "20",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]	
		}]
	},{
		id : "30", /*Razorwing Jetfighter*/
		role : "heavy",
		armyCode : "DE",
		name : "Razorwing Jetfighter",
		icon : 'images/Icons/DarkEldar/Heavy/RazorwingJetfighter.png',
		upgrades : [],
		models : [{
			id : "10",
			name : "Razorwing Jetfighter",
			enable : true,
			type : "machine",
			modelType : "Fl",
			cost : "145",
			count : "1",
			minCount : "1",
			maxCount : "1",
			BS : "4",
			FA : "10",
			SA : "10",
			BA : "10",
			HP : "3",
			specialRules :  [
				{name : "Night Vision"},
				{name : "Aerial Assault"},
				{name : "Deep Strike"},
				{name : "Supersonic"}
			],
			upgrades :  [{
				id : "1",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Weapon",
				stuff : [{
					id : "1",
					quantity : "1",
					available : true,
					display : 'checkbox',
					name : "Twin-linked Splinter Rifle",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Splinter Cannon",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "2",
				counterManager : {
					type : "static",
					maxCount : "1",
					minCount : "1",
				},
				available : true,
				type : "static",
				label : "Weapon",
				stuff : [{
					id : "1",
					quantity : "1",
					available : true,
					display : 'checkbox',
					name : "Two Wing-mounted Dark Lances",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Disintegrator Cannon",
					cost : "00",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3",
				counterManager : {
					type : "static",
					maxCount : "4",
					minCount : "4",
				},
				available : true,
				type : "static",
				label : "Missiles",
				stuff : [{
					id : "1",
					quantity : "4",
					available : true,
					display : 'multi',
					name : "Monoscythe Missile",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "4",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					available : true,
					display : 'multi',
					name : "Necrotoxin Missile",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "4",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					available : true,
					display : 'multi',
					name : "Shatterfield Missile",
					cost : "5",
					counterManager : {
						type : "static",
						maxCount : "4",
						minCount : "0",
					}
				}]
			},{
				id : "4",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "9",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Night Shield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "10",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Flickerfield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]
	    }]
	},{
		id : "31", /*Voidraven Bomber*/
		role : "heavy",
		armyCode : "DE",
		name : "Voidraven Bomber",
		icon : 'images/Icons/DarkEldar/Heavy/VoidravenBomber.png',
		upgrades : [],
		models : [{
			id : "10",
			name : "Voidraven Bomber",
			enable : true,
			type : "machine",
			modelType : "Fl",
			cost : "145",
			count : "1",
			minCount : "1",
			maxCount : "1",
			BS : "4",
			FA : "10",
			SA : "10",
			BA : "10",
			HP : "3",
			specialRules :  [
				{name : "Night Vision"},
				{name : "Aerial Assault"},
				{name : "Deep Strike"},
				{name : "Supersonic"}
			],
			upgrades :  [{
				id : "1",
				counterManager : {
					type : "static",
					maxCount : "3",
					minCount : "3",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "1",
					quantity : "2",
					available : false,
					display : 'checkbox',
					name : "Void Lance",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "2",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "1",
					available : false,
					display : 'checkbox',
					name : "Void Mine",
					cost : "0",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			},{
				id : "3",
				counterManager : {
					type : "static",
					maxCount : "4",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Missiles",
				stuff : [{
					id : "1",
					quantity : "0",
					available : true,
					display : 'multi',
					name : "Monoscythe Missile",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "4",
						minCount : "0",
					}
				},{
					id : "2",
					quantity : "0",
					available : true,
					display : 'multi',
					name : "Necrotoxin Missile",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "4",
						minCount : "0",
					}
				},{
					id : "3",
					quantity : "0",
					available : true,
					display : 'multi',
					name : "Shatterfield Missile",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "4",
						minCount : "0",
					}
				},{
					id : "4",
					quantity : "0",
					available : true,
					display : 'multi',
					name : "Implosion Missile",
					cost : "30",
					counterManager : {
						type : "static",
						maxCount : "4",
						minCount : "0",
					}
				}]
			},{
				id : "4",
				counterManager : {
					type : "static",
					maxCount : "2",
					minCount : "0",
				},
				available : true,
				type : "static",
				label : "Wargear",
				stuff : [{
					id : "9",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Night Shield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				},{
					id : "10",
					quantity : "0",
					available : true,
					display : 'checkbox',
					name : "Flickerfield",
					cost : "10",
					counterManager : {
						type : "static",
						maxCount : "1",
						minCount : "0",
					}
				}]
			}]
	    }]
		},{
			id:"51", /*Aegis Defence Lines*/
			role:"fort",
			armyCode:"DE",
			name:"Aegis Defence Lines",
			icon:'',
			upgrades:[],
			models:[{
				id:"1",
				name:"Aegis Defence Lines",
				enable:true,
				type:"infantry",
				modelType:"",
				cost:"50",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"",
				BS:"",
				S:"",
				T:"",
				W:"",
				In:"",
				At:"",
				Ld:"",
				save:"",
				invSave:"",
				specialRules: [
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0"
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Icarus Lascannon",
						cost:"35",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0"
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Quad-gun",
						cost:"50",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0"
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Comms Relay",
						cost:"20",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"52", /*Imperial Bastion*/
			role:"fort",
			armyCode:"DE",
			name:"Imperial Bastion",
			icon:'',
			upgrades:[],
			models:[{
				id:"1",
				name:"Imperial Bastion",
				enable:true,
				type:"infantry",
				modelType:"",
				cost:"75",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"",
				BS:"",
				S:"",
				T:"",
				W:"",
				In:"",
				At:"",
				Ld:"",
				save:"",
				invSave:"",
				specialRules: [
				],
				upgrades: [{
					id:"1", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"4",
						minCount:"4"
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"4",
						display:'checkbox',
						available:false,
						name:"Heavy Bolter",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"4",
							minCount:"4"
						}
					}]
				},{
					id:"2", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0"
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Icarus Lascannon",
						cost:"35",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0"
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Quad-gun",
						cost:"50",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0"
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Comms Relay",
						cost:"20",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"53", /*Firestorm Redoubt*/
			role:"fort",
			armyCode:"DE",
			name:"Firestorm Redoubt",
			icon:'',
			upgrades:[],
			models:[{
				id:"1",
				name:"Firestorm Redoubt",
				enable:true,
				type:"infantry",
				modelType:"",
				cost:"200",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"",
				BS:"",
				S:"",
				T:"",
				W:"",
				In:"",
				At:"",
				Ld:"",
				save:"",
				invSave:"",
				specialRules: [
				],
				upgrades: [{
					id:"1", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"2"
					},
					available:true,
					type:"static",
					label:"Weapons",
					stuff:[{
						id:"1",
						quantity:"2",
						display:'checkbox',
						available:false,
						name:"Quad Icarus Lascannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"2"
						}
					}]
				}]	
			}]
		},{
			id:"54", /*Skyshield Landing Pad*/
			role:"fort",
			armyCode:"DE",
			name:"Skyshield Landing Pad",
			icon:'',
			upgrades:[],
			models:[{
				id:"1",
				name:"Skyshield Landing Pad",
				enable:true,
				type:"infantry",
				modelType:"",
				cost:"75",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"",
				BS:"",
				S:"",
				T:"",
				W:"",
				In:"",
				At:"",
				Ld:"",
				save:"",
				invSave:"",
				specialRules: [
				],
				upgrades: []	
			}]
		},{
			id:"55", /*Fortress Of Redemption*/
			role:"fort",
			armyCode:"DE",
			name:"Fortress Of Redemption",
			icon:'',
			upgrades:[],
			models:[{
				id:"1",
				name:"Fortress Of Redemption",
				enable:true,
				type:"infantry",
				modelType:"",
				cost:"250",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"",
				BS:"",
				S:"",
				T:"",
				W:"",
				In:"",
				At:"",
				Ld:"",
				save:"",
				invSave:"",
				specialRules: [
				],
				upgrades: [{
					id:"1", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"4",
						minCount:"0"
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Heavy Bolter",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"4",
							minCount:"0"
						}
					}]
				},{
					id:"2", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"1"
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Twin linked Icarus Lascannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1"
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Missile Silo(Flak Only)",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0"
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Missile Silo(Frag&Krak)",
						cost:"30",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"56", /*Vengeance Weapon Battery*/
			role:"fort",
			armyCode:"DE",
			name:"Vengeance Weapon Battery",
			icon:'',
			upgrades:[],
			models:[{
				id:"1",
				name:"Vengeance Weapon Battery",
				enable:true,
				type:"infantry",
				modelType:"",
				cost:"75",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"",
				BS:"",
				S:"",
				T:"",
				W:"",
				In:"",
				At:"",
				Ld:"",
				save:"",
				invSave:"",
				specialRules: [
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1"
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Punisher Gatling Cannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0"
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Battle Cannon",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0"
						}
					}]
				}]	
			}]
		}]
	}	
}

