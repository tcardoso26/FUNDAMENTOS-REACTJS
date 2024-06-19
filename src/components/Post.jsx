import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/tcardoso26.png" />
                    <div className={styles.authorInfo}>
                        <strong>Thiago Cardoso</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


            </header>

            <div className={styles.content}>
                <p>Fala galeraa</p>
                <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que eu fiz nmo NLW Retu</p>
                <p>{''}<a href="">thiago.cardoso/timeDev</a></p>
                <p>
                    <a href="">#projetoIgnite</a>{' '}
                    <a href=""> #nlw" </a>{' '}
                    <a href="">#rocketseat</a>
             </p>
           </div>

            <form className={styles.commentForm} onSubmit={(e)=>{e.preventDefault()}}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <button type="submit">Publicar</button>
            </form>


            <div className={styles.commentList}>
                <Comment />
                

            </div>

         </article>
   )
}