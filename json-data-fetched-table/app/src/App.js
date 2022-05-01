import styles from './App.module.css';
import { useEffect, useState } from 'react';
function App() {
  const [data, setdata] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/${data}`)
        .then((response) => response.json())
        // .then((json) => console.log(json));
        .then((json) => setItems(json));
    };
    fetchdata().catch(console.error);
  }, [data]);
  return (
    <div className={styles.App}>
      <h2>Table</h2>
      <div className={styles.buttons}>
        <button
          onClick={(e) => {
            setdata('users');
            e.preventDefault();
          }}
        >
          Type 1
        </button>
        <button
          onClick={(e) => {
            setdata('todos' || null);
            e.preventDefault();
          }}
        >
          Type 2
        </button>
        <button
          onClick={(e) => {
            setdata('posts' || null);
            e.preventDefault();
          }}
        >
          Type 3
        </button>
      </div>
      <div>
        <table border="true" className={styles.table}>
          <thead>
            {data && (
              <tr>
                <th>{JSON.parse(JSON.stringify(`${data}${' '}id`))}</th>
                <th>{JSON.parse(JSON.stringify(`${data}${' '}name`))}</th>
                <th>{JSON.parse(JSON.stringify(`${data}${' '}address`))}</th>
                <th>{JSON.parse(JSON.stringify(`${data}${' '}Company`))}</th>
              </tr>
            )}
          </thead>
          <tbody>
            {items.length &&
              items.map((item) => {
                return (
                  <tr>
                    <td>{JSON.stringify(item.id) || 'No data found'}</td>
                    <td>{JSON.stringify(item.name) || 'null'}</td>
                    <td>
                      {JSON.stringify(item.address?.city) || 'No data found'}
                    </td>{' '}
                    <td>
                      {JSON.stringify(item.company?.name) || 'No data found'}
                    </td>{' '}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
