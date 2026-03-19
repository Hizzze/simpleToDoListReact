import { useState } from 'react';
export function NewTodoForm(props) {
  const [newitem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newitem == '') return '';
    props.addTodo(newitem);
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newitem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}
