import { TQuery } from '@/@types/api.type';
import { ConstNum } from '@/data/enum.data';
import { useState } from 'react';

export function usePaginationControl() {
  const [paginationControl, setPaginationControl] = useState<TQuery>({
    page: '1',
    perPage: ConstNum.PER_PAGE,
    search: '',
    filter: '',
    advance_filter: '',
  });

  function handlePaginationControl<K extends keyof TQuery>(
    key: K,
    value: TQuery[K]
  ) {
    setPaginationControl((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return { paginationControl, handlePaginationControl };
}
