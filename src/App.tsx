import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';
import { type Items_Details } from './types/utils';
import ItemList from './components/ItemList';

function App() {
  const [items, set_Items] = useState<Items_Details[]>([]);
  const [inputVal, set_InputVal] = useState<string>('');
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');

  console.log('items ---> ', items)
  console.log('isEditing ----> ', isEditing)
  console.log('editText ----> ', editText)

  // Add or update item
  const handle_Submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputVal.trim() === '') {
      toast.error('Please enter a valid item');
      return;
    }
    if (isEditing) {
      handleSave(isEditing);  // Update item if in editing mode
    } else {
      set_Items(prev => [...prev, { title: inputVal, id: Date.now().toString() }]);
      set_InputVal('');
      toast.success('Item added successfully!');
    }
  };

  // Edit item
  const handleEdit = (id: string, title: string) => {
    setIsEditing(id);
    setEditText(title);
    set_InputVal(title); // Make sure the input field shows the text of the item being edited
  };

  // Save updated item
  const handleSave = (id: string) => {
    set_Items(prev =>
      prev.map(item =>
        item.id === id ? { ...item, title: inputVal } : item // Use inputVal to update the title
      )
    );
    setIsEditing(null);  // Exit editing mode
    set_InputVal('');    // Clear the input field
    toast.success('Item updated successfully!');
  };


  return (
    <div className=' flex flex-col justify-center items-center'>
      <Header />
      <div className='w-[350px]'>

        <form className='mb-5' onSubmit={handle_Submit}>
          <Inputs type='text' inputVal={inputVal} set_InputVal={set_InputVal} />
          <Buttons type='submit' className='bg-green-800 rounded-xl w-full'>{isEditing ? 'SAVE✅' : 'ADD➕'}</Buttons>
        </form>

        <div className='h-72 overflow-y-auto'>
          <ItemList items={items} handleEdit={handleEdit} set_Items={set_Items} />
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
