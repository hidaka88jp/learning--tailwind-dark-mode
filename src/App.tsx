import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  // 1. useStateでダークモードを管理
  const [darkMode, setDarkMode] = useState(false);
  
  // 2. 状態が変わるたびにHTML要素を更新
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className='dark:bg-gray-700'>
        
        <h1 className='text-4xl font-bold dark:text-white'>Vite + React</h1>
        <Button toggleDarkMode={toggleDarkMode} />
      
      </div>
    </>
  )
}

export default App
