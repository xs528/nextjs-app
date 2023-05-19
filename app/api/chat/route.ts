import { NextResponse } from 'next/server';
import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://api.openai.com/v1/chat/completions',
  headers: {
    Authorization: 'Bearer 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',
    'content-type': 'application/json'
  },
};

export async function POST(request: Request) {
  const reqData = await request.json();
  const res = await axios.request({
    ...options,
    data: {
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: reqData.message}],
      temperature: 0.7
    }
  })

  return NextResponse.json(res.data);
}
