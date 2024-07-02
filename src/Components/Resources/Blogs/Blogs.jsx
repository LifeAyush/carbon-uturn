import BlogCards from "./BlogCards/BlogCards"
import Arrow from "../../../Assets/Images/Arrow.svg"
import "./blogs.css"
import { useEffect } from "react"
import { useState } from "react"
import { fetchMedium } from "mediumpostscard"

export default function Blogs() {
    const [width, setWidth] = useState(0)
    const [posts, setPosts] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)
        const dataMedium = fetchMedium("Carbon-ut.com")
        dataMedium.then((res) => setPosts(res))
    }, [])

    return (
        <section className="resources-blogs">
            <h1 className="resources-blogs-heading">
                Blogs
            </h1>
            <p className="resources-blogs-subheading">
                Our blogs cut through the noise to give you the information you need. Get a fresh perspective with our thought-provoking blog posts.
            </p>

            <div style={{ width: "95vw", overflow: "hidden", marginLeft: "5vw" }}>
                <div className="blogs-scroll">
                    {width > 768
                        ? posts?.dataMedium
                            ?.slice(0, 5)
                            .map((blog) => (
                                <BlogCards
                                    title={blog.title}
                                    img={blog.image}
                                    link={blog.link}
                                />
                            ))
                        : posts?.dataMedium?.map(
                            (blog, index) =>
                                index < 3 && (
                                    <BlogCards
                                        title={blog.title}
                                        img={blog.image}
                                        link={blog.link}
                                    />
                                )
                        )}
                </div>
            </div>

            <button className="blogs-btn">
                <a
                    href="https://medium.com/@Carbon-ut.com"
                    target="__blank"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    Read More <img src={Arrow} alt="" />
                </a>
            </button>
        </section>
    )
}
