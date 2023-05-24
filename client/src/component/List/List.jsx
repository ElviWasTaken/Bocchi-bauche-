import React from 'react'
import "./List.scss"
import {Card} from "../Card/Card"


export const List = () => {


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
        <div className="List">{data.map(item=>(
            <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List