import { useState, FormEvent, ChangeEvent } from 'react';
import Form from '../components/Form';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';

function Home() {
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); 
  const options = [
    { label: "一言で要約", value: "short" },
    { label: "100文字程度で要約", value: "medium" },
    { label: "物語を詳しく要約", value: "detailed" },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="text-center pt-8">
      <h1 className="mb-7">要約アプリ</h1>
      <p className="mb-2">このアプリはネットの記事を要約するアプリです。</p>
      <p className="mb-8">下記のフォームにURLを貼り付け、検索ボタンをクリックしてください。</p>
      <form onSubmit={handleSubmit} className="mb-7 flex flex-col items-center">
        <Form />
        <RadioButton
          options={options}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />
        <Button />
      </form>

      {showSummary && (
        <div>
          要約内容が表示されます。（選択: {selectedOption}）
        </div>
      )}
    </div>
  );
}

export default Home;
