const mainContainer = document.getElementById("main-container");
const submit = document.getElementById("submit");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let minuteTime = 15
let time = minuteTime * 60;
const timer = document.getElementById("timer");
let minutes

let interval = setInterval(updateTimer, 1000)

    function updateTimer(){
      minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;

      minute.innerHTML = minutes;
      second.innerHTML = seconds
      time--

      if(minutes < 5){
        timer.style.color = "red"
      }
      if(minutes < 0){
        submitQuestions()
      }
    }


let questions = [
  {
    "question": `A quantity of ideal gas at 10.0oC and 100 kPa occupies a volume of
    2.50 m3. How many moles of the gas are present`,
    "options": ["4", "5", "2"],
    "answer": "3"
  },
  {
    "question": `What is the average speed of Oxygen gas molecules at temperature of 300K`,
    "options": ["45m/s", " 54m/s", "545m/s"],
    "answer": "445m/s"
  },
  {
    "question": `In Nacl ,Na ions are positively charged and chlorine ions are negatively charged. Inspite of the
    Coulomb's attraction between them, why do the two ions not collapse`,
    "options": [" because of the presence of free electrons",
     " because of its low melting point",
      "because of its high specific heat"],
    "answer": "because of short range repulsive forces"
  },
  {
    "question": `If bodies A and B are each separated in thermal equilibrium with body C, then A and B are in
    thermal equilibrium with each other. This is concept is known as`,
    "options": [" Avogadro's Law", "Graham's Law", "Charles's Law"],
    "answer": "Zeroth's Law"
  },
  {
    "question": `Which of the following is not TRUE about molecules`,
    "options": ["made up of atoms", "posses both kinetic and potential energies", "combination of molecules made up matter"],
    "answer": " molecules of each substance are identical same structure but different masses"
  },
  {
    "question": `The differences observed in solids, liquids and gases may be accounted for by`,
    "options": [`the spacing
    and forces acting between the molecules`, `their relative masses`, `their melting points`],
    "answer": `the difference molecules in
    each of them`
  },
  {
    "question": `At low humidity in the an environment, the human skin is usually`,
    "options": [` damp and smooth`, `dry
    and rough`, ` dry and smooth`],
    "answer": ` damp and rough`
  },
  {
    "question": ` If the pressure of the vapour on top of an enclosed liquid is equal to the atmospheric pressure,
    what will be the temperature of the liquid enclosed`,
    "options": [` room temperature`, `boiling point`, `standard point`],
    "answer": `freezing poin`
  },
  {
    "question": `Which of the following processes below can be explained using the kinetic theory? I Change of
    state II Diffusion III Radiation IV Osmosis`,
    "options": [` I,III and IV`, `I,II,III, and IV`, ` I, II
    and III`],
    "answer": ` I, II and IV`
  },
  {
    "question": `A temperature of 20oc is the same as ---in oF?`,
    "options": [` 36`, `43.1`, ``],
    "answer": `68`
  },
  {
    "question": `A cylinder contains 12 L of oxygen at 20oC and 15 atom. The temperature is raised to 35oC, and
    the volume is reduces to 8.5 L. what is the final pressure of the gas in atmosphere? Assume the
    gas is idea`,
    "options": [`12 atoms`, `12 atoms`, `24 atoms`],
    "answer": ` 22 atoms`
  },
  {
    "question": `One mole of oxygen expands at a constant temperature of 310K from an initial volume of 12 L to
    a final volume of 19 L. How much work is done by the gas during the expansion`,
    "options": [`118J`, `180`, `1810J`],
    "answer": ` 1180`
  },
  {
    "question": `Here are five numbers 5, 11, 32, 67 and 89. What is the root means square value of there
    numbers`,
    "options": [` 40.8`, `7.21 `, `6.39`],
    "answer": ` 51.2`
  },
  {
    "question": `The nature of the Van der weal equation is that all isotherms below. Critical temperature
    have`,
    "options": [`Inflexion poin`, ` One turning point`, `Melting point`],
    
    
    "answer": `Two turning points`
  },
  {
    "question": `Which of the following phenomena CANNOT be explained by the molecular theory of matter`,
    "options": [`Expansion`, `Radiation`, ` Conduction`],
    
    "answer": `Evaporation`
  },
  {
    "question": ` 200g of water at 90oC is mixed with 100g of water at 30oC. what is the final temperature`,
    "options": [`50oC`, ` 60o`, ``],
    "answer": `70oC`
  },
  {
    "question": `Hot water is added to three times the mass of water at 10oC and the resulting temperature is
    20oC. what is the initial temperature of the hot water`,
    "options": [` 100oC`, `80oC`, ``],
    "answer": `50oC`
  },
  {
    "question": `The thermometric property of a thermocouple is the change in .........`,
    "options": [`Equivalent resistance`, `Electromotive force`, ``],
    "answer": ` Current`
  },
  {
    "question": `From the statement below, the qualities of a good thermometer are I. High thermal capacity II.
    High sensitivity III. Easy readability IV.Accuracy over a wide range of temperature`,
    "options": [` I, III and IV`, `II, III, IV`, ` I and II`],
    "answer": `I, II, III and IV`
  },
  {
    "question": `What is the amount of heat needed to raise the temperature of 75g of water from 16oc to 25oc`,
    "options": [`3528J`, `5285J`, ``],
    "answer": `2835J`
  },
  {
    "question": `Calculate the thermal energy required to boil completely to stem 0.20kg of water at 100oc (Lv
      =2.3 x 106Jkg_1)`,
    "options": [`6.4 x106 J `, `7.2 x106 J`, ``],
    "answer": `0.46 x 106 J`
  },
  {
    "question": `A metal of volume 40cm3 is heated from 30oC to 90octhe increase in volume is`,
    "options": [`1.20cm3`, `0.40cm3`, ``],
    "answer": `0.14cm3`
  },
  {
    "question": `Which of the following most affects the rate of evaporation`,
    "options": [`Pressure, nature of the liquid, colour of the liquid`, ` Area, Viscosity and
    surface tension`, ``],
    "answer": ` Temperature, Pressure,
    Surface area `
  },
  {
    "question": ` Which of the following forms the microscopic properties of a gas`,
    "options": [`Mass, temperature,
    velocity`, `Volume, temperature, pressure`, ` Number of mole,
    pressure, density`],
    "answer": `Density ,mass, velocity`
  },
  {
    "question": `The relationship between Volume and temperature is investigated when pressure and amount
    of gas (n) are kept constant is known as`,
    "options": [`Avogadro's Law`, `Boyle's
    Law`, `Pressure Law`],
    "answer": `Charles's Law`
  },
  {
    "question": `Suppose 100cm3 of a given mass of oxygen in a cylinder is warmed from 27oc to 100oc while it
    pressure remained constant. What is the new volume`,
    "options": [`1423.6cm3`, `1544.4 cm3 `, `1678.6cm3`],
    "answer": ` 1243.3cm3`
  },
  {
    "question": `A piece of copper of mass 0.75kg cools from 40oc to 15oc.How much heat is given out`,
    "options": [`500JKg-1C-1 `, `600kg-1C-1`, `800Kg-1C-1`],
    "answer": `400JKg-1C-1`
  },
  {
    "question": `The equation PxVyTz = Constant is Boyle's Law. What the valves of x,y,z`,
    "options": [` X=0, Y =0, Z=1`, `X =1, Y =1, Z =1`, `X=1, Y=1, Z=-1`],
    "answer": `X=1, Y=1, Z=0`
  },
  {
    "question": `Before starting a journey from Bosso campus the tyre pressure of a car was 3.0 x 105 Nm-2 at
    300K. At the end of the journey at Gidan Gwanu campus the pressure rose to 4 x 105 Nm-2.
    Calculate the temperature of the tyre after the journey, assuming the volume is constant`,
    "options": [`130oc`, `147oc`, `176oc`],
    "answer": `127oc`
  },
  {
    "question": `When a fixed mass of an ideal gas expands at constant temperature, which of the following
    properties of the gas molecules increase`,
    "options": [`average kinetic energy`, `average speed`, `average number per unit volume`],
    "answer": `average separation`
  },
  {
    "question": `The pressure of a gas when cooled at constant volume will decrease because the molecules`,
    "options": [`decreases in number`, `break up into small into small molecules`, `have the same kinetic energy`],
    "answer": `collides less frequently
    with the walls of the container`
  },
  {
    "question": `Which of the following gas Laws is equivalent to workdone`,
    "options": [`Graham's`, `Boyle's`, `Charles`],
    "answer": `Van der waals`
  },
  {
    "question": ` In a gas experiment, the pressure of the gas is plotted against the reciprocal of the volume of
    the gas at constant temperature. The slope of the graph represents`,
    "options": [`Force`, `Power`, `Momentum`],
    "answer": ` work`
  },
  {
    "question": `When the process is adiabatic ,no energy is transferred as heat, then the energy required for
    the work can only come from....`,
    "options": [`intermolecular force between gas molecules`, `internal pressure exerted by the gas molecules`, `collisions of
    gas molecules with the wall of the container`],
    "answer": `internal energy of the gas`
  },
  {
    "question": ` If the internal energy of the gas decreases in adiabatic process, which of the following is likely to
    decrease proportionately`,
    "options": [`Pressure`, `Volume`, `Density`],
  
    "answer": `Temperature`
  },
  {
    "question": `Air in the cylinder of diesel engine at 20oc is compressed from an initial pressure of 1atm and
    volume of 200cm3 to a volume of 15cm3.Assuming that air behaves as an ideal gas ((𝛾 =
    1.40)and the compression is adiabatic, find the final pressure`,
  
  
    "options": [`34.2 atm`, `36.4 atm`, `39.8 atm`],
    "answer": `37.6 atm`
  },
  {
    "question": `The volume of an ideal gas in adiabatically reduced from 200 L to 74.3 L. The initial pressure and
    temperature are 1.0 atm and 300 K. The final pressure is 4.00 atm. What is the final
    temperature`,
    "options": [` 564 K`, `644 K`, `464 K`],
    "answer": `446 K`
  },
  {
    "question": `When 1.0 mol of oxygen (O2) gas is heated at constant pressure starting at 0oC, how much
    energy must be added to the gas as heat to double its volume`,
    "options": [`4 kJ`, ` 10 kJ`, `6 kJ`],
    "answer": `8.0 kJ`
  },
  {
    "question": `Ten particles are moving with the following speeds; four at 200 m/s, two at 500 m/s and four at
    600 m/s. Calculate their root mean square speeds`,
    "options": [`520 m/s`, `420 m/s`, `660 m/s`],
    "answer": ` 458 m/s`
  },,
  {
    "question": `The temperature of 2.00 mol of an ideal monoatomic gas is raised to 15.0 K at constant volume.
    What are the workdone by the gas`,
    "options": [`273 J`, `+373 J`, `-374 J`],
    "answer": `0 J`
  },
  {
    "question": `The speeds of 10 molecules are, 2.0, 3.0, 4.0, … 11 km/s. What is the root mean square speed?`,
    "options": [` 8.2 km/s`, `5.5 km/s`, `7.6 km/s`],
    
    "answer": `6.5 km/s`
  },
  {
    "question": ` A bubble of 5.00 mol of helium is submerged at a certain depth in liquid water when the water
    (and thus the helium) undergoes a temperature increase of 20.0 oC at constant pressure. As aresult, the bubble expands. The helium is monatomic and ideal. How much energy is added as
    heat to the helium during the increase and expansion`,
    "options": [` low volume`, ` high temperature`, `high pressure`],
    "answer": ` low pressure`
  },
  {
    "question": `A container is filled with 42.0 g of nitrogen gas. Calculate the internal energy of the gas when its
    temperature is 301 K. Calculate the internal energy of the gas when its temperature is 301 K.
    The atomic weight of nitrogen is 14.0 g`,
    "options": [`4.8 x 103 J`, `6.2 x 103 J`, ``],
    "answer": `5.6 x 103 J`
  },
  {
    "question": ` A mass of an ideal gas of volume 400 cm3 at 288 K expands adiabatically and its temperature
    falls to 273 K. What is the new volume if?= 1.40`,
    "options": [`524 cm3`, `374 cm3`, ``],
    "answer": `457 cm3`
  },
  {
    "question": ` The first law of thermodynamics is given as`,
    "options": [`dW = dQ + dU`, `dQ = dU - dW`, `dQ = dW
    - dE`],
    
    "answer": `dE = dQ - dW`
  },
  {
    "question": ` If the density of nitrogen at S.T.P is 1.25 Kgm-3, calculate Vrms of nitrogen molecules at 227 oC.
    1 atm = 1.0 x 105 Pa`,
    "options": [`3.4 x 102 m/s`, `1.2 x 102 m/s`, ``],
    "answer": `6.6 x 102 m/s`
  },
  {
    "question": `Which of these assumptions usually made about kinetic theory for an ideal gas is incorrect`,
    "options": [`molecules exert no forces on one another except when they collide`, `molecules are in random motion obeying Newton’s law`, ` the molecules of the
    gas obeys general gas law`],
    "answer": ``
  },
  {
    "question": ` Which of these is true about the applications of 1st law of thermodynamics in free expansion`,
    "options": [` Eint = 0, Q = W`, `W = 0, Eint = Q`, `Q = 0, Eint = -W`],
    "answer": `Q = W = Eint =0`
  },
  {
    "question": `What is the average translational kinetic energy of nitrogen molecules at 1600 K`,
    "options": [` 4.6 x 10-
    20 J`, `6.3 x 10-20 J`, `5.1 x 10-20 J`],
    "answer": `3.3 x 10-20 J`
  },
  {
    "question": `The density of air at 0 oC and at a pressure of 1.01 x 105 N/m2 is 1.29 Kg/m3. What is the root
    mean square speed of its molecules`,
    "options": [` 548 m/s`, `845 m/s`, `584 m/s`],
    "answer": ` 485 m/s`
  },
  {
    "question": `Which of the the following laws state that under the same conditions of temperature and
    pressure, equal volumes of gas contain equal numbers of molecules`,
    "options": [`Zeroth law`, `Graham’s law `, `Pressure’s law`],
    "answer": `Avogadro’s law`
  },
  {
    "question": `At what frequency do molecules (dia. 290 Pm) collide in (an ideal) oxygen gas (O2) at
    temperature 400 K and pressure 2.00 atm`,
    "options": [` 4.0 x 109 S-1`, `5.6 x 109
    S-1`, ``],
    "answer": `7.03 x 109 S-1`
  },
  {
    "question": `The temperature of 2.0 mol of an ideal monatomic gas is raised 15 K at constant volume. What
    is the workdone by the gas`,
    "options": [`473 J`, `374 J`, `734 J`],
    "answer": `0 J`
  },
  {
    "question": `An ideal gas undergoes isothermal compression from an initial volume of 4.0 m3 to a final
    volume of 3.0 m3. There is 3.50 mol of the gas, and its temperature is 10 oC. How much work is
    done by the gas`,
    "options": [`1.23 kJ`, `-4.28 kJ`, `6.18 kJ`],
    "answer": `-2.37 kJ`
  },
  {
    "question": `Which of the following statements is correct about the nature of the Van der Waals equation`,
    "options": [`No isothermals below Tc have a single point of inflexion`, `All isothermal above Tc have
    two turning points`, `All isothermal above Tc have single point of inflexion`],
    "answer": `All isotherms
    below Tc have two turning points`
  },
  {
    "question": `Here are five numbers: 5, 11, 32, 67 and 89. What is the root mean square value of these
    numbers`,
    "options": [`60.2`, `56.2`, `40.8`],
    "answer": `52.1`
  },
  {
    "question": `Which of the following statements about the kinetic theory of gases is not correct`,
    "options": [`deduction in Graham’s law`, `compares macroscopic and
    microscopic properties`, ``],
    "answer": `relates
    pressure and volume`
  },
  {
    "question": `. A container holds a mixture of three non reacting gases; 2.40 mol of gas 1 with CV1 = 12.0
    J/mol.K, 1.50 mol. of gas 2 with CV2 = 12.8 J/mol.K, and 3.20 mol of gas 3 with CV3 = 20.0
    J/mol.K. What is Cv of the mixture`,
    "options": [`11.9 J/mol.K`, `13.6 J/mol.K`, ``],
    "answer": `15.8 J/mol.K`
  },
  {
    "question": `A certain gas occupies a volume of 4.3 L at a pressure of 1.2 atm and a temperature of 310 K. It
    is compressed adiabatically to a volume of 0.76 L. Determine the final pressure`,
    "options": [`17.4 atm`, `11.2 atm`, ``],
    "answer": `14.0 atm`
  },
  {
    "question": ` A steel tank contains 300 g of ammonia gas (NH3) at a pressure of 1.35 x 106 Pa and a
    temperature of 77 oC. What is the volume of the tank in litres`,
    "options": [`18.2 L`, ` 62.8
    L`, ``],
    "answer": `38.0 L`
  },
  {
    "question": ` The pressure at a point in a fluid in static equilibrium depends on`,
    "options": [`The container of the fluid`, `Horizontal dimension of the fluid`, ``],
    "answer": `The depth of that point`
  },
  {
    "question": ` The condition called standard temperature and pressure (STP) for a gas is defined to be a
    temperature of 0 oC = 273 K and a pressure 1 atm = 1.01 x 105 Pa. Find the volume of one mole
    of any gas at STP`,
    "options": [` 2.24 m3`, ` 27.3 m3`, ``],
    "answer": `22.4 m3`
  },
  {
    "question": ` An ideal gas at 300 K is adiabatically expanded to twice its original volume and then heated until
    the pressure is restored to its initial value. What is the final temperature`,
    "options": [`400 K`, `450 K`, ``],
    "answer": `600 K`
  },
  {
    "question": `At pressure P and absolute temperature T a mass M of an ideal gas fills a closed container of
    volume V. An additional mass 2M of the same gas is introduced into the container and the
    volume is then reduced to V/3 and the temperature to T/3. The pressure of the gas will now be`,
    "options": [`9P`, ` 27P`, ``],
    "answer": `3P`
  },
  {
    "question": `. A quantity of ideal gas at 10.0 oC and 100 kPa occupies a volume of 2.50 m3. How many moles
    of the gas are present`,
    "options": [`4`, `5`, ``],
    "answer": `3`
  },
  {
    "question": ` A vessel of volume 50 cm3 contains hydrogen at a pressure of 1.0 Pa and at a temperature of 27
    oC. Estimate the number of molecules in the vessel`,
    "options": [`1.0 x 1016`, ` 2.1 x 1016`, ``],
    "answer": ` 1.2 x 1016`
  },
  {
    "question": ` The Figure below shows a cycle consisting of five paths, AB is isothermal at 300 K, BC in
    adiabatic with work = 5.0 J, CD is at constant pressure of 5 atm, DE is isothermal and EA is
    adiabatic with a change in internal energy of 8.0 J. What is the change in internal energy of the
    gas along path CD`,
    "options": [`7.2 J`, ` -4.8 J`, ``],
    "answer": ` -3.0 J`
  },
  {
    "question": `A cylinder contains 10 litres of air at 3 atm and 300 K. if the pressure is suddenly doubled what
    is the volume`,
    "options": [` 7.2 litres`, `10.6 litres`, ``],
    "answer": ` 6.1 litres`
  },
  {
    "question": ` Which of the following statements is not correct about the behaviour of a Van der waals gas in
    the figure below`,
    "options": [` The Slope is positive`, ` Along BC small
    increase in volume is accompanied by an increase in gas pressure`, ``],
    "answer": `DB is the region of super cooling`
  },
  {
    "question": `Determine the average value of the translational kinetic energy of the molecules of an ideal gas
    at 100 oC, where Boltzmann constant is 1.38 x 10-23 J/K`,
    "options": [`8.27 x 10-21 J`, `9.26 x 10-21 J`, `6.72 x 10-21 J`],
    "answer": `7.72 x 10-21 J`
  },
  {
    "question": ` The molar mass M of oxygen is 0.0320 kg/mol. What is the average speed of oxygen gas
    molecules at T = 300 K`,
    "options": [`544 m/s`, ` 483 m/s `, ` 454 m/s `],
    "answer": ` 445 m/`
  },
  {
    "question": ` Which of the statement is correct about a reversible adiabatic process`,
    "options": [`piston remain neutral`, `piston is moved vertically`, ` pistons is moved quickly`],
    "answer": `piston is moved
    slowly`
  }
];


