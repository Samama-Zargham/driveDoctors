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
          "model":  "Integra"
      },
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
      },
      {
          "model": "ZDX"
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
  "Audi": [
      {
          "model": "A1"
      },
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
          "model": "A8"
      },
      {
          "model": "E-Tron GT"
      },
      {
          "model": "Q2"
      },
      {
          "model": "Q3"
      },
      {
          "model": "Q4 E-Tron"
      },
      {
          "model": "Q5"
      },
      {
          "model": "Q5 E-Tron"
      },
      {
          "model": "Q7"
      },
      {
          "model": "Q8"
      },
      {
          "model": "Q8 E-Tron"
      },
      {
          "model": "R8"
      },
      {
          "model": "RS5"
      },
      {
          "model": "RSQ8"
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
  "BAIC": [
      {
          "model": "X35"
      },
      {
          "model": "BJ80"
      },
      {
          "model": "X65"
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
          "model": "GT"
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
  "Bestune": [
      {
          "model": "T99"
      },
      {
          "model": "B70"
      },
      {
          "model": "T77"
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
          "model": "M-Series 4"
      },
      {
          "model": "X-Series X6 M"
      },
      {
          "model": "X-Series X6"
      },
      {
          "model": "M-Series 6"
      },
      {
          "model": "X-Series X4"
      },
      {
          "model": "X-Series X1"
      },
      {
          "model": "X-Series X3"
      },
      {
          "model": "Z-Series 4"
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
          "model": "XM"
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
      },
      {
          "model": "Park Avenue Standard"
      }
  ],
  "Bugatti": [
      {
          "model": "Veyron Standard"
      }
  ],
  "Cadillac": [
      {
          "model": "CTS"
      },
      {
          "model": "CTS Standard"
      },
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
          "model": "DTS Standard"
      },
      {
          "model": "DeVille Standard"
      },
      {
          "model": "Escalade"
      },
      {
          "model": "V Supercharged"
      },
      {
          "model": "Escalade 600"
      },
      {
          "model": "Escalade Premium"
      },
      {
          "model": "Escalade Platinum"
      },
      {
          "model": "Escalade Limited"
      },
      {
          "model": "Escalade ESV"
      },
      {
          "model": "Escalade Premium Luxury Sport"
      },
      {
          "model": "XT4"
      },
      {
          "model": "XT5"
      },
      {
          "model": "XT6"
      },
      {
          "model": "XLR Standard"
      },
      {
          "model": "ATS"
      },
      {
          "model": "SRX Standard"
      },
      {
          "model": "SRX 4"
      },
      {
          "model": "Eldorado Standard"
      }
  ],
  "Changan": [
      {
          "model": "UNI-K Standard"
      },
      {
          "model": "CS 35"
      },
      {
          "model": "CS 75"
      },
      {
          "model": "CS 85"
      },
      {
          "model": "CS 95"
      },
      {
          "model": "Alsvin Standard"
      },
      {
          "model": "EADO Standard"
      }
  ],
  "Chery": [
      {
          "model": "Tiggo 4 Pro"
      },
      {
          "model": "Tiggo 7"
      },
      {
          "model": "Tiggo 7 Pro"
      },
      {
          "model": "Tiggo 7 Pro Max"
      },
      {
          "model": "Tiggo 8 Pro"
      },
      {
          "model": "Arrizo 3 Standard"
      },
      {
          "model": "Arrizo 5 Luxury"
      },
      {
          "model": "Arrizo 6 Standard"
      },
      {
          "model": "Arrizo 6 Pro"
      },
      {
          "model": "Omoda 5 Luxury"
      }
  ],
  "Chevrolet": [
      {
          "model": "Blazer"
      },
      {
          "model": "Blazer EV"
      },
      {
          "model": "Bolt"
      },
      {
          "model": "Bolt EUV"
      },
      {
          "model": "Captiva"
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
          "model": "Cruze"
      },
      {
          "model": "Equinox"
      },
      {
          "model": "Equinox EV"
      },
      {
          "model": "Express 2500 Cargo"
      },
      {
          "model": "Express 3500 Cargo"
      },
      {
          "model": "Groove"
      },
      {
          "model": "Impala"
      },
      {
          "model": "Malibu"
      },
      {
          "model": "Menlo"
      },
      {
          "model": "Monza Cavalier"
      },
      {
          "model": "Montana"
      },
      {
          "model": "Onix"
      },
      {
          "model": "Onix Plus"
      },
      {
          "model": "Orlando"
      },
      {
          "model": "Optra"
      },
      {
          "model": "Spin"
      },
      {
          "model": "Sail Aveo"
      },
      {
          "model": "Aveo"
      },
      {
          "model": "S10 Max"
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
      },
      {
          "model": "Tracker"
      },
      {
          "model": "Trailblazer (crossover)"
      },
      {
          "model": "Trailblazer SUV"
      }
  ],
  "Chrysler": [
      {
          "model": "200C"
      },
      {
          "model": "Crossfire"
      },
      {
          "model": "300C"
      },
      {
          "model": "Imperial Standard"
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
  "Daihatsu": [
      {
          "model": "Rocky"
      },
      {
          "model": "Charade"
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
          "model": "Ram Standard"
      },
      {
          "model": "Ram 1500"
      },
      {
          "model": "Ram 2500"
      },
      {
          "model": "Ram TRX"
      },
      {
          "model": "Ram Rebel"
      },
      {
          "model": "Ram SRT-10"
      },
      {
          "model": "Ram Limited"
      },
      {
          "model": "Ram Big Horn"
      },
      {
          "model": "Ram laramie"
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
  "Exeed": [
      {
          "model": "VX 400 T"
      },
      {
          "model": "RX 400T FlagShip"
      },
      {
          "model": "LX Standard"
      },
      {
          "model": "VX Standard"
      },
      {
          "model": "TXL Standard"
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
  "Ferrari": [
      {
          "model": "GTC4Lusso"
      },
      {
          "model": "488 GTB"
      },
      {
          "model": "488 Pista"
      },
      {
          "model": "488 Spider"
      },
      {
          "model": "812 GTS"
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
          "model": "296 GTS"
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
      },
      {
          "model": "Roma Standard"
      },
      {
          "model": "F8 Tributo"
      },
      {
          "model": "F8 Spider"
      },
      {
          "model": "F12 Standard"
      },
      {
          "model": "SF90 Stradale Standard"
      }
  ],
  "FIAT": [
      {
          "model": "500 Standard"
      },
      {
          "model": "500 Abarth"
      },
      {
          "model": "595 Abarth"
      },
      {
          "model": "595 Abarth Competizione"
      },
      {
          "model": "695 Abarth"
      },
      {
          "model": "C 600 Classic"
      },
      {
          "model": "124 Spider"
      },
      {
          "model": "500L"
      },
      {
          "model": "500X"
      },
      {
          "model": "Tipo Standard"
      },
      {
          "model": "695 Abarth"
      },
      {
          "model": "C 500 Sport"
      }
  ],
  "Fisker": [
      {
          "model": "Karma"
      }
  ],
  "Ford": [
      {
          "model": "Bronco Standard"
      },
      {
          "model": "Bronco Wild Trak"
      },
      {
          "model": "Cobra Standard"
      },
      {
          "model": "Escort Standard"
      },
      {
          "model": "EcoSport"
      },
      {
          "model": "Edge"
      },
      {
          "model": "Edge SEL"
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
          "model": "Explorer XLT"
      },
      {
          "model": "F150"
      },
      {
          "model": "F150 LARIAT"
      },
      {
          "model": "F150 Limited"
      },
      {
          "model": "F150 Platinum"
      },
      {
          "model": "F150 Shelby"
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
          "model": "F150 FX4"
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
          "model": "Focus RS"
      },
      {
          "model": "FLEX Limited"
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
          "model": "Raptor Standard"
      },
      {
          "model": "Raptor XLT"
      },
      {
          "model": "Raptor SVT"
      },
      {
          "model": "Ranger Standard"
      },
      {
          "model": "Ranger SuperCab"
      },
      {
          "model": "Ranger SuperCrew"
      },
      {
          "model": "Ranger XLS"
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
      },
      {
          "model": "Territory Standard"
      },
      {
          "model": "Territory Trendline"
      },
      {
          "model": "Mustang Standard"
      },
      {
          "model": "Mustang GT"
      },
      {
          "model": "Mustang Ecoboost"
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
  "Geely": [
      {
          "model": "Azkarra Standard"
      },
      {
          "model": "EMGRAND Standard"
      },
      {
          "model": "Manjaro Standard"
      },
      {
          "model": "Manjaro Luxury"
      },
      {
          "model": "Coolray Standard"
      },
      {
          "model": "Coolray Sport Limited"
      },
      {
          "model": "Tugella Standard"
      },
      {
          "model": "Tugella GF+"
      },
      {
          "model": "Okavango Standard"
      }
  ],
  "Genesis": [
      {
          "model": "G70"
      },
      {
          "model": "GV 70"
      },
      {
          "model": "G80"
      },
      {
          "model": "G80"
      },
      {
          "model": "G90"
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
      },
      {
          "model": "Acadia SLE"
      },
      {
          "model": "Classic Standard"
      },
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
      },
      {
          "model": "Sierra Elevation"
      },
      {
          "model": "Sierra Denali"
      },
      {
          "model": "Sierra Denali XL"
      },
      {
          "model": "Sierra AT4"
      }
  ],
  "Honda": [
      {
          "model": "Accord"
      },
      {
          "model": "Accord Sport"
      },
      {
          "model": "Accord Hybrid"
      },
      {
          "model": "Civic"
      },
      {
          "model": "Civic LXI"
      },
      {
          "model": "Civic EXI"
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
          "model": "City"
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
          "model": "MRV"
      },
      {
          "model": "Passport"
      },
      {
          "model": "Pilot"
      },
      {
          "model": "Pilot EXL"
      },
      {
          "model": "Ridgeline"
      },
      {
          "model": "Legend"
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
  "Hyundai": [
      {
          "model": "Accent"
      },
      {
          "model": "Accent 1.6"
      },
      {
          "model": "Avante"
      },
      {
          "model": "Azera"
      },
      {
          "model": "Creta"
      },
      {
          "model": "County"
      },
      {
          "model": "Elantra"
      },
      {
          "model": "Elantra GT"
      },
      {
          "model": "Grand Santa Fe"
      },
      {
          "model": "Genesis"
      },
      {
          "model": "Genesis Coupe"
      },
      {
          "model": "Genesis G90"
      },
      {
          "model": "HD65"
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
          "model": "I10"
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
          "model": "Staria"
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
      },
      {
          "model": "Van H1"
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
          "model": "Carnival"
      },
      {
          "model": "Cerato"
      },
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
          "model": "Picanto"
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
          "model": "Sonet"
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
  "Lamborghini": [
      {
          "model": "Aventador"
      },
      {
          "model": "Countach"
      },
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
      },
      {
          "model": "Urus"
      },
      {
          "model": "Huracan"
      },
      {
          "model": "Gallardo"
      }
  ],
  "Land Rover": [
      {
          "model": "Defender 110"
      },
      {
          "model": "Defender 110 HSE"
      },
      {
          "model": "Defender 110 SE"
      },
      {
          "model": "Defender 110 X"
      },
      {
          "model": "Defender 90"
      },
      {
          "model": "Defender 90 HSE"
      },
      {
          "model": "Discovery"
      },
      {
          "model": "Discovery Sport"
      },
      {
          "model": "Evoque Dynamic"
      },
      {
          "model": "Range Rover"
      },
      {
          "model": "Range Rover Vogue HSE"
      },
      {
          "model": "Range Rover Sport Super charged"
      },
      {
          "model": "Range Rover Sport Autobiography"
      },
      {
          "model": "Range Rover Vogue Autobiography"
      },
      {
          "model": "Range Rover Sport Dynamic"
      },
      {
          "model": "Range Rover Sport HSE"
      },
      {
          "model": "Range Rover Evoque"
      },
      {
          "model": "Range Rover Sport"
      },
      {
          "model": "Range Rover Velar"
      },
      {
          "model": "Range Rover Vogue HSE"
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
  "Maybach": [
      {
          "model": "62"
      },
      {
          "model": "57"
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
      },
      {
          "model": "Pajero"
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
  "Panoz": [
      {
          "model": "Esperante"
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
  "Polestar": [
      {
          "model": "2"
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
  "Rivian": [
      {
          "model": "R1S"
      },
      {
          "model": "R1T"
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
      },
      {
          "model": "C70"
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