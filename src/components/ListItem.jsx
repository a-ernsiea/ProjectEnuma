function ListItem({task}) {
    return ( 
    <>
    <div className="tugas">
      <input type="checkbox" />
      <p>{task}</p>
      <button>Edit</button>
      <button>Hapus</button>
    </div>
        </> 
);

}

export default ListItem;

