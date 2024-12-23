/* eslint-disable react/prop-types */
export function AccordionSection({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <h2 className="text-lg font-medium text-white">{title}</h2>
        <span className="ml-6 flex items-center">
          {isOpen ? (
            <span className="text-2xl">−</span>
          ) : (
            <span className="text-2xl">+</span>
          )}
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}
