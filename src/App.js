import Navbar from './Components/Navbar';
import Container from './Components/Styled/Container';
import Intro from './Components/Intro';
import ListContainer from './Components/ListContainer';
import List from './Components/List';
import { useState } from 'react';

function App() {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <Container>
      <Intro />
      <ListContainer setDatas={setDatas} page={page} datas={datas} />
      {datas.data && datas.data.length > 0 && <List registrar={datas} setPage={setPage} />}
      <Navbar />
    </Container>
  );
}

export default App;
