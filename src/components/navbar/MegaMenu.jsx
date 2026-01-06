"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { solutionsData } from "./navbar.data";

const MegaMenu = () => {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState({
    title: solutionsData[0].title,
    image: solutionsData[0].mainImage,
    isSub: false,
  });

  useEffect(() => {
    setPreview({
      title: solutionsData[active].title,
      image: solutionsData[active].mainImage,
      isSub: false,
    });
  }, [active]);

  return (
    <div className="relative group">
      <button className="font-medium">Solutions</button>

      <div className="absolute top-full left-0 w-full hidden group-hover:block bg-white shadow-xl">

        {/* LEFT */}
        {solutionsData.map((s) => (
          <div key={s.id} onMouseEnter={() => setActive(s.id)}>
            {s.title}
          </div>
        ))}

        {/* MIDDLE */}
        {solutionsData[active].items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onMouseEnter={() =>
              setPreview({ title: item.name, image: item.image, isSub: true })
            }
          >
            {item.name}
          </Link>
        ))}

        {/* RIGHT */}
        <div style={{ backgroundImage: `url(${preview.image})` }}>
          <h4>{preview.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
