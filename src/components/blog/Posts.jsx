"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((post, i) => {
          i *= 0.05;
          return (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
              viewport={{ once: true }}
              className="bg-white relative overflow-hidden">
              <Link href={post.url} className="relative block overflow-hidden">
                <Image
                  src={post.image}
                  alt="none"
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                />
              </Link>
              <div className="p-8">
                <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
                  {format(parseISO(post.date), "LLL d, yyyy")} • {post.author}
                </p>
                <h3 className="mb-4">
                  <Link href={post.url} className="text-lg leading-none">
                    {post.title}
                  </Link>
                </h3>
                <p>
                  <Link href={post.url} className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-violet-600">
                    Read more
                  </Link>
                </p>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default function Posts({ className, itemsPerPage, archive = false, params }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setClickPaginate] = useState(false);
  const ref = useRef(null);

  let items = null;
  if (archive === false) {
    items = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  } else {
    if (params?.slug) {
      items = allPosts.filter((post) =>
        post.categories.some(
          (category) =>
            category.title
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/[\s_-]+/g, "-")
              .replace(/^-+|-+$/g, "") === params.slug
        )
      );
    }
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));

    if (clickPaginate === true) {
      setTimeout(function () {
        ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 300);
      setClickPaginate(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, clickPaginate]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setClickPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Items currentItems={currentItems} />
        </div>
        <div className="lg:w-10/12 mx-auto flex flex-wrap">
          <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
}
