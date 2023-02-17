import React from "react";
import i1 from '../../../assets/Blogs/1.jpg';
import i2 from '../../../assets/Blogs/2.jpg';
import i3 from '../../../assets/Blogs/3.jpg';
import i4 from '../../../assets/Blogs/4.jpg';


export const SectionBlog = () => {

    const blogs1 = [
        {
            id: 1,
            date: '13/01',
            image: i1,
            title: 'The Cotton-Jersey Zip-Up Hoodie',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga consequatur voluptas aliquam, neque autem rerum soluta illum! Accusantium debitis nemo deserunt sit, in recusandae, iure ad perferendis molestiae alias facere!',

        },
        {
            id: 2,
            date: '26/01',
            image: i2,
            title: 'How to Style a Quiff',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga consequatur voluptas aliquam, neque autem rerum soluta illum! Accusantium debitis nemo deserunt sit, in recusandae, iure ad perferendis molestiae alias facere!',
            
        },
        {
            id: 3,
            date: '05/02',
            image: i3,
            title: 'Must-Have Skater Girl Items',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga consequatur voluptas aliquam, neque autem rerum soluta illum! Accusantium debitis nemo deserunt sit, in recusandae, iure ad perferendis molestiae alias facere!',
            
        },
        {
            id: 4,
            date: '10/03',
            image: i4,
            title: 'Runway-Inspired Trends',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga consequatur voluptas aliquam, neque autem rerum soluta illum! Accusantium debitis nemo deserunt sit, in recusandae, iure ad perferendis molestiae alias facere!',
            
        }
    ]

    return (
        <>
            <section className="SectionBlog">
                <div className="sectionBlog1">
                    {blogs1.map(b => {
                        return (
                            <div className="section_blog" key={b.id}>
                                <div className="Date">
                                    <h1 className="date"> {b.date} </h1>
                                    <div className="imgCover" style={{backgroundImage: `url(.${b.image})` }}></div>
                                </div>
                                <div className="description">
                                    <h1 className="title"> {b.title} </h1>
                                    <p className="parag"> {b.description} </p>
                                    <a href="/" className="continueLoading"> continue reading  </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}