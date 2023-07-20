import Link from "next/link";

const BlogPost = ({ title, content, slug, imageUrl }) => {
    return (
        <div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded-lg w-[30%] h-[80vh]">
            {imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageUrl} alt={title} width={12} height={12} className="w-full rounded-t-lg" />
            )}
            <h2 className="text-2xl font-semibold mt-4">{title}</h2>
            <p className="text-gray-500 mt-2">Slug: {slug}</p>
            <div className="mt-4">
                <p>{content}</p>
            </div>
            <button className="text-white bg-indigo-500 hover:bg-indigo-600 transition-all rounded-md px-6 py-3 font-semibold mt-3"><Link href={`/blog/${slug}`}>Read more</Link></button>
        </div>
    );
};

export default BlogPost;
