export const Location = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' });
    const toDoNote = await response.json();
    console.log('note', toDoNote);
      
    return (
        <p>vegetables and fruits in {toDoNote.title}</p>
    );
};