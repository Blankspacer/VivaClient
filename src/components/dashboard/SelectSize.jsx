/* eslint-disable react/prop-types */
const SelectSize = ({ selectedData, setSelectedData }) => {
  const sizeOptions = [
    {
      id: 1,
      name: "5.5 * 8.5",
    },
    {
      id: 2,
      name: "8.5 * 5.5",
    },
    {
      id: 3,
      name: "8.5 * 11",
    },
    {
      id: 4,
      name: "8.5 * 14",
    },
    {
      id: 5,
      name: "11 * 8.5",
    },
    {
      id: 6,
      name: "11 * 17",
      priceModifier: 1.46,
    },
    {
      id: 7,
      name: "12 * 9",
    },
    {
      id: 8,
      name: "14 * 8.5",
    },
    {
      id: 9,
      name: "17 * 11",
    },
    {
      id: 10,
      name: "25.5 * 11",
    },
  ];

  const handleSelect = (item) => {
    if (selectedData.some((selected) => selected.id === item.id)) {
      setSelectedData(
        selectedData.filter((selected) => selected.id !== item.id)
      );
    } else {
      setSelectedData([...selectedData, item]);
    }
  };

  return (
    <div>
      <div>
        <h1>Select Available Size</h1>
        <div>
          {sizeOptions.map((item) => (
            <div key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedData.some(
                    (selected) => selected.id === item.id
                  )}
                  onChange={() => handleSelect(item)}
                />
                <span className="px-2">{item.name}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectSize;
