const formulatePaymentOne = (choice, amount, weeks) => {
    const initialPayment = ((10 / 100) * amount).toFixed(2);
    const remainingTotal = amount - initialPayment;
    const  weekend = () => {
        weeks = (remainingTotal / weeks).toFixed(2);
        if (weeks % 50 !== 0) {
          weeks = Math.ceil((weeks+49)/50)*50
        }
    }
    if (choice == 'weekly') {
        weekend()
      console.log(
        `You will be paid $${initialPayment} as initial payment and $${weeks} for weekly players.`
      );
    }
 }
 // case
 // The same case where weekly payement is 122 and is rounded to the greastest 50 multiple
 formulatePaymentOne('weekly', 21146, 156)
 
 const formulatePayementTwo = (choice, amount, months) => {
    const initialPaymentm = ((10 / 100) * amount).toFixed(2);
    const remainingTotalm = amount - initialPaymentm;
    
    const monthed = () => {
        months = (remainingTotalm / months).toFixed(2)
        if(months % 100 !==0){
            months = Math.ceil((months+99)/100)*100
        }
    }
     if (choice == 'monthly') {
    monthed()
    console.log(`You will be paid intially ${initialPaymentm} and $${months} for further months.`);
    } 
}
// case
 // The same case where monthly payement is 122 and is rounded to the greastest 100 multiple
formulatePayementTwo('monthly',4880,36)