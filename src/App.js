import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>This is your TODO</h1>

        {/* Formコンポーネント */}
        <form>
          <input type="text" />
          <input type="submit" value="Add" />
        </form>
        {/* Formコンポーネント ここまで */}

        {/* Listコンポーネント */}
        <ul>
          <li>
            sleep
            <button>edit</button>
            <button>delete</button>
          </li>
          <li>
            eat
            <button>edit</button>
            <button>delete</button>
          </li>
          <li>
            live
            <button>edit</button>
            <button>delete</button>
          </li>
        </ul>
        {/* Listコンポーネントここまで */}


        <h3>Done your todos</h3>

        {/* Doneコンポーネント */}
        <ul>
          <li>
            hangout
            <button>return</button>
          </li>
          <li>
            take a break
            <button>return</button>
          </li>
          <li>
            drink
            <button>return</button>
          </li>
        </ul>
        {/* Doneコンポーネントここまで */}

      </div>
    );
  }
}

export default App;