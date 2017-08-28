let nextPurchaseId = 0;
const purchase = (state, action) => {
  switch (action.type) {
    case 'CREATE_PURCHASE':
      // STUB STUB STUB - API data call - or maybe not because will just add to current store similar to todos?
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
      // STUB STUB STUB
      return null; // TODO
    default: //VIEW_PURCHASES
      return state;
  }
}

// NOTE: when I create purchase, will need two dispatches:
  // a) CREATE_PURCHASE
  // b) CREATE_TRANSACTION 

export default purchases;