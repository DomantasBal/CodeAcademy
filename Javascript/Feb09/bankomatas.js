const transactions = [40, 900, -50, -40, 65, 1300, -78, -90, 72, -300, -1, -99];

// 1. Sudėjus visus skaičius kokia suma gaunasi?

const sum = transactions.reduce((acc, curent) => acc + curent)
console.log(sum);

// 2. Kiek kartų buvo įvykdytą transactions į sąskaitą (teigiamų tik reikšmių atsakymas bus 5) ir kokia suma iš viso buvo įnešta į sąskaitą (atsakymas bus 2377 kurį turite parodyti)?

const transactionTimes = transactions.filter(tran => tran > 0);
console.log(transactionTimes.length)

// 3. Kiek kartų buvo nuimta ir kokia bendra suma, tai iš esmės kaip antroje užduotyje tik su nuskaičiuotom, kitaip tariant neigiamom reikšmėm (čia jums gali tekti pamąstyti ar pasigooglinti kaip paversti gautą neigiamą skaičių teigiamu)?


const withdrawalTransactions = transactions.filter(transaction => transaction < 0);
const withdrawalCount = withdrawalTransactions.length;
const withdrawalTotal = withdrawalTransactions.reduce((acc, current) => acc + Math.abs(current), 0);

console.log(withdrawalCount);
console.log(withdrawalTotal); 

// 4. Kokia didŽiausia pridėta suma? (pabandykite naudoti if else)

let maxDeposit = 0;

for (let i = 0; i < transactions.length; i++) {
  if (transactions[i] > 0 && transactions[i] > maxDeposit) {
    maxDeposit = transactions[i];
  }
}

console.log(maxDeposit); // 1300


// 5. Kokia mažiausia nuimta suma? (pabandykite naudoti ternary operator)

const minWithdrawal = Math.min(...transactions.filter(transaction => transaction < 0));

console.log(minWithdrawal < 0 ? minWithdrawal : 0); // -300


// 6. Koks įnašų vidurkis, suapvalinti į mažesniąją pusę?

// 7. Koks nuimtų pinigų vidurkis, suapvalinti į mažesniąją pusę?

