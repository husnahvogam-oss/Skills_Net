function CategoryFilter({ categories, value, onChange }) {
  return (
    <label className="font-label block text-xs uppercase text-[#5B6472]">
      Category
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 block w-full max-w-xs rounded-md border border-[#E4DECF] bg-white px-4 py-3 font-sans text-sm normal-case tracking-normal text-[#10192B] outline-none focus:border-[#9C7A3C]"
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </label>
  )
}

export default CategoryFilter