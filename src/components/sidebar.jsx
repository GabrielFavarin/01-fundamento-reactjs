import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/GabrielFavarin.png"/>

                <strong>Gabriel Favarin</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}