import React from "react";
import ShareAction from "./elements/share-action";
import BookmarkAction from "./elements/bookmark-action";

const ProductActions = () => {
  return (
    <div className="flex-ic gap-3 *:cursor-pointer *:size-10 *:rounded-lg *:flex-center *:shadow-lg">
      <ShareAction />
      <BookmarkAction />
      <button></button>
    </div>
  );
};

export default ProductActions;
