export interface Paginated<T> {
  list: Array<T>;
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    prevPage?: number;
    nextPage?: number;
    total: number;
  };
}

export interface PaginateParams<T> {
  data: Array<T>;
  count: number;
  page: number;
  perPage: number;
}

export const paginate = <T>({
  data,
  count,
  page,
  perPage,
}: PaginateParams<T>) => {
  const pageCount = Math.ceil(count / perPage);

  const paginated: Paginated<T> = {
    list: data,
    pagination: {
      page,
      pageCount,
      pageSize: perPage,
      total: count,
    },
  };

  if (page > 1 && page <= pageCount) {
    paginated.pagination.prevPage = page - 1;
  }

  if (page < pageCount) {
    paginated.pagination.nextPage = page + 1;
  }

  return paginated;
};
