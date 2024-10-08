import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-300'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-red-600'>Opps!! 404</h1>
                <p className='text-xl my-3'>Sorry, an unexpected error has occurred.</p>
                <p>{error.statusText || error.message}</p>
            </div>
        </div>
    );
};

