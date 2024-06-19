import { Post } from "./components/Post"
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";

import "./global.css";

// author: {avatar_utl: "", name: ""}
// publishdAt: Date
// content: String


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tcardoso26",
      name: "Thiago Cardoso",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifolio. É um projeto que eu fiz nmo NLW !!" },
      { type: "link", content: "thiago.cardoso/timeDev" },

    ],
    publishedAt: new Date("2024-06-06 20:00:00"),
  }, //array dentro de outro array
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Paulo Coelho",
      role: "EDUCADOR @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifolio. É um projeto que eu fiz nmo NLW !!" },
      { type: "link", content: "thiago.cardoso/timeDev" },

    ],
    publishedAt: new Date("2024-06-06 20:00:00"),
  }, //array dentro de outro array
];

// iteração = repetir alguma coisa, criar uma estrutura de repetição, iterar um array, percorrer um array

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.forEach}
        </main>
      </div>
    </div>
  )
}




