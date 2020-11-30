import React, { useRef } from 'react'

function ModalWindow({ setIsModalShown, selectedTask, setSelectedTask }) {
    const { date, name } = selectedTask;
    const dateInput = useRef();
    const nameInput = useRef();

    function handleUpdateSubmit(e) {
        e.preventDefault();
        setSelectedTask({
            ...selectedTask,
            date: dateInput.current.value,
            name: nameInput.current.value
        });
        setIsModalShown(false);
    }

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setIsModalShown(false)}>&times;</span>
                <form >
                    <label htmlFor="fname">Дата:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        defaultValue={date}
                        ref={dateInput}
                    /><br />
                    <label htmlFor="lname">Наименование:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        defaultValue={name}
                        ref={nameInput}
                    /><br /><br />
                    <input
                        type="submit"
                        value="Подтвердить"
                        onClick={(e) => handleUpdateSubmit(e)}
                    />
                </form>
            </div>
        </div>
    )
}

export { ModalWindow }
