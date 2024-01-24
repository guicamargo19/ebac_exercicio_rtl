import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://geekfanaticos.fbitsstatic.net/img/p/batmobile-tumbler-premium-series-batmovel-kit-de-montar-de-metal-batman-metal-earth-fascinatio-73473/259961.jpg?w=540&h=540&v=no-change&qs=ignore">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
