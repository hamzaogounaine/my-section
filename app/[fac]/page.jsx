import { notFound } from "next/navigation";
import PageComponent from "./Component";
import { faculties } from "@/public/faculties";

// 1. Tell Next.js all valid dynamic segments to generate at build time
export async function generateStaticParams() {
    return faculties.map((faculty) => ({
        fac: faculty.id,
    }));
}

const Page = async ({ params }) => {
    const { fac } = await params;

    // 2. Call notFound() as a function, not a return object
    const facultyExists = faculties.some((f) => f.id === fac);
    if (!fac || !facultyExists) {
        notFound();
    }

    return <PageComponent fac={fac} />;
};

export default Page;