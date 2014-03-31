function getNec() {
	
var commandBarge = {
			id : "10",
			name : "Catacomb Command Barge",
			enable : false,
			type : "machine",
			cost : "80",
			count : "1",
			minCount : "1",
			maxCount : "1",
			modelType : "Sk F OT", 
			BS : "4",
			FA : "11",
			SA : "11",
			BA : "11",
			HP : "3",
			specialRules :  [
				{name : "Living Metal"},
				{name : "Sweep Attack"},
				{name : "Symbiotic Repair"}
			],
			upgrades :  [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"2",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Quantum Shielding",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Tesla Cannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Gauss Cannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]
	    }

var ghostArk = {
			id : "11",
			name : "Ghost Ark",
			enable : false,
			type : "machine",
			cost : "115",
			count : "1",
			minCount : "1",
			maxCount : "1",
			modelType : "Sk OT", 
			BS : "4",
			FA : "11",
			SA : "11",
			BA : "11",
			HP : "4",
			specialRules :  [
				{name : "Living Metal"},
				{name : "Repair Barge"}
			],
			upgrades :  [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"3",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Quantum Shielding",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"2",
						display:'checkbox',
						available:false,
						name:"Gauss Flayer Gun",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"2",
						}
					}]
				}]
	    }

var nightSythe  = {
			id : "12",
			name : "Night Scythe",
			enable : false,
			type : "machine",
			cost : "100",
			count : "1",
			minCount : "1",
			maxCount : "1",
			modelType : "Fl", 
			BS : "4",
			FA : "11",
			SA : "11",
			BA : "11",
			HP : "3",
			specialRules :  [
				{name : "Aerial Assault"},
				{name : "Living Metal"},
				{name : "Supersonic"}
			],
			upgrades :  [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Twin-linked Tesla Destructor",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]
	    }

return {armyName:"Necrons",
			armyCode:"Nec",
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
			countConditions:{
				hq:{
					min:"1",
					max:"2",
					minError:"you need at least one HQ unit",
					maxError:"you can't have more then two HQ units"
				},
				troops: {
					min:"2",
					max:"6",
					minError:"you have to take at least two troops choise",
					maxError:"you can't have more then six troops units"
				},
				fast: {
					min:"0",
					max:"3",
					minError:"same system Error",
					maxError:"you can't have more then three fast units"
				},
				elite: {
					min:"0",
					max:"3",
					minError:"same system Error",
					maxError:"you can't have more then three elite units"
				},
				heavy: {
					min:"0",
					max:"3",
					minError:"same system Error",
					maxError:"you can't have more then three heavy units"
				},
				fort: {
					min:"0",
					max:"3",
					minError:"same system Error",
					maxError:"you can't have more then three heavy units"
				}
			},	
			 units:[{
			id:"1", /*Imotekh The Stormlord*/
			role:"hq",
			armyCode:"Nec",
			name:"Imotekh The Stormlord",
			icon:'images/Icons/Necron/HQ/ImotekhTheStormlord.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Command Barge",
					display:'checkbox',
					modelId:"10",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				role:"hq",
				name:"Imotekh The Stormlord",
				enable:true,
				type:"infantry",
				cost:"225",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"5",
				T:"5",
				W:"3",
				In:"2",
				At:"3",
				Ld:"10",
				save:"2",
				invSave:"3",
				specialRules: [
					{name:"Ever-living"},
					{name:"Humiliating Defeat"},
					{name:"Hyperlogical Strategy"},
					{name:"Independent Character"},
					{name:"Lord Of The Storm"},
					{name:"Phaeron"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"6",
						minCount:"6",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Bloodswarm Nanoscarabs",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Gauntlet Of Fire",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Phase Shifter",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"4",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Phylactery",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"5",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Sempiternal Weave",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"6",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Staff Of The Destroyer",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			}
			,commandBarge]
		},{
			id:"2", /*Nemesor Zahndrekh*/
			role:"hq",
			armyCode:"Nec",
			name:"Nemesor Zahndrekh",
			icon:'images/Icons/Necron/HQ/NemesorZahndrekh.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Command Barge",
					display:'checkbox',
					modelId:"10",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				role:"hq",
				name:"Nemesor Zahndrekh",
				enable:true,
				type:"infantry",
				cost:"185",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"5",
				T:"5",
				W:"3",
				In:"2",
				At:"3",
				Ld:"10",
				save:"2",
				invSave:"3",
				specialRules: [
					{name:"Adaptive Tactics"},
					{name:"Counter Tactics"},
					{name:"Ever-living"},
					{name:"Independent Character"},
					{name:"Phased Reinforcements"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"4",
						minCount:"4",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Phase Shifter",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Resurrection Orb",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Sempiternal Weave",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"4",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Staff Of Light",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			}
			,commandBarge]
		},{
			id:"3", /*Vargard Obyron*/
			role:"hq",
			armyCode:"Nec",
			name:"Vargard Obyron",
			icon:'images/Icons/Necron/HQ/VargardObyron.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Vargard Obyron",
				enable:true,
				type:"infantry",
				cost:"160",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"6",
				BS:"4",
				S:"5",
				T:"5",
				W:"3",
				In:"2",
				At:"3",
				Ld:"10",
				save:"2",
				specialRules: [
					{name:"Cleaving Counterblow"},
					{name:"Ever-living"},
					{name:"Independent Character"},
					{name:"Reanimation Protocols"},
					{name:"The Vargard's Duty"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"3",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Ghostwalk Mantle",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Sempiternal Weave",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Warscythe",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			}]
		},{
			id:"4", /*Illuminor Szeras*/
			role:"hq",
			armyCode:"Nec",
			name:"Illuminor Szeras",
			icon:'images/Icons/Necron/HQ/IlluminorSzeras.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Illuminor Szeras",
				enable:true,
				type:"infantry",
				cost:"100",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"2",
				In:"2",
				At:"4",
				Ld:"10",
				save:"2",
				specialRules: [
					{name:"Mechanical Augmentation"},
					{name:"Ever-living"},
					{name:"Independent Character"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"2",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Eldrich Lance",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Gaze Of Flame",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			}]
		},{
			id:"5", /*Orikan The Diviner*/
			role:"hq",
			armyCode:"Nec",
			name:"Orikan The Diviner",
			icon:'images/Icons/Necron/HQ/OrikanTheDiviner.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Orikan The Diviner",
				enable:true,
				type:"infantry",
				cost:"165",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"2",
				In:"2",
				At:"2",
				Ld:"10",
				save:"4",
				invSave:"3",
				specialRules: [
					{name:"Lord Of Time"},
					{name:"Ever-living"},
					{name:"Independent Character"},
					{name:"Temporal Snares"},
					{name:"Reanimation Protocols"},
					{name:"The Stars Are Right"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"3",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Phase Shifter",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Staff Of Tomorrow",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Transdimensional Beamer",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Orikan Empowered",
				enable:true,
				type:"infantry",
				cost:"0",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"5",
				S:"7",
				T:"7",
				W:"4",
				In:"4",
				At:"4",
				Ld:"10",
				save:"4",
				invSave:"3",
				specialRules: [
				],
				upgrades: []	
			}]
		},{
			id:"6", /*Anrakyr The Traveller*/
			role:"hq",
			armyCode:"Nec",
			name:"Anrakyr The Traveller",
			icon:'images/Icons/Necron/HQ/AnrakyrTheTraveller.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Command Barge",
					display:'checkbox',
					modelId:"10",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				role:"hq",
				name:"Anrakyr The Traveller",
				enable:true,
				type:"infantry",
				cost:"165",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"5",
				T:"5",
				W:"3",
				In:"2",
				At:"3",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Counter Attack"},
					{name:"Furious Charge"},
					{name:"Ever-living"},
					{name:"Independent Character"},
					{name:"Mind It The Machine"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"2",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Tachyon Arrow",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Warscythe",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			}
			,commandBarge]
		},{
			id:"7", /*Trazyn The Infinite*/
			role:"hq",
			armyCode:"Nec",
			name:"Trazyn The Infinite",
			icon:'images/Icons/Necron/HQ/TrazynTheInfinite.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Command Barge",
					display:'checkbox',
					modelId:"10",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				role:"hq",
				name:"Trazyn The Infinite",
				enable:true,
				type:"infantry",
				cost:"175",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"5",
				T:"5",
				W:"3",
				In:"2",
				At:"3",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Excellent! Another Piece For The Collection"},
					{name:"Phaeron"},
					{name:"Ever-living"},
					{name:"Independent Character"},
					{name:"Surrogate Hosts"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"2",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Empathic Obliterator",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Mindshackle Scarabs",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			}
			,commandBarge]
		},{
			id:"8", /*Necron Overlord*/
			role:"hq",
			armyCode:"Nec",
			name:"Necron Overlord",
			icon:'images/Icons/Necron/HQ/NecronOverlord.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Command Barge",
					display:'checkbox',
					modelId:"10",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				role:"hq",
				name:"Necron Overlord",
				enable:true,
				type:"infantry",
				cost:"90",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"5",
				T:"5",
				W:"3",
				In:"2",
				At:"3",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Ever-living"},
					{name:"Independent Character"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Staff Of Light",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Hyperphase sword",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Gauntlet Of Fire",
						cost:"5",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"4",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Voidblade",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"5",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Warscythe",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"7",
						minCount:"0",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Phylactery",
						cost:"15",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Mindshackle Scarabs",
						cost:"15",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Sempiternal Weave",
						cost:"15",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"4",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Tesseract Labyrinth",
						cost:"20",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"5",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Tachyon Arrow",
						cost:"30",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"6",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Resurrection Orb",
						cost:"30",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"7",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Phase Shifter",
						cost:"45",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					label:"Phaeron",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Phaeron",
						cost:"20",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}
			,commandBarge]
		},{
			id:"9", /*Destroyer Lord*/
			role:"hq",
			armyCode:"Nec",
			name:"Destroyer Lord",
			icon:'images/Icons/Necron/HQ/DestroyerLord.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Destroyer Lord",
				enable:true,
				type:"infantry",
				cost:"125",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"5",
				T:"6",
				W:"3",
				In:"2",
				At:"3",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Ever-living"},
					{name:"Independent Character"},
					{name:"Preferred Enemy"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Warscythe",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Staff Of Light",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Gauntlet Of Fire",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"4",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Voidblade",
						cost:"5",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"7",
						minCount:"0",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Mindshackle Scarabs",
						cost:"20",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Sempiternal Weave",
						cost:"15",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Tachyon Arrow",
						cost:"30",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"4",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Resurrection Orb",
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
			id:"10", /*Royal Court*/
			role:"hq",
			armyCode:"Nec",
			name:"Royal Court",
			icon:'images/Icons/Necron/HQ/RoyalCourt.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Necron Lord",
				enable:true,
				type:"infantry",
				cost:"35",
				count:"0",
				minCount:"0",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"5",
				T:"5",
				W:"1",
				In:"2",
				At:"2",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Ever-living"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						modelId:"1",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						},{
							modelCount:"2",
							minCount:"2",
							maxCount:"2"
						},{
							modelCount:"3",
							minCount:"3",
							maxCount:"3"
						},{
							modelCount:"4",
							minCount:"4",
							maxCount:"4"
						},{
							modelCount:"5",
							minCount:"5",
							maxCount:"5"
						}],
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Staff Of Light",
						cost:"0",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Hyperphase sword",
						cost:"0",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Gauntlet Of Fire",
						cost:"5",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"4",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Voidblade",
						cost:"10",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"5",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Warscythe",
						cost:"10",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Wargear",
					counterManager:{
						modelId:"1",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"0",
							maxCount:"6"
						},{
							modelCount:"2",
							minCount:"0",
							maxCount:"12"
						},{
							modelCount:"3",
							minCount:"0",
							maxCount:"18"
						},{
							modelCount:"4",
							minCount:"0",
							maxCount:"24"
						},{
							modelCount:"5",
							minCount:"0",
							maxCount:"30"
						}],
					},
					available:true,
					type:"static",
					stuff:[{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Mindshackle Scarabs",
						cost:"15",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Sempiternal Weave",
						cost:"15",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"4",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Tesseract Labyrinth",
						cost:"20",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"5",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Resurrection Orb",
						cost:"30",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"6",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Phase Shifter",
						cost:"45",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Cryptek",
				enable:true,
				type:"infantry",
				cost:"25",
				count:"0",
				minCount:"0",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"4",
				specialRules: [
					{name:"Ever-living"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						minCount:"1",
						maxCount:"1"
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Staff Of Light",
						cost:"0",
						counterManager:{
							type:"static",
							minCount:"1",
							maxCount:"1"
						}
					}]
				}]			
			},{
				id:"3",
				role:"hq",
				name:"Harbinger Of Despair",
				enable:true,
				type:"infantry",
				cost:"30",
				count:"0",
				minCount:"0",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"4",
				specialRules: [
					{name:"Ever-living"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						minCount:"1",
						maxCount:"1"
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Abyssal Stuff",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1"
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Wargear",
					counterManager:{
						modelId:"3",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"0",
							maxCount:"2"
						},{
							modelCount:"2",
							minCount:"0",
							maxCount:"4"
						},{
							modelCount:"3",
							minCount:"0",
							maxCount:"6"
						},{
							modelCount:"4",
							minCount:"0",
							maxCount:"8"
						},{
							modelCount:"5",
							minCount:"0",
							maxCount:"10"
						}],
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Nightmare Shroud",
						cost:"10",
						counterManager:{
							modelId:"3",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Veil Of Darkness",
						cost:"30",
						counterManager:{
							modelId:"3",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					}]
				}]			
			},{
				id:"4",
				role:"hq",
				name:"Harbinger Of Destruction",
				enable:true,
				type:"infantry",
				cost:"35",
				count:"0",
				minCount:"0",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"4",
				specialRules: [
					{name:"Ever-living"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						minCount:"1",
						maxCount:"1"
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Eldritch Lance",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1"
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Wargear",
					counterManager:{
						modelId:"4",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"0",
							maxCount:"2"
						},{
							modelCount:"2",
							minCount:"0",
							maxCount:"4"
						},{
							modelCount:"3",
							minCount:"0",
							maxCount:"6"
						},{
							modelCount:"4",
							minCount:"0",
							maxCount:"8"
						},{
							modelCount:"5",
							minCount:"0",
							maxCount:"10"
						}],
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Gaze Of Flame",
						cost:"10",
						counterManager:{
							modelId:"4",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Solar Pulse",
						cost:"20",
						counterManager:{
							modelId:"4",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					}]
				}]			
			},{
				id:"5",
				role:"hq",
				name:"Harbinger Of Eternity",
				enable:true,
				type:"infantry",
				cost:"25",
				count:"0",
				minCount:"0",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"4",
				specialRules: [
					{name:"Ever-living"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						minCount:"1",
						maxCount:"1"
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Aeonstave",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1"
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Weapon",
					counterManager:{
						modelId:"5",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"0",
							maxCount:"2"
						},{
							modelCount:"2",
							minCount:"0",
							maxCount:"4"
						},{
							modelCount:"3",
							minCount:"0",
							maxCount:"6"
						},{
							modelCount:"4",
							minCount:"0",
							maxCount:"8"
						},{
							modelCount:"5",
							minCount:"0",
							maxCount:"10"
						}],
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Chronometron",
						cost:"15",
						counterManager:{
							modelId:"5",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Timesplinter cloak",
						cost:"30",
						counterManager:{
							modelId:"5",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					}]
				}]			
			},{
				id:"6",
				role:"hq",
				name:"Harbinger Of Storm",
				enable:true,
				type:"infantry",
				cost:"25",
				count:"0",
				minCount:"0",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"4",
				specialRules: [
					{name:"Ever-living"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						minCount:"1",
						maxCount:"1"
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Voltaic Staff",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1"
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Weapon",
					counterManager:{
						modelId:"6",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"0",
							maxCount:"2"
						},{
							modelCount:"2",
							minCount:"0",
							maxCount:"4"
						},{
							modelCount:"3",
							minCount:"0",
							maxCount:"6"
						},{
							modelCount:"4",
							minCount:"0",
							maxCount:"8"
						},{
							modelCount:"5",
							minCount:"0",
							maxCount:"10"
						}],
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lightning Field",
						cost:"10",
						counterManager:{
							modelId:"6",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Ether Crystal",
						cost:"30",
						counterManager:{
							modelId:"6",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					}]
				}]			
			},{
				id:"7",
				role:"hq",
				name:"Harbinger Of Transmogrification",
				enable:true,
				type:"infantry",
				cost:"30",
				count:"0",
				minCount:"0",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"4",
				specialRules: [
					{name:"Ever-living"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						minCount:"1",
						maxCount:"1"
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Tremorstave",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1"
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Weapon",
					counterManager:{
						modelId:"7",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"0",
							maxCount:"2"
						},{
							modelCount:"2",
							minCount:"0",
							maxCount:"4"
						},{
							modelCount:"3",
							minCount:"0",
							maxCount:"6"
						},{
							modelCount:"4",
							minCount:"0",
							maxCount:"8"
						},{
							modelCount:"5",
							minCount:"0",
							maxCount:"10"
						}],
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Seismic Crucible",
						cost:"10",
						counterManager:{
							modelId:"7",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Harp Of Dissonance",
						cost:"25",
						counterManager:{
							modelId:"7",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							}],
						}
					}]
				}]			
			}]
		},{
			id:"11", /*Necron Warriors*/
			role:"troops",
			armyCode:"Nec",
			name:"Necron Warriors",
			icon:'images/Icons/Necron/Troops/NecronWarriors.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Ghost Ark",
					display:'checkbox',
					modelId:"11",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				},{
					id:"2",
					quantity:"0",
					available:true,
					name:"Night Scythe",
					display:'checkbox',
					modelId:"12",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				name:"Necron Warrior",
				enable:true,
				type:"infantry",
				cost:"13",
				count:"5",
				minCount:"5",
				maxCount:"20",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"4",
				specialRules: [
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Gauss Flayer",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			}
			,ghostArk
			,nightSythe]
		},{
			id:"12", /*Necron Immortals*/
			role:"troops",
			armyCode:"Nec",
			name:"Necron Immortals",
			icon:'images/Icons/Necron/Troops/NecronImmortals.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"2",
					quantity:"0",
					available:true,
					name:"Night Scythe",
					display:'checkbox',
					modelId:"12",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				name:"Necron Immortal",
				enable:true,
				type:"infantry",
				cost:"17",
				count:"5",
				minCount:"5",
				maxCount:"10",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Gauss Blaster",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Tesla Carbines",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}
			,nightSythe]
		},{
			id:"13", /*Deathmarks*/
			role:"elite",
			armyCode:"Nec",
			name:"Deathmarks",
			icon:'images/Icons/Necron/Elite/Deathmarks.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"2",
					quantity:"0",
					available:true,
					name:"Night Scythe",
					display:'checkbox',
					modelId:"12",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				name:"Deathmarks",
				enable:true,
				type:"infantry",
				cost:"19",
				count:"5",
				minCount:"5",
				maxCount:"10",
				WS:"4",
				BS:"4",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Deep Strike"},
					{name:"Ethereal Interception"},
					{name:"Hunters From Hyperspace"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Synaptic Disintegrator",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]	
			}
			,nightSythe]
		},{
			id:"14", /*Lychguards*/
			role:"elite",
			armyCode:"Nec",
			name:"Lychguards",
			icon:'images/Icons/Necron/Elite/Lychguards.png',
			upgrades:[{
				id:"2",
				label:"Transport",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				type:"model",
				stuff:[{
					id:"2",
					quantity:"0",
					available:true,
					name:"Night Scythe",
					display:'checkbox',
					modelId:"12",
					cost:"0",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					}
				}]
			}],
			models:[{
				id:"1",
				name:"Lychguard",
				enable:true,
				type:"infantry",
				cost:"40",
				count:"5",
				minCount:"5",
				maxCount:"10",
				WS:"4",
				BS:"4",
				S:"5",
				T:"5",
				W:"1",
				In:"2",
				At:"2",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"2", /*Weapons*/
					type:"counter",
					label:"Weapons",
					available:true,
					setCounter:{
						type:"dependOnModelCount",
						modelId:"1",
						countSet:[{
							modelCount:"5",
							minCount:"5",
							maxCount:"5"
						},{
							modelCount:"6",
							minCount:"6",
							maxCount:"6"
						},{
							modelCount:"7",
							minCount:"7",
							maxCount:"7"
						},{
							modelCount:"8",
							minCount:"8",
							maxCount:"8"
						},{
							modelCount:"9",
							minCount:"9",
							maxCount:"9"
						},{
							modelCount:"10",
							minCount:"10",
							maxCount:"10"
						}]
					},
					counterManager:{
						type:"static",
						minCount:"0",
						maxCount:"0"
					},	
					stuff:[{
						id:"1",
						quantity:"1",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Warscythe",
						cost:"0",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"2",
							stuffId:"2"
						}],
						counterManager:{
							type:"static",
							minCount:"0",
							maxCount:"0"
						}
					},{
						id:"2",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Hyperphase Sword And Dispersion Shield",
						cost:"5",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"2",
							stuffId:"1"
						},{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"2",
							stuffId:"3"
						}],
						counterManager:{
							type:"static",
							minCount:"0",
							maxCount:"0"
						}
					}]
				}]	
			}
			,nightSythe]
		},{
			id:"15", /*Triarch Praetorians*/
			role:"elite",
			armyCode:"Nec",
			name:"Triarch Praetorians",
			icon:'images/Icons/Necron/Elite/TriarchPraetorians.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"Triarch Praetorian",
				enable:true,
				type:"infantry",
				cost:"40",
				count:"5",
				minCount:"5",
				maxCount:"10",
				WS:"4",
				BS:"4",
				S:"5",
				T:"5",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"3",
				specialRules: [
					{name:"Fearless"},
					{name:"Reanimation Protocols"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Rod Of Covenant",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Voidblade And Particle Caster",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}
			]
		},{
			id:"16", /*Flayed One Pack*/
			role:"elite",
			armyCode:"Nec",
			name:"Flayed One Pack",
			icon:'images/Icons/Necron/Elite/FlayedOnePack.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"Flayed One",
				enable:true,
				type:"infantry",
				cost:"13",
				count:"5",
				minCount:"5",
				maxCount:"20",
				WS:"4",
				BS:"1",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"3",
				Ld:"10",
				save:"4",
				specialRules: [
					{name:"Deep Strike"},
					{name:"Infiltrate"},
					{name:"Reanimation Protocols"}
				],
				upgrades: []	
			}]
		},{
			id:"17", /*C'tan Shard*/
			role:"elite",
			armyCode:"Nec",
			name:"C'tan Shard",
			icon:'images/Icons/Necron/Elite/CtanShard.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"C'tan Shard",
				enable:true,
				type:"infantry",
				cost:"185",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"5",
				S:"7",
				T:"7",
				W:"4",
				In:"4",
				At:"4",
				Ld:"10",
				save:"4",
				modelType:"Mc(Ch)",
				specialRules: [
					{name:"Fearless"},
					{name:"Eternal Warrior"},
					{name:"Immune To Natural Law"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Necrodermis",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"2",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Entropic Touch",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Lord Of Fire",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Pyreshards",
						cost:"15",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"4",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Swarm Of Spirit Dust",
						cost:"20",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"5",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Moulder Of Worlds",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"6",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Sentient Singularity",
						cost:"30",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"7",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Writhing Worldscape",
						cost:"35",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"8",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Grand Illusion",
						cost:"40",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"9",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Time's Arrow",
						cost:"40",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"10",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Transdimensional Thunderbolt",
						cost:"45",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"11",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Gaze Of Death",
						cost:"50",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"18", /*Triarch Stalker*/
			role:"elite",
			armyCode:"Nec",
			name:"Triarch Stalker",
			icon:'images/Icons/Necron/Elite/TriarchStalker.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"Triarch Stalker",
				enable:true,
				type:"walker",
				cost:"150",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"4",
				BS:"4",
				S:"7",
				In:"2",
				At:"3",
				FA:"11",
				SA:"11",
				BA:"11",
				HP:"3",
				specialRules: [
					{name:"Living Metal"},
					{name:"Move Through Cover"},
					{name:"Targeting Relay"}
				],
				upgrades: [{
					id:"1",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"2",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						available:false,
						display:'checkbox',
						name:"Quantum Shielding",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						available:true,
						display:'checkbox',
						name:"Heat Ray",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						available:true,
						display:'checkbox',
						name:"Particle Shredder",
						cost:"5",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"4",
						quantity:"0",
						available:true,
						display:'checkbox',
						name:"Twin-linked Heavy Gauss Cannon",
						cost:"15",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]
		    }]
		},{
			id:"19", /*Canoptek Wraiths*/
			role:"fast",
			armyCode:"Nec",
			name:"Canoptek Wraiths",
			icon:'images/Icons/Necron/Fast/CanoptekWraiths.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"Canoptek Wraith",
				enable:true,
				type:"infantry",
				cost:"35",
				count:"1",
				minCount:"1",
				maxCount:"6",
				WS:"4",
				BS:"4",
				S:"6",
				T:"4",
				W:"2",
				In:"2",
				At:"3",
				Ld:"10",
				save:"3",
				invSave:"3",
				modelType:"JmpIn",
				specialRules: [
					{name:"Fearless"},
					{name:"Phase Attacks"},
					{name:"Wraithflight"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Phase Shifter",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				},{
					id:"2", /*wargear*/
					label:"Wargear",
					counterManager:{
						modelId:"1",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"1",
							minCount:"0",
							maxCount:"1"
						},{
							modelCount:"2",
							minCount:"0",
							maxCount:"2"
						},{
							modelCount:"3",
							minCount:"0",
							maxCount:"3"
						},{
							modelCount:"4",
							minCount:"0",
							maxCount:"4"
						},{
							modelCount:"5",
							minCount:"0",
							maxCount:"5"
						},{
							modelCount:"6",
							minCount:"0",
							maxCount:"6"
						}],
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Particle Caster",
						cost:"5",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							},{
								modelCount:"6",
								minCount:"0",
								maxCount:"6"
							}],
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Whip Coils",
						cost:"10",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							},{
								modelCount:"6",
								minCount:"0",
								maxCount:"6"
							}],
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Transdimensional Beamer",
						cost:"15",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							},{
								modelCount:"6",
								minCount:"0",
								maxCount:"6"
							}],
						}
					}]
				}]	
			}]
		},{
			id:"20", /*Canoptek Scarabs*/
			role:"fast",
			armyCode:"Nec",
			name:"Canoptek Scarabs",
			icon:'images/Icons/Necron/Fast/CanoptekScarabs.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"Canoptek Scarabs",
				enable:true,
				type:"infantry",
				cost:"15",
				count:"3",
				minCount:"3",
				maxCount:"10",
				WS:"2",
				BS:"2",
				S:"3",
				T:"3",
				W:"3",
				In:"2",
				At:"4",
				Ld:"10",
				save:"5",
				modelType:"Beast",
				specialRules: [
					{name:"Fearless"},
					{name:"Entropic Strike"},
					{name:"Swarms"}
				],
				upgrades: []	
			}]
		},{
			id:"21", /*Tomb Blades*/
			role:"fast",
			armyCode:"Nec",
			name:"Tomb Blades",
			icon:'images/Icons/Necron/Fast/TombBlades.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"Tomb Blade",
				enable:true,
				type:"infantry",
				cost:"20",
				count:"1",
				minCount:"1",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"4",
				T:"5",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"4",
				modelType:"JBk",
				specialRules: [
					{name:"Reanimation Protocol"}
				],
				upgrades: [{
					id:"1", /*Weapons*/
					type:"counter",
					label:"Weapons",
					available:true,
					setCounter:{
						type:"dependOnModelCount",
						modelId:"1",
						countSet:[{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						},{
							modelCount:"2",
							minCount:"2",
							maxCount:"2"
						},{
							modelCount:"3",
							minCount:"3",
							maxCount:"3"
						},{
							modelCount:"4",
							minCount:"4",
							maxCount:"4"
						},{
							modelCount:"5",
							minCount:"5",
							maxCount:"5"
						},{
							modelCount:"6",
							minCount:"6",
							maxCount:"6"
						}]
					},
					counterManager:{
						type:"static",
						minCount:"0",
						maxCount:"0"
					},	
					stuff:[{
						id:"1",
						quantity:"1",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Twin-linked Tesla Carbine",
						cost:"0",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"1",
							stuffId:"2"
						},{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"1",
							stuffId:"3"
						}],
						counterManager:{
							type:"static",
							minCount:"0",
							maxCount:"0"
						}
					},{
						id:"2",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Twin-linked Gauss Blaster",
						cost:"0",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"1",
							stuffId:"1"
						},{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"1",
							stuffId:"3"
						}],
						counterManager:{
							type:"static",
							minCount:"0",
							maxCount:"0"
						}
					},{
						id:"3",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Particle Beamer",
						cost:"10",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"1",
							stuffId:"1"
						},{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"1",
							stuffId:"2"
						}],
						counterManager:{
							type:"static",
							minCount:"0",
							maxCount:"0"
						}
					}]
				},{
					id:"2", /*Weapons*/
					type:"counter",
					label:"Wargear",
					available:true,
					setCounter:{
						type:"dependOnModelCount",
						modelId:"1",
						countSet:[{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						},{
							modelCount:"2",
							minCount:"2",
							maxCount:"2"
						},{
							modelCount:"3",
							minCount:"3",
							maxCount:"3"
						},{
							modelCount:"4",
							minCount:"4",
							maxCount:"4"
						},{
							modelCount:"5",
							minCount:"5",
							maxCount:"5"
						},{
							modelCount:"6",
							minCount:"6",
							maxCount:"6"
						}]
					},
					counterManager:{
						type:"static",
						minCount:"0",
						maxCount:"0"
					},	
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Nebuloscopes",
						cost:"5",
						counterManager:{
							type:"static",
							minCount:"0",
							maxCount:"0"
						}
					}]
				},{
					id:"3", /*Weapons*/
					type:"counter",
					label:"Wargear",
					available:true,
					setCounter:{
						type:"dependOnModelCount",
						modelId:"1",
						countSet:[{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						},{
							modelCount:"2",
							minCount:"2",
							maxCount:"2"
						},{
							modelCount:"3",
							minCount:"3",
							maxCount:"3"
						},{
							modelCount:"4",
							minCount:"4",
							maxCount:"4"
						},{
							modelCount:"5",
							minCount:"5",
							maxCount:"5"
						},{
							modelCount:"6",
							minCount:"6",
							maxCount:"6"
						}]
					},
					counterManager:{
						type:"static",
						minCount:"0",
						maxCount:"0"
					},	
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Shadowlooms",
						cost:"10",
						counterManager:{
							type:"static",
							minCount:"0",
							maxCount:"0"
						}
					}]
				},{
					id:"4", /*Weapons*/
					type:"counter",
					label:"Wargear",
					available:true,
					setCounter:{
						type:"dependOnModelCount",
						modelId:"1",
						countSet:[{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						},{
							modelCount:"2",
							minCount:"2",
							maxCount:"2"
						},{
							modelCount:"3",
							minCount:"3",
							maxCount:"3"
						},{
							modelCount:"4",
							minCount:"4",
							maxCount:"4"
						},{
							modelCount:"5",
							minCount:"5",
							maxCount:"5"
						},{
							modelCount:"6",
							minCount:"6",
							maxCount:"6"
						}]
					},
					counterManager:{
						type:"static",
						minCount:"0",
						maxCount:"0"
					},	
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Shield Vanes",
						cost:"10",
						counterManager:{
							type:"static",
							minCount:"0",
							maxCount:"0"
						}
					}]
				}]	
			}]
		},{
			id:"22", /*Necron Destroyers*/
			role:"fast",
			armyCode:"Nec",
			name:"Necron Destroyers",
			icon:'images/Icons/Necron/Fast/NecronDestroyers.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"Necron Destroyer",
				enable:true,
				type:"infantry",
				cost:"40",
				count:"1",
				minCount:"1",
				maxCount:"5",
				WS:"4",
				BS:"4",
				S:"4",
				T:"5",
				W:"1",
				In:"2",
				At:"1",
				Ld:"10",
				save:"3",
				modelType:"JmpIn",
				specialRules: [
					{name:"Preferred Enemy"},
					{name:"Reanimation Protocol"}
				],
				upgrades: [{
					id:"1", /*Weapons*/
					type:"static",
					label:"Weapons",
					available:true,
					counterManager:{
						modelId:"1",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						},{
							modelCount:"2",
							minCount:"2",
							maxCount:"2"
						},{
							modelCount:"3",
							minCount:"3",
							maxCount:"3"
						},{
							modelCount:"4",
							minCount:"4",
							maxCount:"4"
						},{
							modelCount:"5",
							minCount:"5",
							maxCount:"5"
						},{
							modelCount:"6",
							minCount:"6",
							maxCount:"6"
						}]
					},			
					stuff:[{
						id:"1",
						quantity:"1",
						available:true,
						display:'multi',
						type:'counter',
						name:"Gauss Cannon",
						cost:"0",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"4"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"5"
							},{
								modelCount:"6",
								minCount:"0",
								maxCount:"6"
							}]
						}
					},{
						id:"2",
						quantity:"0",
						available:true,
						display:'multi',
						type:'static',
						name:"Heavy Gauss Cannon",
						cost:"20",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"4",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"5",
								minCount:"0",
								maxCount:"3"
							},{
								modelCount:"6",
								minCount:"0",
								maxCount:"3"
							}]
						}
					}]
				}]	
			}]
		},{
			id:"23", /*Doomsday Ark*/
			role:"heavy",
			armyCode:"Nec",
			name:"Doomsday Ark",
			icon:'images/Icons/Necron/Heavy/DoomsdayArk.png',
			upgrades:[],
			models:[{
				id : "11",
				name : "Doomsday Ark",
				enable : true,
				type : "machine",
				cost : "175",
				count : "1",
				minCount : "1",
				maxCount : "1",
				modelType : "Sk OT", 
				BS : "4",
				FA : "11",
				SA : "11",
				BA : "11",
				HP : "4",
				specialRules :  [
					{name : "Living Metal"}
				],
				upgrades :  [{
					id:"1", /*wargear*/
					label:"Weapon",
					counterManager:{
						type:"static",
						maxCount:"4",
						minCount:"4",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Doomsday Cannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"2",
						display:'checkbox',
						available:false,
						name:"Gauss Flayer Array",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"2",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Quantum Shielding",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]
			}]
		},{
			id:"24", /*Annihilation Barge*/
			role:"heavy",
			armyCode:"Nec",
			name:"Annihilation Barge",
			icon:'images/Icons/Necron/Heavy/AnnihilationBarge.png',
			upgrades:[],
			models:[{
				id : "11",
				name : "Annihilation Barge",
				enable : true,
				type : "machine",
				cost : "90",
				count : "1",
				minCount : "1",
				maxCount : "1",
				modelType : "Sk OT", 
				BS : "4",
				FA : "11",
				SA : "11",
				BA : "11",
				HP : "3",
				specialRules :  [
					{name : "Living Metal"}
				],
				upgrades :  [{
					id:"1", /*wargear*/
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"3",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Quantum Shielding",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Twin-linked Tesla Destructor",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Tesla Cannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"4",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Gauss Cannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]
			}]
		},{
			id:"25", /*Necron Monolith*/
			role:"heavy",
			armyCode:"Nec",
			name:"Necron Monolith",
			icon:'images/Icons/Necron/Heavy/NecronMonolith.png',
			upgrades:[],
			models:[{
				id : "11",
				name : "Necron Monolith",
				enable : true,
				type : "machine",
				cost : "200",
				count : "1",
				minCount : "1",
				maxCount : "1",
				modelType : "Sk H", 
				BS : "4",
				FA : "14",
				SA : "14",
				BA : "14",
				HP : "4",
				specialRules :  [
					{name : "Living Metal"},
					{name : "Deep Strike"}
				],
				upgrades :  [{
					id:"1", /*wargear*/
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"6",
						minCount:"6",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Eternity Gate",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"4",
						display:'checkbox',
						available:false,
						name:"Gauss Flux Arc",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"4",
							minCount:"4",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Particle Whip",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]
			}]
		},{
			id:"26", /*Doom Scythe*/
			role:"heavy",
			armyCode:"Nec",
			name:"Doom Scythe",
			icon:'images/Icons/Necron/Heavy/DoomScythe.png',
			upgrades:[],
			models:[{
				id : "11",
				name : "Doom Scythe",
				enable : true,
				type : "machine",
				cost : "175",
				count : "1",
				minCount : "1",
				maxCount : "1",
				modelType : "Fl", 
				BS : "4",
				FA : "11",
				SA : "11",
				BA : "11",
				HP : "3",
				specialRules :  [
					{name : "Living Metal"}
				],
				upgrades :  [{
					id:"1", /*wargear*/
					label:"Wargear",
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"2",
					},
					available:true,
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Death Ray",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Twin-linked Tesla Destructor",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				}]
			}]
		},{
			id:"27", /*Canoptek Spyder*/
			role:"heavy",
			armyCode:"Nec",
			name:"Canoptek Spyder",
			icon:'images/Icons/Necron/Heavy/CanoptekSpyder.png',
			upgrades:[],
			models:[{
				id:"1",
				name:"Canoptek Spyder",
				enable:true,
				type:"infantry",
				cost:"50",
				count:"1",
				minCount:"1",
				maxCount:"3",
				WS:"3",
				BS:"3",
				S:"6",
				T:"6",
				W:"3",
				In:"2",
				At:"2",
				Ld:"10",
				save:"3",
				modelType:"Mc",
				specialRules: [
					{name:"Fearless"}
				],
				upgrades: [{
					id:"1", /*Weapons*/
					type:"static",
					label:"Wargear",
					available:true,
					counterManager:{
						type:"static",
						minCount:"1",
						maxCount:"1"
					},			
					stuff:[{
						id:"1",
						quantity:"1",
						available:false,
						display:'checkbox',
						type:'static',
						name:"Scarab Hive",
						cost:"0",
						counterManager:{
							type:"static",
							minCount:"1",
							maxCount:"1"
						}
					}]
				},{
					id:"2", /*Weapons*/
					type:"static",
					label:"Wargear",
					available:true,
					counterManager:{
						modelId:"1",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"1",
							minCount:"0",
							maxCount:"3"
						},{
							modelCount:"2",
							minCount:"0",
							maxCount:"6"
						},{
							modelCount:"3",
							minCount:"0",
							maxCount:"9"
						}]
					},			
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'multi',
						type:'static',
						name:"Fabricator Claw Array",
						cost:"10",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							}]
						}
					},{
						id:"2",
						quantity:"0",
						available:true,
						display:'multi',
						type:'static',
						name:"Gloom Prism",
						cost:"20",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							}]
						}
					},{
						id:"3",
						quantity:"0",
						available:true,
						display:'multi',
						type:'static',
						name:"Twin-linked Particle Beamer",
						cost:"25",
						counterManager:{
							modelId:"1",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"1",
								minCount:"0",
								maxCount:"1"
							},{
								modelCount:"2",
								minCount:"0",
								maxCount:"2"
							},{
								modelCount:"3",
								minCount:"0",
								maxCount:"3"
							}]
						}
					}]
				}]	
			}]
		},{
			id:"51", /*Aegis Defence Lines*/
			role:"fort",
			armyCode:"Nec",
			name:"Aegis Defence Lines",
			icon:'images/Icons/Fortification/AegisDefenceLines.png',
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
			armyCode:"Nec",
			name:"Imperial Bastion",
			icon:'images/Icons/Fortification/ImperialBastion.png',
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
			armyCode:"Nec",
			name:"Firestorm Redoubt",
			icon:'images/Icons/Fortification/FirestormRedoubt.png',
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
			armyCode:"Nec",
			name:"Skyshield Landing Pad",
			icon:'images/Icons/Fortification/SkyshieldLandingPad.png',
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
			armyCode:"Nec",
			name:"Fortress Of Redemption",
			icon:'images/Icons/Fortification/FortressOfRedemption.png',
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
			armyCode:"Nec",
			name:"Vengeance Weapon Battery",
			icon:'images/Icons/Fortification/VengeanceWeaponBattery.png',
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
