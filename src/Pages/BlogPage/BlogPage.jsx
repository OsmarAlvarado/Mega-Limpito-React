import TipsSection from "../../Components/TipsSection/TipsSection"
import './BlogPage.css'
import ImgBlog from '../../Assets/Image/logo-blog-removebg-preview.png'

const BlogPage = () => {



    return (
        <article className="BlogPage">
            <div className="blogInit">
                <div className="blogImg">
                    <img src={ImgBlog} alt="logo" />
                </div>
                <div className="blogText">
                    <h1 className="blogH1">Bienvenid@s a nuestro blog</h1>
                    <p className="blogP">Aquí podrás encontrar noticias, novedades y curiosidades sobre un tema tan cotidiano
                        como es la limpieza. En tu hogar, en tu empresa, en cualquier lugar…
                    </p>
                </div>
            </div>
            <TipsSection />
        </article>
    )

}

export default BlogPage