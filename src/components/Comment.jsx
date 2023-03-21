import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
    return (

        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/GabrielFavarin.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Favarin</strong>
                            <time title='18 de março de 2023' dateTime='2023-03-18 11:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button >
                        <ThumbsUp />
                        Aplaudir <span>24</span>
                    </button>

                </footer>
            </div>

        </div>


    )

}