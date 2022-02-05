import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SearchBar from '../searchbar/SearchBar';
import NavigationBar from '../navigationbar/NavigationBar';
import CardPost from '../card/CardPost'
import { getGistsForUser } from '../../api/gists';
import '../../assets/css/App.css';

export default function App() {
  const [cards, setCards] = useState((<></>))

  const onSearch = async (value) => {
    let response = await getGistsForUser(value);
    if (response != null) {
      setCards(response.map((gist) => {
        let filesDictionary = {}
        Object.keys(gist.files).forEach((key) => {
          if (gist.files[key].language != null) {
            if (filesDictionary[gist.files[key].language] === undefined) {
              filesDictionary[gist.files[key].language] = [];
            }

            filesDictionary[gist.files[key].language].push({
              fileName: gist.files[key].filename,
              rawUrl: gist.files[key].raw_url
            });
          } else {
            if (filesDictionary["Unknown"] === undefined) {
              filesDictionary["Unknown"] = [];
            }

            filesDictionary["Unknown"].push({
              fileName: gist.files[key].filename,
              rawUrl: gist.files[key].raw_url
            });
          }
        })

        return (
          <Row key={Math.random()}>
            <Col md={{ span: 6, offset: 3 }} xs={{ span: 12, offset: 0 }}>
              <CardPost title={gist.description} url={gist.html_url} forkUrl={gist.forks_url} create={gist.created_at} update={gist.updated_at} files={filesDictionary} />
            </Col>
          </Row>
        )
      }));
    }

  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><NavigationBar /></Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} xs={{ span: 12, offset: 0 }}><SearchBar onSearch={onSearch} /></Col>
        </Row>
        {cards}
      </Container>
    </div >
  );
}


