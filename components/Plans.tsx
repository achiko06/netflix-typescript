//import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
//import { loadCheckout } from '../lib/stripe'
// check from 44:58 for stripe implementation
import Table from './Table'
import Loader from './Loader'

import { CheckIcon } from '@heroicons/react/20/solid'
import Stripe from "stripe";



interface Product extends Stripe.Price {
  product: Stripe.Product;
}


interface Props {
products: Product[];
}

function Plans() {
  const { logout, user } = useAuth()
  

  return (
    <div>
      <Head>
        <title>Subscribe to RavenFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className='flex w-full items-center justify-center self-end md:w-3/5'>
            <div className='planBox'>
              standard
            </div>
            <div className='planBox'>
              medium
            </div>
            <div className='planBox'>
              full hd
            </div>

            {/*<Table />*/}

            <button>Subscribe</button>
          </div>
        </div>
      </main>

      
    </div>
  )
}

export default Plans