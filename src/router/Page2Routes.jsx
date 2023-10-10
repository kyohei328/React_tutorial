import React from 'react'


import UrlParameter from '../UrlParameter'
import Page2 from '../Page2'

const Page2Routes = [
    {
        path: "/",
        exact: true,
        children: <Page2 />
    },
    {
        path: "/:id",
        exact: false,
        children: <UrlParameter />
    },
]

export default Page2Routes

