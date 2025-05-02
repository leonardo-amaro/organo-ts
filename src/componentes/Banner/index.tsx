import React from 'react'
import './Banner.css'

interface BannerProps {
    caminhoImagem: string,
    textoAlternativo?: string
}

export const Banner = ({ caminhoImagem, textoAlternativo }: BannerProps) => {
    return (
        <header className="banner">
            <img src={caminhoImagem} alt={textoAlternativo} />
        </header>
    )
}

export default Banner
