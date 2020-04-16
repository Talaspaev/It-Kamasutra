const actionCreator = (type, text) => (text ? { type, payload: text } : { type });

export default actionCreator;