let arrayQuestions = questions
      arrayQuestions.sort(() => 0.5 - Math.random());

let score = 0;


    function cloneQuestions(j){
      let containerChild = mainContainer.children[0];
      let childCopy = containerChild.cloneNode(true)

      mainContainer.appendChild(childCopy)
      childCopy.children[0].textContent = "Question " + (j + 2);
      childCopy.children[1].innerHTML = questions[j].question + "?"
      

        for(let i = 2; i<6; i++){
          childCopy.children[i].children[1].name += (j + 1)
          childCopy.children[i].children[0].setAttribute("for", `a${i}:${j}`)
          childCopy.children[i].children[1].setAttribute("id", `a${i}:${j}`)
        }

      let array = questions[j].options
      let answer = questions[j].answer
      array.push(answer)
      array.sort(() => 0.5 - Math.random());
      for(let i = 2; i<6; i++){
        let options = childCopy.children[i].children[0];
        options.textContent = array[i - 2];
      }

      function submitQuestions(){
        if(minute.textContent < 15){
          for(let i = 2; i <6; i++){
            if(childCopy.children[i].children[1].checked == true){
              if(childCopy.children[i].children[0].textContent == questions[j].answer){
                score += 1 
              }
              
            }
          }
          score = score
          console.log(score)
          let popUp = document.getElementById("pop-up-container");
          popUp.style.display = "block"
          let test = document.getElementById("test");
          let text = document.getElementById("pptxt");
          test.textContent = score 
          text.textContent = "congratulations"
          if(score < (questions.length/2)){
            test.textContent = score
            text.textContent = `you didnt do to well try again`
          }
          clearInterval(interval)
          minute.innerHTML = 0;
          second.innerHTML = 00
          
        }
        
      }
      
      setInterval(function(){
        if(minutes < 0){
          clearInterval(interval)
          submitQuestions()
          minute.innerHTML = 0;
          second.innerHTML = 00
        }
      }, 1000)
      submit.addEventListener("click", submitQuestions)
      
    }

    for(let i = 0; i < questions.length -1; i++){
      cloneQuestions(i)
    }

    

    // change of questions


//     for(let i=1; i<questions.length; i++){
//       let newq = [];
//       newq.push(mainContainer.children[i].children[0]);
//       let changeBtn = document.getElementById(`no${i}`)
//       let check = changeBtn.innerHTML
//       let questionChange = new ChangeQuestion(changeBtn, newq);

//       function ChangeQuestion(btn, que){
//       this.btn = btn;
//       this.que = que;
//       this.changeDisplay = function(){
//         let btn = this.btn
//         let que = this.que
//           btn.addEventListener("click", function(){
//             if(check == i){
//               console.log(que)
//             }
//       })
//     }
//     }

//     questionChange.changeDisplay()
// }


    