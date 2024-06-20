import React from 'react'
import { GithubIcon, TwitterIcon } from './icons'
import Link from 'next/link'
import ChatBot from './chatBot'

function Footer() {
    return (
        <div>
            <footer className="relative bg-slate-100 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                            {/* <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5> */}
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button type="button">
                                    <TwitterIcon />
                                </button>
                                <button type="button">
                                    <GithubIcon />
                                </button>
                            </div>
                            <h4 className='text-2xl py-5'>Disclaimer!</h4>
                            <div>
                                The Information on this website is presented for educational purposes only. It is not intended as a substitute for the diagnosis, treatment, or advise of a qualified, licensed medical practitioner. The facts presented are offered as information only, not medical advice, and in no way should anyone infer that we are practicing medicine.
                            </div>

                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/blog">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        </div>
                    </div>
                </div>
            </footer>
            <ChatBot />
        </div>
    )
}

export default Footer