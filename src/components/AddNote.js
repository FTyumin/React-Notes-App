const AddNote = () => {
    return(
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder="Add a note"
            ></textarea>
            <div className="note-footer">
                <small>200 characters left</small>
                <button className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;