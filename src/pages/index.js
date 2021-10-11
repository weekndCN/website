import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// 高亮开始
import Translate, {translate} from '@docusaurus/Translate';
// 高亮结束

export default function Home() {
  return (
    <Layout>
      <h1>
        {/* 高亮开始 */}
        <Translate>Welcome to my website</Translate>
        {/* 高亮结束 */}
      </h1>
      <main>
        {/* 高亮开始 */}
        <Translate
          id="homepage.visitMyBlog"
          description="The homepage message to ask the user to visit my blog"
          values={{blog: <Link to="https://docusaurus.io/blog">blog</Link>}}>
          {'You can also visit my {blog}'}
        </Translate>
        {/* 高亮结束 */}

        <input
          type="text"
          placeholder={
            // 高亮开始
            translate({
              message: 'Hello',
              description: 'The homepage input placeholder',
            })
            // 高亮结束
          }
        />
      </main>
    </Layout>
  );
}