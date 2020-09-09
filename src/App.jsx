import React from 'react';
import TodosProvider from './state/todos/Provider';
import FilterProvider from './state/filter/Provider';
import TodoApp from './pages/TodoApp/TodoApp';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider>  
      <TodosProvider>
        <FilterProvider>
          <CSSReset />
          <TodoApp />
        </FilterProvider>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
