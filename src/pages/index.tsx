import yayJpg from '../assets/yay.jpg';
import axios from 'axios';
import ndjson from 'ndjson';
import { useEffect, useState } from 'react';

export default function HomePage() {

  const [res, setRes] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8080/ollama/api/chat?message=你好', {
      onDownloadProgress: progressEvent => {
         const xhr = progressEvent.event.target
         const { responseText } = xhr
         console.log(progressEvent.event)
         console.log("=====responseText======")
         console.log(responseText)
      }
    })

  }, []);
  return (
    <div>
      {res.join('<br />')}
    </div>
  );
}
