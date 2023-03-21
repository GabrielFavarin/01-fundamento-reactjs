import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

import './global.css';
import styles from './App.module.css';

//Author: { avatar_url: "", name: "", role: "" }
//publishedAt: Date
//content: String

const posts = [

  {
    id: 1,
    author: {
      avatarurl: 'https://github.com/GabrielFavarin.png',
      name: 'Gabriel Favarin',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-03-20 22:51:00'),
  },

  {
    id: 2,
    author: {
      avatarurl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-03-20 22:47:00'),
  },


];


export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


