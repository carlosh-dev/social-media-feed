
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/carlosh-dev.png" />
                    <div className={styles.authorInfo}>
                        <strong>
                            Carlos Henrique
                        </strong>
                        <span>
                            Web Developer
                        </span>
                    </div>
                </div>

                <time title="11 de Maio às 8:12" dateTime="2022-05-22 08:12:34">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 jane.design/doctorcare</p>
                <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
            </div>
        </article>
    )
}