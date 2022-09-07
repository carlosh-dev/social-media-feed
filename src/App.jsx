
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

import './global.css'

import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carlosh-dev.png',
      name: 'Carlos Henrique',
      role: 'Web Developer'
    },
    content: [
      {type:'p', content:'Fala galeraa 👋'},
      {type:'p', content:'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'a', content:'carlos.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-07 13:02:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO at Rocketseat'
    },
    content: [
      {type:'p', content:'Fala Dev 😎'},
      {type:'p', content:'Subia gora mesmo o conteúdo da aula de hoje. Boa aula! 🚀'},
      {type:'a', content:'https://app.rocketseat.com.br/' },
    ],
    publishedAt: new Date('2022-09-07 12:07:00')
  }
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( (post) => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            
            />)
          })}
        </main>
      </div>
    </div>
  )
}

export default App
