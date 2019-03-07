export const set = (type, payload) =>{ return { type, payload } }
export const modal = (status, message, onConfirm) =>{ return { type: 'modal', payload: { status, message, onConfirm } } }
