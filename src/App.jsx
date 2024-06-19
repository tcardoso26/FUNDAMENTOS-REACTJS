import { Post } from "./components/Post"
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            autor="Thiago Cardoso"
            content=" lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
          />
          <Post
            author="Gabriel medina"
            content=" Um novo post foi adicionado"
          />
        </main>

      </div>
    </div>
  )
}




