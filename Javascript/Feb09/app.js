// //////////////////////////////////////////
//               Bankomatas                //
// //////////////////////////////////////////

const transactions = [40, 900, -50, -40, 65, 1300, -78, -90, 72, -300, -1, -99];

// 1. Sudėjus visus skaičius kokia suma gaunasi?

// 2. Kiek kartų buvo įvykdytą transactions į sąskaitą (teigiamų tik reikšmių atsakymas bus 5) ir kokia suma iš viso buvo įnešta į sąskaitą (atsakymas bus 2377 kurį turite parodyti)?

// 3. Kiek kartų buvo nuimta ir kokia bendra suma, tai iš esmės kaip antroje užduotyje tik su nuskaičiuotom, kitaip tariant neigiamom reikšmėm (čia jums gali tekti pamąstyti ar pasigooglinti kaip paversti gautą neigiamą skaičių teigiamu)?

// 4. Kokia didŽiausia pridėta suma? (pabandykite naudoti if else)

// 5. Kokia mažiausia nuimta suma? (pabandykite naudoti ternary operator)

// 6. Koks įnašų vidurkis, suapvalinti į mažesniąją pusę?

// 7. Koks nuimtų pinigų vidurkis, suapvalinti į mažesniąją pusę?


// //////////////////////////////////////////
//               SORT                      //
// //////////////////////////////////////////

// const planets = [
//     { 
//       name: "Jupiter", 
//       size: 69911,
//     },
//     {
//       name: "Venus",
//       size: 6051.8,
//     },
//     {
//       name: "Mars",
//       size: 3389.5,
//     },
//     {
//       name: "Uranus",
//       size: 25362,
//     },
//     {
//       name: "Earth",
//       size: 6371,
//     },
//     {
//       name: "Saturn",
//       size: 58232,
//     },
//     {
//       name: "Pluto",
//       size: 1188.3,
//     },
//   ];
  
  
  
//   // 1. Naudodami array metoda, atraskite ar visu
//   // (t.y. KIEKVIENOS) planetos dydis yra didesnis nei 7000?
//   // every

//     const result = planets.every(planet => planet.size > 7000);
//     console.log(result);

  
//   // 2. Naudodami array metoda, atraskite ar BENT VIENOS
//   // planetos dydis yra mazesnis nei 7000?
//   // some

//   const result2 = planets.some(planet => planet.size < 7000);
//   console.log(result2);
  
//   // 3. Jei bent viena buvo mazesne nei 7000, atfiltruoti,
//   // ir sukurti masyva planetu, kurios mazesnes nei 7000

//   const smallerPlanets = planets.filter(planet => planet.size < 7000);
//   console.log(smallerPlanets);

  
//   // 4. Naudojant array metoda, sukurti nauja masyva, kuriame yra tik 
//   // planetu pavadinimai.

//   const planetNames = planets.map(planet => planet.name);
//   console.log(planetNames);

  
//   // 5. Naudojant array sort metoda, isrikiuokite planetu pavadinimu masyva,
//   // pagal planetos pavadinimo ilgius, nuo trumpiausio iki ilgiausio

//   const sortedPlanetNames = planetNames.sort((a, b) => a.length - b.length);
//   console.log(sortedPlanetNames);

  
//   // 6. Naudojant array sort metoda, padarykite ta pati, ka 5 uzduoty, 
//   // tik planets masyvui

//   const sortedPlanets = planets.sort((a, b) => a.size - b.size);
//   console.log(sortedPlanets);

  
//   // 7. Naudojant array sort metoda, isrikiuokite nuo didziausios 
//   // planetos iki maziausios

//   const sortedPnlt = planets.sort((a, b) => b.size - a.size);
//   console.log(sortedPlanets);

  