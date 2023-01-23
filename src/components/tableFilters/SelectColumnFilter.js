import { useMemo } from 'react';

function setFilteredParams(filterArr, val) {
  if (filterArr.includes(val)) {
    filterArr = filterArr.filter((n) => {
      return n !== val;
    });
  } else filterArr.push(val);

  if (filterArr.length === 0) filterArr = undefined;
  return filterArr;
}

export const SelectColumnFilter = ({
  column: { filterValue = [], setFilter, preFilteredRows, id },
}) => {
  // const options = useMemo(() => {
  //   const options = new Set();
  //   preFilteredRows.forEach((row) => {
  //     options.add(row.values[id].trim());
  //   });
  //   console.log(options);
  //   return [...options.values()].sort();
  // }, [id, preFilteredRows]);

  const listOptions = useMemo(() => {
    const data = {};

    preFilteredRows.forEach((row) => {
      const dataField = row.values[id].trim();

      if (data[dataField]) {
        data[dataField]++;
      } else {
        data[dataField] = 1;
      }
    });

    let sortable = [];

    for (let field in data) {
      sortable.push([field, data[field]]);
    }

    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });

    return sortable;
  }, [id, preFilteredRows]);

  // console.log(listOptions);

  return (
    <div className='checkboxFilters' id={`checkboxes-${id}`}>
      <div className='block'>
        <span className='block capitalize mb-4'>
          {id === 'documentType'
            ? 'Document Type'
            : id.charAt(0).toUpperCase() + id.slice(1)}
        </span>
        {listOptions.map((option, i) => {
          return (
            <div key={i}>
              <div className='flex items-start'>
                <input
                  type='checkbox'
                  className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                  id={option[0]}
                  name={option[0]}
                  value={option[0]}
                  onChange={(e) => {
                    setFilter(setFilteredParams(filterValue, e.target.value));
                  }}
                ></input>
                <label
                  htmlFor={option[0]}
                  className='ml-1.5 font-medium text-gray-700'
                >
                  {option[0] === '' ? 'Not Specified' : option[0]}{' '}
                  <span className='text-gray-500 font-normal'>
                    ({option[1]})
                  </span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
