import { ChangeEvent } from 'react';

type FormProps = {
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Form({ title, onChange }: FormProps) {
  return (
    <div className="mb-6">
      <label htmlFor="name" className="mr-3">タイトル:</label>
      <input
        className="w-[400px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="title"
        id="name"
        placeholder="漫画のタイトルを入力してください。"
        value={title}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Form;
