
let userSalary = 0;
let userSalaryPercent = 0;
let newSalaryCalc = 0;
let newUserSalary = 0;

getSalary = () =>{
    userSalary = Number(prompt("Lütfen maaşınızı giriniz."));
    userSalaryPercent = Number(prompt("Lütfen maaş zamn oranınızı giriniz."));
    return newSalaryCalc = userSalaryPercent / 100; //buradan donen deger ıle ilk basta tanımladıgımız 0 olan degerler guncellenır
}
newSalary = () => {
    getSalary();
    newUserSalary = userSalary * (1 + newSalaryCalc);
    console.log(`Aldığınız Maaş : ${userSalary} - Aldığınız zam oranı : ${userSalaryPercent}
Güncel Maaşınız : ${newUserSalary}`);   
}

newSalary();
