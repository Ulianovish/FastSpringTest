/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { HookState } from '../data/types';

//create a custom hook for api calls
interface ApiCallOptions {
  dependencies?: any[];
}

const apiStatus = {
  loading: 'loading',
  success: 'success',
  error: 'error'
};

const useApiCall = <T>(service: () => Promise<T>, options: ApiCallOptions = {}) => {
  const { dependencies = [] } = options;
  const [status, setStatus] = useState(apiStatus.loading);
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    setStatus(apiStatus.loading);
    service()
      .then((response) => {
        setData(response);
        setStatus(apiStatus.success);
      })
      .catch((error) => {
        setData(error.response.data);
        setStatus(apiStatus.error);
      });
  }, dependencies);
  return {
    data,
    isLoading: status === apiStatus.loading,
    error: status === apiStatus.error
  } as HookState<T>;
};

export default useApiCall;
