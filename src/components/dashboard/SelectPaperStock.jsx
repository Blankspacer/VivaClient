/* eslint-disable react/prop-types */
const SelectPaperStock = ({ paperData, setPaperData }) => {
  const paperStock = [
    {
      id: 1,
      name: "Coated Gloss-White",
      weight: [
        { value: "80# Text", priceModifier: 0.96 },
        { value: "100# Text", priceModifier: 0 },
        { value: "80# Cover", priceModifier: 1.07 },
        { value: "100# Cover", priceModifier: 1.12 },
        { value: "120# Cover", priceModifier: 1.17 },
      ],
    },
    // {
    //   id: 2,
    //   name: "Coated Glass-White",
    //   weight: [
    //     "80# Text",
    //     "100# Text",
    //     "80# Cover",
    //     "100# Cover",
    //     "120# Cover",
    //   ],
    // },
    {
      id: 3,
      name: "Coated Matte-White",
      weight: [
        { value: "80# Text", priceModifier: 0.96 },
        { value: "100# Text", priceModifier: 0 },
        { value: "80# Cover", priceModifier: 1.07 },
        { value: "100# Cover", priceModifier: 1.12 },
        { value: "120# Cover", priceModifier: 1.17 },
      ],
    },
    {
      id: 4,
      name: "Uncoated Smooth-White",
      priceModifier: 1.03,
      weight: [
        { value: "70# Text", priceModifier: 0.94 },
        { value: "80# Text", priceModifier: 0.96 },
        { value: "100# Text", priceModifier: 0 },
        { value: "80# Cover", priceModifier: 1.08 },
        { value: "100# Cover", priceModifier: 1.12 },
        { value: "130# Cover", priceModifier: 1.22 },
      ],
    },
    {
      id: 5,
      name: "Uncoated 100% Recycled-White",
      priceModifier: 1.25,
      weight: [
        { value: "80# Cover", priceModifier: 0 },
        { value: "100# Cover", priceModifier: 1.16 },
        { value: "130# Cover", priceModifier: 1.25 },
      ],
    },
    {
      id: 6,
      name: "Coated Semigloss 1 Side (CTS)-White",
      priceModifier: 1.24,
      weight: [
        { value: "12 pt", priceModifier: 0 },
        { value: "14 pt", priceModifier: 1.02 },
      ],
    },
    {
      id: 7,
      name: "Coated Semigloss 2 Sides (C2S)-White",
      priceModifier: 1.15,
      weight: [
        { value: "12 pt", priceModifier: 0 },
        { value: "14 pt", priceModifier: 1.06 },
      ],
    },
    {
      id: 8,
      name: "Linen-White",
      priceModifier: 1.1,
      weight: [
        { value: "70# Text", priceModifier: 0 },
        { value: "110# Cover", priceModifier: 1.36 },
      ],
    },
    {
      id: 9,
      priceModifier: 1.66,
      name: "Uncoated Smooth-Natural",
      weight: [
        { value: "100# Cover", priceModifier: 0 },
        { value: "80# Text", priceModifier: 0.73 },
      ],
    },
    {
      id: 10,
      name: "Linen-Natural",
      priceModifier: 1.7,
      weight: ["100# Cover"],
    },
    {
      id: 11,
      name: "Felt Weave-Natural",
      priceModifier: 1.43,
      weight: [{ value: "100# Cover", priceModifier: 0 }],
    },
    {
      id: 12,
      name: "Felt Weave-White",
      priceModifier: 1.14,
      weight: [
        { value: "80# Text", priceModifier: 0 },
        { value: "100# Cover", priceModifier: 1.3 },
      ],
    },
  ];

  const handleSelect = (item) => {
    if (paperData.some((selected) => selected.id === item.id)) {
      setPaperData(paperData.filter((selected) => selected.id !== item.id));
    } else {
      setPaperData([...paperData, item]);
    }
  };

  return (
    <div>
      <div>
        <h1>Select Available Size</h1>
        <div>
          {paperStock.map((item) => (
            <div key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={paperData.some(
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

export default SelectPaperStock;
