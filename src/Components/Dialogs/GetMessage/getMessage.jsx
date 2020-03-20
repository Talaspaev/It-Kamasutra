import getElemen from './GetElement/getElement';

const getItem = (props) => {
  const { items } = props;
  const listItems = getElemen(items);

  return (
    listItems
  );
};
export default getItem;
