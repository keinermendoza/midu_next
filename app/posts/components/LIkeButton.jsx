'use client'

import { useState, useEffect } from "react"

const updateLike = (id) => {
    console.log(id, 'ha cmabiado')
}

export default function LikeButton({id}) {
    const [liked, setLiked] = useState()
    
    useEffect(() => {
        updateLike({id})
    }, [liked])

    return (
        <button id={id} onClick={() => setLiked(!liked)}>
            {liked ? 'me gusta' : 'No me gusta'}        
        </button>
    )
}