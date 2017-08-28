// NOTE: When I create purchase, may need two dispatches:
  // a) CREATE_PURCHASE
  // b) CREATE_TRANSACTION 

let nextPurchaseId = 0;
const purchase = (state, action) => {
  switch (action.type) {
    case 'CREATE_PURCHASE':
      // TODO - Bonus Exercise
      return {
        merchant_id: action.id,
        medium: action.balance,
        purchase_date: new Date(),
        amount: action.amount,
        description: action.description,
        status: action.pending,
        type: "merchant",
        payer_id: action.payer_id,
        _id: nextPurchaseId++,
      };
    default:
      return state;
  }
}

const purchases = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_PURCHASE':
      // TODO - Bonus Exercise
      return null; // TODO
    default: //VIEW_PURCHASES
      return state;
  }
}

export default purchases;