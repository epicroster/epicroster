function getDem() {
	
var bloodThroneOfKhorne = {
			id : "10",
			name : "Blood Throne Of Khorne",
			enable : false,
			type : "machine",
			cost : "75",
			count : "1",
			minCount : "1",
			maxCount : "1",
			BS : "0",
			FA : "12",
			SA : "12",
			BA : "10",
			HP : "3",
			specialRules :  [
				{name : "Daemon Of Khorne"},
				{name : "Deep Strike"},
				{name : "Gorefeast"},
				{name : "Totem Of Endless Bloodletting"}
			],
			upgrades :  []
	    }

return {armyName:"Daemons",
			armyCode:"Dem",
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
			id:"1", /*Scarbrand*/
			role:"hq",
			armyCode:"Dem",
			name:"Scarbrand",
			icon:'images/Icons/ChaosDaemons/HQ/Scarbrand.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Scarbrand",
				enable:true,
				type:"infantry",
				modelType:"F Mc(Ch)",
				cost:"225",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"10",
				BS:"10",
				S:"6",
				T:"6",
				W:"5",
				In:"10",
				At:"6",
				Ld:"9",
				save:"3",
				invSave:"5",
				specialRules: [
					{name:"Below Of Endless Fury"},
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Rage Embodied"},
					{name:"Death Incarnate"}
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
						name:"Warp-forged Armour",
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
						name:"Slaughter And Carnage",
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
			id:"2", /*Kairos Fateweaver*/
			role:"hq",
			armyCode:"Dem",
			name:"Kairos Fateweaver",
			icon:'images/Icons/ChaosDaemons/HQ/KairosFateweaver.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Kairos Fateweaver",
				enable:true,
				type:"infantry",
				modelType:"F Mc(Ch)",
				cost:"300",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"1",
				BS:"6",
				S:"5",
				T:"5",
				W:"5",
				In:"2",
				At:"1",
				Ld:"9",
				save:"",
				invSave:"4",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Oracle Of Eternity"},
					{name:"The Two Heads Of Fate"},
					{name:"Lord Of Unreality"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
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
					}]
				}]	
			}]
		},{
			id:"3", /*Ku'gath Plaguefather*/
			role:"hq",
			armyCode:"Dem",
			name:"Ku'gath Plaguefather",
			icon:'images/Icons/ChaosDaemons/HQ/KugathPlaguefather.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Ku'gath Plaguefather",
				enable:true,
				type:"infantry",
				modelType:"Mc(Ch)",
				cost:"260",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"6",
				BS:"3",
				S:"6",
				T:"7",
				W:"7",
				In:"4",
				At:"6",
				Ld:"9",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Nurgling Infestation"},
					{name:"Poisoned 4+"},
					{name:"Psyker (Master Level 1)"},
					{name:"Slime Trail"},
					{name:"Very Bulky"},
					{name:"Immortal Commander"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Necrotic Missiles",
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
			id:"4", /*Bloodthirster*/
			role:"hq",
			armyCode:"Dem",
			name:"Bloodthirster",
			icon:'images/Icons/ChaosDaemons/HQ/Bloodthirster.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Bloodthirster",
				enable:true,
				type:"infantry",
				modelType:"F Mc(Ch)",
				cost:"250",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"10",
				BS:"10",
				S:"6",
				T:"6",
				W:"5",
				In:"9",
				At:"6",
				Ld:"9",
				save:"3",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"3",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Warp-forged Armour",
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
						name:"Lash Of Khorne",
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
						name:"Axe Of Khorne",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				},{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"5",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"5",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"5", /*Lord Of Change*/
			role:"hq",
			armyCode:"Dem",
			name:"Lord Of Change",
			icon:'images/Icons/ChaosDaemons/HQ/LordOfChange.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Lord Of Change",
				enable:true,
				type:"infantry",
				modelType:"F Mc(Ch)",
				cost:"230",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"6",
				BS:"6",
				S:"6",
				T:"6",
				W:"5",
				In:"6",
				At:"5",
				Ld:"9",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					label:"Psyker Level",
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Psyker (Master Level 3)",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"5",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"5",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"6", /*Great Unclean One*/
			role:"hq",
			armyCode:"Dem",
			name:"Great Unclean One",
			icon:'images/Icons/ChaosDaemons/HQ/GreatUncleanOne.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Great Unclean One",
				enable:true,
				type:"infantry",
				modelType:"Mc(Ch)",
				cost:"190",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"6",
				BS:"3",
				S:"6",
				T:"6",
				W:"4",
				In:"4",
				At:"5",
				Ld:"9",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Poisoned 4+"},
					{name:"Psyker (Master Level 1)"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Psyker Level",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Addition Psyker Level",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"5",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"5",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"7", /*Keeper Of Secrets*/
			role:"hq",
			armyCode:"Dem",
			name:"Keeper Of Secrets",
			icon:'images/Icons/ChaosDaemons/HQ/KeeperOfSecrets.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Keeper Of Secrets",
				enable:true,
				type:"infantry",
				modelType:"Mc(Ch)",
				cost:"170",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"9",
				BS:"6",
				S:"6",
				T:"6",
				W:"5",
				In:"10",
				At:"6",
				Ld:"9",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Preferred Enemy (Eldar And Dark Eldar)"},
					{name:"Psyker (Master Level 1)"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Psyker Level",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Addition Psyker Level",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"5",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"5",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"8", /*Daemon Prince*/
			role:"hq",
			armyCode:"Dem",
			name:"Daemon Prince",
			icon:'images/Icons/ChaosDaemons/HQ/DaemonPrince.png',
			upgrades:[{
				id:"5",
				maxquantity:"1",
				label:"Heavy Choice",
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
					name:"Count as Heavy",
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
				name:"Daemon Prince",
				enable:true,
				type:"infantry",
				modelType:"Mc(Ch)",
				cost:"145",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"9",
				BS:"5",
				S:"6",
				T:"5",
				W:"4",
				In:"8",
				At:"5",
				Ld:"9",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Chaos God",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:true,
						name:"Daemon Of Khorne",
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
						name:"Daemon Of Tzeentch",
						cost:"25",
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
						name:"Daemon Of Nurgle",
						cost:"25",
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
						name:"Daemon Of Slaanesh",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Daemonic Flight",
						cost:"40",
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
						name:"Warp-forged Armour",
						cost:"20",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"5",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"5",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Psyker Level",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Psyker Master Level",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"3",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"9", /*Skulltaker*/
			role:"hq",
			armyCode:"Dem",
			name:"Skulltaker",
			icon:'images/Icons/ChaosDaemons/HQ/Skulltaker.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Skulltaker",
				enable:true,
				type:"infantry",
				modelType:"Inf(Ch)",
				cost:"100",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"9",
				BS:"9",
				S:"5",
				T:"4",
				W:"2",
				In:"9",
				At:"4",
				Ld:"8",
				save:"3",
				invSave:"5",
				specialRules: [
					{name:"Independent Character"},
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Skulls For The Skull Throne!"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"3",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Lesser Locus Of Abjuration",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Cloak Of Skull",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"The Slayer Sword",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Mount",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Juggernaut Of Khorne",
						cost:"45",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]
		},{
			id:"10", /*Karanak*/
			role:"hq",
			armyCode:"Dem",
			name:"Karanak",
			icon:'images/Icons/ChaosDaemons/HQ/Karanak.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Karanak",
				enable:true,
				type:"infantry",
				modelType:"B(Ch)",
				cost:"120",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"7",
				BS:"0",
				S:"5",
				T:"5",
				W:"3",
				In:"6",
				At:"4",
				Ld:"8",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Independent Character"},
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Hatred"},
					{name:"Prey Of The Blood God"},
					{name:"Scouts"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"3",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Greater Locus Of Fury",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Vengeance",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Brass Collar Of Bloody",
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
			id:"11", /*The Changeling*/
			role:"hq",
			armyCode:"Dem",
			name:"The Changeling",
			icon:'images/Icons/ChaosDaemons/HQ/TheChangeling.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"The Changeling",
				enable:true,
				type:"infantry",
				modelType:"Inf(Ch)",
				cost:"75",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"3",
				BS:"4",
				S:"3",
				T:"3",
				W:"2",
				In:"3",
				At:"1",
				Ld:"8",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Independent Character"},
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Formless Horror"},
					{name:"Psyker (Master Level 1)"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Lesser Locus Of Transmogrification",
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
			id:"12", /*The Blue Scribes*/
			role:"hq",
			armyCode:"Dem",
			name:"The Blue Scribes",
			icon:'images/Icons/ChaosDaemons/HQ/TheBlueScribes.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"The Blue Scribes",
				enable:true,
				type:"infantry",
				modelType:"JBk(Ch)",
				cost:"81",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"3",
				BS:"3",
				S:"3",
				T:"4",
				W:"2",
				In:"3",
				At:"2",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Spell Syphon"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Scrolls Of Sorcery",
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
			id:"13", /*Epidemius*/
			role:"hq",
			armyCode:"Dem",
			name:"Epidemius",
			icon:'images/Icons/ChaosDaemons/HQ/Epidemius.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Epidemius",
				enable:true,
				type:"infantry",
				modelType:"JBk(Ch)",
				cost:"110",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"5",
				S:"5",
				T:"5",
				W:"4",
				In:"4",
				At:"4",
				Ld:"8",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Independent Character"},
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Tally Of Pestilence"},
					{name:"Very Bulky"}
				],
				upgrades: [{
					id:"1", /*wargear*/
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
						display:'checkbox',
						available:false,
						name:"Plaguesword",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Lesser Locus Of Virulence",
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
			id:"14", /*The Masque Of Slaanesh*/
			role:"hq",
			armyCode:"Dem",
			name:"The Masque Of Slaanesh",
			icon:'images/Icons/ChaosDaemons/HQ/TheMasqueOfSlaanesh.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"The Masque Of Slaanesh",
				enable:true,
				type:"infantry",
				cost:"110",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"5",
				S:"5",
				T:"5",
				W:"4",
				In:"4",
				At:"4",
				Ld:"8",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"The Eternal Dance"},
					{name:"Hit And Run"},
					{name:"Unnatural Reflexes"}
				],
				upgrades: []	
			}]
		},{
			id:"15", /*Herald Of Khorne*/
			role:"hq",
			armyCode:"Dem",
			name:"Herald Of Khorne",
			icon:'images/Icons/ChaosDaemons/HQ/HeraldOfKhorne.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Herald Of Khorne",
				enable:true,
				type:"infantry",
				cost:"55",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"7",
				BS:"7",
				S:"5",
				T:"4",
				W:"2",
				In:"6",
				At:"3",
				Ld:"8",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Independent Character"},
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Hellblade",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Lesser Lotus Of Abjuration",
						cost:"10",
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
						name:"Greater Lotus Of Fury",
						cost:"20",
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
						name:"Exalted Lotus Of Wrath",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"3",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Mount",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Juggernaut Of Khorne",
						cost:"45",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"5",
							stuffId:"1"
						}],						
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"5",
					label:"Blood Throne Of Khorne",
					available:true,
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					checked:false,
					type:"model",
					label:"Throne",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"Blood Throne Of Khorne",
						display:'checkbox',
						modelId:"2",
						cost:"0",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"4",
							stuffId:"1"
						}],
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id : "2",
				name : "Blood Throne Of Khorne",
				enable : false,
				type : "machine",
				modelType:"Ch OT",
				cost : "75",
				count : "1",
				minCount : "1",
				maxCount : "1",
				BS : "0",
				FA : "12",
				SA : "12",
				BA : "10",
				HP : "3",
				specialRules :  [
					{name : "Daemon Of Khorne"},
					{name : "Deep Strike"},
					{name : "Gorefeast"},
					{name : "Totem Of Endless Bloodletting"}
				],
				upgrades :  []
			}]	
		},{
			id:"16", /*Herald Of Tzeentch*/
			role:"hq",
			armyCode:"Dem",
			name:"Herald Of Tzeentch",
			icon:'images/Icons/ChaosDaemons/HQ/HeraldOfTzeentch.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Herald Of Tzeentch",
				enable:true,
				type:"infantry",
				cost:"20",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"3",
				BS:"4",
				S:"3",
				T:"3",
				W:"2",
				In:"3",
				At:"2",
				Ld:"8",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Independent Character"},
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Psyker (Master Level 1)"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Lesser Lotus Of Transmogrification",
						cost:"10",
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
						name:"Greater Lotus Of Change",
						cost:"20",
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
						name:"Exalted Lotus Of Conjuration",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"3",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Mount",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Disc Of Tzeentch",
						cost:"25",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"5",
							stuffId:"1"
						}],						
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"5",
					label:"Burning Chariot Of Tzeentch",
					available:true,
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					checked:false,
					type:"model",
					label:"Mount",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"Burning Chariot",
						display:'checkbox',
						modelId:"2",
						cost:"0",
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"4",
							stuffId:"1"
						}],
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"6", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Psyker Level",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'multi',
						available:true,
						name:"Psyker Level",
						cost:"25",						
						counterManager:{
							type:"static",
							maxCount:"3",
							minCount:"1",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Burning Chariot",
				enable:false,
				type:"machine",
				modelType:"Ch Sk F OT",
				cost:"50",
				count:"1",
				minCount:"1",
				maxCount:"1",
				BS:"3",
				FA:"10",
				SA:"10",
				BA:"10",
				HP:"3",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Deep Strike"},
					{name:"Aura Of Change"}
				],
				upgrades: [{
					id:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'checkbox',
						name:"Blue Horror Crew",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]	
		},{
			id:"17", /*Herald Of Nurgle*/
			role:"hq",
			armyCode:"Dem",
			name:"Herald Of Nurgle",
			icon:'images/Icons/ChaosDaemons/HQ/HeraldOfNurgle.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Herald Of Nurgle",
				enable:true,
				type:"infantry",
				cost:"45",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"5",
				S:"5",
				T:"5",
				W:"2",
				In:"4",
				At:"3",
				Ld:"8",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Independent Character"},
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"1", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Plaguesword",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Lesser Lotus Of Virulence",
						cost:"10",
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
						name:"Greater Lotus Of Fecundity",
						cost:"20",
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
						name:"Exalted Lotus Of Contagion",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"3",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Palanquin Of Nurgle",
						cost:"40",					
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"6", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Psyker Level",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Psyker Level",
						cost:"25",						
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					}]
				}]	
			}]	
		},{
			id:"18", /*Herald Of Slaanesh*/
			role:"hq",
			armyCode:"Dem",
			name:"Herald Of Slaanesh",
			icon:'images/Icons/ChaosDaemons/HQ/HeraldOfSlaanesh.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Herald Of Slaanesh",
				enable:true,
				type:"infantry",
				cost:"45",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"7",
				BS:"6",
				S:"4",
				T:"3",
				W:"2",
				In:"7",
				At:"4",
				Ld:"8",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Independent Character"},
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Lesser Lotus Of Grace",
						cost:"10",
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
						name:"Exalted Lotus Of Swiftness",
						cost:"20",
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
						name:"Exalted Lotus Of Beguilement",
						cost:"30",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"3",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"3",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"3",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Exalted Rewards",
						cost:"30",
						value:"3",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Mount",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Steed Of Slaanesh",
						cost:"15",			
						conditions: [{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"7",
							stuffId:"1"
						},{
							id:"1",
							modelId:"1",
							type:"dependOnUpgradeChecked",
							upgradeId:"7",
							stuffId:"2"
						}],							
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"6", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Psyker Level",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Psyker Level",
						cost:"25",						
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					}]
				},{
					id:"7",
					label:"Seeker Chariot",
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
						name:"Seeker Chariot",
						display:'checkbox',
						modelId:"2",
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
						name:"Exalted Seeker Chariot",
						display:'checkbox',
						modelId:"3",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Seeker Chariot Of Slaanesh",
				enable:false,
				type:"machine",
				modelType:"Ch F OT",
				cost:"30",
				count:"1",
				minCount:"1",
				maxCount:"1",
				BS:"2",
				FA:"11",
				SA:"11",
				BA:"10",
				HP:"2",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Deep Strike"},
					{name:"Fleshshredder"}
				],
				upgrades: []	
			},{
				id:"3",
				role:"hq",
				name:"Exalted Chariot Of Slaanesh",
				enable:false,
				type:"machine",
				modelType:"Ch F OT",
				cost:"65",
				count:"1",
				minCount:"1",
				maxCount:"1",
				BS:"2",
				FA:"11",
				SA:"11",
				BA:"10",
				HP:"4",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Deep Strike"},
					{name:"Fleshshredder"}
				],
				upgrades: []	
			}]	
		},{
			id:"19", /*Bloodletters Of Khorne*/
			role:"troops",
			armyCode:"Dem",
			name:"Bloodletters Of Khorne",
			icon:'images/Icons/ChaosDaemons/Troops/BloodlettersOfKhorne.png',
			upgrades:[{
				id:"5",
				label:"Bloodreaper",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"2",
					minCount:"0",
				},
				checked:false,
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Bloodreaper",
					display:'checkbox',
					modelId:"2",
					cost:"5",
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
				name:"Bloodletter",
				enable:true,
				type:"infantry",
				cost:"10",
				count:"10",
				minCount:"10",
				maxCount:"20",
				WS:"5",
				BS:"5",
				S:"4",
				T:"3",
				W:"1",
				In:"4",
				At:"1",
				Ld:"7",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Hellblade",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Instrument Of Chaos",
						cost:"10",
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
						name:"Icon Of Chaos",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Banner",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Banner Of Blood",
						cost:"10",
						conditions: [{
							id:"1",
							type:"isUpgradeChecked",
							modelId:"1",
							upgradeId:"3",
							stuffId:"2"
						}],							
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Bloodreaper",
				enable:false,
				type:"infantry",
				cost:"15",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"5",
				S:"4",
				T:"3",
				W:"1",
				In:"4",
				At:"2",
				Ld:"7",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Hellblade",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"10",
					available:true,
					type:"modelCounter",
					modelId:"1",
					display:'hidden',
					counterManager:{
						modelId:"2",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						}],
					},
					operator:"minus",
					value:"1",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"counter",
						display:'hidden',
						cost:"0",
						counterManager:{
							modelId:"2",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"1",
								maxCount:"1"
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"20", /*Pink Horrors Of Tzeentch*/
			role:"troops",
			armyCode:"Dem",
			name:"Pink Horrors Of Tzeentch",
			icon:'images/Icons/ChaosDaemons/Troops/PinkHorrorsOfTzeentch.png',
			upgrades:[{
				id:"5",
				label:"Iridescent Horror",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"2",
					minCount:"0",
				},
				checked:false,
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Iridescent Horror",
					display:'checkbox',
					modelId:"2",
					cost:"5",
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
				name:"Pink Horror",
				enable:true,
				type:"infantry",
				cost:"9",
				count:"10",
				minCount:"10",
				maxCount:"20",
				WS:"3",
				BS:"3",
				S:"3",
				T:"3",
				W:"1",
				In:"4",
				At:"1",
				Ld:"7",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Blue Horrors"},
					{name:"Brotherhood Of Sorcerers"},
					{name:"Magic Made Manifest"}
				],
				upgrades: [{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Instrument Of Chaos",
						cost:"10",
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
						name:"Icon Of Chaos",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Banner",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Blasted Standard",
						cost:"10",
						conditions: [{
							id:"1",
							type:"isUpgradeChecked",
							modelId:"1",
							upgradeId:"3",
							stuffId:"2"
						}],							
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Iridescent Horror",
				enable:false,
				type:"infantry",
				cost:"14",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"3",
				BS:"3",
				S:"3",
				T:"3",
				W:"1",
				In:"4",
				At:"2",
				Ld:"7",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Blue Horrors"},
					{name:"Brotherhood Of Sorcerers"},
					{name:"Magic Made Manifest"}
				],
				upgrades: [{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					label:"Rewards",
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"10",
					available:true,
					type:"modelCounter",
					modelId:"1",
					display:'hidden',
					counterManager:{
						modelId:"2",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						}],
					},
					operator:"minus",
					value:"1",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"counter",
						display:'hidden',
						cost:"0",
						counterManager:{
							modelId:"2",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"1",
								maxCount:"1"
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"21", /*Plaguebearers Of Nurgle*/
			role:"troops",
			armyCode:"Dem",
			name:"Plaguebearers Of Nurgle",
			icon:'images/Icons/ChaosDaemons/Troops/PlaguebearersOfNurgle.png',
			upgrades:[{
				id:"5",
				label:"Plagueridden",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"2",
					minCount:"0",
				},
				checked:false,
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Plagueridden",
					display:'checkbox',
					modelId:"2",
					cost:"5",
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
				name:"Plaguebearer",
				enable:true,
				type:"infantry",
				cost:"9",
				count:"10",
				minCount:"10",
				maxCount:"20",
				WS:"3",
				BS:"3",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"1",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:false,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Plaguesword",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"1",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Instrument Of Chaos",
						cost:"10",
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
						name:"Icon Of Chaos",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Banner",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Plague Banner",
						cost:"10",
						conditions: [{
							id:"1",
							type:"isUpgradeChecked",
							modelId:"1",
							upgradeId:"3",
							stuffId:"2"
						}],								
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Plagueridden",
				enable:false,
				type:"infantry",
				cost:"14",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"3",
				BS:"3",
				S:"4",
				T:"4",
				W:"1",
				In:"2",
				At:"2",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"10",
					available:true,
					type:"modelCounter",
					modelId:"1",
					display:'hidden',
					counterManager:{
						modelId:"2",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						}],
					},
					operator:"minus",
					value:"1",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"counter",
						display:'hidden',
						cost:"0",
						counterManager:{
							modelId:"2",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"1",
								maxCount:"1"
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"22", /*Daemonettes Of Slaanesh*/
			role:"troops",
			armyCode:"Dem",
			name:"Daemonettes Of Slaanesh",
			icon:'images/Icons/ChaosDaemons/Troops/DaemonettesOfSlaanesh.png',
			upgrades:[{
				id:"5",
				label:"Alluress",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"2",
					minCount:"0",
				},
				checked:false,
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Alluress",
					display:'checkbox',
					modelId:"2",
					cost:"5",
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
				name:"Daemonette",
				enable:true,
				type:"infantry",
				cost:"9",
				count:"10",
				minCount:"10",
				maxCount:"20",
				WS:"5",
				BS:"4",
				S:"3",
				T:"3",
				W:"1",
				In:"5",
				At:"2",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Instrument Of Chaos",
						cost:"10",
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
						name:"Icon Of Chaos",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Banner",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Rapturous Standard",
						cost:"10",
						conditions: [{
							id:"1",
							type:"isUpgradeChecked",
							modelId:"1",
							upgradeId:"3",
							stuffId:"2"
						}],								
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Alluress",
				enable:false,
				type:"infantry",
				cost:"14",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"4",
				S:"3",
				T:"3",
				W:"1",
				In:"5",
				At:"3",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"10",
					available:true,
					type:"modelCounter",
					modelId:"1",
					display:'hidden',
					counterManager:{
						modelId:"2",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						}],
					},
					operator:"minus",
					value:"1",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"counter",
						display:'hidden',
						cost:"0",
						counterManager:{
							modelId:"2",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"1",
								maxCount:"1"
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"23", /*Nurglings*/
			role:"troops",
			armyCode:"Dem",
			name:"Nurglings",
			icon:'images/Icons/ChaosDaemons/Troops/Nurglings.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Nurgling",
				enable:true,
				type:"infantry",
				cost:"15",
				count:"3",
				minCount:"3",
				maxCount:"6",
				WS:"3",
				BS:"3",
				S:"3",
				T:"3",
				W:"4",
				In:"3",
				At:"4",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Infiltrate"},
					{name:"Swarms"}
				],
				upgrades: []	
			}]	
		},{
			id:"24", /*Bloodcrushers Of Khorne*/
			role:"elite",
			armyCode:"Dem",
			name:"Bloodcrushers Of Khorne",
			icon:'images/Icons/ChaosDaemons/Elite/BloodcrushersOfKhorne.png',
			upgrades:[{
				id:"5",
				label:"Bloodhunter",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"2",
					minCount:"0",
				},
				checked:false,
				type:"model",
				label:"Bloodhunter",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Bloodhunter",
					display:'checkbox',
					modelId:"2",
					cost:"5",
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
				name:"Bloodcrusher",
				enable:true,
				type:"infantry",
				modelType:"Cav",
				cost:"45",
				count:"3",
				minCount:"3",
				maxCount:"9",
				WS:"5",
				BS:"5",
				S:"5",
				T:"4",
				W:"3",
				In:"4",
				At:"3",
				Ld:"7",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Hellblade",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Instrument Of Chaos",
						cost:"10",
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
						name:"Icon Of Chaos",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Banner",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Banner Of Blood",
						cost:"10",
						conditions: [{
							id:"1",
							type:"isUpgradeChecked",
							modelId:"1",
							upgradeId:"3",
							stuffId:"2"
						}],							
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Bloodhunter",
				enable:false,
				type:"infantry",
				modelType:"Cav(Ch)",
				cost:"50",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"5",
				S:"5",
				T:"4",
				W:"3",
				In:"4",
				At:"4",
				Ld:"7",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Weapon",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Hellblade",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"10",
					available:true,
					type:"modelCounter",
					modelId:"1",
					display:'hidden',
					counterManager:{
						modelId:"2",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						}],
					},
					operator:"minus",
					value:"1",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"counter",
						display:'hidden',
						cost:"0",
						counterManager:{
							modelId:"2",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"1",
								maxCount:"1"
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"25", /*Flamers Of Tzeentch*/
			role:"elite",
			armyCode:"Dem",
			name:"Flamers Of Tzeentch",
			icon:'images/Icons/ChaosDaemons/Elite/FlamersOfTzeentch.png',
			upgrades:[{
				id:"5",
				label:"Pyrocaster",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				checked:false,
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Pyrocaster",
					display:'checkbox',
					modelId:"2",
					cost:"5",
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
				name:"Flamer Of Tzeentch",
				enable:true,
				type:"infantry",
				modelType:"JmpInf",
				cost:"23",
				count:"3",
				minCount:"3",
				maxCount:"9",
				WS:"2",
				BS:"4",
				S:"4",
				T:"4",
				W:"2",
				In:"4",
				At:"2",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Warp Flame"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Flames Of Tzeentch",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				name:"Pyrocaster",
				enable:false,
				type:"infantry",
				modelType:"JmpInf(Ch)",
				cost:"28",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"2",
				BS:"4",
				S:"4",
				T:"4",
				W:"2",
				In:"4",
				At:"2",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Warp Flame"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Flames Of Tzeentch",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"10",
					available:true,
					type:"modelCounter",
					modelId:"1",
					display:'hidden',
					counterManager:{
						modelId:"2",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						}],
					},
					operator:"minus",
					value:"1",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"counter",
						display:'hidden',
						cost:"0",
						counterManager:{
							modelId:"2",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"1",
								maxCount:"1"
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"26", /*Beast Of Nurgle*/
			role:"elite",
			armyCode:"Dem",
			name:"Beast Of Nurgle",
			icon:'images/Icons/ChaosDaemons/Elite/BeastofNurgle.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Beast Of Nurgle",
				enable:true,
				type:"infantry",
				modelType:"B",
				cost:"52",
				count:"1",
				minCount:"1",
				maxCount:"9",
				WS:"3",
				BS:"0",
				S:"4",
				T:"5",
				W:"4",
				In:"2",
				At:"D6+1",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Attention Seeker"},
					{name:"It Will Not Die"},
					{name:"Poisoned 4+"},
					{name:"Slime Trail"},
					{name:"Very Bulky"}
				],
				upgrades: []	
			}]	
		},{
			id:"27", /*Fiends Of Slaanesh*/
			role:"elite",
			armyCode:"Dem",
			name:"Fiends Of Slaanesh",
			icon:'images/Icons/ChaosDaemons/Elite/FiendsOfSlaanesh.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Fiend Of Slaanesh",
				enable:true,
				type:"infantry",
				modelType:"B",
				cost:"35",
				count:"3",
				minCount:"3",
				maxCount:"9",
				WS:"4",
				BS:"0",
				S:"4",
				T:"4",
				W:"3",
				In:"6",
				At:"3",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Disruptive Song"},
					{name:"Soporific Musk"},
					{name:"Very Bulky"}
				],
				upgrades: []	
			}]	
		},{
			id:"28", /*Flesh Hounds Of Khorne*/
			role:"fast",
			armyCode:"Dem",
			name:"Flesh Hounds Of Khorne",
			icon:'images/Icons/ChaosDaemons/Fast/FleshHoundsOfKhorne.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Flesh Hounds Of Khorne",
				enable:true,
				type:"infantry",
				modelType:"B",
				cost:"16",
				count:"5",
				minCount:"5",
				maxCount:"20",
				WS:"5",
				BS:"0",
				S:"4",
				T:"4",
				W:"2",
				In:"4",
				At:"2",
				Ld:"7",
				save:"6",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Khorne"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Scouts"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Collar Of Khorne",
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
			id:"29", /*Screamers Of Tzeentch*/
			role:"fast",
			armyCode:"Dem",
			name:"Screamers Of Tzeentch",
			icon:'images/Icons/ChaosDaemons/Fast/ScreamersOfTzeentch.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Screamer Of Tzeentch",
				enable:true,
				type:"infantry",
				modelType:"JBk",
				cost:"25",
				count:"3",
				minCount:"3",
				maxCount:"9",
				WS:"3",
				BS:"0",
				S:"4",
				T:"4",
				W:"2",
				In:"4",
				At:"3",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Lamprey's Bite"},
					{name:"Slashing Attack"}
				],
				upgrades: []	
			}]	
		},{
			id:"30", /*Plague Drones Of Nurgle*/
			role:"fast",
			armyCode:"Dem",
			name:"Plague Drones Of Nurgle",
			icon:'images/Icons/ChaosDaemons/Elite/PlagueDronesOfNurgle.png',
			upgrades:[{
				id:"5",
				label:"Plaguebringer",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"2",
					minCount:"0",
				},
				checked:false,
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Plaguebringer",
					display:'checkbox',
					modelId:"2",
					cost:"5",
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
				name:"Plague Drones",
				enable:true,
				type:"infantry",
				modelType:"JP Cav",
				cost:"42",
				count:"3",
				minCount:"3",
				maxCount:"9",
				WS:"3",
				BS:"3",
				S:"4",
				T:"5",
				W:"3",
				In:"2",
				At:"3",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Very Bulky"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Weapon",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Plaguesword",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Instrument Of Chaos",
						cost:"10",
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
						name:"Icon Of Chaos",
						cost:"15",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					label:"Banner",
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Plague Banner",
						cost:"25",
						conditions: [{
							id:"1",
							type:"isUpgradeChecked",
							modelId:"1",
							upgradeId:"3",
							stuffId:"2"
						}],							
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id : "5", /*Death's Heads*/
					type : "counter",
					label:"Wargear",
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
						id : "1",
						quantity : "0",
						available : true,
						display : 'checkbox',
						type : 'counter',
						name : "Death's Heads",
						cost : "5",
						counterManager : {
							type : "static",
							maxCount : "0",
							minCount : "0",
						}	
					}]
				},{
					id : "6", /*Death's Heads*/
					type : "counter",
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
						id : "1",
						quantity : "0",
						available : true,
						display : 'checkbox',
						type : 'counter',
						name : "Rot Proboscis",
						cost : "5",
						conditions: [{
							id:"1",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"6",
							stuffId:"2"
						}],
						counterManager : {
							type : "static",
							maxCount : "0",
							minCount : "0",
						}	
					},{
						id : "2",
						quantity : "0",
						available : true,
						display : 'checkbox',
						type : 'counter',
						name : "Venom Sting",
						cost : "5",
						conditions: [{
							id:"1",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"6",
							stuffId:"1"
						}],
						counterManager : {
							type : "static",
							maxCount : "0",
							minCount : "0",
						}	
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Plaguebringer",
				enable:false,
				type:"infantry",
				modelType:"JP Cav(Ch)",
				cost:"47",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"3",
				BS:"3",
				S:"4",
				T:"5",
				W:"3",
				In:"2",
				At:"4",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Nurgle"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Very Bulky"}
				],
				upgrades: [{
					id:"2", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Weapon",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"Plaguesword",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"10",
					available:true,
					type:"modelCounter",
					modelId:"1",
					display:'hidden',
					counterManager:{
						modelId:"2",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						}],
					},
					operator:"minus",
					value:"1",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"counter",
						display:'hidden',
						cost:"0",
						counterManager:{
							modelId:"2",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"1",
								maxCount:"1"
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"31", /*Chaos Furies*/
			role:"fast",
			armyCode:"Dem",
			name:"Chaos Furies",
			icon:'images/Icons/ChaosDaemons/Fast/ChaosFuries.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Chaos Furies",
				enable:true,
				type:"infantry",
				modelType:"JmpInf",
				cost:"6",
				count:"5",
				minCount:"5",
				maxCount:"20",
				WS:"3",
				BS:"0",
				S:"4",
				T:"3",
				W:"1",
				In:"4",
				At:"1",
				Ld:"2",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Daemon"}
				],
				upgrades: [{
					id:"5", /*Mark of gods*/
					type:"counter",
					label:"Mark Of God",
					available:true,
					setCounter:{
						type:"dependOnModelCount",
						modelId:"1",
						countSet:[{
							modelCount:"5",
							minCount:"0",
							maxCount:"5"
						},{
							modelCount:"6",
							minCount:"0",
							maxCount:"6"
						},{
							modelCount:"7",
							minCount:"0",
							maxCount:"7"
						},{
							modelCount:"8",
							minCount:"0",
							maxCount:"8"
						},{
							modelCount:"9",
							minCount:"0",
							maxCount:"9"
						},{
							modelCount:"10",
							minCount:"0",
							maxCount:"10"
						},{
							modelCount:"11",
							minCount:"0",
							maxCount:"11"
						},{
							modelCount:"12",
							minCount:"0",
							maxCount:"12"
						},{
							modelCount:"13",
							minCount:"0",
							maxCount:"13"
						},{
							modelCount:"14",
							minCount:"0",
							maxCount:"14"
						},{
							modelCount:"15",
							minCount:"0",
							maxCount:"15"
						},{
							modelCount:"16",
							minCount:"0",
							maxCount:"16"
						},{
							modelCount:"17",
							minCount:"0",
							maxCount:"17"
						},{
							modelCount:"18",
							minCount:"0",
							maxCount:"18"
						},{
							modelCount:"19",
							minCount:"0",
							maxCount:"19"
						},{
							modelCount:"20",
							minCount:"0",
							maxCount:"20"
						}],
					},
					counterManager:{
							type:"static",
							maxCount:"0",
							minCount:"0",
					},	
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Daemon of Khorne",
						cost:"2",
						conditions: [{
							id:"1",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"2"
						},{
							id:"2",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"3"
						},{
							id:"3",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"4"
						}],
						counterManager:{
							type:"static",
							maxCount:"0",
							minCount:"0",
						}	
					},{
						id:"2",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Daemon of Tzeentch",
						cost:"1",
						conditions: [{
							id:"1",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"1"
						},{
							id:"2",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"3"
						},{
							id:"3",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"4"
						}],
						counterManager:{
							type:"static",
							maxCount:"0",
							minCount:"0",
						}	
					},{
						id:"3",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Daemon of Nurgle",
						cost:"2",
						conditions: [{
							id:"1",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"1"
						},{
							id:"2",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"2"
						},{
							id:"3",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"4"
						}],
						counterManager:{
							type:"static",
							maxCount:"0",
							minCount:"0",
						}	
					},{
						id:"4",
						quantity:"0",
						available:true,
						display:'checkbox',
						type:'counter',
						name:"Daemon of Slaanesh",
						cost:"2",
						conditions: [{
							id:"1",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"1"
						},{
							id:"2",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"2"
						},{
							id:"3",
							type:"dependOnUpgradeChecked",
							modelId:"1",
							upgradeId:"5",
							stuffId:"3"
						}],
						counterManager:{
							type:"static",
							maxCount:"0",
							minCount:"0",
						}	
					}]
				}]	
			}]	
		},{
			id:"32", /*Seekers Of Slaanesh*/
			role:"fast",
			armyCode:"Dem",
			name:"Seekers Of Slaanesh",
			icon:'images/Icons/ChaosDaemons/Fast/SeekersOfSlaanesh.png',
			upgrades:[{
				id:"5",
				label:"Heartseeker",
				available:true,
				counterManager:{
					type:"static",
					maxCount:"1",
					minCount:"0",
				},
				checked:false,
				type:"model",
				stuff:[{
					id:"1",
					quantity:"0",
					available:true,
					name:"Heartseeker",
					display:'checkbox',
					modelId:"2",
					cost:"5",
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
				name:"Seeker Of Slaanesh",
				enable:true,
				type:"infantry",
				modelType:"Cav",
				cost:"12",
				count:"5",
				minCount:"5",
				maxCount:"20",
				WS:"5",
				BS:"4",
				S:"3",
				T:"3",
				W:"1",
				In:"5",
				At:"3",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Outflank"},
					{name:"Acute Senses"}
				],
				upgrades: [{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					label:"Wargear",
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Instrument Of Chaos",
						cost:"10",
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
						name:"Icon Of Chaos",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Banner",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'checkbox',
						available:true,
						name:"Rapturous Banner",
						cost:"25",
						conditions: [{
							id:"1",
							type:"isUpgradeChecked",
							modelId:"1",
							upgradeId:"3",
							stuffId:"2"
						}],							
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Heartseeker",
				enable:false,
				type:"infantry",
				modelType:"Cav(Ch)",
				cost:"17",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"4",
				S:"3",
				T:"3",
				W:"1",
				In:"5",
				At:"4",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Outflank"},
					{name:"Acute Senses"}
				],
				upgrades: [{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					label:"Rewards",
					type:"static",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"10",
					available:true,
					type:"modelCounter",
					modelId:"1",
					display:'hidden',
					counterManager:{
						modelId:"2",
						type:"dependOnModelCount",
						countSet:[{
							modelCount:"0",
							minCount:"0",
							maxCount:"0"
						},{
							modelCount:"1",
							minCount:"1",
							maxCount:"1"
						}],
					},
					operator:"minus",
					value:"1",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						name:"counter",
						display:'hidden',
						cost:"0",
						counterManager:{
							modelId:"2",
							type:"dependOnModelCount",
							countSet:[{
								modelCount:"0",
								minCount:"0",
								maxCount:"0"
							},{
								modelCount:"1",
								minCount:"1",
								maxCount:"1"
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"33", /*Hellflayer Of Slaanesh*/
			role:"fast",
			armyCode:"Dem",
			name:"Hellflayer Of Slaanesh",
			icon:'images/Icons/ChaosDaemons/Fast/HellflayerOfSlaanesh.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Hellflayer Of Slaanesh",
				enable:true,
				type:"machine",
				modelType:"Ch F OT",
				cost:"60",
				count:"1",
				minCount:"1",
				maxCount:"1",
				BS:"4",
				FA:"11",
				SA:"11",
				BA:"10",
				HP:"2",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Deep Strike"},
					{name:"Fleshshredder"}
				],
				upgrades: []	
			},{
				id:"2",
				role:"hq",
				name:"Exalted Alluress",
				enable:true,
				type:"infantry",
				cost:"0",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"4",
				S:"3",
				T:"3",
				W:"1",
				In:"5",
				At:"4",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Soulcsent"}
				],
				upgrades: []	
			}]	
		},{
			id:"34", /*Soul Grinder*/
			role:"heavy",
			armyCode:"Dem",
			name:"Soul Grinder",
			icon:'images/Icons/ChaosDaemons/Heavy/SoulGrinder.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"elite",
				name:"Soul Grinder",
				enable:true,
				type:"walker",
				cost:"135",
				count:"1",
				minCount:"1",
				maxCount:"1",
				BS:"3",
				WS:"3",
				S:"6",
				In:"3",
				At:"4",
				FA:"13",
				SA:"13",
				BA:"11",
				HP:"4",
				specialRules: [
					{name:"Daemonic Resilience"},
					{name:"Deep Strike"}
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
					label:"Weapons",
					stuff:[{
						id:"1",
						quantity:"1",
						available:false,
						display:'checkbox',
						name:"Harvester Cannon",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"1",
						available:false,
						display:'checkbox',
						name:"Iron Claw",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"2",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Mark Of God",
					stuff:[{
						id:"1",
						quantity:"1",
						available:true,
						display:'checkbox',
						name:"Daemon Of Khorne",
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
						display:'checkbox',
						name:"Daemon Of Tzeentch",
						cost:"5",
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
						name:"Daemon Of Nurgle",
						cost:"15",
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
						name:"Daemon Of Slaanesh",
						cost:"15",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'checkbox',
						name:"Baleful Torrent",
						cost:"20",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						available:true,
						display:'checkbox',
						name:"Warp Gaze",
						cost:"25",
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
						name:"Phlegm Bombardment",
						cost:"30",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"4",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Weapon",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'checkbox',
						name:"Warpsword",
						cost:"25",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]
		    }]
		},{
			id:"35", /*Skull Cannon Of Khorne*/
			role:"heavy",
			armyCode:"Dem",
			name:"Skull Cannon Of Khorne",
			icon:'images/Icons/ChaosDaemons/Heavy/SkullCannonOfKhorne.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Skull Cannon Of Khorne",
				enable:true,
				type:"machine",
				modelType:"Ch OT",
				cost:"125",
				count:"1",
				minCount:"1",
				maxCount:"1",
				BS:"5",
				FA:"12",
				SA:"12",
				BA:"10",
				HP:"3",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Khorne"},
					{name:"Deep Strike"},
					{name:"Gorefeast"}
				],
				upgrades: [{
					id:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Weapon",
					stuff:[{
						id:"1",
						quantity:"1",
						available:false,
						display:'checkbox',
						name:"Skull Cannon",
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
			id:"36", /*Burning Chariot Of Tzeentch*/
			role:"heavy",
			armyCode:"Dem",
			name:"Burning Chariot Of Tzeentch",
			icon:'images/Icons/ChaosDaemons/Heavy/BurningChariotOfTzeentch.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Burning Chariot",
				enable:true,
				type:"machine",
				modelType:"Ch Sk F OT",
				cost:"100",
				count:"1",
				minCount:"1",
				maxCount:"1",
				BS:"3",
				FA:"10",
				SA:"10",
				BA:"10",
				HP:"3",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Deep Strike"},
					{name:"Aura Of Change"}
				],
				upgrades: [{
					id:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Wargear",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'checkbox',
						name:"Blue Horror Crew",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Exalted Alluress",
				enable:true,
				type:"infantry",
				cost:"0",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"4",
				S:"3",
				T:"3",
				W:"1",
				In:"5",
				At:"4",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Warpflame"}
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
						name:"Blue Fire Of Tzeentch",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"1",
						available:false,
						display:'checkbox',
						name:"Pink Fire Of Tzeentch",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"3", /*wargear*/
					counterManager:{
						type:"static",
						maxCount:"2",
						minCount:"0",
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"static",
							maxCount:"2",
							minCount:"0",
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				}]	
			}]	
		},{
			id:"37", /*Seeker Cavalcade*/
			role:"heavy",
			armyCode:"Dem",
			name:"Seeker Cavalcade",
			icon:'images/Icons/ChaosDaemons/Heavy/SeekerCavalcade.png',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Seeker Chariot Of Slaanesh",
				enable:true,
				type:"machine",
				modelType:"Ch F OT",
				cost:"40",
				count:"1",
				minCount:"1",
				maxCount:"3",
				BS:"2",
				FA:"11",
				SA:"11",
				BA:"10",
				HP:"2",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Slaanesh"},
					{name:"Deep Strike"},
					{name:"Fleshshredder"}
				],
				upgrades: [{
					id:"1",
					counterManager:{
							type:"dependOnModelCount",
							modelId:"1",
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
							}],
					},
					available:true,
					type:"static",
					label:"Chariots",
					stuff:[{
						id:"1",
						quantity:"0",
						available:true,
						display:'multi',
						name:"Exalted Seeker Chariot",
						cost:"35",
						counterManager:{
							type:"dependOnModelCount",
							modelId:"1",
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
							}],
						}
					}]
				}]	
			},{
				id:"2",
				role:"hq",
				name:"Exalted Alluress",
				enable:true,
				type:"infantry",
				cost:"0",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"5",
				BS:"4",
				S:"3",
				T:"3",
				W:"1",
				In:"5",
				At:"4",
				Ld:"7",
				save:"",
				invSave:"5",
				specialRules: [
					{name:"Daemon Of Tzeentch"},
					{name:"Daemonic Instability"},
					{name:"Deep Strike"},
					{name:"Warpflame"}
				],
				upgrades: [{
					id:"3", /*wargear*/
					counterManager:{
							type:"dependOnModelCount",
							modelId:"1",
							countSet:[{
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
							}],
					},
					available:true,
					type:"static",
					label:"Rewards",
					stuff:[{
						id:"1",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Lesser Rewards",
						cost:"10",
						counterManager:{
							type:"dependOnModelCount",
							modelId:"1",
							countSet:[{
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
							}],
						}
					},{
						id:"2",
						quantity:"0",
						display:'multi',
						available:true,
						name:"Greater Rewards",
						cost:"20",
						value:"2",
						counterManager:{
							type:"dependOnModelCount",
							modelId:"1",
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
							}],
						}
					}]
				}]	
			}]	
		},{
			id:"38", /*BE’LAKOR*/
			role:"hq",
			armyCode:"Dem",
			name:"Belakor",
			icon:'images/Icons/CSM/HQ/BELAKOR.jpg',
			upgrades:[],
			models:[{
				id:"1",
				role:"hq",
				name:"Belakor",
				enable:true,
				type:"infantry",
				modelType:"F Mc",
				cost:"350",
				count:"1",
				minCount:"1",
				maxCount:"1",
				WS:"9",
				BS:"5",
				S:"7",
				T:"5",
				W:"4",
				In:"8",
				At:"5",
				Ld:"10",
				save:"",
				invSave:"4",
				specialRules: [
					{name:"Daemon"},
					{name:"Fearless"},
					{name:"Eternal Warrior"},
					{name:"Psyker (Master Level 3)"},
					{name:"Shadow Form"},
					{name:"Lord of Torment"}
				],
				upgrades: [{
					id:"3", /*weapons*/
					maxquantity:"1",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					type:"static",
					label:"Weapons",
					stuff:[{
						id:"1",
						quantity:"1",
						display:'checkbox',
						available:false,
						name:"The Blade of Shadows",
						cost:"0",
						counterManager:{
							type:"static",
							maxCount:"1",
							minCount:"0",
						}
					}]
				},{
					id:"21",
					counterManager:{
						type:"static",
						maxCount:"1",
						minCount:"1",
					},
					available:true,
					label:"Wargear",
					type:"static",
					stuff:[{
						id:"1",
						quantity:"1",
						available:false,
						display:'checkbox',
						name:"Wings",
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
			id:"51", /*Aegis Defence Lines*/
			role:"fort",
			armyCode:"Dem",
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
			armyCode:"Dem",
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
			armyCode:"Dem",
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
			armyCode:"Dem",
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
			armyCode:"Dem",
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
			armyCode:"Dem",
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
