'use client';
import axios from 'axios';
import { useState, useRef, useEffect, useCallback } from 'react';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [list, setList] = useState<Array<{q: string, a?: string}>>([]);

  const send = useCallback(() => {
    const question = inputRef.current?.value || '你好';
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setList([...list, {q: question}]);
    axios.post('/api/chat', {
      message: question
    }).then(res => {
      const { data } = res;
      setList((list) => {
        list[list.length - 1].a = data.choices[0].message.content;
        return [...list];
      });
    });
  }, [list]);

  useEffect(() => {
    // input 回车发送
    const input = inputRef.current;
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          send();
        }
      });
    }
  }, [send]);

  return <main className="h-screen">
    <div className="p-[20px] flex flex-col h-full max-w-screen-sm mx-auto"> 
      <div className="flex-auto">
        {list.map(item => {
          return <div className="mb-4" key={Math.random()}>
            <div className="chat chat-start">
              <div className="chat-bubble">{item.q}</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">{JSON.stringify(item.a)}</div>
            </div>
          </div>;
        })}
      </div>
      <div className="my-4 flex-none flex justify-center">
        <input ref={inputRef} type="text" placeholder="Input message" className="input input-bordered input-primary w-full max-w-xs" />
        <button className="btn btn-primary ml-4" onClick={send}>发送</button>
      </div>
    </div>
  </main>
}

