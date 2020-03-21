// import Layout from "../components/Layout";
// import { API, DOMAIN, APP_NAME } from '../config';
// import { listBlogsWithCategoriesAndTags } from '../actions/blog';
// import { withRouter } from "next/router";
// import { useState } from 'react'; // need
// import Link from 'next/link'; // need
// import HighlightCardSm from "../components/Blog/HighlightCardSm";

// const Index = ({ blogs, categories, router, blogsLimit, totalBlogs, tags }) => {

//     // FUN CONSOLE
//     console.log(`
//        ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,             
//      ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,        
//     ,,,,                              ,,,,,,,,,,,,    
//     ,,,,              ,**************     ,,,,,,,,,,  
//     ,,,,         .**,********************    ,,,,,,,,,
//     ,,,,       *****************************   ,,,,,,,
//     ,,,,     ****       ***********      ,****   ,,,,,
//     ,,,,    *****       ***********      ,*****   ,,,,
//     ,,,,   ******       ***********      *******   ,,,
//     ,,,,  ,******       ***********      *******.  ,,,
//     ,,,,  *******       ***********      ,*******  ,,,
//     ,,,,  ********      ***********      ,******,  ,,,
//     ,,,,   *******.        ********      ,******   ,,,
//     ,,,,,   ******//                     ,*****   ,,,,
//     ,,,,,,   **********                  ,****   ,,,,,
//      ,,,,,,,   *****************************   ,,,,,,,
//       ,,,,,,,,   ************************,   ,,,,,,,,,
//        ,,,,,,,,,     ****************,    ,,,,,,,,,,,,
//          ,,,,,,,,,,,,                 ,,,,,,,,,,,,,,, 
//            ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,   
//     `);

//     // This section is for the home page hero preview
//         const myblogs = (blogs);
//         // console.log(myblogs);
//         const mostRecent = myblogs.slice(-1)[0];
//         // console.log(mostRecent);

//     // This section is for the highlights section
//         // const highlights = blogs[0];
//         // console.log('Highlights' + blogs[0].title);
//         const highlights = myblogs.slice(-1);
//         // console.log(highlights);

//     const [limit, setLimit] = useState(blogsLimit);

//     const showMostRecent = (props) => {
//         return (
//             <>
//             <div className="hero" style={{backgroundImage: `url(${API}/blog/photo/${mostRecent.slug})`}}>                
//                 <Link href={`/categories/${mostRecent.categories[0].slug}`}>
//                     <a style={{color: `white`}}>
//                         <p className="category">{mostRecent.categories[0].name}</p>
//                     </a>
//                 </Link>

//                 <Link href={`/blogs/${mostRecent.slug}`}>
//                     <a style={{color: `white`}}>
//                         <h1>{mostRecent.title}</h1>
//                     </a>
//                 </Link>
//             </div>

//             <div className="highlights">
//                 <h4>Highlights</h4>
                
//                 <div className="card-wrapper">
//                     <HighlightCardSm blogs={blogs.slice(-2)[0]}/>
//                     <HighlightCardSm blogs={blogs.slice(-3)[0]}/>
//                     <HighlightCardSm blogs={blogs.slice(-4)[0]}/>
//                     <HighlightCardSm blogs={blogs.slice(-5)[0]}/>
//                 </div>
//             </div>
//             </>
//         );
//     };


//     return (
//         <Layout>
//             <div id="index">
//                 <div className="site-brand">
//                     <h1>{APP_NAME}</h1>
//                 </div>                
//                 <div>
//                     {showMostRecent()}
//                 </div>
//             </div>
//         </Layout>
//     )
// };

// Index.getInitialProps = () => {
//     let skip = 0;
//     let limit = 2;

//     return listBlogsWithCategoriesAndTags(skip).then(data => {
        
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             return {
//                 blogs: data.blogs,
//                 categories: data.categories,
//                 tags: data.tags,
//                 totalBlogs: data.size,
//                 blogsLimit: limit,
//                 blogSkip: skip
//             };
//         }
//     });
// };

// export default Index;

import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                PROGRAMMING & WEB DEVELOPMENT BLOGS/TUTORIALS
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best programming and web development blogs and tutorials on React Node NextJs and
                                JavaScript
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">React</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/react">
                                        <a>
                                            <h3 className="h1">React Js</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">The world's most popular frontend web development library</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Node</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/node">
                                        <a>
                                            <h3 className="h1">Node Js</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        The worlds most popular backend development tool for JavaScript Ninjas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Next</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/nextjs">
                                        <a>
                                            <h3 className="h1">Next Js</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">A Production ready web framework for building SEO React apps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;