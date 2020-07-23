import Layout from '../../components/layout'
import Head from 'next/head'
import { getArticle, getAllPathsArticles } from '../../utils/request'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article[0].title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{article[0].title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article[0].content }} />
      </article>
    </Layout>
  )
}


export async function getStaticPaths() {
  const articles = await getAllPathsArticles();
  return {
    paths: articles,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const article = await getArticle(params.id)
  return {
    props: {
      article
    }
  }
}