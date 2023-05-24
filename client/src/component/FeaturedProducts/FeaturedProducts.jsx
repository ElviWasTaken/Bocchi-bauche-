import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card"

export const FeaturedProducts = ({type}) => {


    const data = [

        {
            id: 1,
            img: "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL0N1c3RvbS0yNC0yMDIyLXZlcnRpY2FsLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NjAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0IjoxODUyLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
            title: "PRS Custom 24",
            oldPrice: 2000,
            price: 1500,
        },
        {
            id: 2,
            img: "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL0N1c3RvbS0yNC0yMDIyLXZlcnRpY2FsLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NjAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0IjoxODUyLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
            title: "PRS Custom 24",
            oldPrice: 2000,
            price: 1500,
        },
        {
            id: 3,
            img: "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL0N1c3RvbS0yNC0yMDIyLXZlcnRpY2FsLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NjAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0IjoxODUyLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
            title: "PRS Custom 24",
            oldPrice: 2000,
            price: 1500,
        },
        {
            id: 4,
            img: "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL0N1c3RvbS0yNC0yMDIyLXZlcnRpY2FsLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NjAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0IjoxODUyLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
            title: "PRS Custom 24",
            oldPrice: 2000,
            price: 1500,
        }

    ]


    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem quisquam inventore quasi accusantium, blanditiis ea 
                    eos voluptatibus, excepturi repudiandae, esse sed totam voluptatem
                    officia dolorem. Natus, eius. Ad, asperiores magni?
                </p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}




export default FeaturedProducts