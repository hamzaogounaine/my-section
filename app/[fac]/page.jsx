
import { notFound } from 'next/navigation';
import PageComponent from './Component'

const page = async ({ params }) => {
    const { fac } = await params;
    if (!fac) {
        return {
            notFound: true,
        }
    }
    return (
        <div>
            <PageComponent fac={fac} />
        </div>
    )
}

export default page