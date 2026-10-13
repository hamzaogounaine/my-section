import React from 'react'
import PageComponent from './Component'

const page = async ({ params }) => {
    const { fac } = await params;
    return (
        <div>
            <PageComponent fac={fac} />
        </div>
    )
}

export default page