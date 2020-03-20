
import getElement from './GetElement/getElement';

const GetPerson = (props) => {
  const { items } = props;
  const listItems = Object.keys(items);
  const result = getElement(listItems, items);

  return (
    result
  );
};

export default GetPerson;
