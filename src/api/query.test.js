import React from 'react';
import { test, expect } from '@jest/globals';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';

const useCustomHook = () => useQuery('customHook', () => 'Hello React Query');

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test('query-test', async () => {
  const { result, waitFor } = renderHook(useCustomHook, { wrapper });
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data).toBe('Hello React Query');
});
