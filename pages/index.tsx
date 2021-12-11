import type { NextPage } from 'next';
import { showToast } from '../components/Toast';

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => showToast()}>show toaster</button>
    </div>
  );
};

export default Home;
