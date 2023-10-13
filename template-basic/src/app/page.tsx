import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const numb = Math.floor(Math.random() * 5 + 1);
  // const numb = 1;
  return (
    <>
      {[...Array(numb)].map((e, i) => (
        <article
          key={i}
          className="mx-auto w-4/5 items-center justify-between font-mono text-sm lg:flex lg:gap-6 mb-4 p-2 border border-green-700/50 rounded-md shadow-xl"
        >
          <h1 className="text-center text-2xl font-bold">
            Article n°: {i + 1}
          </h1>
          <p className="text-justify text-xl italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quidem culpa iste minima accusantium labore cupiditate
            commodi odit. Velit id dolorum expedita provident est quia eos sunt
            sed voluptatem soluta?
          </p>
          <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center">
            {/* <CustomLink href="/page/1">Custom LINK</CustomLink> */}
            <Link href={`page/${i + 1}`}>Custom LINK</Link>
          </div>
        </article>
      ))}
    </>
  );
}
