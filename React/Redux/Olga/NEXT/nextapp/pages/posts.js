import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Posts(){
    return (
        <MainLayout>
        <h1>Post Page</h1>
        <p><Link href='/post/id'><a>Post</a></Link> </p>
        </MainLayout>
    )
}
