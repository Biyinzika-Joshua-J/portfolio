'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from './MobileNav';

const Navbar = () => {
 
    
  return (
    <div>
       <AppBar sx={{backgroundColor:'#116D6E'}} className='text-white' position='static'>
            <Toolbar>
                <div className="text-3xl font-cursive">JB</div>
                <div className="ml-auto flex items-center">
                    <ul className="hidden lg:flex justify-between">
                       <li className="ml-8 mr-8">
                            <Link href={'#home'}>
                                HOME
                            </Link>
                       </li>
                       <li className="ml-8 mr-8">
                            <Link href={'#about'}>
                                ABOUT
                            </Link>
                       </li>
                       <li className="ml-8 mr-8">
                            <Link href={'#skills'}>
                                SKILLS
                            </Link>
                       </li>
                       <li className="ml-8 mr-8">
                            <Link href={'#projects'}>
                                PROJECTS
                            </Link>
                       </li>
                       <li className="ml-8 mr-8">
                            <Link href={'#contact'}>
                                CONTACT
                            </Link>
                       </li>
                    </ul>
                    <div className="lg:hidden md:block sm:block">
                        <MobileNav/>
                    </div>
                </div>
            </Toolbar>
       </AppBar>
      
    </div>
  )
};

export default Navbar;