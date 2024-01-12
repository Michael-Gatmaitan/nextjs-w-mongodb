"use client";
import React, { useEffect, useState } from "react";

type LikesProps = {
  blogLikes: number;
  _id: string;
};

const APICallLike = async (newLikeCount: number, _id: string) => {
  await fetch("http://localhost:3000/api/blogs/like", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: newLikeCount, _id }),
  });

  console.log("The put req in likes called.");
};

const Likes = (props: LikesProps) => {
  const { blogLikes, _id } = props;
  const [likes, setLikes] = useState<number>(blogLikes);

  const handleIncrementLike = async () => {
    const newLikeCount = likes + 1;
    console.log(newLikeCount);
    setLikes(newLikeCount);

    await APICallLike(newLikeCount, _id);
  };

  return (
    <div className="flex w-full justify-between pt-2">
      <h3 className="text-sm">Likes {likes}</h3>
      <button onClick={handleIncrementLike}>Like</button>
    </div>
  );
};

export default Likes;
