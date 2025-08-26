import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
      modalRef.current.open();
      return;
    }
    
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })

  }

  return (
    <>
    <Modal ref={modalRef}>
      <p className="p-4 my-4 text-xl font-bold text-stone-500">All fields are required!</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
        <li><button className="px-6 py-2 rounded-lg bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
      </menu>
      <div>
        <Input label="Title" ref={titleRef} />
        <Input label="Description" isTextarea ref={descriptionRef} />
        <Input label="Due Date" type="date" ref={dueDateRef} />
      </div>
    </div>
    </>
  );
}
