function Form () {

  return (
    <div className="mb-6">
      <label for="url" className="mr-3">URL:</label>
      <input
        className="w-[400px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="url"
        name="url"
        id="url"
        placeholder="https://example.com"
        required />
    </div>
  )
}

export default Form;