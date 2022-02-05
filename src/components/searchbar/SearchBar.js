import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/SearchBar.css'

export default function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("")
    return (
        <>
            <InputGroup className={"searchbar"}>
                <FormControl type="search" onChange={(e) => { setSearchValue(e.target.value) }} />
                <Button onClick={() => { props.onSearch(searchValue) }}>
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </InputGroup>
        </>
    )
}