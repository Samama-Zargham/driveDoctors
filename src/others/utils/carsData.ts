// Define the data structure
type CarModel = {
   model: string;
};

type CarMakeData = {
   [make: string]: CarModel[];
};

// Example data
export const carData: CarMakeData = {
   "Acura": [
     {
       "model": "ILX"
     },
     {
       "model": "MDX"
     },
     {
       "model": "MDX Sport Hybrid"
     },
     {
       "model": "NSX"
     },
     {
       "model": "RDX"
     },
     {
       "model": "RLX"
     },
     {
       "model": "RLX Sport Hybrid"
     },
     {
       "model": "TLX"
     }
   ],
   "Alfa Romeo": [
     {
       "model": "4C Spider"
     },
     {
       "model": "Giulia"
     },
     {
       "model": "Stelvio"
     }
   ],
   "Audi": [
     {
       "model": "A3"
     },
     {
       "model": "A4"
     },
     {
       "model": "A5"
     },
     {
       "model": "A6"
     },
     {
       "model": "A6 allroad"
     },
     {
       "model": "A7"
     },
     {
       "model": "Q3"
     },
     {
       "model": "Q5"
     },
     {
       "model": "Q7"
     },
     {
       "model": "Q8"
     },
     {
       "model": "R8"
     },
     {
       "model": "S4"
     },
     {
       "model": "S8"
     },
     {
       "model": "SQ5"
     },
     {
       "model": "TT"
     }
   ],
   "BMW": [
     {
       "model": "2 Series"
     },
     {
       "model": "3 Series"
     },
     {
       "model": "4 Series"
     },
     {
       "model": "5 Series"
     },
     {
       "model": "7 Series"
     },
     {
       "model": "8 Series"
     },
     {
       "model": "M2"
     },
     {
       "model": "X1"
     },
     {
       "model": "X2"
     },
     {
       "model": "X3"
     },
     {
       "model": "X3 M"
     },
     {
       "model": "X4"
     },
     {
       "model": "X5"
     },
     {
       "model": "X6"
     },
     {
       "model": "X7"
     },
     {
       "model": "Z4"
     }
   ],
   "Buick": [
     {
       "model": "Enclave"
     },
     {
       "model": "Encore"
     },
     {
       "model": "Encore GX"
     },
     {
       "model": "Envision"
     },
     {
       "model": "Regal Sportback"
     },
     {
       "model": "Regal TourX"
     }
   ],
   "Cadillac": [
     {
       "model": "CT4"
     },
     {
       "model": "CT5"
     },
     {
       "model": "CT6"
     },
     {
       "model": "CT6-V"
     },
     {
       "model": "Escalade"
     },
     {
       "model": "Escalade ESV"
     },
     {
       "model": "XT4"
     },
     {
       "model": "XT5"
     },
     {
       "model": "XT6"
     }
   ],
   "Chevrolet": [
     {
       "model": "Blazer"
     },
     {
       "model": "Bolt EV"
     },
     {
       "model": "Camaro"
     },
     {
       "model": "Colorado Crew Cab"
     },
     {
       "model": "Colorado Extended Cab"
     },
     {
       "model": "Corvette"
     },
     {
       "model": "Equinox"
     },
     {
       "model": "Express 2500 Cargo"
     },
     {
       "model": "Express 3500 Cargo"
     },
     {
       "model": "Impala"
     },
     {
       "model": "Malibu"
     },
     {
       "model": "Silverado 1500 Crew Cab"
     },
     {
       "model": "Silverado 1500 Double Cab"
     },
     {
       "model": "Silverado 1500 Regular Cab"
     },
     {
       "model": "Silverado 2500 HD Crew Cab"
     },
     {
       "model": "Silverado 2500 HD Double Cab"
     },
     {
       "model": "Silverado 3500 HD Crew Cab"
     },
     {
       "model": "Sonic"
     },
     {
       "model": "Spark"
     },
     {
       "model": "Suburban"
     },
     {
       "model": "Tahoe"
     },
     {
       "model": "Traverse"
     },
     {
       "model": "Trax"
     }
   ],
   "Chrysler": [
     {
       "model": "300"
     },
     {
       "model": "Pacifica"
     },
     {
       "model": "Pacifica Hybrid"
     },
     {
       "model": "Voyager"
     }
   ],
   "Dodge": [
     {
       "model": "Challenger"
     },
     {
       "model": "Charger"
     },
     {
       "model": "Durango"
     },
     {
       "model": "Grand Caravan Passenger"
     },
     {
       "model": "Journey"
     }
   ],
   "FIAT": [
     {
       "model": "124 Spider"
     },
     {
       "model": "500L"
     },
     {
       "model": "500X"
     }
   ],
   "Ford": [
     {
       "model": "EcoSport"
     },
     {
       "model": "Edge"
     },
     {
       "model": "Escape"
     },
     {
       "model": "Expedition"
     },
     {
       "model": "Expedition MAX"
     },
     {
       "model": "Explorer"
     },
     {
       "model": "F150 Regular Cab"
     },
     {
       "model": "F150 Super Cab"
     },
     {
       "model": "F150 SuperCrew Cab"
     },
     {
       "model": "F250 Super Duty Crew Cab"
     },
     {
       "model": "F250 Super Duty Regular Cab"
     },
     {
       "model": "F250 Super Duty Super Cab"
     },
     {
       "model": "F350 Super Duty Crew Cab"
     },
     {
       "model": "F350 Super Duty Super Cab"
     },
     {
       "model": "F450 Super Duty Crew Cab"
     },
     {
       "model": "Fusion"
     },
     {
       "model": "Fusion Plug-in Hybrid"
     },
     {
       "model": "Mustang"
     },
     {
       "model": "Ranger SuperCab"
     },
     {
       "model": "Ranger SuperCrew"
     },
     {
       "model": "Transit 250 Cargo Van"
     },
     {
       "model": "Transit 350 Passenger Van"
     },
     {
       "model": "Transit Connect Cargo Van"
     },
     {
       "model": "Transit Connect Passenger Wagon"
     }
   ],
   "Freightliner": [
     {
       "model": "Sprinter 1500 Cargo"
     },
     {
       "model": "Sprinter 1500 Passenger"
     },
     {
       "model": "Sprinter 2500 Cargo"
     },
     {
       "model": "Sprinter 2500 Crew"
     },
     {
       "model": "Sprinter 2500 Passenger"
     },
     {
       "model": "Sprinter 3500 Cargo"
     },
     {
       "model": "Sprinter 3500 Crew"
     },
     {
       "model": "Sprinter 3500 XD Crew"
     },
     {
       "model": "Sprinter 3500XD Cargo"
     },
     {
       "model": "Sprinter 4500 Cargo"
     },
     {
       "model": "Sprinter 4500 Crew"
     }
   ],
   "Genesis": [
     {
       "model": "G70"
     },
     {
       "model": "G80"
     },
     {
       "model": "G90"
     }
   ],
   "GMC": [
     {
       "model": "Acadia"
     },
     {
       "model": "Canyon Crew Cab"
     },
     {
       "model": "Sierra 1500 Crew Cab"
     },
     {
       "model": "Sierra 1500 Double Cab"
     },
     {
       "model": "Sierra 1500 Regular Cab"
     },
     {
       "model": "Sierra 2500 HD Crew Cab"
     },
     {
       "model": "Sierra 3500 HD Crew Cab"
     },
     {
       "model": "Terrain"
     },
     {
       "model": "Yukon"
     },
     {
       "model": "Yukon XL"
     }
   ],
   "Honda": [
     {
       "model": "Accord"
     },
     {
       "model": "Accord Hybrid"
     },
     {
       "model": "Civic"
     },
     {
       "model": "Civic Type R"
     },
     {
       "model": "Clarity Fuel Cell"
     },
     {
       "model": "Clarity Plug-in Hybrid"
     },
     {
       "model": "CR-V"
     },
     {
       "model": "CR-V Hybrid"
     },
     {
       "model": "Fit"
     },
     {
       "model": "HR-V"
     },
     {
       "model": "Insight"
     },
     {
       "model": "Odyssey"
     },
     {
       "model": "Passport"
     },
     {
       "model": "Pilot"
     },
     {
       "model": "Ridgeline"
     }
   ],
   "Hyundai": [
     {
       "model": "Accent"
     },
     {
       "model": "Elantra"
     },
     {
       "model": "Elantra GT"
     },
     {
       "model": "Ioniq Electric"
     },
     {
       "model": "Ioniq Hybrid"
     },
     {
       "model": "Ioniq Plug-in Hybrid"
     },
     {
       "model": "Kona"
     },
     {
       "model": "Kona Electric"
     },
     {
       "model": "NEXO"
     },
     {
       "model": "Palisade"
     },
     {
       "model": "Santa Fe"
     },
     {
       "model": "Sonata"
     },
     {
       "model": "Sonata Hybrid"
     },
     {
       "model": "Tucson"
     },
     {
       "model": "Veloster"
     },
     {
       "model": "Venue"
     }
   ],
   "INFINITI": [
     {
       "model": "Q50"
     },
     {
       "model": "Q60"
     },
     {
       "model": "QX50"
     },
     {
       "model": "QX60"
     },
     {
       "model": "QX80"
     }
   ],
   "Jaguar": [
     {
       "model": "E-PACE"
     },
     {
       "model": "F-PACE"
     },
     {
       "model": "F-TYPE"
     },
     {
       "model": "I-PACE"
     },
     {
       "model": "XE"
     },
     {
       "model": "XF"
     }
   ],
   "Jeep": [
     {
       "model": "Cherokee"
     },
     {
       "model": "Compass"
     },
     {
       "model": "Gladiator"
     },
     {
       "model": "Grand Cherokee"
     },
     {
       "model": "Renegade"
     },
     {
       "model": "Wrangler"
     },
     {
       "model": "Wrangler Unlimited"
     }
   ],
   "Kia": [
     {
       "model": "Cadenza"
     },
     {
       "model": "Forte"
     },
     {
       "model": "K900"
     },
     {
       "model": "Niro"
     },
     {
       "model": "Niro EV"
     },
     {
       "model": "Niro Plug-in Hybrid"
     },
     {
       "model": "Optima"
     },
     {
       "model": "Optima Hybrid"
     },
     {
       "model": "Optima Plug-in Hybrid"
     },
     {
       "model": "Rio"
     },
     {
       "model": "Sedona"
     },
     {
       "model": "Sorento"
     },
     {
       "model": "Soul"
     },
     {
       "model": "Sportage"
     },
     {
       "model": "Stinger"
     },
     {
       "model": "Telluride"
     }
   ],
   "Land Rover": [
     {
       "model": "Defender 110"
     },
     {
       "model": "Defender 90"
     },
     {
       "model": "Discovery"
     },
     {
       "model": "Discovery Sport"
     },
     {
       "model": "Range Rover"
     },
     {
       "model": "Range Rover Evoque"
     },
     {
       "model": "Range Rover Sport"
     },
     {
       "model": "Range Rover Velar"
     }
   ],
   "Lexus": [
     {
       "model": "ES"
     },
     {
       "model": "GS"
     },
     {
       "model": "GX"
     },
     {
       "model": "IS"
     },
     {
       "model": "LC"
     },
     {
       "model": "LS"
     },
     {
       "model": "LX"
     },
     {
       "model": "NX"
     },
     {
       "model": "RC"
     },
     {
       "model": "RX"
     },
     {
       "model": "UX"
     }
   ],
   "Lincoln": [
     {
       "model": "Aviator"
     },
     {
       "model": "Continental"
     },
     {
       "model": "Corsair"
     },
     {
       "model": "MKZ"
     },
     {
       "model": "Nautilus"
     },
     {
       "model": "Navigator"
     },
     {
       "model": "Navigator L"
     }
   ],
   "MAZDA": [
     {
       "model": "CX-3"
     },
     {
       "model": "CX-30"
     },
     {
       "model": "CX-5"
     },
     {
       "model": "CX-9"
     },
     {
       "model": "MAZDA3"
     },
     {
       "model": "MAZDA6"
     },
     {
       "model": "MX-5 Miata"
     },
     {
       "model": "MX-5 Miata RF"
     }
   ],
   "Mercedes-Benz": [
     {
       "model": "A-Class"
     },
     {
       "model": "C-Class"
     },
     {
       "model": "CLA"
     },
     {
       "model": "CLS"
     },
     {
       "model": "E-Class"
     },
     {
       "model": "G-Class"
     },
     {
       "model": "GLA"
     },
     {
       "model": "GLB"
     },
     {
       "model": "GLC"
     },
     {
       "model": "GLE"
     },
     {
       "model": "GLS"
     },
     {
       "model": "Mercedes-AMG A-Class"
     },
     {
       "model": "Mercedes-AMG C-Class"
     },
     {
       "model": "Mercedes-AMG CLS"
     },
     {
       "model": "Mercedes-AMG GLC"
     },
     {
       "model": "Mercedes-AMG GLC Coupe"
     },
     {
       "model": "Metris WORKER Cargo"
     },
     {
       "model": "Metris WORKER Passenger"
     },
     {
       "model": "S-Class"
     },
     {
       "model": "SLC"
     },
     {
       "model": "Sprinter 1500 Cargo"
     },
     {
       "model": "Sprinter 1500 Passenger"
     },
     {
       "model": "Sprinter 2500 Cargo"
     },
     {
       "model": "Sprinter 2500 Crew"
     },
     {
       "model": "Sprinter 2500 Passenger"
     },
     {
       "model": "Sprinter 3500 Cargo"
     },
     {
       "model": "Sprinter 3500 Crew"
     },
     {
       "model": "Sprinter 3500 XD Cargo"
     },
     {
       "model": "Sprinter 3500 XD Crew"
     },
     {
       "model": "Sprinter 4500 Cargo"
     },
     {
       "model": "Sprinter 4500 Crew"
     }
   ],
   "MINI": [
     {
       "model": "Clubman"
     },
     {
       "model": "Countryman"
     },
     {
       "model": "Hardtop 2 Door"
     },
     {
       "model": "Hardtop 4 Door"
     }
   ],
   "Mitsubishi": [
     {
       "model": "Eclipse Cross"
     },
     {
       "model": "Mirage"
     },
     {
       "model": "Mirage G4"
     },
     {
       "model": "Outlander"
     },
     {
       "model": "Outlander PHEV"
     },
     {
       "model": "Outlander Sport"
     }
   ],
   "Nissan": [
     {
       "model": "370Z"
     },
     {
       "model": "Altima"
     },
     {
       "model": "Armada"
     },
     {
       "model": "Frontier Crew Cab"
     },
     {
       "model": "Frontier King Cab"
     },
     {
       "model": "GT-R"
     },
     {
       "model": "Kicks"
     },
     {
       "model": "LEAF"
     },
     {
       "model": "Maxima"
     },
     {
       "model": "Murano"
     },
     {
       "model": "NV1500 Cargo"
     },
     {
       "model": "NV200"
     },
     {
       "model": "NV2500 HD Cargo"
     },
     {
       "model": "NV3500 HD Cargo"
     },
     {
       "model": "NV3500 HD Passenger"
     },
     {
       "model": "Pathfinder"
     },
     {
       "model": "Rogue"
     },
     {
       "model": "Rogue Sport"
     },
     {
       "model": "Sentra"
     },
     {
       "model": "Titan Crew Cab"
     },
     {
       "model": "Titan King Cab"
     },
     {
       "model": "TITAN XD Crew Cab"
     },
     {
       "model": "Versa"
     }
   ],
   "Porsche": [
     {
       "model": "718 Boxster"
     },
     {
       "model": "718 Cayman"
     },
     {
       "model": "718 Spyder"
     },
     {
       "model": "911"
     },
     {
       "model": "Cayenne"
     },
     {
       "model": "Cayenne Coupe"
     },
     {
       "model": "Macan"
     },
     {
       "model": "Panamera"
     },
     {
       "model": "Taycan"
     }
   ],
   "Ram": [
     {
       "model": "1500 Classic Crew Cab"
     },
     {
       "model": "1500 Classic Quad Cab"
     },
     {
       "model": "1500 Crew Cab"
     },
     {
       "model": "1500 Quad Cab"
     },
     {
       "model": "2500 Crew Cab"
     },
     {
       "model": "3500 Crew Cab"
     },
     {
       "model": "ProMaster Cargo Van"
     },
     {
       "model": "ProMaster City"
     }
   ],
   "Subaru": [
     {
       "model": "Ascent"
     },
     {
       "model": "BRZ"
     },
     {
       "model": "Crosstrek"
     },
     {
       "model": "Forester"
     },
     {
       "model": "Impreza"
     },
     {
       "model": "Legacy"
     },
     {
       "model": "Outback"
     },
     {
       "model": "WRX"
     }
   ],
   "Tesla": [
     {
       "model": "Model 3"
     },
     {
       "model": "Model S"
     },
     {
       "model": "Model X"
     },
     {
       "model": "Model Y"
     }
   ],
   "Toyota": [
     {
       "model": "4Runner"
     },
     {
       "model": "86"
     },
     {
       "model": "Avalon"
     },
     {
       "model": "Avalon Hybrid"
     },
     {
       "model": "Camry"
     },
     {
       "model": "Camry Hybrid"
     },
     {
       "model": "C-HR"
     },
     {
       "model": "Corolla"
     },
     {
       "model": "Corolla Hatchback"
     },
     {
       "model": "Corolla Hybrid"
     },
     {
       "model": "GR Supra"
     },
     {
       "model": "Highlander"
     },
     {
       "model": "Highlander Hybrid"
     },
     {
       "model": "Land Cruiser"
     },
     {
       "model": "Mirai"
     },
     {
       "model": "Prius"
     },
     {
       "model": "Prius Prime"
     },
     {
       "model": "RAV4"
     },
     {
       "model": "RAV4 Hybrid"
     },
     {
       "model": "Sequoia"
     },
     {
       "model": "Sienna"
     },
     {
       "model": "Tacoma Access Cab"
     },
     {
       "model": "Tacoma Double Cab"
     },
     {
       "model": "Tundra CrewMax"
     },
     {
       "model": "Tundra Double Cab"
     },
     {
       "model": "Yaris"
     },
     {
       "model": "Yaris Hatchback"
     }
   ],
   "Volkswagen": [
     {
       "model": "Arteon"
     },
     {
       "model": "Atlas"
     },
     {
       "model": "Atlas Cross Sport"
     },
     {
       "model": "Golf"
     },
     {
       "model": "Golf GTI"
     },
     {
       "model": "Jetta"
     },
     {
       "model": "Jetta GLI"
     },
     {
       "model": "Passat"
     },
     {
       "model": "Tiguan"
     }
   ],
   "Volvo": [
     {
       "model": "S60"
     },
     {
       "model": "S90"
     },
     {
       "model": "V60"
     },
     {
       "model": "V90"
     },
     {
       "model": "XC40"
     },
     {
       "model": "XC60"
     },
     {
       "model": "XC90"
     }
   ],
   "Maserati": [
     {
       "model": "Levante"
     },
     {
       "model": "Ghibli"
     },
     {
       "model": "Quattroporte"
     },
     {
       "model": "GranTurismo"
     },
     {
       "model": "GranSport"
     },
     {
       "model": "Coupe"
     }
   ],
   "Bentley": [
     {
       "model": "Bentayga"
     },
     {
       "model": "Flying Spur"
     },
     {
       "model": "Continental"
     },
     {
       "model": "Mulsanne"
     },
     {
       "model": "Azure T"
     },
     {
       "model": "Brooklands"
     },
     {
       "model": "Arnage"
     },
     {
       "model": "Azure"
     }
   ],
   "Ferrari": [
     {
       "model": "GTC4Lusso"
     },
     {
       "model": "488 GTB"
     },
     {
       "model": "812 Superfast"
     },
     {
       "model": "Portofino"
     },
     {
       "model": "488 Spider"
     },
     {
       "model": "F12berlinetta"
     },
     {
       "model": "California"
     },
     {
       "model": "FF"
     },
     {
       "model": "458 Italia"
     },
     {
       "model": "458 Speciale"
     },
     {
       "model": "458 Spider"
     },
     {
       "model": "599 GTB Fiorano"
     },
     {
       "model": "599 GTO"
     },
     {
       "model": "612 Scaglietti"
     },
     {
       "model": "430 Scuderia"
     },
     {
       "model": "F430"
     }
   ],
   "Lamborghini": [
     {
       "model": "GTC4Lusso"
     },
     {
       "model": "488 GTB"
     },
     {
       "model": "812 Superfast"
     },
     {
       "model": "Portofino"
     },
     {
       "model": "488 Spider"
     },
     {
       "model": "F12berlinetta"
     },
     {
       "model": "California"
     },
     {
       "model": "FF"
     },
     {
       "model": "458 Italia"
     },
     {
       "model": "458 Speciale"
     },
     {
       "model": "458 Spider"
     },
     {
       "model": "599 GTB Fiorano"
     },
     {
       "model": "599 GTO"
     },
     {
       "model": "612 Scaglietti"
     },
     {
       "model": "430 Scuderia"
     },
     {
       "model": "F430"
     }
   ],
   "Lotus": [
     {
       "model": "Evora 400"
     },
     {
       "model": "Evora"
     },
     {
       "model": "Elise"
     },
     {
       "model": "Exige"
     },
     {
       "model": "Exige S"
     }
   ],
   "McLaren": [
     {
       "model": "570GT"
     },
     {
       "model": "720S"
     },
     {
       "model": "570S"
     },
     {
       "model": "650S"
     },
     {
       "model": "675LT"
     },
     {
       "model": "MP4-12C"
     }
   ],
   "Rolls-Royce": [
     {
       "model": "Ghost"
     },
     {
       "model": "Wraith"
     },
     {
       "model": "Dawn"
     },
     {
       "model": "Phantom"
     }
   ],
   "Aston Martin": [
     {
       "model": "Vanquish S"
     },
     {
       "model": "DB11"
     },
     {
       "model": "Rapide S"
     },
     {
       "model": "Vanquish"
     },
     {
       "model": "Vantage"
     },
     {
       "model": "DB9 GT"
     },
     {
       "model": "DB9"
     },
     {
       "model": "Rapide"
     },
     {
       "model": "DBS"
     },
     {
       "model": "Virage"
     }
   ],
   "smart": [
     {
       "model": "fortwo electric drive"
     },
     {
       "model": "fortwo electric drive cabrio"
     },
     {
       "model": "fortwo cabrio"
     },
     {
       "model": "fortwo"
     }
   ],
   "SRT": [
     {
       "model": "Viper"
     }
   ],
   "Suzuki": [
     {
       "model": "SX4"
     },
     {
       "model": "Kizashi"
     },
     {
       "model": "Grand Vitara"
     },
     {
       "model": "Equator Extended Cab"
     },
     {
       "model": "Equator Crew Cab"
     },
     {
       "model": "XL7"
     },
     {
       "model": "Reno"
     },
     {
       "model": "Forenza"
     },
     {
       "model": "Aerio"
     },
     {
       "model": "XL-7"
     },
     {
       "model": "Verona"
     },
     {
       "model": "Vitara"
     },
     {
       "model": "Esteem"
     },
     {
       "model": "Swift"
     },
     {
       "model": "Sidekick"
     },
     {
       "model": "X-90"
     },
     {
       "model": "Samurai"
     }
   ],
   "Fisker": [
     {
       "model": "Karma"
     }
   ],
   "Maybach": [
     {
       "model": "62"
     },
     {
       "model": "57"
     }
   ],
   "Mercury": [
     {
       "model": "Milan"
     },
     {
       "model": "Mariner"
     },
     {
       "model": "Grand Marquis"
     },
     {
       "model": "Mountaineer"
     },
     {
       "model": "Sable"
     },
     {
       "model": "Montego"
     },
     {
       "model": "Monterey"
     },
     {
       "model": "Marauder"
     },
     {
       "model": "Villager"
     },
     {
       "model": "Cougar"
     },
     {
       "model": "Mystique"
     },
     {
       "model": "Tracer"
     },
     {
       "model": "Capri"
     },
     {
       "model": "Topaz"
     }
   ],
   "Saab": [
     {
       "model": "9-4X"
     },
     {
       "model": "3-Sep"
     },
     {
       "model": "5-Sep"
     },
     {
       "model": "9-7X"
     },
     {
       "model": "9-2X"
     },
     {
       "model": "900"
     },
     {
       "model": "9000"
     }
   ],
   "HUMMER": [
     {
       "model": "H3T"
     },
     {
       "model": "H3"
     },
     {
       "model": "H2"
     },
     {
       "model": "H1"
     }
   ],
   "Pontiac": [
     {
       "model": "Vibe"
     },
     {
       "model": "G6"
     },
     {
       "model": "G3"
     },
     {
       "model": "G6 (2009.5)"
     },
     {
       "model": "Solstice"
     },
     {
       "model": "G8"
     },
     {
       "model": "Torrent"
     },
     {
       "model": "G5"
     },
     {
       "model": "Grand Prix"
     },
     {
       "model": "GTO"
     },
     {
       "model": "Montana SV6"
     },
     {
       "model": "Bonneville"
     },
     {
       "model": "Aztek"
     },
     {
       "model": "Grand Am"
     },
     {
       "model": "Montana"
     },
     {
       "model": "Sunfire"
     },
     {
       "model": "Firebird"
     },
     {
       "model": "Trans Sport"
     },
     {
       "model": "Sunbird"
     },
     {
       "model": "LeMans"
     }
   ],
   "Saturn": [
     {
       "model": "VUE"
     },
     {
       "model": "Outlook"
     },
     {
       "model": "Aura"
     },
     {
       "model": "SKY"
     },
     {
       "model": "Astra"
     },
     {
       "model": "Relay"
     },
     {
       "model": "Ion"
     },
     {
       "model": "L-Series"
     },
     {
       "model": "S-Series"
     }
   ],
   "Isuzu": [
     {
       "model": "i-370 Extended Cab"
     },
     {
       "model": "i-290 Extended Cab"
     },
     {
       "model": "Ascender"
     },
     {
       "model": "i-370 Crew Cab"
     },
     {
       "model": "i-350 Crew Cab"
     },
     {
       "model": "i-280 Extended Cab"
     },
     {
       "model": "Axiom"
     },
     {
       "model": "Rodeo"
     },
     {
       "model": "Rodeo Sport"
     },
     {
       "model": "Trooper"
     },
     {
       "model": "VehiCROSS"
     },
     {
       "model": "Amigo"
     },
     {
       "model": "Hombre Spacecab"
     },
     {
       "model": "Hombre Regular Cab"
     },
     {
       "model": "Oasis"
     },
     {
       "model": "Regular Cab"
     },
     {
       "model": "Spacecab"
     },
     {
       "model": "Stylus"
     },
     {
       "model": "Impulse"
     }
   ],
   "Panoz": [
     {
       "model": "Esperante"
     }
   ],
   "Oldsmobile": [
     {
       "model": "Bravada"
     },
     {
       "model": "Alero"
     },
     {
       "model": "Silhouette"
     },
     {
       "model": "Aurora"
     },
     {
       "model": "Intrigue"
     },
     {
       "model": "Cutlass"
     },
     {
       "model": "LSS"
     },
     {
       "model": "88"
     },
     {
       "model": "Achieva"
     },
     {
       "model": "Regency"
     },
     {
       "model": "Cutlass Supreme"
     },
     {
       "model": "Ciera"
     },
     {
       "model": "98"
     },
     {
       "model": "Cutlass Ciera"
     },
     {
       "model": "Cutlass Cruiser"
     },
     {
       "model": "Toronado"
     },
     {
       "model": "Custom Cruiser"
     }
   ],
   "Daewoo": [
     {
       "model": "Nubira"
     },
     {
       "model": "Leganza"
     },
     {
       "model": "Lanos"
     }
   ],
   "Plymouth": [
     {
       "model": "Neon"
     },
     {
       "model": "Grand Voyager"
     },
     {
       "model": "Breeze"
     },
     {
       "model": "Voyager"
     },
     {
       "model": "Prowler"
     },
     {
       "model": "Acclaim"
     },
     {
       "model": "Laser"
     },
     {
       "model": "Colt"
     },
     {
       "model": "Colt Vista"
     },
     {
       "model": "Sundance"
     }
   ],
   "Eagle": [
     {
       "model": "Talon"
     },
     {
       "model": "Vision"
     },
     {
       "model": "Summit"
     },
     {
       "model": "Premier"
     }
   ],
   "Geo": [
     {
       "model": "Metro"
     },
     {
       "model": "Prizm"
     },
     {
       "model": "Tracker"
     },
     {
       "model": "Storm"
     }
   ],
   "Daihatsu": [
     {
       "model": "Rocky"
     },
     {
       "model": "Charade"
     }
   ],
   "Polestar": [
     {
       "model": "2"
     }
   ],
   "Rivian": [
     {
       "model": "R1S"
     },
     {
       "model": "R1T"
     }
   ]
 }

// Function to get models by make
export function getCarModels(make: string): CarModel[] | undefined {
   // return carData[make];
   return Array.from(new Set(carData[make].map(item => item.model.trim()))).map(model => ({ model }));

}

// Array of keys
// Array of key-value pairs in the desired format
export const carDataFormatted: { key: string; value: string }[] = Object.keys(carData).map((make) => ({
   key: make,
   value: make,
}));