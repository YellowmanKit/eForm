export const set = (type, payload) =>{ return { type, payload } }
export const update = (payload) =>{ return { type: 'updateForms', payload } }
