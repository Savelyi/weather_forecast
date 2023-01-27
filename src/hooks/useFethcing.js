import { useState } from 'react';

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);

    const fetching = () => {
        try {
            setIsLoading(true);
            callback();
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading];
};
