import { InputGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/SearchBar.css'

export default function SearchBar() {
    return (
        <>
            <InputGroup className={"searchbar"}>
                <FormControl type="search" />
                <Button>
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </InputGroup>
        </>
    )
}