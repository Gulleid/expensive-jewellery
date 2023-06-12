// Good Luck 💪🏾
function mostExpensiveItemName(shopping) {
    let mostExpensive = null;
    let mostExpensiveName = '';
  
    for (let i = 0; i < shopping.length; i++) {
      if (!mostExpensive || shopping[i].price > mostExpensive) {
        mostExpensive = shopping[i].price;
        mostExpensiveName = shopping[i].name;
      }
    }
  
    return mostExpensiveName;
  }
  
  let list = [
    { name: 'diamond', price: 980 },
    { name: 'gold', price: 250 },
    { name: 'pearl necklace', price: 4650 }
  ];
  
  console.log(mostExpensiveItemName(list)); 