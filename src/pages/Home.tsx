import { useState, FormEvent, ChangeEvent } from 'react';
import Form from '../components/Form';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';
import { generateSummary } from "../lib/gemini";

function Home() {
  const [title, setTitle] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); 
  const [summary, setSummary] = useState(""); 

  const options = [
    { label: "一言で要約", value: "short" },
    { label: "100文字程度で要約", value: "medium" },
    { label: "物語を詳しく要約", value: "detailed" },
  ];

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  
  const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
    setSummary("要約中...");
  
    try {
      const result = await generateSummary(title, selectedOption);
      setSummary(result);
    } catch (error) {
      console.error("要約エラー:", error);
      setSummary("要約に失敗しました。");
    }
  };
  
  
  return (
    <div className="text-center pt-8">
      <h1 className="mb-7">要約アプリ</h1>
      <p className="mb-2">このアプリはネットの記事を要約するアプリです。</p>
      <p className="mb-8">下記のフォームにURLを貼り付け、検索ボタンをクリックしてください。</p>
      <form onSubmit={handleSubmit} className="mb-7 flex flex-col items-center">
        <Form title={title} onChange={handleTitleChange} />
        <RadioButton
          options={options}
          selectedOption={selectedOption}
          onChange={onOptionChange}
        />
        <Button />
      </form>

      {showSummary && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">要約内容</h2>
          <p className="text-left max-w-xl mx-auto whitespace-pre-line">{summary}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
