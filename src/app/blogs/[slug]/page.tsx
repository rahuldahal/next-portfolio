import Header from '../../../components/Header';
import Article from '../../../components/Article';
import {headers} from 'next/headers';

async function getArticle(id: string) {
  const query = `
  {
    post(id: "${id}"){
      id
      title
      updatedAt
      publishedAt
      readTimeInMinutes
      content{
        markdown
      }
      brief
      coverImage{
        url
      }
      tags{
        name
        logo
      }
    }
  }
      `;

  try {
    const res = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {},
      }),
      cache: 'no-store',
    });
    const { data } = await res.json();
    
    if (!data) {
      return {};
    }

    return data.post;
  } catch (error) {
    console.log(error);
  }
}

export default async function BlogPage() {
  const headersList = headers();
  const referer = headersList.get('referer') || '';
  
  const url = new URL(referer);
  const id = url.searchParams.get('id');
  const article = await getArticle(id);    
  
  return (
    <>
      <Header activeNav="blogs" />
      <Article article={article} />
    </>
  );
}
