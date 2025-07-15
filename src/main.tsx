import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/inter/600.css'
import '@fontsource/public-sans/400.css'

createRoot(document.getElementById("root")!).render(<App />);
