
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const comments = [
    1,2,3
]

export function Post({
    author,
    content,
    publishedAt,
}) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDaterelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>
                            {author.name}
                        </strong>
                        <span>
                            {author.role}
                        </span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toString()}>
                    {publishedDaterelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'p') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'a') {
                        return <a href='#'>{line.content}</a>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder='Deixe um comentário'>

                </textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map( comment => {
                    return <Comment/>
                })}
            </div>
        </article>
    )
}