import { Prisma } from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getPosts() {
  const posts = await Prisma.post.findMany()
  return posts
}

export default async function Page() {
  const posts = await getPosts()
  return (
    <div>
      <ul>
        {posts?.map(post => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <Image src={post.image} alt='okala' width={200} height={200}/>
            <p>{post.content}</p>
            <Image src={post.banner} alt='okala' width={200} height={200}/>
            <Link href={post.url}>Link</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
