export const MultipleFilter = (rows, accessor, filterValue) => {
  const arr = [];
  rows.forEach((val) => {
    if (filterValue.includes(val.original[accessor])) arr.push(val);
  });
  return arr;
};
