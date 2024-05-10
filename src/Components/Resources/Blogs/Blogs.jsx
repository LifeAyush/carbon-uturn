import BlogCards from "./BlogCards/BlogCards"
import blogs from "./blogsList.js"
import Arrow from "../../../Assets/Images/Arrow.svg"
import "./blogs.css"
import { useEffect } from "react"
import { useState } from "react"

export default function Blogs() {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.innerWidth)
        try {
            fetch("https://api.medium.com/v1/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_MEDIUM_API}`,
                },
            }).then((res) => console.log(res))
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <section className="resources-blogs">
            <h1 className="resources-blogs-heading">Blogs</h1>
            <p className="resources-blogs-subheading">
                Our blogs cut through the noise to give you the information you
                . Get a fresh perspective with our thought-provoking blog posts.
            </p>

            <div className="blogs-scroll">
                {width > 768
                    ? blogs.map((blog) => <BlogCards {...blog} />)
                    : blogs.map(
                          (blog, index) => index < 3 && <BlogCards {...blog} />
                      )}
            </div>

            <button className="blogs-btn">
                Read More <img src={Arrow} alt="" />
            </button>
        </section>
    )
}
