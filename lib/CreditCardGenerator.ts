export const GetCreditCard = (bin: number) => {

   if (bin.toString().length < 6) {
    return "Invalid BIN";
   }
    // Card Generated
    const generatedNumber = Math.floor(
      100000000000 + Math.random() * 900000000000,
    );
  
    // Expiry Generated
    const month = Math.floor(Math.random() * 12) + 1;
    const year = new Date().getFullYear() + Math.floor(Math.random() * 10) + 1;
    const formattedMonth = month.toString().padStart(2, "0");
  
    // CVV Generating
    const cvv = Math.floor(100 + Math.random() * 900);
    return `${bin}${generatedNumber}|${formattedMonth}|${year}|${cvv}`;
  };
  
  const mainfunction = () => {
    let card = GetCreditCard(435678);
    console.log(card);
  };
  
  mainfunction();
  