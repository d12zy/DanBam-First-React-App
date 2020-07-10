import React, { useState } from 'react';
import './views.css';

export default function Beranda() {
  const [count, setCount] = useState(0);

  return (
      <div className="App-Rating">
        Semua tentang kenyamanan dan kepuasan pelanggan
        <br/>
        Rating anda sangat membantu
        <br/>
        Silahkan beri kami rating
        <br/>
        Kami akan berusaha untuk selalu meningkatkan kinerja kami 
          <div>
            <p>Anda memberi Ulasan {count} bintang pada restoran kami</p>

            <button className="Bintang" onClick={() => setCount(count - 1)}>
              Kurangi bintang
            </button>

            <button className="Bintang" onClick={() => setCount(count + 1)}>
              Beri bintang
            </button>
          </div>
      </div>
  )
}