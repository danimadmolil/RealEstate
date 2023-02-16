import * as React from 'react';
import Scrollbar from './common/Scrollbar';
import Header from './parts/Header';
import './style.css';
import Cursor from './common/Cursor';
export default function App() {
  return (
    <div>
      <Cursor />
      <Scrollbar
        smoothScrolling={true}
        style={{ height: '100vh', width: '100%' }}
      >
        <Header />
      </Scrollbar>
    </div>
  );
}
