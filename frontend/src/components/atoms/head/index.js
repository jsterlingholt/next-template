import React from 'react'
import dynamic from 'next/dynamic'


const Head = ({ title, meta, style, link }) => {
    const NextHead = dynamic(import('next/head'))

    //console.log('testing log')


    const Meta = meta ? meta : []
    const Style = style ? style : []
    const Link = link ? link : []


    return <>
        <NextHead>

            {/* TITLE */}
            <title>{title}</title>

            {/* META TAGS */}
            {Meta.map(item => {
                return <meta
                    key={item.name + item.content}
                    name={item.name}
                    content={item.content} 
                />
            })}

            {/* STYLE TAGS */}
            {Style.map(item => {
                return <style
                    key={item.name + item.link}
                />
            })}

            {/* Link TAGS */}
            {Link.map(item => {
                return <link
                    key={item.rel + item.href}
                    rel={item.rel}
                    href={item.href}
                />
            })}
        </NextHead>
        
    </>
}
export default Head