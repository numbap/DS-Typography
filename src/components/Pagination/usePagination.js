import { useMemo } from "react";

export const DOTS = "...";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  browser,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    // const rightSiblingIndex = Math.min(
    //   currentPage + siblingCount,
    //   totalPageCount
    // );

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    // const shouldShowLeftDots = leftSiblingIndex > 2;
    // const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // if (!shouldShowLeftDots && shouldShowRightDots) {
    //   let leftItemCount = 3 + 2 * siblingCount;
    //   let leftRange = range(1, leftItemCount);

    //   return [...leftRange, DOTS, totalPageCount];
    // }

    // if (shouldShowLeftDots && !shouldShowRightDots) {
    //   let rightItemCount = 3 + 2 * siblingCount;
    //   let rightRange = range(
    //     totalPageCount - rightItemCount + 1,
    //     totalPageCount
    //   );
    //   return [firstPageIndex, DOTS, ...rightRange];
    // }

    if (browser) {
      if (currentPage < 10) {
        let result = range(1, 10);
        return [...result];
      } else {
        let start = Math.floor(currentPage / 10);
        start = start * 10;
        let end = start + 10 < lastPageIndex ? start + 10 : lastPageIndex;
        let result = range(start, end);
        return [...result];
      }
    } else {
      let lowerIndex = currentPage - 1 > 1 ? currentPage - 1 : firstPageIndex;
      let upperIndex =
        currentPage + 1 < lastPageIndex ? currentPage + 1 : lastPageIndex;
      let middleRange = range(lowerIndex, upperIndex);
      return [...middleRange];
    }

    // if (shouldShowLeftDots && shouldShowRightDots) {
    //   let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    //   return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    // }
    // if (shouldShowLeftDots && shouldShowRightDots) {
    //   let lowerIndex = currentPage - 2 > 1 ? currentPage - 2 : firstPageIndex
    //   let upperIndex = currentPage + 2 < lastPageIndex ? currentPage + 2 : lastPageIndex
    //   let middleRange = range(lowerIndex, upperIndex);
    //   return [...middleRange]
    // }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
