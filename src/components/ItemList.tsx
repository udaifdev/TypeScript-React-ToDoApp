import Buttons from './Buttons';
import { Items_Details, ReactSetState } from '../types/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ListDetails = {
    items: Items_Details[];
    set_Items: ReactSetState<Items_Details[]>;
    handleEdit: (id: string, title: string) => void;
};

function ItemList({ items, handleEdit, set_Items }: ListDetails) {
    // Delete Function
    const handle_Delete = (id: string) => {
        set_Items(prev => {
            const updatedItems = prev.filter(data => data.id !== id);
            // Show toast notification when an item is deleted
            if (updatedItems.length !== prev.length) {
                toast.info('Item deleted successfully!');
            }
            return updatedItems;
        });
    };
    return (
        <>
            {items.map((data) => (
                <div key={data.id} className='flex justify-between items-center border-2 border-gray-700 rounded pl-2 mb-2 mr-1 py-1'>
                    <p className='font-bold text-gray-900 text-1xl '>{data.title}</p>

                    <div className='flex space-x-2'>
                        <Buttons onClick={() => handleEdit(data.id, data.title)} className='bg-yellow-100 rounded-md'>
                            <span className='flex items-center'>
                                🖊️
                            </span>
                        </Buttons>

                        <Buttons onClick={() => handle_Delete(data.id)} className='bg-red-800 rounded-md'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='currentColor'>
                                <path d='M3 6h18v2H3V6zm2 4h14v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V10zm5-5V3h6v2h5v2H3V5h5zm2 2h4v2h-4V7z' />
                            </svg>
                        </Buttons>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ItemList;
