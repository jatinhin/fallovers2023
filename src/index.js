import { createRoot } from 'react-dom/client';

//import * as serviceWorker from './serviceWorker';
import App from './App';
const rootContainer = document.getElementById('ugc-suit-main');
const root = createRoot(rootContainer);
root.render(<App />);
//serviceWorker.unregister();