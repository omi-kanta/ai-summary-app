import { useState } from 'react';
import Form  from '../components/Form';
import Button  from '../components/Button';
import * as React from 'react';
function Home() {
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  }

  return (
    <>
      <div className="text-center pt-8">
        <h1 className="mb-7">要約アプリ</h1>
        <p className="mb-2">このアプリはネットの記事を要約するアプリです。</p>
        <p className="mb-8">下記のフォームにURLを貼り付け、検索ボタンをクリックしてください。</p>
        <form onSubmit={handleSubmit} className="mb-7">
          <Form  />
          <Button />
        </form>

        {showSummary && (
          <div>
            要約内容が表示されます。
          </div>
        )}
      </div>
    </>
  )
}

export default Home;