import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default App
